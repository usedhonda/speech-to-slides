// SlideGenerator.gs - Google Slides操作専用モジュール

/**
 * Main entry point: Generate slides from speech text
 * Called from the sidebar UI
 */
function generateSlidesFromSpeech(settings, speechText) {
    try {
        console.log('=== generateSlidesFromSpeech START ===');

        // Step 1: Generate prompts using existing logic
        const result = generatePrompts(settings, speechText);

        if (!result.success) {
            return result;
        }

        console.log('Prompts generated:', result.slides.length);

        // Step 2: Create slides in Google Slides
        const slidesResult = createSlidesFromStructure(result.slides, settings);

        console.log('Slides created:', slidesResult.count);

        // Return success with prompts for display in sidebar
        return {
            success: true,
            slidesCreated: slidesResult.count,
            slides: result.slides,
            message: `${slidesResult.count}枚のスライドを作成しました`
        };

    } catch (error) {
        console.error('generateSlidesFromSpeech ERROR:', error.toString());
        return {
            success: false,
            error: error.toString()
        };
    }
}

/**
 * Create slides from the analyzed structure
 */
function createSlidesFromStructure(slides, settings) {
    const presentation = SlidesApp.getActivePresentation();
    let createdCount = 0;

    slides.forEach((slideData, index) => {
        try {
            // Add a new blank slide
            const newSlide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);

            // Set background color (dark gradient-like blue)
            newSlide.getBackground().setSolidFill('#0d1b2a');

            // Insert title if enabled
            if (settings.showJapaneseTitle || settings.showEnglishTitle) {
                insertTitle(newSlide, slideData, settings);
            }

            // Insert message if enabled
            if (settings.showJapaneseMessage || settings.showEnglishMessage) {
                insertMessage(newSlide, slideData, settings);
            }

            createdCount++;
        } catch (e) {
            console.error('Error creating slide ' + (index + 1) + ':', e.toString());
        }
    });

    return { count: createdCount };
}

/**
 * Insert title text boxes into a slide
 * タイトルは画面中央上部に大きく表示
 * ドロップシャドウ効果: 影用テキストボックスを先に配置してから本文を重ねる
 */
