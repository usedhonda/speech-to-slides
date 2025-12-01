/**
 * Nano Banana Pro Optimized Prompt Templates
 * 
 * This file contains all design style templates with professional camera specs,
 * lighting details, color codes, and aspect ratio specifications optimized
 * for Gemini 3 Pro Image (Nano Banana Pro).
 * 
 * Based on: docs/manuals/nanobananapro_prompt_engineering.md
 */

/**
 * Get all prompt templates
 * @returns {Object} Object containing all style templates
 */
function getAllPromptTemplates() {
    return {
        'shonen-jump': getShonenJumpTemplates(),
        'business-professional': getBusinessTemplates(),
        'cyberpunk': getCyberpunkTemplates(),
        'minimal-modern': getMinimalTemplates(),
        'retro-vintage': getRetroTemplates(),
        'sci-fi': getSciFiTemplates(),
        'nature-organic': getNatureTemplates()
    };
}

/**
 * Shonen Jump Anime Style Template
 */
function getShonenJumpTemplates() {
    return {
        basePrompt: `Think step-by-step about character composition, dynamic action, and dramatic lighting before generating this scene.

Camera setup: 35mm lens at f/2.8 for shallow depth of field, creating cinematic bokeh. Low-angle shot (15-20 degrees below eye level) looking up at the hero, emphasizing power and determination. Dutch angle (tilted 15 degrees) adds dynamic tension.

Main subject - The Hero: A young hero (late teens to early 20s) stands in a powerful pose at the center of frame, positioned slightly off-center using rule of thirds. The hero wears a battle-worn uniform - torn fabric, visible scars, disheveled appearance showing recent intense combat. Their expression shows fierce determination mixed with exhaustion - gritted teeth, sweat on forehead, eyes blazing with resolve.

Character pose: The hero's dominant hand is clenched into a fist at chest level, body turned at 45-degree angle to camera. The other arm hangs at their side, slightly bloodied. One leg is positioned forward, weight shifted in a battle-ready stance. Wind catches their hair and torn clothing, creating dynamic motion.

Energy aura: A brilliant, swirling aura erupts from the hero's body, rendered in vibrant electric blue (#00BFFF) and gold (#FFD700) with white (#FFFFFF) core. The aura follows these specifications:
- Flames lick upward with cel-shaded rendering and bold black outlines (2-3px)
- Energy particles scatter outward, rendered as small white (#FFFFFF) and gold sparks
- Inner glow uses gradient from white core to blue/gold edges
- Transparent overlay effect at 70% opacity where it overlaps the character
- Sharp, angular energy bolts occasionally fork out from the main aura

Background composition: Dramatic sky occupies the upper 60% of frame. The sky transitions from deep crimson (#DC143C) at the top through orange (#FF8C00) to burning gold (#FFD700) near the horizon - suggesting either dawn or dusk at a pivotal moment. Heavy, dark storm clouds in charcoal gray (#2C2C2C) and deep purple (#4B0082) frame the edges, creating a vignette effect that draws focus to the hero.

Dynamic elements:
- Speed lines (concentrated lines radiating from behind the hero's head) suggesting explosive power awakening
- Debris particles (small rocks, dust) float around the hero, lit by the aura's glow
- Lens flare effect from the brightest point of the aura, creating star-burst pattern
- Motion blur on the most dynamic energy streams

Ground layer: The hero stands on cracked, fractured ground rendered in dark gray (#696969) with dramatic uplighting from the aura. Cracks in the ground glow faintly with blue energy, suggesting power emanating from the hero's stance.

Lighting setup:
- Key light: The hero's own aura serves as the primary light source, creating dramatic rim lighting with blue and gold tones
- Back light: Intense golden light from the horizon creates a powerful silhouette effect with rim lighting on the hero's outline
- Fill light: Subtle ambient light from the sky prevents complete shadow collapse, maintains readability at 30% intensity
- Accent lighting: Blue energy glow lights the fractured ground from below
- Contrast ratio: 8:1 for dramatic chiaroscuro effect

Cel-shading specifications:
- Bold black outline (2-3px) on character and major elements
- Sharp shadow boundaries with minimal gradient (traditional anime style)
- Highlight areas rendered as distinct shapes with hard edges
- High saturation throughout (vibrancy at 90-100%)
- Color palette limited to distinct hues (no muddy intermediate tones)

Atmosphere: This is the pivotal moment of awakening, transformation, or breaking through limits. The hero has just unlocked new power or resolved to push beyond their breaking point. Evokes the core Shonen Jump themes:
- Friendship (suggested by the hero's protective stance)
- Effort (shown through battle damage and exhaustion)
- Victory (anticipated in the hero's determined expression)

Style reference: Sakuga-quality key animation frame from high-budget shonen anime. Think Dragon Ball Z super saiyan transformation, Naruto's Nine-Tails chakra mode, Demon Slayer's Hinokami Kagura activation, or My Hero Academia's "United States of Smash" moment. This should look like a freeze-frame from the most important 5 seconds of an entire season.

Color palette: Electric blue (#00BFFF), burning gold (#FFD700), white highlights (#FFFFFF), crimson sky (#DC143C), orange (#FF8C00), deep purple (#4B0082), charcoal gray (#2C2C2C), dark ground (#696969).

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Ultra-detailed character rendering, sharp linework, maximum color vibrancy, professional anime illustration quality suitable for key visual promotional art.`,
        fontStyle: 'Bold, impactful display font with strong presence (similar to Impact, Bebas Neue, or anime title fonts like "Badaboom BB"). The font should have thick strokes and commanding visual weight.',
        messageStyle: 'Dynamic, action-oriented typography that matches the intense energy of the scene. Strong angles and bold forms.',
        textReadability: 'Text color: White (#FFFFFF) or bright gold (#FFD700) for maximum visibility. Apply thick black text-stroke (3-4px, 100% opacity) to create strong outline. Add deep black drop shadow (4px offset, 80% opacity) for separation from background. Include subtle outer glow in gold (#FFD700, 5px radius, 40% opacity) to create luminous effect matching the hero\'s aura. All text should be rendered with sharp, anti-aliased edges and proper kerning for maximum impact and readability against the dynamic, high-contrast background.'
    };
}

/**
 * Business Professional Style Template
 */
function getBusinessTemplates() {
    return {
        basePrompt: `Think step-by-step about professional portraiture, corporate environment, and aspirational lighting before generating this scene.

Camera setup: 50mm portrait lens at f/2.8 for professional depth of field with subtle background blur. Eye-level shot with slight upward tilt (5-10 degrees), creating sense of authority and aspiration. Camera positioned at professional portrait distance (2-3 meters from subject).

Main subject - The Business Leader: A confident business professional (30s-40s, gender-neutral or diverse representation) stands in a powerful yet approachable pose in the foreground. Dressed in premium business attire:
- Tailored navy blue (#1a2f4a) suit with perfect fit
- Crisp white (#FFFFFF) dress shirt
- Subtle patterned tie in corporate blue (#2c5aa0) with gold (#d4af37) accents
- Professional grooming, confident expression
- Arms crossed naturally or one hand in pocket, the other holding a tablet/document
- Body angled 30 degrees from camera, head turned to face viewer
- Slight smile suggesting confidence and approachability
- Eyes convey determination, vision, and trustworthiness

Character details:
- Natural, professional lighting on face showing clear features
- Subtle rim lighting separates subject from background
- Expression balances authority with warmth
- Posture suggests leadership without arrogance
- Business professional appearance appropriate for C-suite executive or team leader

Background composition - Modern Corporate Environment:

Layer 1 (immediate background, 1-2 meters behind subject): Softly blurred modern office interior visible through depth of field effect. Elements include:
- Floor-to-ceiling glass windows showing cityscape
- Sleek contemporary furniture (partial view)
- Clean lines and minimalist design
- Subtle corporate branding elements (abstract, non-specific)

Layer 2 (mid-ground, 5-10 meters): Through the glass windows, a modern cityscape is visible in soft focus:
- Contemporary high-rise buildings with glass facades
- Golden hour lighting on buildings creating warm glow
- City lights beginning to illuminate (twilight timing)
- Sky showing gradient from deep blue (#1e3a5f) at top to warm gold (#d4af37) near horizon

Layer 3 (background, distant): Cityscape fades into atmospheric perspective with blue-tinted haze, creating depth and sophistication.

Visual metaphors - Success and Growth:
- Ascending architectural lines in the background suggest growth
- Golden light represents prosperity and bright future
- Glass surfaces symbolize transparency and clarity
- Cityscape conveys ambition and achievement
- Modern environment represents innovation and progress

Lighting setup (professional corporate photography):
- Key light: Softbox positioned at 45-degree angle from camera-left, creating flattering illumination on subject's face and suit. Color temperature: 5500K (neutral daylight)
- Fill light: Large reflector or soft fill from camera-right at 30% intensity, preventing harsh shadows
- Back light: Subtle rim light from behind-right creating edge definition, separating subject from background. Slightly warm tone (#FFE4B5) at 40% intensity
- Background light: Natural golden hour light from windows creates warm, aspirational atmosphere
- Accent lighting: Subtle uplighting on the cityscape visible through windows
- Contrast ratio: 4:1 (professional corporate standard - not too dramatic, not too flat)

Color grading and palette:
Primary colors:
- Navy blue suit (#1a2f4a) - authority, trust, professionalism
- Corporate blue accents (#2c5aa0) - innovation, reliability
- Gold highlights (#d4af37) - success, premium quality, aspiration
- White (#FFFFFF) - clarity, professionalism, cleanliness

Secondary colors:
- Steel grey (#6b7a8f) - modern architecture, strength
- Warm gold lighting (#FFE4B5) - golden hour, opportunity
- Deep blue sky (#1e3a5f) - depth, vastness, vision
- Subtle silver (#c0c0c0) - technology, modernity

Mood and atmosphere: This image captures the aspirational professional at a pivotal moment - perhaps just after closing a major deal, preparing for an important presentation, or contemplating the company's vision for the future. The scene balances:
- Authority with approachability
- Tradition (classic business attire) with innovation (modern environment)
- Individual achievement with team leadership
- Present success with future ambition

Style reference: High-end corporate photography seen in Fortune 500 annual reports, LinkedIn executive profiles, and premium business magazines. Think Bloomberg Businessweek cover quality, Forbes executive portraits, or professional headshots used by McKinsey, Goldman Sachs, or Google leadership pages.

Technical specifications:
- Sharp focus on subject's eyes and face
- Subtle depth of field creating separation from background
- Professional color grading with slight warm bias
- High-resolution detail in fabric texture, skin tones, architectural elements
- Balanced exposure maintaining detail in both shadows and highlights
- Natural skin tones with professional retouching (subtle, not overdone)

Composition rules applied:
- Rule of thirds: Subject positioned slightly off-center
- Leading lines: Architectural elements guide eye toward subject
- Negative space: Clean area for text placement on one side
- Visual hierarchy: Clear focus on subject with supporting environment

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Professional corporate photography quality, suitable for investor presentations, company websites, annual reports, or executive communications. Polished, sophisticated, and aspirational while remaining authentic and trustworthy.`,
        fontStyle: 'Clean, authoritative sans-serif font (similar to Helvetica Neue, Gotham, or Proxima Nova) with professional weight. The font should convey trust, clarity, and modern professionalism.',
        messageStyle: 'Crisp, executive-level typography with balanced proportions. Clear hierarchy and professional spacing.',
        textReadability: 'Text color: White (#FFFFFF) for maximum contrast on darker tones, or deep navy (#1a2f4a) on lighter areas. Apply subtle drop shadow (2px offset, 50% opacity, #000000) for depth without compromising professionalism. Include very subtle outer glow in corporate blue (#2c5aa0, 2px radius, 20% opacity) for premium feel. All text should be rendered with precise anti-aliasing and professional kerning appropriate for executive communications.'
    };
}