function insertTitle(slide, slideData, settings) {
    // Standard 16:9 slide: 720 x 405 points
    const pageWidth = 720;
    const pageHeight = 405;
    const margin = 40;
    const textWidth = pageWidth - (margin * 2);

    const textSettings = settings.textSettings || {};
    const jpSettings = textSettings.japaneseTitle || {};
    const enSettings = textSettings.englishTitle || {};
    const effects = textSettings.effects || {};

    // Shadow offset for drop shadow effect
    const shadowOffsetX = 3;
    const shadowOffsetY = 3;

    // Calculate vertical center for title block
    const titleBlockHeight = 120; // Total height for JP + EN titles
    const titleStartY = (pageHeight - titleBlockHeight) / 2 - 40; // Slightly above center

    // Japanese title - LARGE and prominent
    if (settings.showJapaneseTitle && slideData.japaneseTitle) {
        const fontSize = parseInt(jpSettings.size) || 56;
        const alignment = jpSettings.alignment || 'center';

        // === Drop Shadow Layer (behind main text) ===
        if (effects.dropShadow !== false) {
            const shadowBox = slide.insertTextBox(slideData.japaneseTitle);
            shadowBox.setLeft(margin + shadowOffsetX);
            shadowBox.setTop(titleStartY + shadowOffsetY);
            shadowBox.setWidth(textWidth);
            shadowBox.setHeight(80);

            const shadowTextRange = shadowBox.getText();
            const shadowStyle = shadowTextRange.getTextStyle();
            shadowStyle.setFontSize(fontSize);
            shadowStyle.setForegroundColor('#000000'); // Black shadow
            shadowStyle.setBold(true);
            shadowStyle.setFontFamily('M PLUS Rounded 1c'); // Pop font

            const shadowParagraph = shadowTextRange.getParagraphStyle();
            shadowParagraph.setParagraphAlignment(getSlideAlignment(alignment));

            // Send shadow to back
            shadowBox.sendToBack();
        }

        // === Main Title Layer ===
        const titleBox = slide.insertTextBox(slideData.japaneseTitle);
        titleBox.setLeft(margin);
        titleBox.setTop(titleStartY);
        titleBox.setWidth(textWidth);
        titleBox.setHeight(80);

        const textRange = titleBox.getText();
        const textStyle = textRange.getTextStyle();
        textStyle.setFontSize(fontSize);
        textStyle.setForegroundColor(jpSettings.color || '#FFFFFF');
        textStyle.setBold(true);
        textStyle.setFontFamily('M PLUS Rounded 1c'); // Pop font

        const paragraphStyle = textRange.getParagraphStyle();
        paragraphStyle.setParagraphAlignment(getSlideAlignment(alignment));
    }

    // English title (subtitle) - smaller, below Japanese
    if (settings.showEnglishTitle && slideData.englishTitle) {
        const enFontSize = parseInt(enSettings.size) || 24;
        const enAlignment = enSettings.alignment || 'center';

        // === Drop Shadow Layer for English ===
        if (effects.dropShadow !== false) {
            const enShadowBox = slide.insertTextBox(slideData.englishTitle);
            enShadowBox.setLeft(margin + shadowOffsetX);
            enShadowBox.setTop(titleStartY + 75 + shadowOffsetY);
            enShadowBox.setWidth(textWidth);
            enShadowBox.setHeight(40);

            const enShadowTextRange = enShadowBox.getText();
            const enShadowStyle = enShadowTextRange.getTextStyle();
            enShadowStyle.setFontSize(enFontSize);
            enShadowStyle.setForegroundColor('#000000');
            enShadowStyle.setFontFamily('Quicksand'); // Pop English font
            enShadowStyle.setItalic(true);

            const enShadowParagraph = enShadowTextRange.getParagraphStyle();
            enShadowParagraph.setParagraphAlignment(getSlideAlignment(enAlignment));

            enShadowBox.sendToBack();
        }

        // === Main English Title Layer ===
        const enTitleBox = slide.insertTextBox(slideData.englishTitle);
        enTitleBox.setLeft(margin);
        enTitleBox.setTop(titleStartY + 75);
        enTitleBox.setWidth(textWidth);
        enTitleBox.setHeight(40);

        const enTextRange = enTitleBox.getText();
        const enTextStyle = enTextRange.getTextStyle();
        enTextStyle.setFontSize(enFontSize);
        enTextStyle.setForegroundColor(enSettings.color || '#8899aa');
        enTextStyle.setFontFamily('Quicksand'); // Pop English font
        enTextStyle.setItalic(true);

        const enParagraphStyle = enTextRange.getParagraphStyle();
        enParagraphStyle.setParagraphAlignment(getSlideAlignment(enAlignment));
    }
}

/**
 * Insert message text boxes into a slide
 * メッセージは下部に表示、読みやすいサイズで
 * ドロップシャドウ効果付き
 */