/**
 * Cyberpunk Style Templates
 * TO DO: Enhance with full Nano Banana Pro specs (camera, lighting, colors)
 */
function getCyberpunkTemplates() {
    return {
        Opening: {
            basePrompt: `Think step-by-step about composition and lighting. A high-tech cyberpunk presentation slide with neon aesthetics. Dark urban background with neon lights reflecting on wet surfaces. Color scheme: electric pink (#FF1493), cyan blue (#00FFFF), deep purple (#8B00FF), and black (#000000). Include glitch effects, holographic interfaces, and digital rain elements. The atmosphere is futuristic, edgy, and high-energy with strong contrasts and vibrant neon glows. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'futuristic, glitch-style font with digital edges',
            messageStyle: 'neon, cyberpunk typography with strong glow',
            textReadability: 'Use bright neon pink (#FF1493) or cyan (#00FFFF) text with strong 5px glow effects (80% opacity) for high visibility against dark background.'
        },
        Momentum: {
            basePrompt: `Think step-by-step about motion and lighting. A sleek cyberpunk slide with streaming data visualizations, hex code patterns, and neon accent lines flowing horizontally. Dark background (#0a0a0a) with electric blue (#0080FF) and neon green (#39FF14) accents. Include holographic HUD elements and digital scanlines. The mood is fast-paced, technological, and futuristic. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'modern tech font with angular geometry',
            messageStyle: 'digital, high-tech typography',
            textReadability: 'Use neon green (#39FF14) or cyan (#00FFFF) text with digital glow (4px radius, 70% opacity).'
        },
        Impact: {
            basePrompt: `Think step-by-step about dramatic composition. A dramatic cyberpunk impact slide with split composition - left side in electric blue (#0080FF) with circuit patterns, right side in neon pink (#FF1493) with data streams, meeting in a burst of white digital energy (#FFFFFF). Include glitch artifacts, holographic effects, and matrix-style code. High contrast and saturated neon colors. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'bold futuristic font with strong weight',
            messageStyle: 'explosive digital typography with glitch effects',
            textReadability: 'Use bright white (#FFFFFF) or neon text with strong 6px glow and 2px outline effects.'
        },
        Vision: {
            basePrompt: `Think step-by-step about depth and scale. A futuristic cyberpunk vision slide showing a sprawling neon cityscape viewed from above with holographic projections and light beams piercing the sky. Color scheme: deep purple (#4B0082), electric blue (#0080FF), neon pink (#FF1493), and cyan (#00FFFF). Include floating data interfaces and digital particles. Atmosphere is visionary, technological, and awe-inspiring. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'sleek futuristic font with clean geometry',
            messageStyle: 'visionary tech typography',
            textReadability: 'Use bright cyan (#00FFFF) or white (#FFFFFF) text with neon glow (5px radius, 60% opacity).'
        }
    };
}

/**
 * Minimal Modern Style Templates
 * TO DO: Enhance with full Nano Banana Pro specs
 */
function getMinimalTemplates() {
    return {
        Opening: {
            basePrompt: `Think step-by-step about composition and negative space. A minimal, modern presentation slide with elegant simplicity. Clean white (#FFFFFF) background with a single bold geometric element - a large circle in sophisticated navy (#2c3e50). Maximum negative space, refined and premium. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'clean, minimal sans-serif font (similar to Helvetica or SF Pro)',
            messageStyle: 'refined, understated typography',
            textReadability: 'Use dark accent color (#2c3e50) text on light background with perfect spacing.'
        },
        Momentum: {
            basePrompt: `Think step-by-step about directional flow. A minimalist slide with subtle diagonal gradient and thin lines creating directional flow. Pure white (#FFFFFF) base with single accent color (#2c5aa0) used sparingly. Uncluttered, sophisticated, and focused. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'modern minimal font with clean lines',
            messageStyle: 'clean, simple typography',
            textReadability: 'Use single dark color (#2c3e50) for text with ample spacing.'
        },
        Impact: {
            basePrompt: `Think step-by-step about geometric contrast. A minimalist impact slide with bold diagonal division. Limited palette: black (#000000), white (#FFFFFF), and vibrant accent (#e74c3c). Power through restraint and precision. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'bold minimal font with strong presence',
            messageStyle: 'strong, simple typography',
            textReadability: 'Use high contrast black (#000000) or white (#FFFFFF) text for maximum clarity.'
        },
        Vision: {
            basePrompt: `Think step-by-step about aspirational simplicity. A visionary minimal slide with concentric circles fading to distance on light background (#f8f9fa). Sophisticated monochromatic scheme. Calm, focused, inspiring atmosphere. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'elegant minimal font with refined proportions',
            messageStyle: 'refined simple typography',
            textReadability: 'Use carefully weighted text (#2c3e50) with perfect spacing for premium feel.'
        }
    };
}

/**
 * Retro Vintage Style Templates
 * TO DO: Enhance with full Nano Banana Pro specs
 */
function getRetroTemplates() {
    return {
        Opening: {
            basePrompt: `Think step-by-step about vintage aesthetics. A retro presentation slide inspired by 1960s-70s design. Warm palette: burnt orange (#D2691E), mustard yellow (#DAA520), olive green (#6B8E23), cream (#FFF8DC). Include vintage geometric patterns and sunburst motifs. Nostalgic, warm atmosphere. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'retro serif font with period-appropriate styling',
            messageStyle: 'vintage display typography',
            textReadability: 'Use cream (#FFF8DC) or warm white text with retro shadow effects.'
        },
        Momentum: {
            basePrompt: `Think step-by-step about retro motion graphics. A retro slide with horizontal stripes in classic colors. Warm browns (#8B4513), oranges (#FF8C00), yellows (#FFD700), cream (#FFF8DC). Vintage textures suggesting aged paper. Nostalgic yet dynamic. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'retro modern font with groovy style',
            messageStyle: 'groovy vintage typography',
            textReadability: 'Use dark brown (#654321) or burnt orange (#CC5500) text with vintage effects.'
        },
        Impact: {
            basePrompt: `Think step-by-step about vintage poster aesthetics. A bold retro impact slide with dramatic shapes and patterns. Deep burnt orange (#CC5500), mustard yellow (#DAA520), brown (#654321), cream (#FFF8DC). Vintage sunburst patterns and halftone textures. Powerful yet nostalgic. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'bold retro font with strong character',
            messageStyle: 'impactful vintage typography',
            textReadability: 'Use high contrast text in vintage colors with retro shadows and outlines.'
        },
        Vision: {
            basePrompt: `Think step-by-step about retro-futurism. A visionary retro slide with 1960s space age design. Geometric patterns, starburst motifs, vintage sci-fi aesthetics. Warm palette with metallic gold (#FFD700). Nostalgic yet forward-thinking. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'elegant retro font with space-age feel',
            messageStyle: 'visionary vintage typography',
            textReadability: 'Use warm text colors with vintage glow effects.'
        }
    };
}

/**
 * Sci-Fi Style Templates
 * TO DO: Enhance with full Nano Banana Pro specs
 */
function getSciFiTemplates() {
    return {
        Opening: {
            basePrompt: `Think step-by-step about cosmic scale. A science fiction slide with deep space background, stars, distant galaxies, and nebula clouds. Deep blue (#000033), silver (#C0C0C0), white (#FFFFFF), cyan accents (#00FFFF). Futuristic UI elements and holographic displays. Vast, technological, awe-inspiring. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'futuristic sci-fi font with advanced styling',
            messageStyle: 'advanced tech typography',
            textReadability: 'Use bright white (#FFFFFF) or cyan (#00FFFF) text with subtle glow effects.'
        },
        Momentum: {
            basePrompt: `Think step-by-step about space travel motion. A dynamic sci-fi slide with motion blur of stars suggesting faster-than-light travel. Futuristic HUD elements and energy streams. Deep blue-black (#000033), electric blue (#0080FF), white (#FFFFFF), silver (#C0C0C0). Fast, advanced, exploratory. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'sleek tech font with futuristic proportions',
            messageStyle: 'dynamic sci-fi typography',
            textReadability: 'Use bright text with technological glow.'
        },
        Impact: {
            basePrompt: `Think step-by-step about cosmic forces. A powerful sci-fi impact slide showing collision of energy beams or plasma fields. Electric blue (#0080FF), plasma pink (#FF69B4), white energy (#FFFFFF), deep space black (#000000). Particle effects and energy distortions. Highly dynamic. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'bold futuristic font with strong presence',
            messageStyle: 'powerful tech typography',
            textReadability: 'Use bright white (#FFFFFF) or energy-colored text with strong glows.'
        },
        Vision: {
            basePrompt: `Think step-by-step about humanity's future in space. A visionary sci-fi slide with massive space station or orbital construction. Advanced structures, stars, planets. Deep blue-black space (#000033), silver technology (#C0C0C0), ambient lighting. Inspiring, grand scale. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'elegant futuristic font with refined geometry',
            messageStyle: 'visionary sci-fi typography',
            textReadability: 'Use bright text with sci-fi glow effects.'
        }
    };
}

/**
 * Nature Organic Style Templates
 * TO DO: Enhance with full Nano Banana Pro specs
 */
function getNatureTemplates() {
    return {
        Opening: {
            basePrompt: `Think step-by-step about natural elements. A natural, organic slide inspired by nature. Soft gradient suggesting sunrise with flowing botanical elements - leaves, vines, natural patterns. Earthy greens (#228B22), soft browns (#8B4513), cream (#FFF8DC), gold accents (#DAA520). Warm, inviting, sustainable, harmonious. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'organic, natural font with flowing characteristics',
            messageStyle: 'earthy, flowing typography',
            textReadability: 'Use earthy text colors (#228B22, #8B4513) with soft shadows.'
        },
        Momentum: {
            basePrompt: `Think step-by-step about natural growth patterns. A flowing organic slide with water currents or plant growth patterns. Light background with natural textures - wood grain, organic patterns. Natural greens (#228B22), browns (#8B4513), cream (#FFF8DC), earth tones. Peaceful yet dynamic. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'natural, flowing font with organic curves',
            messageStyle: 'organic, gentle typography',
            textReadability: 'Use forest green (#228B22) or earth brown (#8B4513) text on light backgrounds.'
        },
        Impact: {
            basePrompt: `Think step-by-step about natural forces meeting. An organic impact slide with flowing water meeting solid earth, or growth breaking through barriers. Deep forest green (#006400), rich earth brown (#654321), bright natural light (#FFFACD). Organic textures and natural patterns. Powerful yet harmonious. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'strong natural font with organic character',
            messageStyle: 'impactful organic typography',
            textReadability: 'Use contrasting natural colors with organic shadows.'
        },
        Vision: {
            basePrompt: `Think step-by-step about harmony between nature and future. A visionary natural slide showing sustainable innovation in natural settings - clean energy, green architecture, restored ecosystems. Vibrant greens (#32CD32), earth tones (#8B4513), sky blues (#87CEEB), golden light (#FFD700). Hopeful, sustainable, harmonious. Aspect ratio: 16:9 landscape orientation.`,
            fontStyle: 'elegant natural font with refined organic styling',
            messageStyle: 'visionary organic typography',
            textReadability: 'Use natural text colors with soft glows for harmonious feel.'
        }
    };
}