function insertMessage(slide, slideData, settings) {
    const pageWidth = 720;
    const pageHeight = 405;
    const margin = 50;
    const textWidth = pageWidth - (margin * 2);

    const textSettings = settings.textSettings || {};
    const jpMsgSettings = textSettings.japaneseMessage || {};
    const enMsgSettings = textSettings.englishMessage || {};
    const effects = textSettings.effects || {};

    // Shadow offset
    const shadowOffsetX = 2;
    const shadowOffsetY = 2;

    // Japanese message - prominent but not overwhelming
    if (settings.showJapaneseMessage && slideData.japaneseMessage) {
        const fontSize = parseInt(jpMsgSettings.size) || 28;
        const alignment = jpMsgSettings.alignment || 'center';

        // === Drop Shadow Layer ===
        if (effects.dropShadow !== false) {
            const shadowBox = slide.insertTextBox(slideData.japaneseMessage);
            shadowBox.setLeft(margin + shadowOffsetX);
            shadowBox.setTop(pageHeight - 130 + shadowOffsetY);
            shadowBox.setWidth(textWidth);
            shadowBox.setHeight(55);

            const shadowTextRange = shadowBox.getText();
            const shadowStyle = shadowTextRange.getTextStyle();
            shadowStyle.setFontSize(fontSize);
            shadowStyle.setForegroundColor('#000000');
            shadowStyle.setFontFamily('M PLUS Rounded 1c');

            const shadowParagraph = shadowTextRange.getParagraphStyle();
            shadowParagraph.setParagraphAlignment(getSlideAlignment(alignment));

            shadowBox.sendToBack();
        }

        // === Main Message Layer ===
        const msgBox = slide.insertTextBox(slideData.japaneseMessage);
        msgBox.setLeft(margin);
        msgBox.setTop(pageHeight - 130);
        msgBox.setWidth(textWidth);
        msgBox.setHeight(55);

        const textRange = msgBox.getText();
        const textStyle = textRange.getTextStyle();
        textStyle.setFontSize(fontSize);
        textStyle.setForegroundColor(jpMsgSettings.color || '#FFFFFF');
        textStyle.setFontFamily('M PLUS Rounded 1c');

        const paragraphStyle = textRange.getParagraphStyle();
        paragraphStyle.setParagraphAlignment(getSlideAlignment(alignment));
    }

    // English message - smaller, subtle
    if (settings.showEnglishMessage && slideData.englishMessage) {
        const enFontSize = parseInt(enMsgSettings.size) || 18;
        const enAlignment = enMsgSettings.alignment || 'center';

        // === Drop Shadow Layer for English ===
        if (effects.dropShadow !== false) {
            const enShadowBox = slide.insertTextBox(slideData.englishMessage);
            enShadowBox.setLeft(margin + shadowOffsetX);
            enShadowBox.setTop(pageHeight - 70 + shadowOffsetY);
            enShadowBox.setWidth(textWidth);
            enShadowBox.setHeight(35);

            const enShadowTextRange = enShadowBox.getText();
            const enShadowStyle = enShadowTextRange.getTextStyle();
            enShadowStyle.setFontSize(enFontSize);
            enShadowStyle.setForegroundColor('#000000');
            enShadowStyle.setFontFamily('Quicksand');

            const enShadowParagraph = enShadowTextRange.getParagraphStyle();
            enShadowParagraph.setParagraphAlignment(getSlideAlignment(enAlignment));

            enShadowBox.sendToBack();
        }

        // === Main English Message Layer ===
        const enMsgBox = slide.insertTextBox(slideData.englishMessage);
        enMsgBox.setLeft(margin);
        enMsgBox.setTop(pageHeight - 70);
        enMsgBox.setWidth(textWidth);
        enMsgBox.setHeight(35);

        const enTextRange = enMsgBox.getText();
        const enTextStyle = enTextRange.getTextStyle();
        enTextStyle.setFontSize(enFontSize);
        enTextStyle.setForegroundColor(enMsgSettings.color || '#8899aa');
        enTextStyle.setFontFamily('Quicksand');

        const enParagraphStyle = enTextRange.getParagraphStyle();
        enParagraphStyle.setParagraphAlignment(getSlideAlignment(enAlignment));
    }
}

/**
 * Convert alignment string to SlidesApp.ParagraphAlignment
 */
function getSlideAlignment(alignment) {
    switch (alignment) {
        case 'left':
            return SlidesApp.ParagraphAlignment.START;
        case 'right':
            return SlidesApp.ParagraphAlignment.END;
        case 'center':
        default:
            return SlidesApp.ParagraphAlignment.CENTER;
    }
}

/**
 * Get the vertical position in points based on position string
 */
function getVerticalPosition(position, pageHeight) {
    switch (position) {
        case 'top':
            return 50;
        case 'center':
            return (pageHeight - 50) / 2;
        case 'bottom':
        default:
            return pageHeight - 130;
    }
}

/**
 * Test function - can be run manually to check if addon works
 */
function testAddon() {
    const ui = SlidesApp.getUi();
    ui.alert('テスト', 'スライド生成アドオンは正常に動作しています。', ui.ButtonSet.OK);
}
