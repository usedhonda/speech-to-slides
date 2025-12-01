/**
 * Nano Banana Pro Optimized Prompt Templates
 *
 * This file contains all design style templates optimized for Gemini 3 Pro Image (Nano Banana Pro).
 * Each template is a complete, self-contained artwork (not just a background).
 */

/**
 * Get all prompt templates
 * @returns {Object} Object containing all style templates
 */
function getAllPromptTemplates() {
    return {
        // ========================================
        // Art/Painting (8)
        // ========================================
        'watercolor': getWatercolorTemplates(),
        'oil-painting': getOilPaintingTemplates(),
        'pastel': getPastelTemplates(),
        'pastel-art': getPastelTemplates(),       // Alias for Sidebar.html compatibility
        'ink-wash': getInkWashTemplates(),
        'sumi-e': getInkWashTemplates(),          // Alias for Sidebar.html compatibility (墨絵)
        'pop-art': getPopArtTemplates(),
        'impressionism': getImpressionismTemplates(),
        'art-deco': getArtDecoTemplates(),
        'art-nouveau': getArtNouveauTemplates(),

        // ========================================
        // 📕 Weekly Shonen Jump (8)
        // ========================================
        'toriyama': getToriyamaTemplates(),           // Dragon Ball
        'onepiece': getOnePieceTemplates(),           // One Piece
        'jojo': getJojoTemplates(),                   // JoJo's Bizarre Adventure
        'bleach': getBleachTemplates(),               // BLEACH
        'kimetsu': getKimetsuTemplates(),             // Demon Slayer
        'chainsaw': getChainsawTemplates(),           // Chainsaw Man
        'naruto': getNarutoTemplates(),               // NARUTO
        'hunterxhunter': getHunterXHunterTemplates(), // Hunter x Hunter

        // ========================================
        // 📘 Magazine/Sunday/Other Shonen (8)
        // ========================================
        'shingeki': getShingekiTemplates(),           // Attack on Titan (別冊少年マガジン)
        'takahashi': getTakahashiTemplates(),         // Rumiko Takahashi (サンデー)
        'tezuka': getTezukaTemplates(),               // Osamu Tezuka (複数誌)
        'hajime-no-ippo': getHajimeNoIppoTemplates(), // Hajime no Ippo (週刊少年マガジン)
        'gto': getGtoTemplates(),                     // GTO (週刊少年マガジン)
        'shonan-junai': getShonanJunaiTemplates(),    // 湘南純愛組 (週刊少年マガジン)
        'baki': getBakiTemplates(),                   // グラップラー刃牙 (週刊少年チャンピオン)
        'kindaichi': getKindaichiTemplates(),         // 金田一少年の事件簿 (週刊少年マガジン)

        // ========================================
        // 💕 Shoujo/Women's (8)
        // ========================================
        'sailormoon': getSailorMoonTemplates(),       // Sailor Moon (なかよし)
        'versailles': getVersaillesTemplates(),       // Rose of Versailles (マーガレット)
        'nana': getNanaTemplates(),                   // NANA (Cookie)
        'cardcaptor': getCardcaptorTemplates(),       // カードキャプターさくら (なかよし)
        'fruits-basket': getFruitsBasketTemplates(),  // フルーツバスケット (花とゆめ)
        'kimi-ni-todoke': getKimiNiTodokeTemplates(), // 君に届け (別冊マーガレット)
        'utena': getUtenaTemplates(),                 // 少女革命ウテナ (ちゃお)
        'hanasakeru': getHanasakeruTemplates(),       // 花咲ける青少年 (花とゆめ)

        // ========================================
        // 📙 Seinen/Young Adult (3)
        // ========================================
        'goldenkamuy': getGoldenKamuyTemplates(),     // Golden Kamuy (ヤングジャンプ)
        'akira': getAkiraTemplates(),                 // AKIRA (ヤングマガジン)
        'ghost-in-shell': getGhostInShellTemplates(), // Ghost in the Shell (ヤングマガジン)

        // ========================================
        // 🎬 Anime Studios/Directors (5)
        // ========================================
        'studio-ghibli': getStudioGhibliTemplates(),  // Studio Ghibli
        'shinkai': getShinkaiTemplates(),             // Makoto Shinkai
        'evangelion': getEvangelionTemplates(),       // Evangelion (GAINAX)
        'kyoani': getKyoaniTemplates(),               // Kyoto Animation
        'trigger': getTriggerTemplates(),             // Studio TRIGGER

        // ========================================
        // 🌍 Western Animation (8)
        // ========================================
        'disney-classic': getDisneyClassicTemplates(),
        'pixar-3d': getPixar3DTemplates(),
        'spiderverse': getSpiderverseTemplates(),     // Spider-Verse
        'timburton': getTimburtonTemplates(),         // Tim Burton
        'simpsons': getSimpsonsTemplates(),           // The Simpsons
        'southpark': getSouthparkTemplates(),         // South Park
        'american-comics': getAmericanComicsTemplates(),
        'cartoon-network': getCartoonNetworkTemplates(),

        // ========================================
        // ✏️ General Anime/Manga Styles (4)
        // ========================================
        'shonen-jump': getShonenJumpTemplates(),      // Generic Shonen Jump style
        'shoujo-manga': getShoujoMangaTemplates(),    // Generic Shoujo style
        'gekiga': getGekigaTemplates(),               // Gekiga/Dramatic style
        'anime-background': getAnimeBackgroundTemplates(), // Anime background art

        // ========================================
        // Design/Graphic (8)
        // ========================================
        'flat-design': getFlatDesignTemplates(),
        'material-design': getMaterialDesignTemplates(),
        'neon-sign': getNeonSignTemplates(),
        'retro-poster': getRetroPosterTemplates(),
        'typography-art': getTypographyArtTemplates(),
        'collage': getCollageTemplates(),
        'gradient-modern': getGradientModernTemplates(),
        'isometric': getIsometricTemplates(),

        // ========================================
        // History/Culture (21)
        // ========================================
        'ukiyo-e': getUkiyoeTemplates(),
        'medieval-europe': getMedievalEuropeTemplates(),
        'renaissance': getRenaissanceTemplates(),
        'roaring-twenties': getRoaringTwentiesTemplates(),
        'retro-80s': getRetro80sTemplates(),
        'egyptian': getEgyptianTemplates(),
        'ancient-greece': getAncientGreeceTemplates(),
        'ancient-rome': getAncientRomeTemplates(),
        'mayan-aztec': getMayanAztecTemplates(),
        'mesopotamia': getMesopotamiaTemplates(),
        'chinese-palace': getChinesePalaceTemplates(),
        'indian-decor': getIndianDecorTemplates(),
        'heian-period': getHeianPeriodTemplates(),
        'tibetan-buddhist': getTibetanBuddhistTemplates(),
        'persian-decor': getPersianDecorTemplates(),
        'ottoman': getOttomanTemplates(),
        'islamic-medieval': getIslamicMedievalTemplates(),
        'celtic': getCelticTemplates(),
        'viking': getVikingTemplates(),
        'baroque': getBaroqueTemplates(),
        'african-art': getAfricanArtTemplates(),

        // ========================================
        // SciFi/Fantasy (8)
        // ========================================
        'sci-fi': getSciFiTemplates(),
        'cyberpunk': getCyberpunkTemplates(),
        'steampunk': getSteampunkTemplates(),
        'solarpunk': getSolarpunkTemplates(),
        'fantasy-rpg': getFantasyRPGTemplates(),
        'space-exploration': getSpaceExplorationTemplates(),
        'dystopian': getDystopianTemplates(),
        'biopunk': getBiopunkTemplates(),

        // ========================================
        // Photo/Realistic (6)
        // ========================================
        'photorealistic': getPhotorealisticTemplates(),
        'cinematic': getCinematicTemplates(),
        'documentary': getDocumentaryTemplates(),
        'fashion-magazine': getFashionMagazineTemplates(),
        'street-photography': getStreetPhotographyTemplates(),
        'architectural-photo': getArchitecturalPhotoTemplates(),

        // ========================================
        // Business (5)
        // ========================================
        'business-professional': getBusinessTemplates(),
        'startup-modern': getStartupModernTemplates(),
        'tech-company': getTechCompanyTemplates(),
        'finance-consulting': getFinanceConsultingTemplates(),
        'educational': getEducationalTemplates(),

        // ========================================
        // Nature (6)
        // ========================================
        'nature-organic': getNatureTemplates(),
        'botanical': getBotanicalTemplates(),
        'marine-life': getMarineLifeTemplates(),
        'mountain-landscape': getMountainLandscapeTemplates(),
        'tropical-rainforest': getTropicalRainforestTemplates(),
        'aurora': getAuroraTemplates(),

        // ========================================
        // Mood (5)
        // ========================================
        'minimal-modern': getMinimalTemplates(),
        'film-noir': getFilmNoirTemplates(),
        'gothic': getGothicTemplates(),
        'pastel-dream': getPastelDreamTemplates(),
        'retro-vintage': getRetroTemplates(),

        // ========================================
        // Entertainment (4)
        // ========================================
        'circus-carnival': getCircusCarnivalTemplates(),
        'music-festival': getMusicFestivalTemplates(),
        'sports-dynamic': getSportsDynamicTemplates(),
        'food-photography': getFoodPhotographyTemplates()
    };
}

/**
 * Shonen Jump Anime Style Template
 */
function getShonenJumpTemplates() {
    return {
        basePrompt: `Apply Shonen Jump anime style visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Iconic character style references:

Dragon Ball series:
- Goku: Spiky black hair (Super Saiyan = golden), orange gi, muscular, Kamehameha pose
- Vegeta: Widow's peak black hair, blue/white armor, proud stance
- Super Saiyan aura: Golden flame-like energy, spiky upward hair, intense eyes

Naruto series:
- Naruto: Blonde spiky hair, orange/black tracksuit, whisker marks, headband
- Sasuke: Black hair (back spikes), Sharingan red eyes, dark clothing
- Chakra effects: Blue energy, swirling patterns, hand signs

One Piece series:
- Luffy: Straw hat, red vest, scar under eye, rubber stretching effects
- Zoro: Green hair, three swords, bandana
- Exaggerated expressions and proportions

Demon Slayer (Kimetsu no Yaiba):
- Tanjiro: Checkered haori (green/black), scar on forehead, hanafuda earrings
- Nezuko: Pink kimono, bamboo muzzle, demon eyes
- Breathing effects: Water/flame visual techniques with flowing colors

My Hero Academia:
- Deku: Green messy hair, hero suit, One For All lightning effects
- All Might: Blonde bangs, muscular form, American hero aesthetic
- Quirk effects: Unique power visualizations

Jujutsu Kaisen:
- Yuji: Pink/brown hair, hoodie, cursed energy effects
- Gojo: White hair, blindfold/sunglasses, Six Eyes blue glow
- Cursed energy: Dark purple/blue swirling effects

Camera and composition:
- Low-angle dynamic shot (15-20 degrees below eye level) for dramatic power
- Optional Dutch angle (tilted 15 degrees) for added tension
- Speed lines radiating from action points
- Debris particles enhancing motion sense

Cel-shading anime rendering:
- Bold black outlines (2-3px) on all major elements
- Sharp shadow boundaries with minimal gradient
- High color saturation throughout (vibrancy at 90-100%)
- Distinct, vibrant hues (no muddy intermediate tones)

Energy and motion effects:
- Electric blue (#00BFFF), gold (#FFD700), white (#FFFFFF) energy
- Particle effects, inner glow gradients, sharp angular bolts
- Motion blur on dynamic elements

Color palette: Electric blue (#00BFFF), burning gold (#FFD700), white highlights (#FFFFFF), crimson (#DC143C), orange (#FF8C00), deep purple (#4B0082), charcoal gray (#2C2C2C).

Quality level: Sakuga-quality key animation frame from high-budget shonen anime. Ultra-detailed rendering, sharp linework, maximum vibrancy.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, impactful display font with strong presence (similar to Impact, Bebas Neue, or anime title fonts like "Badaboom BB"). The font should have thick strokes and commanding visual weight.',
        messageStyle: 'Dynamic, action-oriented typography that matches the intense energy of the scene. Strong angles and bold forms.',
        textReadability: 'Text color: White (#FFFFFF) or bright gold (#FFD700) for maximum visibility. Apply thick black text-stroke (3-4px, 100% opacity) to create strong outline. Add deep black drop shadow (4px offset, 80% opacity) for separation from background. Include subtle outer glow in gold (#FFD700, 5px radius, 40% opacity) to create luminous effect. All text should be rendered with sharp, anti-aliased edges and proper kerning for maximum impact and readability against the dynamic, high-contrast background.'
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
 * Cyberpunk Style Template
 */
function getCyberpunkTemplates() {
    return {
        basePrompt: `Think step-by-step about character composition, neon environment, and dramatic cyber-lighting before generating this scene.

Camera setup: 35mm lens at f/1.8 for shallow depth of field, creating strong bokeh with neon lights. Low angle shot (20 degrees below eye level) looking up at the protagonist, Dutch angle (tilted 20 degrees) for tension and cyberpunk aesthetic.

Main subject - The Hacker/Runner: A cyberpunk protagonist (mid-20s to early 30s) stands defiantly in the rain-soaked neon streets. Character specifications:
- Sleek black tech-wear jacket with illuminated circuit patterns (electric blue #0080FF and magenta #FF00FF running along seams)
- Augmented reality visor or cybernetic eye implants glowing cyan (#00FFFF)
- Wet hair from rain, droplets catching neon light
- One hand raised showing holographic interface projection from palm-implanted device
- Confident, rebellious posture with weight shifted to one leg
- Expression mixing determination with street-smart wariness
- Visible tech augmentations: glowing circuit tattoos on neck/hands, cybernetic arm details
- Face partially lit by blue holographic glow from their own interface

Holographic interface: Floating digital screens projected from the character's hand, displaying:
- Scrolling lines of code in matrix-green (#39FF14) and cyan (#00FFFF)
- Wireframe 3D models rotating
- Japanese/Chinese characters mixed with English (cyberpunk aesthetic)
- Transparent blue (#00BFFF) panels with 60% opacity
- Glitch effects with horizontal scan lines occasionally distorting the display
- Circuit diagram patterns connecting data nodes

Foreground elements (0.5-1 meter in front of camera):
- Rain droplets falling, captured in motion blur
- Steam rising from street grates, backlit by neon
- Bokeh balls of pink (#FF1493) and cyan (#00FFFF) from out-of-focus neon signs

Mid-ground (2-5 meters):
- Wet asphalt street reflecting all neon lights like a mirror
- Puddles creating duplicate images of neon signs
- Light trails from passing hovercrafts/vehicles (motion blur)
- Scattered debris: discarded tech, cables, urban decay

Background composition - Cyberpunk cityscape:
- Towering mega-structures with countless neon advertisements in Japanese/Chinese
- Holographic billboards displaying animated ads
- Flying vehicles with red/blue light trails
- Dense urban environment creating claustrophobic vertical composition
- Smoke/steam rising from buildings creating atmospheric layers
- Power lines and cables crisscrossing overhead

Lighting setup (neon-dominated):
- Key light: Bright electric pink (#FF1493) neon sign from camera-left casting magenta glow on character's left side
- Fill light: Cyan (#00FFFF) neon from camera-right providing cool counter-light
- Back light: Deep purple (#8B00FF) neon backlighting from above, creating rim light through rain/steam
- Accent lights: Multiple colored neon sources creating complex color mixing on wet surfaces
- Ground reflection: All lights doubled in intensity on wet street creating mirror effect
- Holographic glow: Blue-cyan light from character's interface illuminating their face from below
- Contrast ratio: 10:1 with extreme color contrast (warm vs cool, complementary colors)

Atmospheric effects:
- Heavy rain visible as streaks (slow shutter effect: 1/30s motion blur)
- Volumetric light rays piercing through steam/smoke
- Lens flares from brightest neon signs creating star patterns
- Chromatic aberration on edges of bright lights (cyan/magenta fringing) for authentic cyberpunk look
- Film grain texture overlay at 15% opacity for gritty aesthetic
- Bloom effect on brightest neon sources

Color palette and neon specifications:
Primary neons:
- Electric pink/magenta (#FF1493, #FF00FF) - dominant advertising color
- Cyan/electric blue (#00FFFF, #0080FF) - tech/interface color
- Deep purple (#8B00FF, #4B0082) - atmospheric/shadow color
- Matrix green (#39FF14) - code/data color

Base colors:
- Black (#000000) - shadows, character's clothing, night sky
- Dark grey (#1a1a1a) - wet asphalt, buildings
- Chrome silver (#C0C0C0) - metallic accents, tech

Accent colors:
- Warning red (#FF0000) - emergency lights, danger indicators
- Corporate gold (#FFD700) - premium advertisements
- Toxic green (#00FF00) - hazard warnings, chemical glow

Glitch effects and digital corruption:
- Random horizontal scan lines (1-2px) appearing occasionally
- RGB channel separation creating color fringing on edges
- Pixelated artifacts in holographic displays
- Data corruption visual noise in 5-10% of holographic interface

Mood and atmosphere: This is the moment before action - the hacker has just accessed critical data, the runner is about to make their move, the rebel stands against corporate oppression. The rain-soaked neon-lit streets represent a world where technology has advanced but society has decayed. The character is both empowered by technology and endangered by it.

Style reference: Blade Runner (1982, 2049), Ghost in the Shell, Cyberpunk 2077 promotional art, Akira, modern synthwave aesthetic. High-contrast neon-noir photography with Asian mega-city influence. Think Netflix's Altered Carbon or Mute production design.

Technical specifications:
- Sharp focus on character with strong bokeh on background neon lights
- Neon light bleeding and bloom effects for authentic feel
- Reflections on all wet surfaces must be accurately rendered
- Motion blur on rain and passing vehicles
- High detail on character's face, tech augmentations, and holographic interface
- Grain and slight chromatic aberration for film-like quality

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Cinematic cyberpunk illustration quality suitable for game cover art, movie poster, or high-end concept art. Maximum neon vibrancy with deep blacks for contrast.`,
        fontStyle: 'Futuristic, angular font with digital/glitch aesthetics (similar to Orbitron, Exo, or custom cyberpunk display fonts). Include subtle glitch effects in the typography itself.',
        messageStyle: 'Neon-inspired typography with strong glow effects. Sharp, techy, and aggressive styling.',
        textReadability: 'Text color: Bright cyan (#00FFFF) or electric pink (#FF1493) for maximum neon visibility. Apply strong outer glow (5-6px radius, 80% opacity) matching text color to create authentic neon tube effect. Add subtle drop shadow (3px offset, 60% opacity, #000000) for depth. Include occasional horizontal glitch lines across text (1-2px displacement) for digital corruption effect. Consider RGB channel separation (slight red/blue offset) for chromatic aberration. All text should feel like it\'s glowing in the dark, matching the cyberpunk neon aesthetic.'
    };
}

/**
 * Minimal Modern Style Template
 */
function getMinimalTemplates() {
    return {
        basePrompt: `Think step-by-step about minimalist composition, human presence, and sophisticated simplicity before generating this scene.

Camera setup: 50mm lens at f/4 for balanced focus, maintaining sharpness throughout. Straight-on, perfectly centered composition at eye level. Camera positioned for architectural photography precision.

Main subject - The Minimalist Professional: A single person (gender-neutral, 25-35 years old) stands in a minimalist space, embodying refined simplicity:
- Dressed in monochromatic outfit: black turtleneck or white shirt, tailored pants
- Clean silhouette with no unnecessary details
- Neutral, contemplative expression suggesting focus and clarity
- Positioned using golden ratio (approximately 38% from left edge)
- Body angled 15 degrees from camera, face toward viewer
- One hand in pocket, other hanging naturally - effortless confidence
- Minimal jewelry: perhaps a single geometric watch or ring
- Hair styled simply and precisely
- Posture upright but relaxed, suggesting quiet confidence

Character presence: Rather than dominating the frame, the person becomes part of the overall composition - a human element that gives scale and warmth to the minimalist space. They represent clarity of purpose, intentional living, and mindful presence.

Environment - Minimalist architectural space:

Spatial composition: A large, open interior space with clean geometric forms:
- White walls (#FFFFFF) or off-white (#FAFAFA) creating expansive feeling
- One accent wall in sophisticated matte navy (#2c3e50) or charcoal (#34495e)
- Polished concrete floor in light grey (#ecf0f1) with subtle texture
- High ceiling (suggested by vertical lines and lighting)
- Floor-to-ceiling window on one side (not directly visible, but implied by natural light)

Geometric elements: Minimal but purposeful:
- One large geometric shape: circle, square, or triangle rendered as:
  * Shadow pattern on wall from unseen architectural element
  * Minimalist sculpture or art piece (single color)
  * Architectural feature like circular skylight projection
- Scale: Approximately 30% of wall height
- Color: Either pure black (#000000), navy (#2c3e50), or vibrant single accent (#e74c3c or #3498db)
- Positioning: Follows rule of thirds, balanced with human subject

Furniture (minimal, if any):
- One iconic mid-century modern chair (Eames-style) in distance, small in frame
- Simple wooden bench or concrete ledge
- Everything serves purpose, nothing decorative
- Negative space is intentional and abundant

Lighting setup (naturalistic minimalism):
- Key light: Soft natural daylight from large window (not visible) at 45-degree angle from camera-left
- Creates gentle gradient on white walls from bright (#FFFFFF) to subtle grey (#f8f9fa)
- Fill light: Reflected natural light bouncing off white surfaces, creating even illumination
- No harsh shadows: Contrast ratio 2:1 (very gentle)
- One accent: Subtle directional light creating geometric shadow pattern
- Overall luminosity: High-key (bright and airy)
- Color temperature: Cool daylight (6000K) for clean, contemporary feel

Color palette (restricted and intentional):
Primary (dominant 80%):
- Pure white (#FFFFFF)
- Off-white (#FAFAFA)
- Light grey (#ecf0f1)

Accent colors (20%):
- Sophisticated navy (#2c3e50) OR
- Charcoal (#34495e) OR
- Single vibrant accent if used: crimson (#e74c3c), electric blue (#3498db), or emerald (#2ecc71)

Person's clothing:
- Black (#000000) OR
- White (#FFFFFF)
- Creating strong but simple contrast

Textural details (subtle, refined):
- Smooth matte surfaces dominate
- One textured element: concrete floor with fine aggregate visible
- Fabric texture on clothing rendered precisely but subtly
- No glossy or reflective surfaces except possibly one metallic accent

Composition principles applied rigorously:
- Negative space: 60-70% of frame is intentionally empty
- Golden ratio: Subject and geometric element positioned using 1.618 proportion
- Breathing room: Generous space around subject prevents claustrophobia
- Visual weight: Balanced but asymmetric
- Horizon line: Level and precise
- Vertical/horizontal lines: Perfectly aligned with frame edges

Mood and atmosphere: This image embodies the philosophy of "less is more." The space and subject communicate:
- Clarity of thought and purpose
- Intentional living and mindful choices
- Sophistication through restraint
- Timeless elegance over trend
- Focus and concentration
- Peace and tranquility
- Modern luxury defined by space rather than objects

The person isn't isolated - they're integrated into a thoughtfully designed environment that supports creativity, focus, and well-being.

Style reference: Apple product photography, Kinfolk magazine aesthetic, Muji brand imagery, works of minimalist architects like Tadao Ando and John Pawson, Scandinavian design philosophy, contemporary art gallery spaces.

Technical specifications:
- Tack-sharp focus throughout with f/4 providing adequate depth
- Perfect exposure with no blown highlights or crushed blacks
- Clean, crisp edges on all geometric forms
- Subtle gradation in lighting (no flat illumination)
- High-resolution detail showing texture in concrete, fabric
- Professional color grading with slight cool bias
- No noise, grain, or artifacts (perfectly clean)

Philosophical approach: This isn't an empty background - it's a carefully composed artwork where every element, including vast negative space, is intentional. The human subject provides warmth and scale, preventing the space from feeling cold or sterile. The image asks: "What can we remove while maintaining meaning and beauty?"

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Museum-quality architectural photography suitable for design magazines, coffee table books, or contemporary art galleries. Refined, sophisticated, and timeless.`,
        fontStyle: 'Ultra-clean, geometric sans-serif font with perfect proportions (similar to Helvetica, Avenir Next, or SF Pro). Absolutely no decorative elements. Medium to light weight for elegance.',
        messageStyle: 'Minimal typography with generous letter-spacing and breathing room. Hierarchy through size and weight only, never through decoration.',
        textReadability: 'Text color: For light backgrounds use sophisticated dark navy (#2c3e50) or pure black (#000000). For dark accent walls use pure white (#FFFFFF). No shadows, no glows, no outlines - rely purely on contrast and negative space. Exceptional kerning and tracking (spacing) is crucial. Text should feel like it\'s part of the architecture - integrated, not applied. Consider using very subtle (1px) spacing adjustments for visual perfection. The typography itself should embody minimalist principles.'
    };
}

/**
 * Retro Vintage Style Template
 */
function getRetroTemplates() {
    return {
        basePrompt: `Think step-by-step about retro character, vintage environment, and nostalgic color before generating this scene.

Camera setup: 50mm lens at f/5.6 for classic depth of field. Straight-on or slightly elevated angle (10 degrees) typical of 1960s-70s photography. Camera positioned for classic portrait composition.

Main subject - The Retro Enthusiast: A stylish figure embodying 1960s-70s aesthetic:
- Age: Mid-20s to early 30s (to represent the era's youth culture)
- Outfit specifications:
  * Men's option: Burnt orange (#D2691E) or mustard yellow (#DAA520) turtleneck, brown (#654321) corduroy pants, vintage round sunglasses
  * Women's option: Geometric pattern dress in orange/yellow/olive, headband, cat-eye sunglasses
  * Accessories: Vintage watch, peace symbol jewelry, period-appropriate styling
- Hair: Period-accurate styling (afro, long straight with center part, or styled waves)
- Pose: Casual confidence - perhaps seated on vintage furniture, or standing with hand on hip
- Expression: Cool, optimistic, embodying the era's counterculture spirit
- Positioning: Golden ratio placement, slightly off-center

Character details suggesting era:
- Analog camera or vinyl record in hand
- Vintage telephone visible nearby
- Period-appropriate props integrated naturally

Environment - 1960s-70s interior space:

Furniture and set design:
- Low-profile furniture typical of mid-century modern
- Egg chair or Eames lounger in burnt orange (#FF8C00) or olive green (#6B8E23)
- Wooden coffee table with tapered legs (walnut finish #8B4513)
- Shag carpet in cream (#FFF8DC) or olive green
- Wood-paneled accent wall (popular 1970s feature)
- Vinyl record player and collection visible
- Lava lamp or arc floor lamp as lighting feature

Background composition:
Layer 1 (immediate background): Vintage wallpaper featuring:
- Geometric patterns: circles, hexagons, or sunburst motifs
- Color scheme: Mustard yellow (#DAA520), burnt orange (#D2691E), olive green (#6B8E23), cream (#FFF8DC)
- Large-scale repeating pattern (popular in the era)
- Slightly textured appearance suggesting aged paper

Layer 2 (mid-ground): Retro furnishings and decor:
- Starburst clock on wall (iconic mid-century design)
- Abstract art print in period colors
- Macramé wall hanging or woven textile
- Indoor plants: rubber plant or spider plant in ceramic pot

Layer 3 (background details): Period-specific elements:
- Vintage posters (concert posters, travel posters in period style)
- Rotary telephone in harvest gold (#DAA520)
- Stack of vinyl records
- Vintage television set (wood cabinet style)

Lighting setup (warm, nostalgic):
- Key light: Warm tungsten lighting (2700K color temperature) from arc floor lamp, creating soft, warm illumination
- Fill light: Ambient warm light suggesting afternoon sun through curtained windows (not directly visible)
- Accent light: Practical lighting from lava lamp or table lamp with orange/amber glow
- Back light: Subtle warm rim light separating subject from background
- Contrast ratio: 3:1 (gentle, flattering)
- Overall tone: Warm, slightly saturated, nostalgic color grading

Color palette (authentic period colors):
Primary colors:
- Burnt orange (#D2691E) - dominant era color
- Mustard yellow (#DAA520) - optimistic, warm
- Olive green (#6B8E23) - earth tone popular in 70s
- Harvest gold (#DAA520) - appliance and decor color

Secondary colors:
- Warm brown (#8B4513) - wood tones, earth elements
- Cream (#FFF8DC) - neutrals, textiles
- Dark brown (#654321) - darker accents, furniture
- Rust/terracotta (#B7410E) - pottery, textiles

Accent colors:
- Avocado green (#568203) - quintessential 70s color
- Burnt sienna (#E97451) - warm accent
- Goldenrod (#DAA520) - metallic accents

Vintage effects and aging:
- Slight film grain texture overlay (mimicking 35mm film from the era)
- Color shift toward warm tones (yellowing as if photo aged)
- Subtle vignetting (darkening at frame edges)
- Slight softness to image (not modern digital sharpness)
- Occasional subtle light leaks or lens flares (vintage camera artifacts)
- Cross-processing color effect (slightly shifted hues)

Texture details:
- Fabric textures: corduroy, velvet, macramé clearly visible
- Wood grain on furniture rendered with period finishes
- Shag carpet texture (long pile visible)
- Wallpaper with slight embossing or texture
- Matte finishes dominant (no glossy modern surfaces)

Retro graphic elements:
- Sunburst patterns radiating from corners or edges
- Geometric shapes: circles, hexagons arranged in patterns
- Halftone dot patterns (referencing period printing techniques)
- Groovy wavy lines or op-art inspired elements
- Color blocks in period colors

Mood and atmosphere: This scene captures the optimism, creativity, and distinctive style of the late 1960s-early 1970s. The era of:
- Space age optimism meeting earth-conscious counterculture
- Bold geometric design and organic natural elements coexisting
- Warm, inviting spaces designed for social connection
- Analog technology and handcrafted aesthetics
- Music, art, and lifestyle converging

The image should feel like a time capsule - authentically period without feeling like a costume or parody. The subject inhabits this space naturally.

Style reference: Period photography from LIFE magazine, vintage Sears catalogs, album covers from the era (think Herb Alpert, Sergio Mendes), Polaroid photographs from family albums, Kodachrome slide photography, works of Julius Shulman (mid-century architecture photography).

Cultural references:
- Mad Men aesthetic (but residential, not corporate)
- Austin Powers visual design (but authentic, not satirical)
- That '70s Show set design
- Vintage Wes Anderson color palettes
- Actual period interior design books and magazines

Technical specifications:
- Slightly soft focus (mimicking film lenses of the era)
- Warm color temperature throughout (2700-3200K)
- Film grain texture at 20-30% opacity
- Slight color fringing on high-contrast edges (chromatic aberration from vintage lenses)
- Gentle vignetting (10-15% darkening at edges)
- Color palette slightly desaturated in comparison to modern photos (authentic to period film stocks)
- Subtle barrel distortion (vintage lens characteristic)

Aspect ratio: 16:9 landscape orientation (cropped from original 3:2 or 4:3 for modern presentation).

Quality specifications: Authentic period photography aesthetic that feels genuinely vintage without being low-quality. Suitable for retro brand campaigns, vintage-themed publications, nostalgic lifestyle content, or period film/TV production design reference.`,
        fontStyle: 'Retro display fonts with period character (similar to Cooper Black, Serif Gothic, or custom groovy fonts). Consider fonts with rounded terminals, geometric construction, or psychedelic flair. Medium to bold weight.',
        messageStyle: 'Groovy, flowing typography or bold geometric lettering. Consider incorporating retro effects like inline/outline styles, shadow treatments popular in the era.',
        textReadability: 'Text color: Cream (#FFF8DC) or mustard yellow (#DAA520) for primary text. For contrast, use deep brown (#654321) or burnt orange (#D2691E). Apply retro text effects: thick drop shadow offset at 45-degree angle (4px offset, 60% opacity, darker shade of text color) mimicking letterpress or screen-printing. Consider adding subtle halftone dot pattern to text fill (10% opacity) for authentic print aesthetic. Outer glow in warm tone (orange/yellow, 3px radius, 30% opacity) creates vintage lit-sign effect. Text should feel like it could have been typeset in the actual era.'
    };
}

/**
 * Sci-Fi Style Template
 */
function getSciFiTemplates() {
    return {
        basePrompt: `Think step-by-step about character in space environment, futuristic technology, and cosmic scale before generating this scene.

Camera setup: 35mm lens at f/2.8 for moderate depth of field. Slightly low angle (15 degrees below eye level) looking up at the subject, creating sense of awe and scale. Camera positioned for dramatic sci-fi composition.

Main subject - The Space Explorer/Astronaut: A lone figure in advanced space gear stands as humanity's representative in the cosmos:
- Advanced spacesuit design specifications:
  * Sleek, form-fitting modern design (not bulky 1960s style)
  * Primary color: Matte white (#E8E8E8) with panel lines in grey (#A0A0A0)
  * Accent colors: Electric blue LED strips (#0080FF) along limbs and torso
  * Helmet: Reflective gold visor (#FFD700) showing reflections of stars and nebulae
  * Tech details: Small status lights (green #00FF00, blue #0080FF) on chest panel and wrists
  * Shoulder patches or insignia suggesting space agency/mission
- Pose: Gazing upward toward the cosmos, one hand reaching toward stars
- Body language: Wonder, determination, solitary strength
- Positioning: Lower third of frame (following rule of thirds), allowing vast space above
- The figure is small in frame, emphasizing the immensity of space

Helmet visor reflections: The gold visor reflects:
- Star field
- Distant nebula in purple/pink
- Nearby celestial body
- Creates visual interest in face area while maintaining mystery

Foreground elements (1-2 meters):
- Surface of asteroid or small planetoid in dark grey (#404040) with realistic crater texturing
- Small rocks and space debris floating nearby
- Tether cable from suit extending off-frame
- Atmospheric dust particles catching light from distant sun

Mid-ground (10-50 meters):
- Part of spacecraft or space station visible at frame edge
- Metallic surfaces in silver (#C0C0C0) and titanium grey (#6B7A8F)
- Running lights and status indicators (red #FF0000, green #00FF00, blue #0080FF)
- Solar panels with realistic angular geometry
- Radiator panels with thermal glow

Background composition - Deep space vista:

Layer 1 (nearby space, 100m-1km): Debris field and local structures:
- Floating equipment or satellite components
- Orbital construction in progress
- Small maneuvering thrusters firing (subtle blue #00BFFF exhaust)

Layer 2 (mid-distance, 1km-100km): Local celestial body:
- Portion of planet or large moon visible
- Atmospheric glow at terminator line (where day meets night)
- Surface details: oceans (#0E4C92), continents (#8B7355), cloud patterns (#FFFFFF with 70% opacity)
- If airless body: cratered surface in realistic grey tones with raking sunlight creating dramatic shadows

Layer 3 (far distance, 1000km+): The cosmos:
- Star field: Thousands of stars varying in size and brightness
  * Bright stars: White (#FFFFFF) to blue-white (#E6F2FF)
  * Distant stars: Soft yellow (#FFF8DC) to orange (#FFE4B5)
  * Distribution: Denser toward one side suggesting Milky Way band
- Nebula formation: Vast cloud of cosmic gas in:
  * Purple (#9370DB, #DDA0DD) - emission nebula
  * Blue (#4682B4, #87CEEB) - reflection nebula
  * Pink/magenta (#FFB6C1, #FF69B4) - hydrogen alpha regions
  * Opacity: 30-60% allowing stars to show through
  * Wispy, organic structure with bright cores and fading edges

Layer 4 (cosmic background): The infinite void:
- Deep space black (#000000) to very dark blue (#000033)
- Subtle gradient suggesting depth
- Faint galaxy spiral (Andromeda-style) visible as subtle smudge
- Perhaps Saturn-like ringed planet or Jupiter-like gas giant in far distance

Lighting setup (space lighting physics):
- Key light: Distant sun as intense white-yellow point source (#FFF8E7)
  * Creates harsh, parallel shadows with no diffusion (vacuum of space)
  * Contrast ratio: infinite (no atmosphere to scatter light)
  * One side of subject brightly lit, other side in complete darkness
- Fill light: Reflected light from nearby planetary body
  * Soft blue (#87CEEB) if reflecting ocean/water world
  * Warm orange (#FFB84D) if reflecting desert/Mars-like planet
  * Intensity: 10-20% of key light
- Rim light: Backlight from sun creating dramatic rim lighting on subject's silhouette
- Accent lights: Practical lights from spacecraft and suit LEDs
- Earth-shine or planet-shine: Soft ambient light from large nearby body
- Starlight: Negligible but adds to ambient fill

Realistic space rendering:
- Absolutely no atmospheric haze or depth fog
- Distant objects perfectly sharp (no atmospheric blur)
- Shadows are pure black with razor-sharp edges
- Colors remain saturated regardless of distance
- Stars don't twinkle (no atmosphere)
- No sound (suggested through stillness of composition)

Technology details (realistic near-future sci-fi):
- Solar panels with realistic blue photovoltaic cells
- Radiator panels with thermal piping visible
- Communication dishes and antennae
- Docking ports and airlocks
- Realistic mechanical details, bolts, panels
- Small attitude control thrusters
- Sensor arrays and scientific instruments

Color palette (scientifically informed):
Space environment:
- Deep black (#000000) - void of space
- Dark blue (#000033) - deep space background
- White to blue stars (#FFFFFF, #E6F2FF, #B0E0E6)

Nebula colors (based on real emission spectra):
- Hydrogen alpha: Pink/red (#FF69B4, #FFB6C1)
- Oxygen III: Blue-green (#40E0D0, #5DADE2)
- Sulfur II: Red (#FF4500)
- Nitrogen: Deep red (#8B0000)

Technology colors:
- Matte white suit (#E8E8E8)
- Metallic silver/grey (#C0C0C0, #6B7A8F)
- Status LEDs: Green (#00FF00), blue (#0080FF), red (#FF0000)
- Thermal glow: Dull red (#8B0000)

Planetary body colors:
- Ocean blue (#0E4C92, #1E90FF)
- Earth continents (#8B7355, #DEB887)
- Mars-like (#CD5C5C, #8B4513)
- Ice caps: Bright white (#FFFFFF)

Cosmic phenomena to include:
- Lens flare from sun: Six-point star pattern with blue/purple chromatic aberration
- Cosmic dust catching light (like Milky Way band)
- Distant supernova remnant or planetary nebula
- Perhaps comet with tail pointing away from sun
- Meteor streaks (if appropriate)
- Faint zodiacal light

Mood and atmosphere: This scene captures humanity's eternal drive to explore, our smallness against the cosmic scale, and the technological achievement of space travel. Themes include:
- Wonder and awe at the beauty of the cosmos
- Solitude and self-reliance of the explorer
- Hope and ambition of space-faring civilization
- The fragility of human life in the hostile void
- Beauty and terror of the infinite cosmos

The lone figure represents all of humanity - curious, brave, reaching toward the stars despite the vastness and danger.

Style reference: Interstellar (2014), The Martian (2015), Gravity (2013), 2001: A Space Odyssey (1968 - for realistic physics), NASA photography, SpaceX promotional material, Hubble Space Telescope imagery, work of concept artists like John Berkey, Chris Foss, Syd Mead, and NASA's official space art program.

Scientific accuracy priorities:
- Realistic orbital mechanics (if showing movement)
- Accurate vacuum lighting (harsh shadows, no atmosphere)
- Realistic spacecraft design (radiators, solar panels, etc.)
- Authentic space environment colors
- Proper scale relationships
- Real physics (no sound, no aerodynamic shapes, etc.)

Technical specifications:
- Sharp focus on subject with moderate depth of field
- Stars rendered as point sources (not blurred orbs)
- Proper exposure preserving star field while showing subject detail
- Realistic motion blur only on moving objects
- Accurate chromatic aberration from camera lens
- Subtle lens flares from bright light sources
- High dynamic range to show both bright sun and dark space

Inspirational scientific images to reference:
- Hubble Space Telescope: Pillars of Creation, Eagle Nebula
- ISS photography: Astronaut spacewalks, Earth from orbit
- Apollo program: Earthrise, astronaut on Moon
- Cassini mission: Saturn and its rings
- New Horizons: Pluto flyby images

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Cinematic space photography quality suitable for science fiction films, NASA communications, space exploration documentaries, or premium sci-fi concept art. Balance between artistic beauty and scientific plausibility.`,
        fontStyle: 'Futuristic, clean sans-serif font with geometric precision (similar to Eurostile, Bank Gothic, or custom sci-fi fonts). Medium to bold weight with wide letter-spacing suggesting advanced technology.',
        messageStyle: 'Clean, technical typography reminiscent of NASA mission control displays or spacecraft HUD interfaces. Professional and precise.',
        textReadability: 'Text color: Bright cyan (#00FFFF) or electric blue (#0080FF) for primary text (suggesting holographic displays). For maximum contrast, use white (#FFFFFF) or bright green (#00FF00) (evoking radar/monitor displays). Apply subtle outer glow (3-4px radius, 50% opacity) matching text color to create illuminated display effect. Add very subtle digital scan line texture (horizontal lines at 1px intervals, 10% opacity) for screen display aesthetic. No heavy shadows - instead use thin dark outline (1px, #000033) for separation from background. Text should feel like it\'s emitted light, not printed on surface - like spacecraft HUD or holographic projection in space.'
    };
}

/**
 * Nature Organic Style Template
 */
function getNatureTemplates() {
    return {
        basePrompt: `Think step-by-step about human-nature connection, natural environment, and organic composition before generating this scene.

Camera setup: 50mm lens at f/2.8 for shallow depth of field, creating soft bokeh from natural elements. Eye-level shot with slight Dutch angle (8 degrees) for organic, non-rigid composition. Camera positioned for environmental portraiture.

Main subject - The Nature Advocate: A person embodying harmony with nature and sustainable living:
- Age: Late 20s to early 40s (suggesting wisdom and connection)
- Appearance: Natural, authentic beauty
  * Clothing: Organic cotton or linen in earth tones - soft beige (#F5F5DC), forest green (#228B22), warm brown (#8B4513)
  * Style: Simple, flowing garments, possibly with natural fiber textures visible
  * Minimal synthetic materials - everything looks natural and handmade
  * Bare feet or simple sandals, suggesting direct earth connection
- Adornments: Minimal, natural materials
  * Wooden jewelry, stone pendant, woven bracelet
  * Fresh flower in hair or natural wreath
  * Nothing plastic or obviously manufactured
- Activity/pose: Engaged with nature
  * Hands gently touching tree bark or holding seedling plant
  * Kneeling beside garden bed, fingers in soil
  * Standing with arms outstretched in flowing yoga pose
  * Walking through tall grass with dress flowing
  * Sitting cross-legged on moss-covered ground
- Expression: Peaceful, mindful, content - genuine connection with surroundings
- Positioning: Integrated into environment using rule of thirds, not dominating frame

Character relationship to environment: The person should feel like they BELONG in this natural setting - not visiting nature, but part of it. Their comfort and natural movement within the space is key.

Environment - Natural sanctuary:

Foreground elements (0.5-2 meters):
- Wild grasses and meadow flowers in soft focus
  * Delicate Queen Anne's lace (#FFFFF0)
  * Golden wheat grass catching sunlight (#DAA520)
  * Purple wildflowers (#9370DB)
- Morning dew on spider webs creating bokeh highlights
- Butterfly or bee visiting flowers (in motion)
- Dandelion seeds floating on air (shallow depth creates beautiful bokeh)

Mid-ground (2-10 meters): The subject and immediate environment:
- The person interacting with natural elements
- Ancient tree with textured bark (oak, maple, or pine)
  * Deep brown bark (#654321) with grey lichen (#C0C0C0)
  * Visible tree rings or knots showing age
  * Strong roots emerging from earth
- Lush undergrowth:
  * Ferns unfurling (#2E8B57)
  * Moss covering rocks and tree bases (#6B8E23)
  * Mushrooms growing in organic clusters (#F5DEB3)
- Garden bed with healthy plants:
  * Tomato vines with red fruit (#FF6347)
  * Herb garden with varied greens (#228B22, #90EE90, #3CB371)
  * Sunflowers turning toward light (#FFD700)

Background composition - Forest sanctuary:

Layer 1 (10-30 meters): Forest interior:
- Multiple tree trunks creating depth
- Dappled sunlight streaming through canopy
- Soft ground fog or morning mist at base
- Fallen logs with moss and mushrooms
- Natural clearing allowing light penetration

Layer 2 (30-100 meters): Deep forest:
- Dense foliage in layers of green
- Branches creating natural framing
- Occasional bird in flight (blurred motion)
- Light rays piercing through gaps (volumetric lighting)

Layer 3 (100+ meters): Atmospheric depth:
- Soft blue-green haze from atmospheric perspective (#B0E0E6)
- Distant trees becoming silhouettes
- Sky glimpsed through canopy openings
- Cloud formations or blue sky patches

Lighting setup (natural, organic):
- Key light: Golden hour sunlight filtering through trees
  * Warm color temperature (3200K)
  * Dappled light creating irregular patterns
  * Soft-edged shadows from leaves and branches
- Back light: Sun behind subject creating rim lighting on hair and clothing edges
  * Creates glow around subject
  * Separates subject from background
  * Illuminates floating particles in air (pollen, dust, moisture)
- Fill light: Reflected light from forest floor and leaves
  * Soft, green-tinted from chlorophyll reflection
  * 30% intensity maintaining detail in shadows
- Accent light: Light catching water droplets, spider webs, reflective leaves
- Contrast ratio: 3:1 (gentle, natural)
- Atmospheric effects: Visible light rays (godrays/crepuscular rays) through mist

Color palette (natural, organic):
Primary greens (varying shades):
- Deep forest green (#006400, #228B22)
- Spring green (#00FF7F, #90EE90)
- Moss green (#8A9A5B, #6B8E23)
- Sage green (#9CA899, #BCB88A)

Earth tones:
- Rich soil brown (#654321, #8B4513)
- Tree bark grey-brown (#696969, #8B7355)
- Sand and stone beige (#F5F5DC, #D2B48C)
- Clay terracotta (#CD5C5C)

Natural accent colors:
- Wildflower colors: Purple (#9370DB), yellow (#FFD700), white (#FFFAFA)
- Berry reds: Strawberry (#FF6347), raspberry (#DC143C)
- Golden hour light: Warm amber (#FFBF00, #FFD700)
- Sky blue glimpses: Soft azure (#87CEEB, #B0E0E6)

Skin tones: Natural and sun-kissed (#F4C7AB to #C68642)

Clothing:
- Natural linen: Cream (#FFF8DC, #FFFAF0)
- Organic cotton: Soft grey-brown (#D3B8AE)
- Earth-dyed fabrics: Soft greens, browns, ochre

Organic textures (highly detailed):
- Tree bark: Deep crevices, lichen patches, moss growth
- Fabric: Visible weave in linen, cotton texture
- Plant life: Leaf veins visible, flower petal delicacy
- Earth: Soil granules, small stones, root networks
- Wood grain: Growth rings, knots, weathering
- Water droplets: Surface tension, light refraction

Natural phenomena:
- Floating pollen or seeds catching light (bokeh highlights)
- Morning mist rising from ground
- Spider webs with dew drops creating prisms
- Butterflies or dragonflies with translucent wings
- Birds: Cardinal (#FF0000), Blue Jay (#4169E1), or sparrow
- Light filtering through translucent leaves (backlighting)
- Natural lens flares from sun through branches

Seasonal markers (choose one coherent season):
Spring: Fresh growth, bright greens, delicate blossoms, renewal energy
Summer: Lush fullness, deep greens, vibrant flowers, abundant life
Autumn: Golden leaves (#FFD700, #FF8C00), harvest fruits, warm tones
Winter: Evergreens, frost patterns, muted earth tones, peaceful stillness

Sustainable elements visible:
- Compost pile with decomposing organic matter
- Rain barrel collecting water
- Handmade garden markers from branches
- Natural pest control (ladybugs, beneficial insects)
- Companion planting arrangement
- Recycled containers as planters
- Solar-powered garden light (small, subtle)

Mood and atmosphere: This scene embodies:
- Harmony between human and nature
- Mindful living and sustainability
- Growth, renewal, and natural cycles
- Peace and grounding found in nature
- Simple pleasures and authentic beauty
- Environmental stewardship
- Connection to Earth and seasons

The image should feel like taking a deep breath of fresh forest air - calming, rejuvenating, and centering.

Style reference: National Geographic environmental photography, Kinfolk magazine's nature features, works of photographer Hideaki Hamada, Annie Leibovitz's environmental portraits, Terri Timely's nature cinematography, Instagram accounts like @julia_trotti and @muradosmann (nature segments), organic lifestyle brands like Patagonia and Eileen Fisher campaign imagery.

Visual philosophy: Rather than "person in nature as separate elements," show "person as part of nature ecosystem." The human doesn't disrupt the natural beauty but enhances our understanding of the scene's scale and adds emotional connection.

Technical specifications:
- Shallow depth of field: Sharp focus on subject with creamy bokeh on foreground and background
- Natural color grading: Slightly increased saturation in greens, warm tone shift (+200K)
- Soft focus areas should have circular/organic bokeh (not hexagonal)
- Slight vignetting (10%) to draw eye to center
- Film-like grain texture (15% opacity) for organic, less digital feel
- Slight bloom effect on brightest highlights (sunlight through trees)
- Color harmony: Analogous color scheme (greens, yellows, browns)

Composition techniques:
- Golden ratio spiral positioning of subject
- Negative space filled with natural elements (not empty)
- Natural framing using branches, leaves
- Leading lines from tree trunks or paths
- Layered depth creating three-dimensional feel
- Organic, asymmetric balance (not rigid geometric)

Philosophical approach: This image asks viewers to reconsider their relationship with nature. It presents sustainable living not as sacrifice but as enrichment. The subject's genuine peace and contentment challenge modern busy lifestyles and suggest alternative paths to fulfillment through nature connection.

Aspect ratio: 16:9 landscape orientation.

Quality specifications: Premium environmental photography suitable for eco-conscious brand campaigns, wellness publications, sustainable lifestyle content, environmental organization communications, or nature-focused editorial work. Authentic, beautiful, and inspiring without feeling staged or artificial.`,
        fontStyle: 'Organic, slightly irregular font with natural character (similar to Natura, Aleo, or hand-drawn fonts with organic imperfection). Medium weight with flowing, non-mechanical letterforms.',
        messageStyle: 'Flowing, gentle typography that suggests natural forms. Avoid rigid geometric construction - embrace organic curves.',
        textReadability: 'Text color: Deep forest green (#228B22, #006400) or warm earth brown (#8B4513, #654321) for primary text. For lighter backgrounds, use these darker natural tones. For darker areas, use cream (#FFF8DC) or soft sage (#9CA899). Apply soft, organic drop shadow (2px offset at 45-degree angle, 40% opacity) mimicking natural shadow patterns. Include subtle outer glow in complementary green or gold (2-3px radius, 20% opacity, #90EE90 or #FFD700) creating soft halo effect like sunlight filtering through leaves. Text should feel hand-crafted and warm, not digital and cold. Consider slight baseline variation (+/-1px) for organic imperfection. The typography should evoke handmade crafts, garden markers, or natural signage.'
    };
}
/**
 * NEW TEMPLATES - Art/Painting Category (7 templates)
 */

/**
 * Watercolor Style Template
 */
function getWatercolorTemplates() {
    return {
        basePrompt: `Think step-by-step about watercolor techniques, color bleeding, and transparent layering before generating this scene.

Create a complete watercolor painting with soft, flowing watercolor techniques. The scene should feature a delicate subject (person, landscape, or object) rendered with characteristic watercolor properties: transparent washes, color bleeding at edges, visible brushstrokes, and white paper showing through lighter areas. Use wet-on-wet technique for backgrounds creating soft, dreamy gradients. Add details with wet-on-dry technique for sharper focal points. Include characteristic watercolor elements: pigment pooling in darker areas, granulation texture, subtle blooms and backruns. The paper texture should be visible, giving an authentic handmade quality.

Color palette: Use translucent, luminous colors with high water content. Soft blues, gentle greens, warm ochres, and delicate pinks. Maintain transparency and luminosity typical of watercolor medium.

Lighting: Soft, diffused natural light that emphasizes the transparent quality of watercolors. Highlights should appear as unpainted white paper.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Delicate, flowing script or light serif font suggesting hand-painted elegance',
        messageStyle: 'Soft, gentle typography with organic flow',
        textReadability: 'Use soft, muted colors that complement the watercolor palette. Apply subtle drop shadow (1-2px, 30% opacity) and gentle outer glow (2px, 20% opacity) for readability without disrupting the delicate watercolor aesthetic.'
    };
}

/**
 * Oil Painting Style Template
 */
function getOilPaintingTemplates() {
    return {
        basePrompt: `Think step-by-step about impasto technique, rich pigmentation, and classical oil painting composition before generating this scene.

Create a complete oil painting with rich, textured brushwork and deep, saturated colors. The scene should feature visible brushstrokes with thick paint application (impasto technique), especially in highlights and key areas. Use traditional oil painting composition: strong value contrast, warm and cool color temperature shifts, and classical lighting (such as chiaroscuro or Rembrandt lighting). The paint texture should be dimensional, with thick ridges catching light. Background can use palette knife technique for bold, expressive marks. Color mixing should show subtle gradations typical of wet-in-wet oil technique.

Style reference: Classical masters like Rembrandt for portraiture, Van Gogh for expressive brushwork, or Impressionists for broken color technique.

Color palette: Rich, saturated colors with complex undertones. Deep ultramarine, cadmium yellows and reds, burnt sienna, raw umber, titanium white highlights.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, classical serif font with strong presence, evoking museum quality',
        messageStyle: 'Strong, traditional typography with artistic refinement',
        textReadability: 'Use colors that complement the rich oil painting palette. Apply thick drop shadow (3px, 60% opacity) and outer glow (3px, 30% opacity) in harmonious colors to ensure readability against textured paint surface.'
    };
}

/**
 * Pastel Style Template
 */
function getPastelTemplates() {
    return {
        basePrompt: `Think step-by-step about soft pastel techniques, chalk-like texture, and gentle blending before generating this scene.

Create a complete soft pastel artwork with characteristic powdery, velvety texture. The scene should feature gentle color transitions created through blending and layering. Show visible pastel strokes in some areas while others are smoothly blended. The texture should resemble chalk or pastel sticks on textured paper, with slight graininess visible. Use fixative-like effects in areas to show variation between fixed and unfixed pastel. Color intensity should vary from bold, vibrant strokes to soft, atmospheric passages. Include characteristic pastel elements: finger-blending marks, stumping (blending with paper stump), and areas of pure, unblended color for emphasis.

Color palette: Soft, slightly dusty colors with chalky quality. Gentle pastels but also capable of vibrant, saturated areas. Think Degas ballet dancers or Mary Cassatt's domestic scenes.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Soft, slightly textured font with gentle presence',
        messageStyle: 'Delicate, refined typography that doesn\'t overpower the soft pastel aesthetic',
        textReadability: 'Use gentle, complementary colors from the pastel palette. Apply soft drop shadow (2px, 40% opacity) and subtle outer glow (3px, 25% opacity) to create gentle contrast without harsh edges.'
    };
}

/**
 * Ink Wash (Sumi-e) Style Template
 */
function getInkWashTemplates() {
    return {
        basePrompt: `Think step-by-step about sumi-e brush techniques, tonal gradation with ink, and East Asian compositional principles before generating this scene.

Create a complete ink wash painting in traditional sumi-e (Japanese) or shui-mo (Chinese) style. The scene should feature elegant brushwork with varying ink intensities from pale gray washes to deep black accents. Embrace white space (ma) as active compositional element. Use expressive, calligraphic brushstrokes that capture essence rather than detail. Show ink wash gradations: dark wet ink bleeding into water-diluted passages, creating atmospheric effects. Include characteristic elements: decisive, confident brush marks (no overworking), economy of strokes, balanced asymmetric composition following East Asian aesthetic principles.

Subject matter: Natural subjects work best - bamboo, mountains with mist, cherry blossoms, birds, or meditative human figures. Avoid excessive detail; focus on capturing spirit (qi/ki) of the subject.

Color palette: Primarily monochromatic black ink with gray washes. Optionally include subtle color accents in traditional pigments (mineral blue, red seal marks).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Calligraphic or brush-style font suggesting East Asian aesthetics',
        messageStyle: 'Minimalist, elegant typography with Eastern sensibility',
        textReadability: 'Use black or deep gray for text on light areas, light gray or white on dark areas. Apply minimal effects to preserve the minimalist aesthetic - subtle shadow (1px, 30% opacity) only where necessary.'
    };
}

/**
 * Pop Art Style Template
 */
function getPopArtTemplates() {
    return {
        basePrompt: `Think step-by-step about bold graphics, halftone dots, and vibrant color blocks before generating this scene.

Create a complete Pop Art composition with bold, flat colors, strong outlines, and graphic simplification. The scene should feature a subject (portrait, product, or icon) rendered in the style of Warhol, Lichtenstein, or vintage advertisements. Use limited color palette (3-5 vibrant colors), flat shading with no gradients, thick black outlines defining all major shapes. Include characteristic Pop Art elements: Ben-Day dots (halftone pattern) in some areas, speech bubbles or text elements integrated into composition, repetition or multiplication of image, high contrast between colors.

Style execution: Simplify forms into bold shapes, eliminate unnecessary details, emphasize contours. Use screen-printing aesthetic: crisp edges, registration marks, slightly offset color layers for authentic mechanical reproduction look.

Color palette: Vibrant, saturated colors - electric blue, hot pink, lemon yellow, candy apple red, pure black, white backgrounds. Colors should be flat and unmixed.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, condensed sans-serif or comic-style font with strong graphic impact',
        messageStyle: 'Punchy, attention-grabbing typography typical of advertisements and comics',
        textReadability: 'Use high-contrast color combinations (black on yellow, white on red, etc.). Text should be bold and graphic with thick outlines (3-4px) creating comic-book style text treatment.'
    };
}

/**
 * Impressionism Style Template
 */
function getImpressionismTemplates() {
    return {
        basePrompt: `Think step-by-step about broken color technique, light effects, and plein-air painting principles before generating this scene.

Create a complete Impressionist painting capturing fleeting effects of light and atmosphere. The scene should feature visible, broken brushstrokes of pure color placed side-by-side (rather than mixed on palette). Use short, quick brush marks suggesting movement and spontaneity of outdoor painting. Emphasize accurate depiction of changing light: morning haze, afternoon sun, twilight glow. Colors should be bright and luminous, avoiding black for shadows (use complementary colors instead). Show dappled light effects, reflections, and atmospheric perspective.

Composition: Capture candid, slice-of-life moments. Use innovative angles and cropping. Focus on ordinary subjects transformed by light: gardens, water scenes, urban landscapes, leisure activities.

Style reference: Monet's water lilies or haystacks series, Renoir's dappled sunlight through trees, Pissarro's urban scenes.

Color palette: Pure, unmixed colors applied in small strokes. Violet shadows, orange sunlight, complementary color pairs vibrating side-by-side.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant serif or flowing script suggesting late 19th century refinement',
        messageStyle: 'Graceful, artistic typography with period-appropriate character',
        textReadability: 'Use colors from the Impressionist palette. Apply subtle drop shadow (2px, 40% opacity) and soft outer glow (2-3px, 25% opacity) in complementary colors to create gentle contrast against the broken color background.'
    };
}

/**
 * Art Deco Style Template
 */
function getArtDecoTemplates() {
    return {
        basePrompt: `Think step-by-step about geometric elegance, streamlined forms, and luxurious 1920s-30s aesthetic before generating this scene.

Create a complete Art Deco composition featuring elegant geometric patterns, symmetrical design, and luxurious materials. The scene should include characteristic Art Deco elements: sunburst motifs, zigzag patterns, stepped forms, stylized floral/fountain motifs, chevron patterns. Use strong geometric shapes: triangles, trapezoids, circles arranged in symmetrical or radiating compositions. Show luxurious materials: gold leaf accents, polished chrome, black lacquer, exotic woods (ebony, mahogany), marble.

Composition: Emphasize vertical lines and streamlined forms. Use symmetry and bold geometric patterning. Include stylized human figures if present - elongated, graceful poses typical of Art Deco illustration (think Erté or Tamara de Lempicka).

Color palette: Rich, contrasting colors - black and gold, silver and navy, cream and teal. Metallic accents essential (gold #FFD700, chrome silver #C0C0C0).

Lighting: Dramatic, theatrical lighting emphasizing geometry and creating sharp-edged shadows.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant geometric Art Deco display font (similar to Broadway, Poiret One, or Metropolis)',
        messageStyle: 'Streamlined, sophisticated typography with geometric precision',
        textReadability: 'Use high-contrast combinations: gold text on black, silver on navy, cream on teal. Apply subtle inner glow (gold or silver, 2px, 30% opacity) for luminous quality and sharp drop shadow (2px, 70% opacity) for definition against geometric backgrounds.'
    };
}

/**
 * Art Nouveau Style Template
 */
function getArtNouveauTemplates() {
    return {
        basePrompt: `Think step-by-step about organic curves, natural motifs, and flowing Art Nouveau lines before generating this scene.

Create a complete Art Nouveau composition featuring sinuous, flowing lines and natural organic forms. The scene should include characteristic Art Nouveau elements: whiplash curves, plant tendrils, flowing hair, stylized flowers (especially lilies, irises, poppies), peacock feathers, dragonflies, butterflies. Use asymmetric composition with dynamic S-curves and arabesque lines. Show influence of Japanese woodblock prints in flat color areas and decorative patterns.

If human figures present: Render in elongated, graceful Art Nouveau style (Alphonse Mucha aesthetic) with flowing hair and robes decorated with floral patterns. Use decorative frames and borders with organic motifs.

Color palette: Muted, sophisticated colors - sage green, dusty rose, ochre, cream, soft purples, accented with gold (#D4AF37). Colors should be flat with strong outlines.

Style execution: Combine naturalistic detail with decorative stylization. Use stained glass effects with lead-line outlines separating color areas.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ornate Art Nouveau display font with organic, flowing letterforms',
        messageStyle: 'Decorative typography with botanical and flowing elements',
        textReadability: 'Use muted, harmonious colors from the Art Nouveau palette. Apply gold or dark outlines (2px) and soft drop shadow (2px, 40% opacity) to create readable text that integrates with the decorative aesthetic.'
    };
}

/**
 * NEW TEMPLATES - Anime/Manga Category (7 templates)
 */

/**
 * Studio Ghibli Style Template
 */
function getStudioGhibliTemplates() {
    return {
        basePrompt: `Think step-by-step about pastoral beauty, whimsical detail, and Miyazaki's naturalistic animation style before generating this scene.

Apply Studio Ghibli visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach (Ghibli signature):
- Simple, appealing facial features with natural proportions
- Expressive eyes (not exaggerated anime style, more realistic)
- Natural body proportions (not stylized)
- Warm, relatable character designs
- Detailed clothing with natural movement

Iconic character style references:
- Totoro (となりのトトロ): Gray/beige furry creature, large round body, pointed ears, wide smile, tiny Totoros (blue, white)
- Catbus (ネコバス): Bus-shaped cat with many legs, glowing eyes, fur-covered
- Chihiro/Sen (千と千尋): Simple brown hair, white/pink work clothes, determined expression
- No-Face (カオナシ): Black shadow figure, white mask, mysterious presence
- Calcifer (ハウルの動く城): Living flame with face, orange/yellow fire, expressive eyes
- Howl: Blonde/black hair, flamboyant fashion, bishounen features
- Nausicaä (風の谷のナウシカ): Blue tunic, auburn hair, glider pilot, Ohmu insects
- Kiki (魔女の宅急便): Black dress, red bow, flying on broomstick, black cat Jiji
- Ponyo (崖の上のポニョ): Red dress, round face, goldfish-girl hybrid
- San/Mononoke (もののけ姫): Wolf-raised girl, white fur cape, red face paint, mask
- Ashitaka: Headband, bow and arrow, cursed arm
- Kodama (木霊): Small white tree spirits, head-rattling

Environment and background style:
- Lush, detailed natural environments
- Rolling green hills with wind-swept grass
- Puffy cumulus clouds with detailed shading
- Ancient trees with character and presence
- Cozy, lived-in interior spaces
- European-Japanese hybrid architecture
- Meticulous attention to everyday objects (food, furniture, tools)

Ghibli signature elements:
- Warm, dappled sunlight filtering through leaves
- Subtle magical realism (magic feels natural)
- Flying scenes with wind and freedom
- Lovingly detailed food (Ghibli food aesthetic)
- Nature spirits and forest creatures
- Steam trains, airships, fantastical machines
- Running/movement with natural weight

Color palette: Gentle, naturalistic colors - warm greens (#7CB342, #689F38), sky blues (#42A5F5, #5C6BC0), soft earth tones, golden sunlight (#FDD835). Rich but not oversaturated.

Mood and atmosphere:
- Sense of wonder and adventure
- Nostalgia and warmth
- Environmental reverence
- Bittersweet emotions
- Peaceful contemplation

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Warm, friendly rounded font with gentle character (similar to Ghibli title fonts)',
        messageStyle: 'Welcoming, nostalgic typography that evokes comfort and wonder',
        textReadability: 'Use natural, warm colors. Apply subtle drop shadow (2px, 40% opacity) and soft outer glow (2-3px, 20% opacity) in warm tones for readable text that feels integrated with the gentle Ghibli aesthetic.'
    };
}

/**
 * Shoujo Manga Style Template
 */
function getShoujoMangaTemplates() {
    return {
        basePrompt: `Think step-by-step about sparkling effects, emotional expression, and romantic shoujo manga aesthetics before generating this scene.

Apply Shoujo Manga visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach (Shoujo signature):
- Large, detailed eyes with multiple highlights and star reflections
- Long eyelashes, delicate facial features
- Flowing hair with elaborate highlights and motion
- Elegant, slender body proportions
- Expressive hands and graceful poses

Iconic manga/anime style references:

Sailor Moon (美少女戦士セーラームーン):
- Usagi: Blonde odango (bun) hairstyle with long tails, sailor fuku, tiara, crescent moon motifs
- Transformation sequences: Ribbons, sparkles, spinning poses
- Magical items: Moon stick, transformation brooch
- Sailor Senshi: Color-coded uniforms, distinct hairstyles

Cardcaptor Sakura (カードキャプターさくら):
- Sakura: Brown short hair, pink battle costumes, star wand
- Elaborate costume designs by Tomoyo
- Magical sealing cards floating
- Soft, dreamy color palette

Fruits Basket (フルーツバスケット):
- Tohru: Brown hair, sweet expression, school uniform
- Zodiac transformations: Animal spirits
- Flower and petal motifs
- Emotional close-ups with sparkle effects

Ouran High School Host Club:
- Rose petals everywhere
- Elegant school uniforms
- Bishonen (beautiful boys) with distinct types
- Comedy sparkle effects

NANA:
- Punk vs elegant fashion contrast
- More mature, stylized character designs
- Urban backgrounds with emotional atmosphere

Classic shoujo elements:
- Sparkles (キラキラ) surrounding characters
- Flowers (roses, cherry blossoms, lilies) as emotional symbols
- Floating petals and bubbles
- Screen tones creating patterns and gradients
- Dramatic wind effects in hair and clothing
- Soft focus backgrounds for emotional moments
- Lens flares and glowing effects

Color palette: Soft pastels mixed with vibrant accents - pink (#FFB6C1, #FF69B4), lavender (#E6E6FA), mint green (#B5EAD7), gold highlights (#FFD700), white sparkles.

Emotional expression techniques:
- Blushing cheeks for embarrassment
- Teary eyes with sparkles
- Dramatic lighting for romantic moments
- Background changes to match emotion

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant, feminine font with decorative qualities',
        messageStyle: 'Romantic, expressive typography that enhances emotional tone',
        textReadability: 'Use soft colors with good contrast. Apply multiple effects: inner glow (white, 1px, 30%), outer glow (complementary color, 3px, 25%), and drop shadow (2px, 50%) to create luminous, readable text matching the sparkling aesthetic.'
    };
}

/**
 * American Comics Style Template
 */
function getAmericanComicsTemplates() {
    return {
        basePrompt: `Think step-by-step about dynamic action, heroic proportions, and classic American comic book aesthetics before generating this scene.

Create a complete American superhero comic-style scene with dramatic action and powerful composition. The scene should feature dynamic characters in heroic poses - exaggerated musculature, flowing capes, dramatic foreshortening. Use comic book techniques: speed lines for motion, impact stars/effects, dramatic perspective (low angle hero shots or extreme foreshortening), thick ink outlines with variable line weights.

Key elements: Bold, clear storytelling; primary color dominance; high contrast inking; halftone dots for shading (Ben-Day dots); panel-like composition feel; onomatopoeia text effects integrated into scene (optional).

Color palette: Bold primary colors - bright red (#DC143C), electric blue (#1E90FF), sunshine yellow (#FFD700), with black shadows and white highlights. Vibrant and saturated.

Style execution: Thick black ink lines, cel-shaded coloring, dramatic shadows, heroic anatomy, dynamic action poses.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, condensed comic book font with strong presence',
        messageStyle: 'Powerful, action-oriented typography typical of superhero comics',
        textReadability: 'Use high-contrast colors (yellow on black, white on blue, etc.). Apply thick black outline (3-4px, 100% opacity) around all text for maximum readability - classic comic book text treatment.'
    };
}

/**
 * Disney Classic Style Template
 */
function getDisneyClassicTemplates() {
    return {
        basePrompt: `Think step-by-step about appealing character design, clear staging, and Disney's golden age animation principles before generating this scene.

Apply Disney Classic Animation style visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach (Disney's 12 Principles):
- Squash and stretch for weight and flexibility
- Anticipation before major actions
- Staging with clear focal points and silhouettes
- Follow-through and overlapping action
- Appeal: characters must be likeable and engaging
- Exaggeration of features for personality

Iconic character style references:
- Mickey Mouse: Circular design (three circles), white gloves, red shorts, yellow shoes, cheerful expression
- Donald Duck: Sailor suit (blue with red bow), orange bill and feet, expressive temper, nephews Huey/Dewey/Louie
- Minnie Mouse: Polka-dot dress/bow, eyelashes, feminine charm
- Goofy: Tall, lanky proportions, green hat, vest, clumsy charm
- Pluto: Dog with exaggerated expressions, no clothes (just collar)
- Snow White: Pale skin, red lips, blue/yellow dress, princess elegance
- Cinderella: Silver/blue ball gown, glass slipper, blonde updo
- Aurora (Sleeping Beauty): Pink or blue gown, golden hair, graceful poses
- Ariel (Little Mermaid): Red hair, green tail, purple seashell top
- Belle (Beauty and the Beast): Yellow ball gown, brown hair, bookish charm
- Simba (Lion King): Golden fur, red mane (adult), expressive animal faces
- Bambi: Large eyes, delicate deer features, forest setting

Background and environment style:
- Multiplane camera depth effect (layered backgrounds)
- Painterly, detailed backgrounds with atmospheric perspective
- Rich forest scenes with dappled light
- Castle silhouettes against colorful skies
- Magical sparkles and fairy dust effects

Animation frame feel:
- Fluid, graceful movement suggested through dynamic poses
- Clear character/background separation (characters more saturated)
- Clean, confident ink lines on characters
- Painterly gouache/watercolor backgrounds
- Warm, magical lighting

Color palette:
- Rich, saturated but harmonious colors
- Deep forest greens, royal blues, warm yellows, rose reds
- Background colors slightly muted compared to characters
- Magical moments: golden sparkles, blue fairy dust
- Disney signature: warm sunset oranges, castle purple/blue

Mood and atmosphere:
- Fairy tale magic and wonder
- Warmth and emotional sincerity
- Clear good vs evil visual distinction
- Happily ever after optimism
- Musical/theatrical staging

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classic, friendly display font with timeless Disney charm (similar to Waltograph)',
        messageStyle: 'Warm, storybook typography that evokes fairy tale magic',
        textReadability: 'Use colors that complement the rich Disney palette. Apply techniques for clarity: drop shadow (3px, 60% opacity), outer glow (3px, 30% opacity) in harmonious colors, ensuring text reads clearly for all ages.'
    };
}

/**
 * Pixar 3D Style Template
 */
function getPixar3DTemplates() {
    return {
        basePrompt: `Think step-by-step about appealing 3D design, subsurface scattering, and Pixar's distinctive rendering style before generating this scene.

Apply Pixar Animation Studios visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach (Pixar signature):
- Simple, readable shapes with exaggerated proportions for personality
- Appeal through clear silhouettes and expressive features
- Realistic textures on stylized forms
- Eyes as windows to emotion (detailed iris, subsurface scattering)

Iconic character style references:
- Woody (Toy Story): Cowboy doll, pull-string, brown hat, yellow plaid shirt, friendly face
- Buzz Lightyear: Space ranger suit (white/green/purple), clear helmet, wings, square jaw
- Jessie: Cowgirl, red braids, white hat, yodeling pose
- Nemo/Marlin (Finding Nemo): Clownfish, orange/white stripes, one small fin (Nemo)
- Dory: Blue tang fish, big eyes, forgetful expression
- Sulley (Monsters Inc): Big blue furry monster, purple spots, horns
- Mike Wazowski: One-eyed green ball monster, thin arms/legs
- Boo: Toddler girl, pigtails, purple shirt, monster costume
- Mr. Incredible/Bob Parr: Superhero suit (red/black), muscular, square jaw
- Elastigirl/Helen: Red supersuit, brown hair, stretchy poses
- WALL-E: Rusty cube robot, binocular eyes, treads, compacting arms
- EVE: Sleek white robot, blue eyes, egg-shaped, hovering
- Remy (Ratatouille): Gray rat, large ears, chef's hat, cooking poses
- Lightning McQueen (Cars): Red race car #95, eyes on windshield, confident expression
- Carl Fredricksen (Up): Square glasses, white hair, grumpy-kind expression
- Russell: Wilderness Explorer uniform, round face, enthusiastic
- Joy/Sadness (Inside Out): Glowing yellow/blue skin, emotion personifications
- Miguel (Coco): Guitar, Day of Dead face paint, purple hoodie

Technical rendering:
- Subsurface scattering on skin and translucent materials
- Realistic lighting with artistic control
- Beautiful shallow depth of field (bokeh)
- Realistic texture detail balanced with stylized forms
- Global illumination with color bleeding
- Ray-tracing quality rendering

Pixar storytelling elements:
- "Believable fantastic" aesthetic
- Warm, motivated lighting (story-driven)
- Meticulous attention to material properties
- Subtle details rewarding close viewing
- Emotional expressiveness through pose and eyes

Color palette: Saturated but naturalistic colors. Warm color temperatures dominating, complemented by cool accents.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Friendly, rounded font with modern appeal (similar to Pixar title fonts)',
        messageStyle: 'Contemporary, accessible typography that feels warm and inviting',
        textReadability: 'Use colors with good contrast against the 3D environment. Apply realistic shadow (3px, 50% opacity) and subtle glow (2px, 20% opacity) to integrate text naturally into the 3D space while maintaining readability.'
    };
}

/**
 * Cartoon Network Style Template
 */
function getCartoonNetworkTemplates() {
    return {
        basePrompt: `Think step-by-step about bold graphics, simple shapes, and energetic cartoon aesthetics before generating this scene.

Apply Cartoon Network visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach:
- Simple, geometric construction (circles, squares, triangles)
- Thick, consistent outline weights (no line variation)
- Flat colors with no gradients
- Exaggerated proportions and expressions
- Strong personality through minimal design

Iconic character style references:

Adventure Time style:
- Finn: White bear hat, blue shirt, simple dot eyes, noodle arms
- Jake: Orange stretchy dog, simple features, shape-shifting
- Princess Bubblegum: Pink skin, long pink hair, candy crown
- Marceline: Gray skin, long black hair, vampire fangs, bass guitar
- BMO: Small teal game console with face, short arms/legs

Powerpuff Girls style:
- Blossom: Red hair with bow, pink dress, large oval eyes, no fingers
- Bubbles: Blonde pigtails, blue dress, big eyes
- Buttercup: Black hair, green dress, angry expression
- Simple shapes: Round heads, no fingers, floating limbs

Steven Universe style:
- Steven: Curly black hair, star shirt, round body, gem belly button
- Garnet: Square afro, visor, red/purple outfit
- Pearl: Pointed nose, ballet dancer build, gem on forehead
- Amethyst: Long purple hair, gem on chest, messy appearance
- Gems: Colorful with distinct gem placements

Regular Show style:
- Mordecai: Tall blue jay, simple features
- Rigby: Short brown raccoon, mischievous expression
- Simple character designs with expressive poses

Dexter's Laboratory style:
- Dexter: Orange hair, glasses, lab coat, short
- Dee Dee: Blonde pigtails, pink tutu, tall
- Retro-futuristic lab environments

Samurai Jack style:
- Jack: Tall, angular, white robe, topknot, serious expression
- Aku: Black shapeshifting demon, flaming eyebrows
- Bold graphic style with dramatic compositions

Key elements:
- Limited color palette (3-5 colors per character)
- Flat shading with maybe one cel-shaded shadow
- Extreme expressions and poses
- Simplified backgrounds that don't compete
- Modern graphic design sensibility

Color palette: Bold, flat colors - hot pink (#FF1493), electric blue (#00BFFF), lime green (#32CD32), sunshine yellow (#FFD700), pure black outlines. High saturation, high contrast.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, geometric sans-serif with playful character',
        messageStyle: 'Energetic, kid-friendly typography with graphic impact',
        textReadability: 'Use high-contrast color combinations from the bold palette. Apply thick black outline (3px, 100% opacity) around text for cartoon-style clarity and impact.'
    };
}

/**
 * Anime Background Art Style Template
 */
function getAnimeBackgroundTemplates() {
    return {
        basePrompt: `Think step-by-step about atmospheric detail, light and shadow, and professional anime background painting before generating this scene.

Create a complete anime-style background artwork with meticulous detail and atmospheric mood. This should be a full environment piece in the style of top anime background artists (like those working on Makoto Shinkai films or Kyoto Animation). The composition should feature realistic environmental detail rendered with anime aesthetic - urban scenes, natural landscapes, interiors with lived-in detail. Use characteristic anime background techniques: detailed textures, realistic lighting with artistic color choices, atmospheric perspective, careful attention to materials (wood, metal, concrete, glass, vegetation).

Key elements: High level of environmental detail; realistic perspective and architecture; artistic color grading (slightly stylized color temperatures); beautiful lighting (golden hour, overcast, dramatic); sense of place and atmosphere; often devoid of characters, focusing purely on environment.

Color palette: Naturalistic but color-graded for mood. Warm golden hour tones, cool blue shadows, subtle color temperature shifts creating depth.

Style execution: Painted/digital painting aesthetic, detailed textures, realistic lighting, subtle color gradients, high resolution detail.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, modern font that doesn\'t compete with detailed background',
        messageStyle: 'Understated, elegant typography that integrates with the environment',
        textReadability: 'Use colors that harmonize with the background color grading. Apply appropriate shadow and glow based on lighting conditions in the scene - text should feel naturally lit by the same light sources. Typically: drop shadow (2-3px, 40-60% opacity) plus subtle glow (2px, 15-25% opacity).'
    };
}
/**
 * NEW TEMPLATES - Design/Graphic Category (6 templates - minimal-modern and cyberpunk exist)
 */

/**
 * Flat Design Style Template
 */
function getFlatDesignTemplates() {
    return {
        basePrompt: `Think step-by-step about minimalist composition, flat color theory, and modern digital design before generating this scene.

Create a complete flat design composition with clean minimalism and contemporary digital aesthetic. The scene should feature simplified geometric shapes, no gradients or shadows, pure flat colors, simple iconographic representations. Use principles of modern UI/UX design: clear hierarchy, generous white space, bold color blocks, simple sans-serif inspired elements. Composition should be clean, organized, grid-based with clear focal points.

Key elements: Absolutely no textures, gradients, or drop shadows; pure flat colors; geometric simplification; modern minimalism; icon-like clarity; strong use of negative space; contemporary color theory.

Color palette: Modern, vibrant flat colors - material design inspired. Bright coral (#FF6B6B), teal (#4ECDC4), sunshine yellow (#FFE66D), pure white (#FFFFFF), charcoal (#2F3640).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, geometric sans-serif (similar to Helvetica Neue, Circular, or Avenir)',
        messageStyle: 'Minimalist, contemporary typography with perfect clarity',
        textReadability: 'Use high-contrast flat colors. Text requires no shadows or effects in true flat design - rely solely on color contrast for readability.'
    };
}

/**
 * Material Design Style Template
 */
function getMaterialDesignTemplates() {
    return {
        basePrompt: `Think step-by-step about depth through shadow, material metaphor, and Google's Material Design principles before generating this scene.

Create a complete Material Design composition following Google's design language. The scene should feature layered surfaces at different elevations (z-depth), subtle shadows indicating depth (elevation), bold color blocks, floating action buttons, cards with consistent elevation. Use material design principles: tactile surfaces, bold graphic design, meaningful motion (implied), reality-based lighting with single light source creating consistent shadows.

Key elements: Elevation through shadow (1dp, 2dp, 4dp, 8dp, 16dp shadows); material surfaces that feel paper-like; bold, saturated colors with white space; ripple effects (implied at touch points); grid-based layouts; responsive elevation changes.

Color palette: Bold, saturated Material Design colors - deep purple (#673AB7), teal (#009688), red (#F44336), with white (#FFFFFF) surfaces and subtle gray shadows.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Roboto or similar geometric sans-serif',
        messageStyle: 'Bold, clear typography following Material Design type scale',
        textReadability: 'Use Material Design color principles with high contrast ratios (4.5:1 minimum). Apply subtle elevation shadow (2px, 30% opacity) to text when on elevated surfaces.'
    };
}

/**
 * Neon Sign Style Template
 */
function getNeonSignTemplates() {
    return {
        basePrompt: `Think step-by-step about glowing neon tubes, reflections on wet surfaces, and nighttime urban atmosphere before generating this scene.

Create a complete neon-lit scene with vibrant glowing elements and moody atmosphere. The composition should feature neon tube lights forming text, shapes, or decorative elements with characteristic neon glow - bright core with blurred outer glow. Set against dark urban night environment - wet pavement reflecting neon colors, brick walls, foggy atmosphere. Show realistic neon effects: slight color aberration, visible tube structure, flickering (implied), colored reflections on surrounding surfaces.

Key elements: Bright neon tubes with multi-layer glow (bright core, mid-glow, outer glow); dark, moody environment; wet reflective surfaces; urban setting (alleys, storefronts, bars); atmospheric fog/haze catching light; color mixing where different neon colors overlap.

Color palette: Vibrant neon colors - hot pink (#FF10F0), electric blue (#00F0FF), acid green (#39FF14), purple (#BF00FF), orange (#FF5F1F) against dark backgrounds (#0A0A0A, #1A1A2E).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, cursive neon-script font or geometric display font suggesting neon tubes',
        messageStyle: 'Glowing, vibrant typography mimicking neon signage',
        textReadability: 'Text should appear as neon tubes: bright color core with multi-layer glow - inner glow (bright color, 2px, 80%), outer glow (same color, 8px, 40%), and large soft glow (15px, 15%) for atmospheric scatter. Add subtle color fringing for realism.'
    };
}

/**
 * Retro Poster Style Template
 */
function getRetroPosterTemplates() {
    return {
        basePrompt: `Think step-by-step about vintage printing techniques, bold typography, and mid-century poster design before generating this scene.

Create a complete vintage poster design with retro printing aesthetic. The composition should feature bold, simplified graphic elements, limited color palette (3-5 colors), halftone textures suggesting screen printing, bold typography integrated into design, simplified iconic imagery. Use mid-century modern design principles: asymmetric balance, dynamic angles, simplified forms, bold color blocks.

Key elements: Vintage printing artifacts (slight misregistration, halftone dots, paper texture); bold geometric or simplified organic shapes; strong silhouettes; integration of text and image; flat colors with halftone shading; retro typography as key design element.

Color palette: Vintage limited palettes - combinations like mustard yellow (#E1AD01), burnt orange (#CC5500), olive green (#708238), cream (#FFF8DC), black (#000000). Slightly desaturated for aged feel.

Style references: 1950s-70s travel posters, propaganda posters, psychedelic concert posters, Swiss modernism.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold vintage display fonts (similar to Futura Bold, Clarendon, or Cooper Black)',
        messageStyle: 'Strong, attention-grabbing retro typography',
        textReadability: 'Use high-contrast vintage color combinations. Apply subtle halftone texture to text and slight color offset (1px) mimicking printing registration for authentic retro feel.'
    };
}

/**
 * Typography Art Style Template
 */
function getTypographyArtTemplates() {
    return {
        basePrompt: `Think step-by-step about letterforms as visual elements, typographic hierarchy, and experimental text layout before generating this scene.

Create a complete composition where typography itself is the primary artistic element. The scene should feature creative text arrangements, varying type sizes and weights creating visual hierarchy, experimental layouts, letterforms manipulated as graphic elements. Text can be arranged in shapes, use extreme scale contrast, overlap in interesting ways, or be deconstructed. Color and typography work together to create visual impact and meaning.

Key elements: Text as primary visual element; creative use of type scale (from micro to massive); varying alignments and orientations; letterform manipulation; negative space as active design element; hierarchy through size, weight, color; readability balanced with artistic expression.

Color palette: Often limited for impact - black and white with one or two accent colors, or bold color blocking. Think Swiss typography or contemporary experimental design.

Style references: Swiss typography, constructivism, contemporary experimental design, kinetic typography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Multiple contrasting fonts used artistically - mix of geometric sans-serif, bold display, and possibly serif for contrast',
        messageStyle: 'Experimental, artistic typography that pushes boundaries while maintaining readability',
        textReadability: 'This style IS about text, so readability is built into the design. Use strong contrast and clear hierarchy. Effects should enhance rather than obscure - use sparingly.'
    };
}

/**
 * Collage Style Template
 */
function getCollageTemplates() {
    return {
        basePrompt: `Think step-by-step about layered composition, mixed media textures, and artistic juxtaposition before generating this scene.

Create a complete artistic collage combining multiple visual elements in layered composition. The scene should feature overlapping elements from different sources/styles: photographs, illustrations, textures, paper scraps, vintage ephemera, paint marks. Show visible edges, layer effects, varied textures (glossy photos, matte paper, rough paint). Use principles of collage art: juxtaposition creating new meaning, layered depth, mixed media aesthetic, intentional roughness and hand-crafted quality.

Key elements: Multiple distinct visual elements; visible edges and layering; texture variety; intentional composition through arrangement; tape, torn edges, or other assembly marks (can be subtle); color and texture creating unity despite disparate elements.

Color palette: Varied - can mix color and black/white, photographs and illustrations. Unity through overall color grading or dominant color theme.

Style references: Hannah Höch, Kurt Schwitters, contemporary digital collage, magazine cut-out aesthetic.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Mixed or ransom-note style typography, or clean modern font contrasting with collage elements',
        messageStyle: 'Text as another collage element - can be cut-out style, stamped, or overlaid',
        textReadability: 'Text should feel like part of the collage - consider cut-out letter style, stamped effect, or clean overlay. Apply drop shadow (2-3px, 50% opacity) and possibly slight rotation or texture for collage integration.'
    };
}

/**
 * Gradient Modern Style Template
 */
function getGradientModernTemplates() {
    return {
        basePrompt: `Think step-by-step about smooth color transitions, contemporary aesthetics, and digital-native gradients before generating this scene.

Create a complete modern composition using contemporary gradient techniques. The scene should feature smooth, vibrant gradient transitions, multiple overlapping gradients creating complex color interactions, mesh gradients or radial gradients, modern minimalist forms enhanced with gradient fills. Use 2020s design aesthetic: bold gradient color combinations, soft organic shapes with gradient fills, glass-morphism effects, gradient overlays creating depth.

Key elements: Smooth multi-color gradients; organic blob shapes; gradient mesh effects; color transitions from vibrant to subtle; modern minimalist composition; often abstract or semi-abstract; digital-native aesthetic.

Color palette: Contemporary vibrant combinations - pink to orange to yellow sunset gradients, blue to purple to pink, green to teal to blue. Often saturated and bold.

Style references: Modern app design, contemporary brand identity, holographic effects, aurora borealis color schemes.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Modern geometric sans-serif (similar to Inter, DM Sans, or Manrope)',
        messageStyle: 'Clean, contemporary typography that complements gradient backgrounds',
        textReadability: 'Use solid colors that contrast with gradients, or apply gradient to text itself. For solid text on gradients: strong drop shadow (3px, 70% opacity) and outer glow (3px, 40% opacity) ensure readability across color transitions.'
    };
}

/**
 * Isometric Style Template
 */
function getIsometricTemplates() {
    return {
        basePrompt: `Think step-by-step about isometric projection, technical illustration, and geometric precision before generating this scene.

Create a complete isometric composition with precise geometric projection. The scene should feature objects, buildings, or environments rendered in isometric view (30-degree angles, no perspective distortion, parallel lines remain parallel). Use isometric grid principles: equal scaling on all axes, 120-degree angles between axes, technical precision. Create detailed isometric scenes: tiny cities, cutaway buildings, mechanical systems, game-like environments.

Key elements: Perfect isometric projection (30° angles); grid-based construction; geometric precision; often detailed and intricate; can be minimalist or highly detailed; flat color blocks or subtle gradients; clean linework; technical illustration quality.

Color palette: Often uses limited, coordinated palettes for clarity. Can be pastel and soft or bold and vibrant. Common: soft pastels for whimsical scenes, or bold colors for technical/game aesthetics.

Style references: Monument Valley game, technical diagrams, modern infographic design, pixel art isometric.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, technical sans-serif font (similar to DIN, Futura, or Roboto)',
        messageStyle: 'Precise, clear typography matching technical aesthetic',
        textReadability: 'Use solid, contrasting colors. For integration: place text on isometric planes (perspective-matched), or float above scene with strong shadow (3px, 60% opacity) for clear depth separation.'
    };
}

/**
 * NEW TEMPLATES - History/Culture Category (6 templates)
 */

/**
 * Ukiyo-e (Japanese Woodblock) Style Template
 */
function getUkiyoeTemplates() {
    return {
        basePrompt: `Think step-by-step about woodblock printing techniques, Japanese aesthetic principles, and Edo period composition before generating this scene.

Create a complete ukiyo-e style composition emulating Japanese woodblock prints (1600s-1800s). The scene should feature flat color areas separated by defining contours, simplified forms with elegant linework, characteristic ukiyo-e subjects (beautiful people, landscapes, kabuki actors, or nature scenes). Use Japanese compositional principles: asymmetric balance, diagonal compositions, bold cropping, decorative patterns, integration of negative space.

Key elements: Flat, unmixed color areas; defining black (or colored) outlines; bokashi gradient technique (subtle color gradation); woodgrain texture suggesting printing process; limited color palette (traditionally 5-10 colors); decorative patterns in textiles; Japanese aesthetic sensibility.

Color palette: Traditional pigments - Prussian blue (#1E40AF), vermillion red (#E53E3E), yellow ochre (#D97706), green (#059669), black ink, cream paper (#FFF8DC).

Style references: Hokusai's "Great Wave," Hiroshige's landscape series, Utamaro's bijin-ga (beautiful women).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Japanese-inspired brush font or elegant serif suggesting East Asian calligraphy',
        messageStyle: 'Minimalist, elegant typography respecting ukiyo-e aesthetic principles',
        textReadability: 'Use colors from the ukiyo-e palette. Black or deep color on light areas, light color on dark areas. Minimal effects to preserve flat graphic quality - only subtle shadow (1px, 25% opacity) if needed.'
    };
}

/**
 * Medieval Europe Style Template
 */
function getMedievalEuropeTemplates() {
    return {
        basePrompt: `Think step-by-step about illuminated manuscripts, Gothic architecture, and medieval artistic conventions before generating this scene.

Create a complete medieval European scene inspired by illuminated manuscripts and Gothic art (1000-1500 CE). The composition should feature rich decorative elements: elaborate borders with intertwining vines and gold leaf accents, flattened perspective (pre-Renaissance), hierarchical scaling (important figures larger), rich jewel-tone colors, Gothic architectural elements, religious or courtly subjects. Use medieval artistic conventions: lack of linear perspective, decorative horror vacui (fear of empty space), symbolic rather than realistic representation.

Key elements: Elaborate decorative borders; gold leaf highlighting; flat spatial construction; rich patterns and textures; Gothic arches and architecture; heraldic symbols; manuscript-like quality; ornate capital letters.

Color palette: Rich jewel tones - ultramarine blue (#1E3A8A), vermillion (#DC2626), emerald green (#059669), purple (#7C3AED), gold leaf (#D97706), crimson (#991B1B).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Gothic blackletter or ornate medieval-inspired display font',
        messageStyle: 'Elaborate, manuscript-inspired typography with decorative flourishes',
        textReadability: 'Use rich, contrasting medieval colors. Apply gold outline (2px) or drop shadow (2px, 60% opacity) in complementary medieval tones. Consider ornate letter forms with decorative elements.'
    };
}

/**
 * Renaissance Style Template
 */
function getRenaissanceTemplates() {
    return {
        basePrompt: `Think step-by-step about linear perspective, chiaroscuro lighting, and Renaissance compositional mastery before generating this scene.

Create a complete Renaissance-style painting (1400-1600 CE) with classical composition and refined technique. The scene should feature accurate linear perspective with vanishing points, realistic human anatomy and proportions, chiaroscuro (dramatic light/shadow modeling), sfumato (subtle blending), atmospheric perspective in backgrounds. Use Renaissance principles: triangular/pyramidal composition, balanced harmony, idealized beauty, classical architecture, religious or mythological subjects.

Key elements: Mastery of perspective; realistic light and shadow (chiaroscuro); soft transitions (sfumato); idealized human forms; classical architecture; rich but harmonious colors; oil painting techniques; sense of depth and volume.

Color palette: Rich, harmonious Renaissance palette - deep reds (#8B0000), ultramarine blue (#1E3A8A), earth tones (ochres, siennas), emerald green (#047857), gold accents, warm skin tones.

Style references: Leonardo da Vinci (sfumato, triangular composition), Raphael (balanced harmony), Michelangelo (dramatic figures, monumental scale).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classical serif font suggesting Renaissance humanism (Trajan, Garamond Old Style)',
        messageStyle: 'Elegant, refined typography with classical proportions',
        textReadability: 'Use warm, classical colors that harmonize with Renaissance palette. Apply sophisticated lighting: drop shadow (3px, 50% opacity) suggesting same light source as scene, plus subtle warm glow (2px, 20% opacity) for integration.'
    };
}

/**
 * Roaring Twenties Style Template
 */
function getRoaringTwentiesTemplates() {
    return {
        basePrompt: `Think step-by-step about Art Deco elegance, Jazz Age energy, and 1920s visual culture before generating this scene.

Create a complete 1920s scene capturing Roaring Twenties glamour and energy. The composition should feature elegant period figures in flapper dresses or sharp suits, Art Deco architectural or decorative elements, geometric patterns, sense of movement and celebration (dancing, parties, jazz clubs). Use 1920s aesthetic: geometric Art Deco styling, elegant sophistication, sense of liberation and modernity, gold accents, high contrast lighting suggesting nightclub or theatre.

Key elements: 1920s fashion and hair styles; Art Deco geometric patterns; champagne, pearls, feathers, or period props; jazz or dance implied; elegant posing; dramatic lighting; sense of glamour and excitement; period-authentic details.

Color palette: Elegant limited palette - black, gold (#D4AF37), cream (#FFF8DC), silver (#C0C0C0), with accents of deep red (#8B0000) or teal (#0F766E).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Art Deco display font with 1920s character (Broadway, Metropolis, Parisian)',
        messageStyle: 'Glamorous, sophisticated typography evoking Jazz Age elegance',
        textReadability: 'Use high-glamour combinations: gold on black, cream on dark teal. Apply Art Deco styling: geometric inner glow (gold, 1px, 40%), sharp drop shadow (2px, 70%), and optional outer glow (3px, 25%) for theatrical luminosity.'
    };
}

/**
 * Retro 80s Style Template
 */
function getRetro80sTemplates() {
    return {
        basePrompt: `Think step-by-step about synthwave aesthetics, Memphis design, and 1980s visual excess before generating this scene.

Create a complete 1980s-inspired scene with characteristic retro-futuristic elements. The composition should feature bold neon colors, geometric patterns (triangles, zigzags, squiggles), synthwave elements (grid floors, chrome text, sunset gradients), Memphis design patterns, or authentic 80s aesthetics (big hair, bold fashion, vintage technology). Mix multiple 80s substyles: Miami Vice pastels, arcade game graphics, MTV graphics, Memphis design, synthwave/vaporwave.

Key elements: Hot pink and cyan color schemes; geometric 80s patterns; chrome/metallic effects; grid perspectives; sunset/sunrise gradients (pink/purple/orange); VHS tracking artifacts or scan lines (subtle); bold angular shapes; retro technology or cars.

Color palette: Vibrant 80s neon - hot pink (#FF006E), electric cyan (#00F5FF), purple (#A020F0), orange (#FF6600), with black backgrounds or sunset gradients.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold 80s display font with chromatic effects or outlines',
        messageStyle: 'Energetic, bold typography with 80s excess and style',
        textReadability: 'Use neon color combinations (cyan and pink particularly). Apply multiple chromatic outlines (2-3 colors, 2px each), strong drop shadow (4px, 70% opacity), and bright outer glow (5px, 50%) for authentic 80s neon text effect.'
    };
}

/**
 * Ancient Egyptian Style Template
 */
function getEgyptianTemplates() {
    return {
        basePrompt: `Think step-by-step about Egyptian hieratic conventions, profile compositions, and ancient Egyptian artistic rules before generating this scene.

Create a complete ancient Egyptian style composition following canonical artistic conventions (3000-300 BCE). The scene should feature figures in characteristic Egyptian composite view: head in profile, eye frontal, shoulders frontal, waist and legs in profile. Use hierarchical scaling (important figures larger), register composition (horizontal bands), decorative hieroglyphic elements, flat colors within strong outlines, symmetry and formal poses.

Key elements: Figures in canonical Egyptian poses; hieroglyphic decorative elements; horizontal register composition; papyrus or stone wall texture; cartouches with royal names; sacred symbols (ankh, Eye of Horus, scarab); geometric borders; flat perspective.

Color palette: Ancient Egyptian pigments - lapis blue (#1E40AF), malachite green (#059669), ochre yellow (#D97706), red ochre (#DC2626), black (#000000), white (#FFFFFF), gold accents (#D4AF37).

Style references: Tomb paintings, papyrus illustrations, temple reliefs.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Hieroglyphic-inspired or geometric font suggesting ancient stone carving',
        messageStyle: 'Formal, monumental typography with ancient gravitas',
        textReadability: 'Use strong contrasts from Egyptian palette. Apply thick outline (2-3px) in contrasting color mimicking carved or painted hieroglyphs. Shadow minimal (1px, 40% opacity) to preserve flat, graphic quality.'
    };
}

/**
 * NEW TEMPLATES - SciFi/Fantasy Category (5 templates - sci-fi and cyberpunk exist)
 */

/**
 * Steampunk Style Template
 */
function getSteampunkTemplates() {
    return {
        basePrompt: `Think step-by-step about Victorian-era technology, brass machinery, and steam-powered aesthetics before generating this scene.

Create a complete steampunk scene blending Victorian elegance with anachronistic technology. The composition should feature brass/copper machinery, visible gears and clockwork, steam vents, Victorian fashion mixed with technological accessories (goggles, mechanical prosthetics), airships or steam-powered vehicles. Use brown/sepia color palette suggesting aged photographs and industrial materials. Include characteristic steampunk elements: exposed machinery, rivets, pressure gauges, pipes, leather and brass details, ornate Victorian decorative elements.

Key elements: Brass and copper materials; visible clockwork and gears; steam effects; Victorian clothing with technological modifications; industrial revolution aesthetic; warm metallic tones; intricate mechanical detail.

Color palette: Brass (#B8860B), copper (#B87333), bronze (#CD7F32), sepia tones, dark leather brown (#654321), steel gray (#708090), cream (#FFF8DC).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Victorian-era inspired font with ornate details or industrial stencil font',
        messageStyle: 'Elegant yet industrial typography balancing Victorian sophistication with mechanical precision',
        textReadability: 'Use brass, copper, or cream colors. Apply metallic effects: inner glow (gold, 1px, 30%), drop shadow (2-3px, 60% opacity), and optional outer glow (bronze, 2px, 20%) for polished metal appearance.'
    };
}

/**
 * Solarpunk Style Template
 */
function getSolarpunkTemplates() {
    return {
        basePrompt: `Think step-by-step about ecological utopia, sustainable technology, and optimistic green futures before generating this scene.

Create a complete solarpunk scene showing harmonious integration of nature and technology. The composition should feature lush vegetation integrated with clean technology - solar panels, wind turbines, green architecture with plants growing on buildings, sustainable transport, community gardens. Use bright, optimistic color palette emphasizing greens and clean energy blues. Show Art Nouveau curves mixed with futuristic tech, glass and living walls, people in colorful practical clothing, sense of community and ecological hope.

Key elements: Dense vegetation integration; visible sustainable technology (solar, wind, clean energy); green architecture; Art Nouveau design influence; community focus; optimistic, bright atmosphere; diversity of people; no dystopian elements.

Color palette: Rich greens (#059669, #10B981), sky blue (#0EA5E9), sunshine yellow (#FDE047), clean white (#FFFFFF), earth tones (#92400E).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, organic modern font suggesting both nature and future technology',
        messageStyle: 'Optimistic, welcoming typography that conveys hope and sustainability',
        textReadability: 'Use bright, natural colors with excellent contrast. Apply gentle drop shadow (2px, 40% opacity) and soft outer glow (2-3px, 20%) in complementary green or yellow for readable, positive aesthetic.'
    };
}

/**
 * Fantasy RPG Style Template
 */
function getFantasyRPGTemplates() {
    return {
        basePrompt: `Think step-by-step about epic fantasy worlds, magical effects, and RPG game art aesthetics before generating this scene.

Create a complete fantasy RPG scene with magical atmosphere and adventure elements. The composition should feature fantasy characters (warriors, mages, rogues), magical effects (glowing runes, spell effects, enchanted items), medieval fantasy architecture, dramatic lighting suggesting adventure and mystery. Use video game concept art aesthetic: detailed character designs, atmospheric environments (dungeons, forests, castles), visible magical energy, fantasy creatures or their suggestions.

Key elements: Fantasy character designs with distinctive silhouettes; magical glowing effects; medieval fantasy architecture and props; dramatic atmospheric lighting; sense of adventure and mystery; detailed textures; epic scale or intimate detail.

Color palette: Rich fantasy colors - deep purples (#7C3AED) for magic, forest greens (#059669), stone grays (#64748B), glowing blues and golds for magic effects, warm torch light.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Fantasy-themed font with medieval or decorative character',
        messageStyle: 'Epic, adventurous typography that enhances fantasy atmosphere',
        textReadability: 'Use high-contrast colors often with magical glow effects. Apply strong drop shadow (3px, 60% opacity), outer glow (3-4px, 40% opacity) in magical colors (blue, purple, gold), creating enchanted text appearance.'
    };
}

/**
 * Space Exploration Style Template
 */
function getSpaceExplorationTemplates() {
    return {
        basePrompt: `Think step-by-step about cosmic vastness, spacecraft design, and the wonder of space exploration before generating this scene.

Create a complete space exploration scene showing the majesty and scale of space travel. The composition should feature spacecraft (realistic or near-future designs), celestial bodies (planets, moons, nebulae, stars), astronauts or space stations, sense of vast scale and isolation. Use scientifically-inspired but cinematically beautiful space aesthetics. Show realistic space lighting: harsh sunlight, deep shadows, star fields, nebula colors, planet atmospheres.

Key elements: Realistic spacecraft designs; accurate space environment (vacuum, lighting); celestial beauty (planets, nebulae, stars); sense of scale and distance; human element (astronauts, stations, ships); both technical precision and cosmic wonder.

Color palette: Deep space blacks (#0A0A0A), star whites, nebula colors (blue #3B82F6, purple #A855F7, red #DC2626), planet earth tones, metallic spacecraft grays and whites.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, futuristic sans-serif font suggesting advanced technology',
        messageStyle: 'Clear, technical typography with sense of exploration and discovery',
        textReadability: 'Use high-contrast colors for space environment - typically white or bright colors on dark space. Apply outer glow (3-4px, 30% opacity) suggesting reflection or illumination, plus drop shadow (2-3px, 70% opacity) for depth.'
    };
}

/**
 * Dystopian Style Template
 */
function getDystopianTemplates() {
    return {
        basePrompt: `Think step-by-step about oppressive atmosphere, industrial decay, and authoritarian aesthetics before generating this scene.

Create a complete dystopian scene with oppressive, bleak atmosphere. The composition should feature industrial or brutalist architecture, surveillance elements, propaganda posters, environmental decay, desaturated colors, harsh lighting, sense of control and oppression. Show characteristic dystopian elements: concrete megastructures, surveillance cameras, barbed wire, uniformity, pollution or environmental damage, lone figures suggesting individuality vs. system.

Key elements: Brutalist or industrial architecture; surveillance and control imagery; desaturated, harsh color palette; environmental decay; sense of oppression; propaganda or authoritarian symbols; isolation or conformity; grim atmosphere.

Color palette: Desaturated palette - concrete gray (#71717A), rust orange (#C2410C), sickly yellow-green (#84CC16), dirty whites (#E5E5E5), deep shadows (#18181B).

Style references: Blade Runner, 1984, THX 1138, dystopian literature adaptations.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Harsh, industrial font or authoritarian stencil lettering',
        messageStyle: 'Stark, oppressive typography suggesting control and uniformity',
        textReadability: 'Use harsh contrasts - stark white on dark, or red on gray. Apply hard-edged drop shadow (3px, 80% opacity) with no glow for harsh, unforgiving appearance matching dystopian aesthetic.'
    };
}

/**
 * Biopunk Style Template
 */
function getBiopunkTemplates() {
    return {
        basePrompt: `Think step-by-step about genetic modification, organic technology, and bio-engineered aesthetics before generating this scene.

Create a complete biopunk scene featuring biotechnology and genetic engineering themes. The composition should feature organic technology integration - bio-engineered organisms, genetic modifications, living technology, laboratory environments mixed with organic growth, bio-luminescent elements. Use visceral organic aesthetics: flesh tones mixed with tech, laboratory clinical whites with organic colors, genetic helix motifs, cellular structures, mutation and transformation themes.

Key elements: Organic technology fusion; bio-luminescence; genetic and cellular imagery; laboratory/clinical environments; living tissue merged with tech; visceral organic textures; scientific equipment; sense of biological transformation.

Color palette: Clinical white (#FFFFFF), flesh tones (#E8B4A0), bio-luminescent greens (#10B981) and blues (#06B6D4), blood red (#DC2626), laboratory steel (#6B7280).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean clinical font or slightly organic font suggesting biological forms',
        messageStyle: 'Scientific yet organic typography balancing clinical precision with biological character',
        textReadability: 'Use clinical colors with strong contrast. Apply subtle bio-luminescent glow (green or blue, 3px, 30% opacity) plus drop shadow (2px, 50% opacity) creating organic yet technical appearance.'
    };
}

/**
 * NEW TEMPLATES - Photo/Realistic Category (6 templates)
 */

/**
 * Photorealistic Style Template
 */
function getPhotorealisticTemplates() {
    return {
        basePrompt: `Think step-by-step about camera physics, realistic lighting, and photographic composition before generating this scene.

Create a photorealistic image indistinguishable from a professional photograph. The composition should feature realistic lighting with accurate light behavior (inverse square falloff, color temperature, shadows, reflections), proper depth of field with bokeh, realistic materials and textures, accurate physics, photographic color science. Use professional photography techniques: rule of thirds, leading lines, proper exposure, realistic color grading. Show attention to detail: fabric weave, skin pores, material properties, subtle imperfections that create realism.

Key elements: Physically accurate lighting; realistic materials and textures; photographic depth of field; natural color palette; subtle imperfections; environmental details; proper scale and proportions; camera-like rendering.

Color palette: Natural, realistic colors with accurate color temperature. No oversaturation - maintain photographic color fidelity.

Quality specifications: Maximum realism, photographic accuracy, professional photography quality.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, modern sans-serif font (Helvetica, Arial, or similar)',
        messageStyle: 'Professional, understated typography that doesn\'t compete with photorealism',
        textReadability: 'Use simple, clear colors with excellent contrast. Apply realistic shadow based on scene lighting (2-3px, 40-60% opacity) and minimal glow (1-2px, 15% opacity) to integrate naturally with photographic environment.'
    };
}

/**
 * Cinematic Style Template
 */
function getCinematicTemplates() {
    return {
        basePrompt: `Think step-by-step about film lighting, widescreen composition, and Hollywood cinematography before generating this scene.

Create a cinematic image with Hollywood film production quality. The composition should feature dramatic three-point lighting (key, fill, rim), color grading typical of blockbuster films, shallow depth of field, anamorphic lens characteristics (subtle lens flares, bokeh), widescreen letterbox composition. Use cinematic techniques: motivated lighting, atmospheric haze, dramatic shadows, color temperature contrast (warm/cool), film grain texture, professional color grading (teal and orange, or other cinematic LUTs).

Key elements: Dramatic lighting setup; shallow depth of field; cinematic color grading; lens effects (flares, bokeh); atmospheric elements; professional composition; film-like texture; epic or intimate mood.

Color palette: Cinematic color grading - teal and orange combinations, or other professional LUTs. Warm practical lights, cool environmental lighting.

Aspect ratio: 16:9 landscape orientation (2.35:1 letterbox optional).

Quality specifications: Feature film quality, professional cinematography, theatrical release standards.`,
        fontStyle: 'Elegant serif or bold sans-serif suggesting film titles',
        messageStyle: 'Dramatic, impactful typography matching cinematic mood',
        textReadability: 'Use colors from cinematic palette with strong contrast. Apply cinematic lighting effects: drop shadow (3px, 50-70% opacity) matching scene lighting, subtle glow (2-3px, 20% opacity) for theatrical luminosity.'
    };
}

/**
 * Documentary Style Template
 */
function getDocumentaryTemplates() {
    return {
        basePrompt: `Think step-by-step about authentic moments, natural lighting, and documentary photography principles before generating this scene.

Create a documentary-style image capturing authentic, candid moments. The composition should feature natural, available lighting (window light, environmental), authentic settings and subjects, sense of real moment captured, slight imperfections adding authenticity. Use documentary photography techniques: environmental context, natural poses, storytelling through detail, honest representation, photojournalistic approach. Avoid obvious staging - capture genuine moments and authentic environments.

Key elements: Natural, available lighting; authentic environments; candid moments; storytelling details; honest representation; environmental context; slight imperfections; documentary color treatment (natural or slightly muted).

Color palette: Natural, realistic colors. Often slightly desaturated or with subtle toning suggesting film stock or documentary aesthetic.

Style references: Photojournalism, National Geographic, documentary films, street photography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Simple, honest font suggesting documentary titles (Franklin Gothic, News Gothic)',
        messageStyle: 'Clear, straightforward typography with journalistic integrity',
        textReadability: 'Use simple, clear colors that don\'t distract from documentary content. Apply subtle drop shadow (2px, 40% opacity) and minimal effects maintaining authentic, non-intrusive appearance.'
    };
}

/**
 * Fashion Magazine Style Template
 */
function getFashionMagazineTemplates() {
    return {
        basePrompt: `Think step-by-step about high fashion photography, studio lighting, and editorial aesthetics before generating this scene.

Create a high-fashion editorial image with professional fashion photography quality. The composition should feature impeccable styling (fashion, hair, makeup), professional studio or location lighting, clean backgrounds or editorial-appropriate environments, strong poses, attention to fashion details (fabric texture, garment construction, accessories). Use editorial techniques: dramatic poses, clear presentation of fashion items, beauty lighting for subjects, modern color grading, sophisticated composition.

Key elements: High-fashion styling; professional lighting (beauty, fashion, or editorial setups); strong poses and angles; clean, sophisticated aesthetic; fabric and detail emphasis; modern editorial feel; aspirational quality.

Color palette: Often clean and modern - can be colorful and bold or minimalist monochrome. Depends on editorial concept but always sophisticated.

Style references: Vogue, Harper's Bazaar, editorial fashion photography, runway photography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant high-fashion font (Didot, Bodoni, or modern geometric sans-serif)',
        messageStyle: 'Sophisticated, stylish typography matching fashion editorial aesthetic',
        textReadability: 'Use elegant color combinations - often black on white, white on dark, or sophisticated color blocking. Apply refined effects: crisp drop shadow (2px, 50% opacity) and optional subtle glow (1-2px, 15% opacity) for polished appearance.'
    };
}

/**
 * Street Photography Style Template
 */
function getStreetPhotographyTemplates() {
    return {
        basePrompt: `Think step-by-step about urban candid moments, available light, and decisive moment photography before generating this scene.

Create a street photography style image capturing urban life and candid moments. The composition should feature authentic street scenes, natural lighting (often harsh daylight or urban night lighting), candid subjects, strong geometry from urban architecture, layers of visual information, decisive moment capture. Use street photography aesthetics: environmental context, human moments, urban geometry, authentic situations, slight grittiness, photographic grain, high contrast or documentary tonality.

Key elements: Urban environment; candid authentic moments; natural available lighting; layered composition; street life details; architectural geometry; slight imperfections adding authenticity; documentary color treatment or high-contrast B&W aesthetic.

Color palette: Often natural, somewhat contrasty. Can be vibrant urban colors or muted documentary tones. Black and white also highly appropriate.

Style references: Henri Cartier-Bresson, Vivian Maier, contemporary street photography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, authentic font suggesting urban signage or photojournalism',
        messageStyle: 'Honest, direct typography with urban character',
        textReadability: 'Use high-contrast combinations suitable for street aesthetic. Apply gritty drop shadow (2-3px, 60% opacity) and minimal glow to maintain authentic, unpolished street photography feel.'
    };
}

/**
 * Architectural Photography Style Template
 */
function getArchitecturalPhotoTemplates() {
    return {
        basePrompt: `Think step-by-step about perspective correction, architectural lighting, and professional building photography before generating this scene.

Create a professional architectural photography image showcasing building design. The composition should feature correct perspective (vertical lines truly vertical, using perspective correction/tilt-shift technique), even lighting revealing architectural details, strong geometric composition, emphasis on materials and textures, clean professional aesthetic. Use architectural photography techniques: golden hour lighting, blue hour ambience, careful attention to lines and symmetry, inclusion of human scale elements, environmental context.

Key elements: Correct architectural perspective; even, flattering lighting; geometric precision; material and texture detail; clean, professional composition; contextual elements; attention to design details; modern architectural photography aesthetic.

Color palette: Often clean and accurate to materials - concrete grays, glass reflections, natural material tones. Can include warm golden hour or cool blue hour lighting.

Style references: Architectural Digest, professional architecture portfolios, contemporary architectural photography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, geometric sans-serif suggesting architectural precision (Futura, Avenir, Gotham)',
        messageStyle: 'Precise, professional typography matching architectural design principles',
        textReadability: 'Use clean colors that complement architecture. Apply precise drop shadow (2px, 40% opacity) and minimal effects maintaining professional, architectural aesthetic.'
    };
}

/**
 * NEW TEMPLATES - Business Category (4 templates - business-professional exists)
 */

/**
 * Startup Modern Style Template
 */
function getStartupModernTemplates() {
    return {
        basePrompt: `Think step-by-step about innovative energy, collaborative spaces, and modern startup culture before generating this scene.

Create a complete modern startup scene with innovative, energetic atmosphere. The composition should feature contemporary open office spaces, collaborative work environments, modern technology (laptops, tablets, whiteboards with sketches), casual yet professional dress, diverse team members, sense of creativity and innovation. Use bright, optimistic color palette, natural lighting, modern minimalist design, startup cultural elements (bean bags, standing desks, informal meeting spaces).

Key elements: Modern office design; collaborative atmosphere; technology integration; diverse, casual-professional team; bright, energetic lighting; whiteboard sketches or sticky notes; plants and natural elements; sense of innovation and growth.

Color palette: Bright, modern palette - tech blues (#3B82F6, #0EA5E9), startup orange (#F97316), clean whites (#FFFFFF), natural wood tones, vibrant accent colors.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Modern, friendly sans-serif (Inter, Circular, or Avenir)',
        messageStyle: 'Energetic, accessible typography reflecting startup culture',
        textReadability: 'Use bright, modern colors with excellent contrast. Apply subtle drop shadow (2px, 40% opacity) and soft outer glow (2px, 20%) for clean, contemporary readability.'
    };
}

/**
 * Tech Company Style Template
 */
function getTechCompanyTemplates() {
    return {
        basePrompt: `Think step-by-step about Silicon Valley aesthetics, innovation spaces, and enterprise tech culture before generating this scene.

Create a complete tech company scene with professional innovation atmosphere. The composition should feature sleek modern offices, high-tech displays and equipment, glass and steel architecture, professional but creative dress, diverse tech professionals, sophisticated lighting. Show established tech company elements: clean design, advanced technology, professional collaboration spaces, innovation labs, digital displays with data visualization.

Key elements: Sleek modern architecture; advanced technology displays; professional team collaboration; sophisticated lighting; glass surfaces and reflections; digital interfaces; sense of established innovation; enterprise quality.

Color palette: Corporate tech colors - deep blues (#1E3A8A, #1E40AF), silver/chrome (#94A3B8), clean white (#FFFFFF), accent colors (green #10B981 or purple #7C3AED).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Professional tech font (SF Pro, Roboto, or Helvetica Neue)',
        messageStyle: 'Clear, professional typography with technological precision',
        textReadability: 'Use corporate colors with high contrast. Apply refined effects: drop shadow (2px, 50% opacity), subtle glow (2px, 20%) creating professional, polished appearance.'
    };
}

/**
 * Finance/Consulting Style Template
 */
function getFinanceConsultingTemplates() {
    return {
        basePrompt: `Think step-by-step about corporate authority, financial sophistication, and executive environments before generating this scene.

Create a complete finance/consulting scene with executive professional atmosphere. The composition should feature sophisticated office environments (boardrooms, executive offices, financial districts), professionals in formal business attire, premium materials (marble, dark wood, leather), cityscape views through windows, financial charts or data displays, sense of authority and expertise.

Key elements: Executive office spaces; formal business attire; premium materials and finishes; city skyline views; financial data visualization; sophisticated lighting; sense of authority and expertise; corporate professionalism.

Color palette: Executive palette - navy (#1E3A8A), charcoal (#374151), burgundy (#991B1B), gold accents (#D97706), clean white (#FFFFFF), neutral grays.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classic, authoritative serif or geometric sans-serif (Garamond, Futura)',
        messageStyle: 'Sophisticated, executive typography conveying authority and expertise',
        textReadability: 'Use traditional corporate combinations - navy on white, gold on dark. Apply elegant effects: crisp drop shadow (2px, 60% opacity), subtle inner glow (gold, 1px, 25%) for premium, executive quality.'
    };
}

/**
 * Educational Style Template
 */
function getEducationalTemplates() {
    return {
        basePrompt: `Think step-by-step about learning environments, accessible education, and inspiring knowledge sharing before generating this scene.

Create a complete educational scene with welcoming, inspiring learning atmosphere. The composition should feature modern learning environments (classrooms, libraries, study spaces), diverse students and educators, educational materials (books, digital displays, learning tools), natural light, collaborative learning setups, sense of discovery and growth. Show contemporary education: technology integration, diverse learning styles, accessible design, inspiring environments.

Key elements: Modern learning spaces; diverse students/educators; natural bright lighting; educational materials and technology; collaborative arrangements; inspiring atmosphere; accessibility considerations; sense of growth and discovery.

Color palette: Warm, welcoming educational colors - friendly blues (#3B82F6), warm orange (#F97316), growth green (#10B981), sunshine yellow (#FDE047), clean white (#FFFFFF).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Friendly, accessible font (Open Sans, Lato, or Poppins)',
        messageStyle: 'Clear, welcoming typography that emphasizes accessibility and learning',
        textReadability: 'Use bright, friendly colors with strong contrast for accessibility. Apply clear effects: drop shadow (2px, 50% opacity), soft glow (2px, 25%) ensuring readability for all learners.'
    };
}

/**
 * NEW TEMPLATES - Nature Category (5 templates - nature-organic exists)
 */

/**
 * Botanical Style Template
 */
function getBotanicalTemplates() {
    return {
        basePrompt: `Think step-by-step about scientific illustration, plant anatomy, and natural history aesthetics before generating this scene.

Create a complete botanical illustration with scientific detail and artistic beauty. The composition should feature detailed plant specimens - flowers, leaves, stems, roots - rendered with botanical accuracy. Use classic botanical illustration techniques: clear presentation on clean background (cream or white), precise detail of plant structures, delicate watercolor or engraving aesthetic, sometimes with cross-sections showing anatomy. Include Latin names, scale reference, or other scientific notation elements.

Key elements: Detailed botanical accuracy; clean presentation; precise rendering of plant structures; scientific yet artistic quality; often on light backgrounds; delicate coloring; attention to botanical detail; natural history aesthetic.

Color palette: Natural plant colors with scientific accuracy - greens (#059669, #10B981), flower colors (varied but naturalistic), cream or white backgrounds (#FFF8DC, #FFFFFF), delicate earth tones.

Style references: Historical botanical illustrations, herbarium specimens, natural history museum prints.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant scientific font suggesting natural history (Garamond, Baskerville)',
        messageStyle: 'Refined, scientific typography with botanical precision',
        textReadability: 'Use natural colors that complement botanical subjects. Apply subtle effects: delicate drop shadow (1-2px, 30% opacity) and minimal glow preserving scientific illustration aesthetic.'
    };
}

/**
 * Marine Life Style Template
 */
function getMarineLifeTemplates() {
    return {
        basePrompt: `Think step-by-step about underwater environments, marine ecosystems, and oceanic beauty before generating this scene.

Create a complete marine life scene with underwater atmosphere and ocean wonder. The composition should feature diverse marine life (fish, coral, sea creatures), underwater lighting effects (god rays, caustics, particle scatter), blue-green water tones, sense of depth and buoyancy. Show underwater photography or illustration aesthetic: dynamic marine life, coral reef colors, play of light through water, floating particles, movement and flow.

Key elements: Diverse marine life; underwater lighting (rays, caustics); coral and sea plants; water particle effects; depth and layers; blue-green color dominance; sense of movement and buoyancy; underwater atmosphere.

Color palette: Ocean blues (#0EA5E9, #06B6D4), deep sea navy (#1E40AF), turquoise (#14B8A6), coral colors (orange #F97316, pink #EC4899), aqua greens (#10B981).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Flowing, aquatic-inspired font with organic character',
        messageStyle: 'Fluid typography suggesting water and ocean movement',
        textReadability: 'Use ocean colors with luminous effects. Apply underwater lighting: drop shadow (2-3px, 40% opacity in deeper blue), outer glow (3px, 30% opacity) in aqua or white suggesting underwater scatter and god rays.'
    };
}

/**
 * Mountain Landscape Style Template
 */
function getMountainLandscapeTemplates() {
    return {
        basePrompt: `Think step-by-step about alpine majesty, mountain atmosphere, and landscape photography before generating this scene.

Create a complete mountain landscape with dramatic alpine scenery. The composition should feature majestic mountain peaks, dramatic lighting (golden hour, blue hour, or storm light), atmospheric perspective creating depth, alpine elements (snow, rock faces, forests, meadows), sense of scale and grandeur. Use landscape photography aesthetic: wide vistas, layered mountains creating depth, dramatic sky, powerful natural lighting, pristine wilderness.

Key elements: Majestic mountain peaks; dramatic natural lighting; atmospheric depth; alpine vegetation; pristine wilderness; sense of scale; weather elements (clouds, mist); powerful landscape composition.

Color palette: Mountain palette - stone grays (#64748B, #94A3B8), snow whites (#F8FAFC), alpine blue sky (#3B82F6), forest greens (#059669), golden hour warmth (#F59E0B).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Strong, grounded font suggesting mountain solidity (Montserrat, Raleway)',
        messageStyle: 'Bold, majestic typography reflecting mountain grandeur',
        textReadability: 'Use colors from mountain palette with strong contrast. Apply effects matching natural lighting: drop shadow (2-3px, 50% opacity), outer glow (2px, 20% opacity) in sky tones or golden light.'
    };
}

/**
 * Tropical Rainforest Style Template
 */
function getTropicalRainforestTemplates() {
    return {
        basePrompt: `Think step-by-step about jungle density, tropical light, and rainforest biodiversity before generating this scene.

Create a complete tropical rainforest scene with lush, dense jungle atmosphere. The composition should feature abundant vegetation (broad leaves, vines, tropical flowers), filtered light through canopy creating dramatic rays, moisture and humidity atmosphere, vibrant biodiversity, layered jungle depth. Show rainforest characteristics: dense layering, vivid green tones, dramatic light and shadow, tropical flowers, mist or water elements, sense of life and abundance.

Key elements: Dense layered vegetation; dramatic light filtering through canopy; moisture atmosphere; vibrant tropical colors; depth through layers; abundant life; tropical flowers; lianas and vines.

Color palette: Rich jungle greens (#059669, #10B981, #047857), deep shadows (#064E3B), tropical flower colors (red #DC2626, orange #F97316, pink #EC4899), golden light rays (#FDE047).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Organic, lush font with tropical character',
        messageStyle: 'Vibrant, abundant typography reflecting jungle energy',
        textReadability: 'Use tropical colors with strong contrast against dense vegetation. Apply effects: drop shadow (2-3px, 60% opacity in deep green), outer glow (3px, 25% opacity) in golden or bright colors cutting through jungle density.'
    };
}

/**
 * Aurora (Northern/Southern Lights) Style Template
 */
function getAuroraTemplates() {
    return {
        basePrompt: `Think step-by-step about aurora borealis/australis, celestial light phenomena, and night sky beauty before generating this scene.

Create a complete aurora scene with magical dancing lights in night sky. The composition should feature spectacular aurora curtains and waves in green, pink, purple flowing across night sky, star fields visible, landscape silhouette below (mountains, trees, arctic scenery), sense of motion and ethereal beauty. Show aurora characteristics: flowing ribbon-like structures, color gradations, subtle motion blur, reflection in water if present, star-filled sky, dark landscape providing contrast.

Key elements: Aurora ribbons and curtains; flowing ethereal movement; multiple aurora colors; star-filled sky; dark landscape silhouette; possible reflection in water; sense of wonder and magic.

Color palette: Aurora greens (#10B981, #6EE7B7), purple (#A855F7), pink (#EC4899), deep night sky (#0F172A), star whites, landscape silhouettes in dark blue-black.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ethereal, luminous font suggesting celestial phenomena',
        messageStyle: 'Magical, flowing typography reflecting aurora movement',
        textReadability: 'Use luminous colors matching aurora palette. Apply multiple glow effects: inner glow (bright color, 2px, 50%), outer glow (aurora color, 5px, 40%), soft shadow (2px, 40%) creating ethereal, glowing appearance.'
    };
}

/**
 * NEW TEMPLATES - Mood Category (3 templates)
 */

/**
 * Film Noir Style Template
 */
function getFilmNoirTemplates() {
    return {
        basePrompt: `Think step-by-step about high-contrast lighting, venetian blind shadows, and 1940s noir aesthetics before generating this scene.

Create a complete film noir scene with dramatic black and white contrast. The composition should feature high-contrast lighting (harsh key light, deep shadows), venetian blind shadow patterns, 1940s urban settings, noir character types (detectives, femme fatales), cigarette smoke, rain-wet streets, sense of mystery and moral ambiguity. Use noir cinematography: dramatic low-key lighting, Dutch angles, silhouettes, pools of light in darkness, urban night scenes.

Key elements: High-contrast black and white; dramatic lighting and shadows; venetian blind patterns; 1940s period details; urban night settings; cigarette smoke; rain effects; noir character archetypes; sense of mystery.

Color palette: Primarily black and white with high contrast. If color: desaturated with blue tones (#1E293B), slight amber (#78350F) for period feel.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classic noir font (Futura Bold, or detective novel style typography)',
        messageStyle: 'Hard-boiled, dramatic typography evoking crime fiction',
        textReadability: 'Use stark black and white contrast or low-saturation noir tones. Apply hard-edged drop shadow (3px, 90% opacity) and no glow for harsh, unforgiving noir aesthetic.'
    };
}

/**
 * Gothic Style Template
 */
function getGothicTemplates() {
    return {
        basePrompt: `Think step-by-step about Gothic atmosphere, Victorian darkness, and romantic macabre aesthetics before generating this scene.

Create a complete Gothic scene with dark romantic atmosphere. The composition should feature Gothic architecture (pointed arches, gargoyles, stained glass), Victorian-era elements, candlelight or moonlight, deep shadows, romantic darkness. Include characteristic Gothic elements: ravens, roses, crosses, wrought iron, velvet textures, pale skin tones, dramatic contrast, sense of beautiful darkness and romantic melancholy.

Key elements: Gothic architecture; Victorian fashion; candlelight/moonlight; deep shadows; romantic macabre elements; rich textures (velvet, lace, stone); pale skin contrasts; sense of beautiful darkness.

Color palette: Deep Gothic palette - black (#000000), deep crimson (#7F1D1D), purple (#581C87), midnight blue (#1E1B4B), silver moonlight (#94A3B8), pale skin tones.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Gothic blackletter or ornate Victorian font',
        messageStyle: 'Dramatic, romantic typography with Gothic flourishes',
        textReadability: 'Use dramatic Gothic colors - silver on black, crimson accents. Apply effects: drop shadow (3px, 70% opacity), subtle inner glow (crimson or silver, 1px, 30%), possible ornamental elements creating romantic darkness.'
    };
}

/**
 * Pastel Dream Style Template
 */
function getPastelDreamTemplates() {
    return {
        basePrompt: `Think step-by-step about soft dreamy atmosphere, gentle pastels, and whimsical fairy-tale aesthetics before generating this scene.

Create a complete pastel dream scene with soft, ethereal atmosphere. The composition should feature gentle pastel colors throughout, soft focus and glow effects, dreamy lighting (soft golden or diffused), whimsical or fairy-tale elements, clouds or floating elements, sense of softness and gentleness. Use ethereal aesthetic: overexposed highlights (blown out in dreamy way), soft gradients, minimal harsh edges, romantic and innocent feel.

Key elements: Soft pastel colors dominating; dreamy soft focus; glowing highlights; whimsical elements; clouds or floating objects; gentle gradients; minimal contrast; romantic, innocent atmosphere.

Color palette: Soft pastels - baby pink (#FFC0CB), lavender (#E6E6FA), mint (#B5EAD7), peach (#FFDAB9), powder blue (#B0E0E6), cream (#FFF8DC).

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Soft, rounded font with gentle character (Quicksand, Comfortaa)',
        messageStyle: 'Delicate, dreamy typography enhancing whimsical atmosphere',
        textReadability: 'Use soft pastel colors with gentle contrast. Apply multiple soft effects: inner glow (white, 2px, 40%), outer glow (complementary pastel, 4px, 35%), very soft shadow (2px, 25%) creating dreamy, glowing appearance.'
    };
}

/**
 * NEW TEMPLATES - Entertainment Category (4 templates)
 */

/**
 * Circus/Carnival Style Template
 */
function getCircusCarnivalTemplates() {
    return {
        basePrompt: `Think step-by-step about vintage carnival, circus spectacle, and nostalgic entertainment aesthetics before generating this scene.

Create a complete circus or carnival scene with vibrant, spectacular atmosphere. The composition should feature circus elements (big top tents, performers, acrobats, strongmen), carnival attractions (ferris wheels, game booths, cotton candy), vintage entertainment aesthetic, bold stripes and patterns, dramatic spotlighting, sense of wonder and spectacle. Use vintage circus design: red and white stripes, gold accents, theatrical lighting, decorative typography, festive atmosphere.

Key elements: Circus tent stripes; carnival attractions; performers in costume; theatrical lighting (spotlights); vintage entertainment design; bold patterns; festive decorations; sense of wonder and spectacle.

Color palette: Classic circus colors - bright red (#DC2626), white (#FFFFFF), gold (#D4AF37), royal blue (#1E40AF), carnival multi-colors.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Vintage circus poster font with theatrical character',
        messageStyle: 'Bold, spectacular typography evoking carnival excitement',
        textReadability: 'Use bold circus colors - red, white, gold combinations. Apply theatrical effects: thick outline (3px, gold or black), drop shadow (3px, 70% opacity), possible star accents for show-stopping circus typography.'
    };
}

/**
 * Music Festival Style Template
 */
function getMusicFestivalTemplates() {
    return {
        basePrompt: `Think step-by-step about concert energy, festival atmosphere, and live music excitement before generating this scene.

Create a complete music festival scene with energetic, vibrant atmosphere. The composition should feature outdoor concert setting, large crowds with raised hands, dynamic stage lighting (spotlights, colored lights, lasers), musical equipment, sense of movement and energy, festival elements (flags, camping, food vendors). Show concert lighting: dramatic backlighting, colored gels, lens flares, atmospheric haze catching lights, silhouettes against bright stage.

Key elements: Concert crowd energy; dramatic stage lighting; silhouettes and raised hands; musical equipment; festival atmosphere; colored lights and lasers; atmospheric haze; sense of unity and celebration.

Color palette: Vibrant concert lighting - hot pink (#EC4899), electric blue (#06B6D4), purple (#A855F7), orange (#F97316), with dark crowd silhouettes.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold festival font with rock/electronic music energy',
        messageStyle: 'Energetic, vibrant typography reflecting music intensity',
        textReadability: 'Use vibrant concert colors with high contrast. Apply multiple glows: inner glow (bright color, 2px, 60%), outer glow (complementary color, 5px, 50%), creating electric concert lighting effect on text.'
    };
}

/**
 * Sports Dynamic Style Template
 */
function getSportsDynamicTemplates() {
    return {
        basePrompt: `Think step-by-step about athletic motion, competitive energy, and sports photography techniques before generating this scene.

Create a complete dynamic sports scene with powerful athletic action. The composition should feature athletes in motion, frozen at peak action moments, dynamic angles suggesting speed and power, sports environments (stadiums, courts, fields), motion blur on backgrounds while subject sharp, sense of competition and determination. Use sports photography techniques: fast shutter capturing peak action, motion blur for speed, dramatic angles, environmental context.

Key elements: Athletes in peak action; dynamic motion and angles; sharp subject with motion blur background; competitive intensity; sports environments; sense of speed and power; determination in expression/pose.

Color palette: Bold sports colors - team colors, grass green (#10B981), court blue (#3B82F6), track red (#DC2626), stadium lights, high contrast for drama.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, dynamic font suggesting athletic power (Impact, Champion Gothic)',
        messageStyle: 'Powerful, energetic typography matching athletic intensity',
        textReadability: 'Use bold, high-contrast colors. Apply strong effects: thick outline (3-4px, team colors), bold drop shadow (3px, 80% opacity), creating impactful sports graphic typography.'
    };
}

/**
 * Food Photography Style Template
 */
function getFoodPhotographyTemplates() {
    return {
        basePrompt: `Think step-by-step about appetizing presentation, food styling, and culinary photography techniques before generating this scene.

Create a complete professional food photography image with appetizing presentation. The composition should feature beautifully styled food with attention to colors, textures, and arrangement, professional lighting revealing food textures (glistening surfaces, steam, garnishes), shallow depth of field emphasizing the dish, complementary props and backgrounds, sense of freshness and deliciousness. Use food photography techniques: natural or studio lighting showing food at its best, macro details, garnish styling, contextual elements.

Key elements: Professional food styling; appetizing lighting showing textures; shallow depth of field; complementary props (utensils, linens, ingredients); fresh garnishes; sense of deliciousness; attention to color and texture.

Color palette: Appetizing natural food colors - rich browns (baked goods), vibrant greens (fresh herbs), tomato reds, golden crusts, creamy whites, complementary backgrounds.

Style references: Food magazines, restaurant photography, cookbook imagery, Instagram food styling.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant culinary font (Playfair Display, Cormorant, or clean modern sans-serif)',
        messageStyle: 'Appetizing, sophisticated typography matching culinary quality',
        textReadability: 'Use colors complementing food palette. Apply subtle, appetizing effects: soft drop shadow (2px, 40% opacity), gentle outer glow (2px, 20%) in warm tones creating appetizing, non-distracting text.'
    };
}

/**
 * Ghost in the Shell Style Template
 */
function getGhostInShellTemplates() {
    return {
        basePrompt: `Think step-by-step about cyberpunk aesthetics, mechanical precision, and near-future Tokyo before generating this scene.

Create a complete Ghost in the Shell style scene featuring cyberpunk near-future aesthetics. The composition should showcase hyper-detailed mechanical elements (cyborg bodies, optical camouflage, prosthetic limbs), neon-lit urban environments with Japanese signage, rain-slicked streets reflecting neon lights, digital interfaces and holographic displays, architectural density reminiscent of Hong Kong/Tokyo, philosophical atmosphere suggesting the boundary between human and machine. Use Mamoru Oshii's visual language: contemplative static shots, architectural detail, water reflections, muted color palette with neon accents.

Key elements: Precise mechanical/cyborg details; near-future Tokyo cityscape; neon and holographic interfaces; rain and water reflections; architectural complexity; philosophical mood; fusion of organic and mechanical.

Color palette: Muted blues and greens, cyan holographic displays, warm amber street lights, deep shadows, occasional vibrant neon (magenta, cyan, green) against desaturated backgrounds.

Style references: Ghost in the Shell (1995), Stand Alone Complex, Blade Runner influence, cyberpunk realism.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Futuristic monospace or technical font (Eurostile, Bank Gothic)',
        messageStyle: 'Clean, technical typography with digital/holographic feel',
        textReadability: 'Use cyan or white text with subtle glow (2px, 40% opacity cyan/blue) creating holographic display effect. Apply thin outer stroke (1px, dark blue) for separation from background.'
    };
}

/**
 * AKIRA / Otomo Katsuhiro Style Template
 */
function getAkiraTemplates() {
    return {
        basePrompt: `Think step-by-step about extreme perspective, mechanical detail, and urban dystopia before generating this scene.

Create a complete AKIRA/Otomo Katsuhiro style scene with overwhelming perspective and architectural precision. The composition should feature extreme low or high angle perspectives creating dramatic spatial distortion, hyper-detailed urban environments (Neo-Tokyo, industrial facilities), precise mechanical drawings of motorcycles, vehicles, and machinery, dynamic speed lines and motion effects, dystopian atmosphere with post-apocalyptic elements, hand-drawn detail in every element (pipes, cables, debris, signage). Use Otomo's signature techniques: fish-eye lens perspectives, technical precision in mechanical objects, layered urban density, explosive energy effects.

Key elements: Extreme perspective and foreshortening; hyper-detailed machinery and vehicles; dense urban environments; dynamic motion and speed lines; technical precision; dystopian atmosphere; explosive visual energy.

Color palette: Bold primary colors (Kaneda's red jacket/bike, bright yellow, electric blue), industrial grays and metallics, explosion oranges and reds, neon signs against dark urban nights.

Style references: AKIRA manga and film, Otomo's mechanical illustrations, Neo-Tokyo cityscapes, detailed technical drawings.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, technical font with mechanical feel (Impact, Machine, OCR-A)',
        messageStyle: 'Dynamic, bold typography matching AKIRA\'s explosive energy',
        textReadability: 'Use bold colors (red, yellow, white) with strong black outline (3-4px). Apply motion blur effects or speed lines integrated with text. Create dynamic, comic-style text treatment with impact.'
    };
}

/**
 * Gekiga (Dramatic Comics) Style Template
 */
function getGekigaTemplates() {
    return {
        basePrompt: `Think step-by-step about noir lighting, realistic anatomy, and dramatic social realism before generating this scene.

Create a complete gekiga (dramatic manga) style scene with realistic, hard-boiled aesthetics. The composition should feature realistic human anatomy and facial expressions, high-contrast chiaroscuro lighting creating dramatic shadows, gritty urban or working-class settings, psychological depth and tension in character poses, detailed cross-hatching and screentone textures, mature themes and serious atmosphere, cinematic composition borrowing from film noir. Use gekiga techniques: realistic proportions (not cute/deformed), heavy ink blacks, detailed background textures, dramatic panel composition, serious tone.

Key elements: Realistic anatomy and expressions; dramatic high-contrast lighting; cross-hatching and screentones; gritty urban environments; psychological intensity; film noir cinematography; mature storytelling aesthetic.

Color palette: Noir blacks and whites, deep shadows, limited color palette if any (desaturated browns, grays, muted reds), dramatic lighting contrast, occasional spot color for emphasis.

Style references: Yoshihiro Tatsumi, Kazuo Kamimura, Sanpei Shirato, noir cinema, social realism.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Hard-boiled serif or bold sans-serif (Trade Gothic Bold, Franklin Gothic)',
        messageStyle: 'Serious, weighty typography matching gekiga\'s mature tone',
        textReadability: 'Use high-contrast black or white text. Apply strong shadows (2-3px, 70% opacity) creating noir depth. Keep effects minimal and serious - no playful colors or excessive glow.'
    };
}

/**
 * Evangelion Style Template
 * エヴァンゲリオンの視覚的特徴を強調
 */
function getEvangelionTemplates() {
    return {
        basePrompt: `Think step-by-step about Hideaki Anno's distinctive visual style from Neon Genesis Evangelion before generating.

CRITICAL VISUAL STYLE - EVANGELION AESTHETIC:
1. ICONIC FRAME COMPOSITION:
   - Black letterbox bars (cinematic 2.35:1 feel within 16:9)
   - Japanese text overlays appearing as location/time stamps (白明朝体 on black bars)
   - Split-screen compositions showing multiple perspectives
   - Long static shots with minimal movement
   - Extreme close-ups of eyes, hands, or mechanical parts

2. COLOR SIGNATURE (MANDATORY):
   - Deep purple (#4B0082, #6B3FA0) - EVA-01's iconic color
   - Vivid orange-red (#FF4500, #FF6347) - sunsets, LCL, apocalypse
   - High contrast black and white sections
   - Sterile teal/cyan (#008B8B) for NERV facilities
   - Blood red (#8B0000) for dramatic moments
   - Avoid bright, cheerful colors entirely

3. RELIGIOUS/SYMBOLIC IMAGERY:
   - Crosses and crucifixion motifs in backgrounds
   - Kabbalistic Tree of Life patterns
   - Angel wings, halos rendered geometrically
   - Concentric circles (Angel cores, AT Fields)
   - Giant humanoid silhouettes against red sky

4. TECHNICAL OVERLAY ELEMENTS:
   - Hexagonal patterns (AT Field visualization)
   - Sine wave displays and oscilloscope graphics
   - Japanese warning text: "警告", "緊急", "発令"
   - Countdown timers and status displays
   - Target reticles and tracking graphics

5. ARCHITECTURAL STYLE:
   - Brutalist concrete structures (NERV HQ)
   - Impossibly long escalators and corridors
   - Geometric ceiling grids
   - Underground geofront cityscapes
   - Tokyo-3 retractable buildings

6. ATMOSPHERE:
   - Psychological tension and isolation
   - Characters small against vast spaces
   - Sense of impending apocalypse
   - Melancholic, introspective mood

Create the scene as if it's a frame from Evangelion - include at least ONE of: black letterbox bars with Japanese text, hexagonal AT Field patterns, cross/religious symbolism, purple-orange color dominance, or technical overlay graphics.

Aspect ratio: 16:9 landscape orientation with optional letterbox effect.`,
        fontStyle: 'Matisse EB or bold Gothic Japanese font for titles; technical monospace (like OCR-A) for overlays',
        messageStyle: 'White text on black bar (letterbox style) OR red warning text with hexagonal frame',
        textReadability: 'Primary: White Matisse-style Japanese font on black letterbox bars at top/bottom. Secondary: Technical readout style with thin orange/cyan outlines. Can use red (#FF0000) for warning/emphasis text with slight glow.'
    };
}

/**
 * Tezuka Osamu Style Template
 */
function getTezukaTemplates() {
    return {
        basePrompt: `Think step-by-step about Tezuka Osamu's pioneering manga style, Disney-influenced design, theatrical staging, and humanistic storytelling before generating this scene.

Apply Tezuka Osamu (God of Manga / 漫画の神様) visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character design approach (Tezuka's signature):
- Large, expressive oval eyes with prominent star-shaped highlights (Disney/Fleischer influence)
- Round, soft character faces with simple but emotive features
- Simple body shapes that convey personality instantly
- Child characters with oversized heads (cute proportion)
- Adult characters with more realistic proportions but soft lines
- "Star System": recurring character archetypes across works

Iconic character style references:
- Astro Boy (鉄腕アトム): Streamlined robot boy, spike hair, big eyes, boots with rockets, red boots, heroic poses
- Kimba/Leo (ジャングル大帝レオ): White lion with expressive human-like eyes, noble stance, African savanna setting
- Princess Sapphire (リボンの騎士): Elegant shoujo design, romantic staging, dual-gender elegance, European fairy tale setting
- Black Jack (ブラック・ジャック): Two-tone black/white hair, scarred face, black cape, dramatic medical scenes, high contrast
- Phoenix (火の鳥): Cosmic scale, mythical bird with rainbow tail feathers, philosophical grandeur, rebirth imagery
- Unico (ユニコ): Ultimate kawaii design, baby unicorn, magical innocence, soft pastel world
- Hosuke/Sharaku (三つ目がとおる): Mysterious third eye on forehead, supernatural elements, bandage covering third eye
- Hyakkimaru (どろろ): Dark samurai aesthetic, prosthetic body parts, Sengoku period setting
- Dr. Ochanomizu (お茶の水博士): Large nose, bald head, friendly scientist archetype
- Pinoko (ピノコ): Childlike assistant, pigtails, red ribbon, energetic poses
- Rock (ロック冒険記): Adventurous boy, determined expression, action poses

Line work and rendering:
- Clean, confident brush-like strokes with thick-to-thin variation
- Speed lines (効果線/スピード線) for motion and emotion
- Screentone patterns for shading (dots, lines, gradients)
- Bold black fills for dramatic contrast
- Panel-breaking action for dynamic moments
- Clear, readable linework prioritizing storytelling

Cinematic techniques (Tezuka's innovation):
- Extreme close-ups on eyes for emotional impact
- Bird's eye and worm's eye dramatic angles
- Montage sequences showing time passage
- Split-screen effects for parallel action
- Theatrical staging like stage plays
- Dramatic spotlighting with stark shadows

Emotional expression (manga vocabulary):
- Sweat drops (汗) for nervousness
- Spiral eyes for dizziness/shock
- Tear streams (涙川の字) for crying
- Anger veins (怒りマーク) on forehead
- Sparkle backgrounds (キラキラ) for admiration
- Dark aura/shadows for despair
- Heart eyes for love

Color palette:
- Simple, clear primary colors (red, blue, yellow) for heroes
- Black and white manga base with selective color
- Warm earth tones for nostalgic scenes
- Vibrant accent colors for emphasis
- Astro Boy signature: red boots, black hair, blue sky

Mood variations:
- Comedic: Exaggerated expressions, SD (super-deformed) moments, slapstick
- Dramatic: High contrast shadows, serious realistic rendering
- Romantic: Soft backgrounds, flower motifs (shoujo style), sparkles
- Action: Dynamic angles, speed lines, impact effects
- Philosophical: Cosmic imagery, symbolic compositions, Phoenix-style grandeur
- Medical drama: Clean hospital settings, surgical precision (Black Jack style)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Friendly, rounded font suggesting classic manga (rounded Gothic, Maru Gothic)',
        messageStyle: 'Warm, accessible typography matching Tezuka\'s universal humanistic appeal',
        textReadability: 'Use clear, bold text in primary colors or black/white. Apply manga-style effects: rounded outlines (2px), soft shadows (2px, 50% opacity), creating approachable, educational feel.'
    };
}

/**
 * Toriyama Akira Style Template
 */
function getToriyamaTemplates() {
    return {
        basePrompt: `Apply Toriyama Akira style visual treatment to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Character and object design approach:
- Rounded, organic forms with soft curves and friendly proportions
- Bean-like, bulbous shapes for characters and objects
- Clear, readable silhouettes
- Playful yet precise attention to detail

Mechanical design style:
- Intricate mechanical details with whimsical sensibility
- Visible gears, bolts, and mechanical components
- Rounded, friendly mecha/vehicle aesthetics (not harsh or angular)
- Colorful mechanical details and accents

Line work and rendering:
- Clean, confident black ink lines
- Minimal shading, maximum clarity
- Bold outlines defining all forms
- High contrast for visual pop

Dynamic action rendering:
- Explosive energy effects (ki blasts, power auras)
- Speed lines (whoosh lines) radiating from action
- Impact effects with radiating lines
- Motion blur on fast-moving elements
- Panel-to-panel motion flow feeling
- Sense of kinetic energy and movement

Color treatment:
- Vibrant, highly saturated colors throughout
- Visual clarity through bold color choices
- Bright energy effects (blue, yellow, purple, gold)
- Colorful mechanical and environmental details
- Clear skies with dramatic backgrounds when appropriate
- Example colors: orange, Super Saiyan gold, bright blue, purple

Composition and atmosphere:
- Dynamic action poses and movement
- Whimsical yet detailed world-building
- Sense of adventure and excitement
- Clear visual storytelling
- Friendly, accessible aesthetic

Quality level: Professional manga illustration quality matching Dragon Ball, Dr. Slump, Dragon Quest character designs, and Chrono Trigger artwork - precise mechanical design with playful energy.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Dynamic, rounded font with energy (Manga Temple, Comic Neue Bold)',
        messageStyle: 'Energetic, action-packed typography with motion',
        textReadability: 'Use bold, vibrant colors (yellow, orange, white) with thick black outlines (3-4px). Apply motion effects: speed lines, energy glow (3px, 60% opacity), creating action manga text with explosive impact.'
    };
}

/**
 * Ancient Greece Style Template
 */
function getAncientGreeceTemplates() {
    return {
        basePrompt: `Apply Ancient Greek art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Greek vase painting techniques:
- Black-figure or red-figure pottery style (silhouettes with linear details)
- Profile views of figures and faces (classical Greek convention)
- Decorative border patterns (Greek key/meander, palmettes, waves)
- Flat, two-dimensional representation with clear contours
- Linear detailing for clothing folds, musculature, anatomy

Architectural and sculptural elements:
- Doric, Ionic, or Corinthian columns as framing elements
- Marble texture and appearance
- Idealized human proportions and classical beauty standards
- Draped clothing (chiton, himation) with elegant folds
- Laurel wreaths, olive branches as decorative motifs

Color palette:
Terracotta orange (#D2691E), black (#000000), cream/white (#F5E6D3), gold accents (#FFD700), deep red (#8B0000).

Composition approach:
- Symmetrical, balanced layouts
- Frieze-like horizontal arrangements
- Harmonious proportions following Golden Ratio
- Clear narrative storytelling through sequential imagery

Quality level: Museum-quality ancient Greek vase painting or fresco style.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classical serif with timeless elegance (Trajan Pro, Cinzel)',
        messageStyle: 'Dignified, classical typography suggesting ancient wisdom',
        textReadability: 'Use cream (#F5E6D3) or gold (#FFD700) text on dark backgrounds, or black on light backgrounds. Apply subtle drop shadow (2px, 50% opacity) for depth while maintaining classical elegance.'
    };
}

/**
 * Ancient Rome Style Template
 */
function getAncientRomeTemplates() {
    return {
        basePrompt: `Apply Ancient Roman art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Mosaic technique:
- Tesserae (small tile pieces) creating detailed images
- Geometric borders and decorative patterns
- Slightly irregular tile edges creating authentic mosaic texture
- Grout lines between tiles
- Rich, varied color tiles

Fresco painting style:
- Matte, aged fresco surface texture
- Pompeian red (#8B0000), ochre, and earth tones
- Architectural illusions (trompe-l'oeil)
- Natural pigment colors with slight aging/fading

Roman architectural elements:
- Arches, aqueducts, columns
- Laurel wreaths, SPQR symbols
- Imperial purple accents
- Marble and stone textures

Compositional approach:
- Grand, monumental scale
- Symmetrical and balanced
- Narrative scenes with multiple figures
- Realistic rather than idealized (Roman realism)

Color palette:
Pompeian red (#8B0000), ochre (#CC7722), cream marble (#F0E68C), gold (#FFD700), deep green (#2F4F2F).

Quality level: Archaeological fresco or mosaic quality from Pompeii/Herculaneum.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Roman imperial serif (Trajan Pro, Cinzel Bold)',
        messageStyle: 'Monumental, authoritative typography',
        textReadability: 'Use cream or gold text with strong drop shadow (3px, 60% opacity). Apply texture overlay suggesting stone-carved lettering for authentic Roman inscriptions.'
    };
}

/**
 * Mayan/Aztec Style Template
 */
function getMayanAztecTemplates() {
    return {
        basePrompt: `Apply Mayan and Aztec art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Mesoamerican visual conventions:
- Bold, angular geometric shapes and patterns
- Profile views with frontal torso (characteristic Maya perspective)
- Hieroglyphic symbols and glyphs integrated into composition
- Stepped pyramid architectural elements
- Feathered serpent (Quetzalcoatl) motifs
- Calendar stone circular patterns

Line work and detailing:
- Strong black outlines defining all forms
- Intricate geometric border patterns
- Symbolic representations rather than realistic
- Flat color blocks without shading or gradients
- Stone carving appearance with relief depth

Decorative elements:
- Jade, turquoise, and gold ornaments
- Elaborate headdresses with quetzal feathers
- Jaguar and eagle warrior imagery
- Sun, moon, and astronomical symbols
- Obsidian and volcanic stone textures

Color palette:
Turquoise (#40E0D0), jade green (#00A86B), gold (#FFD700), deep red (#8B0000), black (#000000), ochre (#CC7722).

Composition:
- Symmetrical, mandala-like arrangements
- Layered, hierarchical compositions
- Dense symbolic imagery filling space
- Architectural framing with stepped forms

Quality level: Codex manuscript or stone carving quality with authentic Mesoamerican symbolism.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Angular, geometric font suggesting glyphs',
        messageStyle: 'Bold, symbolic typography with geometric precision',
        textReadability: 'Use turquoise or gold text on dark stone backgrounds. Apply thick black outlines (3-4px) and integrate geometric patterns around text. Consider glyph-like decorative elements.'
    };
}

/**
 * Mesopotamian Style Template
 */
function getMesopotamiaTemplates() {
    return {
        basePrompt: `Apply Mesopotamian (Sumerian, Babylonian, Assyrian) art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Mesopotamian visual conventions:
- Profile heads with frontal eyes and torsos (composite view)
- Stylized beards with ornate curls and patterns
- Large, almond-shaped eyes suggesting divine awareness
- Cuneiform script as decorative and textual element
- Hierarchical scale (important figures larger)

Relief carving aesthetic:
- Shallow relief with clear outlines
- Layered depth planes
- Stone or clay tablet texture
- Ziggurat architectural elements in backgrounds
- Winged bulls (lamassu), lions, griffins

Pattern and ornament:
- Rosettes and palmettes
- Geometric borders
- Intricate textile and jewelry patterns
- Cylinder seal impression aesthetics

Color palette (based on glazed bricks and artifacts):
Lapis lazuli blue (#1E3A8A), gold (#D4AF37), terracotta (#E07041), ivory (#FFFFF0), turquoise (#30D5C8).

Compositional approach:
- Formal, ceremonial arrangements
- Procession and narrative sequences
- Symmetrical flanking compositions
- Register/band layouts (horizontal tiers)

Quality level: Authentic relief carving or glazed brick quality from ancient Babylon or Assyria.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ancient cuneiform-inspired or formal serif',
        messageStyle: 'Formal, monumental typography suggesting ancient inscriptions',
        textReadability: 'Use ivory or gold text on lapis blue backgrounds. Apply stone-carved texture effect and formal drop shadows (3px, 70% opacity) for depth and authenticity.'
    };
}

/**
 * Chinese Palace Style Template
 */
function getChinesePalaceTemplates() {
    return {
        basePrompt: `Apply Chinese imperial palace art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Imperial Chinese aesthetic:
- Dragons (five-clawed imperial dragons) and phoenixes
- Cloud and wave patterns
- Forbidden City architectural elements
- Red and gold dominant color scheme
- Intricate lattice work and decorative brackets

Painting techniques:
- Gongbi (meticulous brush work) with fine details
- Gold leaf and gilt accents
- Ink wash landscape elements
- Vermillion seals and calligraphy
- Silk painting texture

Decorative elements:
- Lotus flowers, peonies, chrysanthemums
- Auspicious symbols (bats, coins, shou characters)
- Carved jade and cloisonné enamel aesthetics
- Tassels, silk embroidery patterns
- Double happiness and longevity symbols

Color palette:
Imperial yellow (#FFEB3B), vermillion red (#E53935), gold (#D4AF37), jade green (#00A86B), black (#000000).

Compositional approach:
- Symmetrical, balanced layouts
- Layered depth with architectural framing
- Hierarchical arrangements
- Auspicious number arrangements (8, 9)
- Yin-yang balance

Quality level: Imperial court painting or palace decoration quality with maximum ornate detail and auspicious symbolism.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant Chinese-inspired or refined serif',
        messageStyle: 'Regal, sophisticated typography suggesting imperial elegance',
        textReadability: 'Use gold or imperial yellow text on red or black backgrounds. Apply ornate borders with dragon or cloud motifs. Include subtle glow (2px, 40% opacity gold) for luminous imperial effect.'
    };
}

/**
 * Indian Decoration Style Template
 */
function getIndianDecorTemplates() {
    return {
        basePrompt: `Apply traditional Indian decorative art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Mandala and geometric patterns:
- Intricate circular mandala compositions
- Sacred geometry and lotus petal patterns
- Rangoli-inspired colorful geometric designs
- Paisley (boteh) motifs
- Henna (mehndi) decorative patterns

Architectural and cultural elements:
- Mughal architecture (Taj Mahal domes, arches, jali screens)
- Rajasthani miniature painting style
- Sanskrit or Devanagari calligraphy
- Peacock feathers and elephant motifs
- Lotus flowers and sacred symbols

Color and ornamentation:
- Vibrant, saturated jewel tones
- Gold and metallic accents throughout
- Intricate border decorations
- Textile patterns (silk, brocade)
- Gemstone colors (ruby, emerald, sapphire)

Painting techniques:
- Miniature painting precision and detail
- Flat color areas with fine outlining
- Decorative rather than naturalistic
- Continuous pattern fills
- Maximum ornamentation philosophy

Color palette:
Saffron (#FF9933), jewel tones (emerald #50C878, ruby #E0115F, sapphire #0F52BA), gold (#FFD700), ivory (#FFFFF0).

Quality level: Traditional Indian miniature painting or temple decoration with intricate mandala patterns and maximum ornamental detail.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ornate, decorative font with Indian aesthetic',
        messageStyle: 'Richly decorated typography with mandala-inspired embellishment',
        textReadability: 'Use saffron or gold text on deep jewel-tone backgrounds. Surround text with intricate henna-style borders. Apply multiple glows (inner and outer) creating luminous, ornate effect (3px, 50% opacity).'
    };
}

/**
 * Heian Period Style Template
 */
function getHeianPeriodTemplates() {
    return {
        basePrompt: `Apply Japanese Heian period (794-1185 CE) art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Yamato-e painting style:
- Hikime-kagibana (line for eyes, hook for nose) - simplified facial features
- Fukinuki-yatai (blown-away roof) - architectural cutaway views showing interiors
- Flat, decorative color areas without shading
- Gold leaf (kinpaku) clouds obscuring transitions
- Delicate, flowing lines for clothing and hair

Court aesthetics:
- Twelve-layered ceremonial kimono (junihitoe) with color combinations
- Flowing black hair (often floor-length for court ladies)
- Ox-drawn carriages, folding screens, tatami interiors
- Cherry blossoms, maple leaves, wisteria
- Moon viewing and seasonal appreciation themes

Color and pattern:
- Muted, sophisticated color harmonies
- Textile patterns on clothing (geometric, floral)
- Seasonal color symbolism
- Soft gradations in natural elements
- Gold and silver leaf accents

Compositional approach:
- Narrative scroll (emaki) sequential scenes
- Diagonal compositions creating depth
- Architectural interiors showing court life
- Poetry and calligraphy integration
- Refined, courtly elegance throughout

Color palette:
Plum purple (#8B668B), spring green (#A8E4A0), cherry blossom pink (#FFB7C5), gold leaf (#FFD700), black ink (#000000), wisteria lavender (#C9A0DC).

Quality level: Authentic emaki scroll painting quality depicting elegant Heian court life with refined aesthetics and seasonal sensitivity.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant Japanese calligraphic style or refined serif',
        messageStyle: 'Graceful, poetic typography suggesting courtly refinement',
        textReadability: 'Use gold or black text on soft background colors. Apply calligraphic brush texture effect. Include subtle shadows (2px, 30% opacity) maintaining delicate, refined aesthetic.'
    };
}

/**
 * Tibetan Buddhist Style Template
 */
function getTibetanBuddhistTemplates() {
    return {
        basePrompt: `Apply Tibetan Buddhist thangka art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Thangka painting conventions:
- Central deity or mandala with hierarchical composition
- Symmetrical, balanced layouts
- Intricate mandalas with geometric precision
- Cloud motifs and landscape elements in Chinese style
- Vajra (thunderbolt), lotus, and Buddhist symbols
- Halos and auras around enlightened figures

Color and detail:
- Extremely vibrant, saturated primary colors
- Gold paint or gold leaf highlighting
- Mineral pigment colors (lapis, malachite, cinnabar)
- Intricate textile patterns on robes
- Flame patterns and jewel ornaments
- Fine line work with maximum detail density

Symbolic elements:
- Dharmachakra (wheel of dharma)
- Endless knots, lotus thrones
- Eight auspicious symbols
- Dakinis and guardian deities
- Mountains representing Mount Meru
- Offering objects and ritual items

Compositional structure:
- Central figure surrounded by smaller figures/scenes
- Mandala palace architecture
- Layered registers (heaven, earth, underworld)
- Dense patterning filling all space
- Jewel-like color intensity

Color palette:
Deep blue (#0047AB), brilliant red (#DC143C), saffron (#F4C430), white (#FFFFFF), gold (#FFD700), emerald green (#50C878).

Quality level: Traditional hand-painted thangka quality with maximum detail, vibrant mineral pigments, and authentic Buddhist iconography.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Tibetan script-inspired or mystical serif',
        messageStyle: 'Sacred, meditative typography with spiritual presence',
        textReadability: 'Use gold or white text on deep blue or red backgrounds. Surround with endless knot or lotus patterns. Apply luminous glow effects (3px, 50% opacity) suggesting sacred light.'
    };
}

/**
 * Persian Decoration Style Template
 */
function getPersianDecorTemplates() {
    return {
        basePrompt: `Apply Persian decorative art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Arabesque and geometric patterns:
- Intricate interlacing geometric tessellations
- Flowing vegetal arabesques
- Star and polygon patterns (girih)
- Persian carpet design motifs
- Infinite pattern repetition suggesting divine unity
- Islamic geometric complexity

Persian miniature painting elements:
- Flat perspective with elevated viewpoints
- Fine, precise brushwork with minimal shading
- Garden (paradise) settings with cypress trees
- Architectural frames with tilework patterns
- Calligraphy panels with Persian poetry
- Gold and ultramarine blue accents

Textile and craft aesthetics:
- Persian rug border designs
- Intricate medallion patterns
- Floral vines (islimi) flowing organically
- Peacocks, nightingales, roses as motifs
- Tilework patterns (blue and turquoise ceramics)

Color palette:
Persian blue (#1C39BB), turquoise (#40E0D0), ruby red (#9B111E), gold (#FFD700), saffron (#F4C430), ivory (#FFFFF0).

Compositional approach:
- Symmetrical with central medallion
- Horror vacui (fear of empty space) - dense decoration
- Layered patterns creating visual richness
- Frame within frame nested structures
- Mathematical precision in geometry

Quality level: Master Persian miniature painting or Shah's carpet quality with intricate arabesque patterns and jewel-like colors.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant calligraphic or geometric font suggesting Persian script',
        messageStyle: 'Ornate, poetic typography with flowing arabesques',
        textReadability: 'Use gold or ivory text on Persian blue backgrounds. Surround with intricate arabesque borders. Apply ornate geometric patterns as text background. Include subtle glow (2px, 40% opacity) for luminosity.'
    };
}

/**
 * Ottoman Empire Style Template
 */
function getOttomanTemplates() {
    return {
        basePrompt: `Apply Ottoman Empire decorative art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Ottoman Islamic geometric art:
- Complex geometric patterns (girih tiles)
- Star polygons and interlacing designs
- Iznik tile aesthetics (blue, turquoise, red on white)
- Arabesque vegetal patterns
- Calligraphic compositions as central design element
- Rumi (stylized cloud) motifs

Architectural and decorative elements:
- Dome and minaret silhouettes
- Muqarnas (stalactite vaulting) patterns
- Ottoman tugra (imperial monogram) designs
- Tulip motifs (symbol of Ottoman dynasty)
- Carnation and hyacinth floral patterns
- Marble and mother-of-pearl inlay aesthetics

Tilework and ceramics:
- Iznik pottery colors and patterns
- Blue and white ceramics
- Underglaze technique appearance
- Layered border decorations
- Central medallion compositions

Color palette:
Iznik blue (#1A47A3), turquoise (#30D5C8), coral red (#FA5F55), emerald (#50C878), white (#FFFFFF), gold (#FFD700).

Calligraphy integration:
- Thuluth or Naskh script elegance
- Calligraphy as primary visual element
- Gilt illumination
- Flowing letterforms creating patterns

Quality level: Imperial Ottoman manuscript illumination or Iznik tilework quality with precise geometric patterns and masterful calligraphy.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ottoman calligraphic style or geometric Islamic font',
        messageStyle: 'Regal, flowing typography with Islamic geometric harmony',
        textReadability: 'Use white or gold text on Iznik blue backgrounds. Integrate geometric star patterns around text. Apply calligraphic flourishes as decorative elements. Include tulip or carnation motifs.'
    };
}

/**
 * Medieval Islamic Style Template
 */
function getIslamicMedievalTemplates() {
    return {
        basePrompt: `Apply medieval Islamic art style (Alhambra, Moorish architecture) to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Alhambra decorative system:
- Intricate muqarnas (honeycomb vaulting)
- Geometric tessellation patterns
- Calligraphic bands with Kufic or Naskh script
- Horseshoe arches and scalloped details
- Zellige (mosaic tilework) patterns
- Stucco relief with fine arabesque carving

Pattern and ornament:
- Eight-fold star patterns
- Continuous geometric grids
- Interlacing designs creating negative space patterns
- Vegetal scrollwork (ataurique)
- Water and reflection motifs
- Courtyard and garden architectural framing

Color and material aesthetics:
- Glazed ceramic tile colors
- Gold and stucco contrast
- Reflecting pool water effects
- Marble column textures
- Aged plaster and tile authenticity

Color palette:
Moorish blue (#4A90E2), turquoise (#1ABC9C), terracotta (#E07041), gold (#D4AF37), ivory stucco (#FAF0E6), deep green (#0B6623).

Compositional approach:
- Symmetrical with central axis
- Layered decorative registers
- Dense surface ornamentation
- Mathematical precision in patterns
- Light and shadow play from carved relief

Quality level: Alhambra palace decoration quality with intricate geometric patterns, masterful tilework, and sophisticated mathematical design.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Kufic calligraphic or geometric Islamic font',
        messageStyle: 'Architectural, geometric typography with Islamic harmony',
        textReadability: 'Use gold or ivory text on blue or turquoise backgrounds. Frame with eight-fold star patterns. Apply geometric borders. Include muqarnas-style decorative elements above and below text.'
    };
}

/**
 * Celtic Decoration Style Template
 */
function getCelticTemplates() {
    return {
        basePrompt: `Apply Celtic decorative art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Celtic knotwork and patterns:
- Interlacing patterns (Celtic knots) with over-under weaving
- Trinity knots (triquetra), endless knots symbolizing eternity
- Zoomorphic interlace (animal forms in knotwork)
- Spiral patterns (single, double, triple spirals)
- Key patterns and maze designs
- No beginning or end to interlaced lines

Insular manuscript illumination:
- Book of Kells style elaborate initial letters
- Cross-carpet pages with dense ornamentation
- Anthropomorphic and zoomorphic decorations
- Chi-Rho and Celtic cross designs
- Meticulous detail in small spaces
- Vibrant colors with gold or yellow highlights

Celtic symbolism:
- Triskelion and triskele spirals
- Tree of life representations
- Claddagh and love knot motifs
- Dragons, birds, and serpents in stylized forms
- Shamrocks and oak leaves
- Warrior and druidic symbols

Color palette:
Celtic green (#006633), deep blue (#003366), gold (#D4AF37), crimson (#990000), black (#000000), cream parchment (#F4E4C1).

Line work characteristics:
- Continuous, flowing lines without breaks
- Precise, even line weights
- Symmetrical patterns
- Dense ornamentation horror vacui (filling all space)
- Organic curves flowing into geometric patterns

Quality level: Illuminated manuscript quality like Book of Kells or Lindisfarne Gospels with intricate interlacing and masterful Celtic knotwork.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Celtic uncial or insular half-uncial script style',
        messageStyle: 'Flowing, organic typography with Celtic interlace decoration',
        textReadability: 'Use gold or white text on deep green or blue backgrounds. Surround with Celtic knotwork borders. Integrate trinity knots or spiral patterns. Apply illuminated manuscript style drop caps for first letters.'
    };
}

/**
 * Viking/Norse Style Template
 */
function getVikingTemplates() {
    return {
        basePrompt: `Apply Viking and Norse decorative art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Norse visual conventions:
- Urnes style interlacing animals (serpents, beasts)
- Runic inscriptions (Elder Futhark, Younger Futhark)
- Gripping beast motifs (Ringerike and Mammen styles)
- Dragon heads and serpent terminals
- Interlacing ribbons and knots
- Ship prow carvings and dragon figureheads

Nordic symbolism:
- Mjolnir (Thor's hammer)
- Valknut (knot of the slain)
- Yggdrasil (world tree) representations
- Ravens (Huginn and Muninn)
- Wolves, bears as warrior symbols
- Nordic runes for magic and meaning

Material and texture aesthetics:
- Carved wood appearance
- Weathered metal (bronze, iron)
- Leather and fur textures
- Stone runestone carving effect
- Oxidized silver and bronze patina

Color palette:
Iron gray (#71797E), bronze (#CD7F32), Nordic blue (#4682B4), burnt orange (#CC5500), black (#000000), aged silver (#C0C0C0).

Line work and carving style:
- Bold, confident carving marks
- Dynamic, flowing animal forms
- Angular runic letterforms
- Intertwined serpentine bodies
- Fierce, stylized beast heads

Compositional approach:
- Central axis with bilateral symmetry
- Framing border patterns
- Narrative scenes of mythology
- Warrior and ship imagery
- Connection to sea and storm

Quality level: Authentic Viking Age wood carving or runestone quality with dynamic interlaced beasts and powerful runic inscriptions.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Runic or bold Norse-inspired serif',
        messageStyle: 'Strong, warrior-like typography with carved wood aesthetic',
        textReadability: 'Use silver or white text on dark iron gray backgrounds. Frame with interlaced serpent borders. Integrate runes as decorative elements. Apply carved wood texture effect with strong shadows (3px, 70% opacity).'
    };
}

/**
 * Baroque Style Template
 */
function getBaroqueTemplates() {
    return {
        basePrompt: `Apply Baroque art style (17th-18th century) to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

Baroque painting characteristics:
- Dramatic chiaroscuro (strong light-dark contrast)
- Tenebrism (extreme dark shadows with spotlit highlights)
- Dynamic diagonal compositions creating movement
- Theatrical, emotional intensity
- Rich, deep colors with golden highlights
- Trompe-l'oeil illusionistic effects

Ornamental elements:
- Elaborate gold leaf and gilding
- Acanthus leaf scrollwork
- Putti (cherubs) and angelic figures
- Architectural trompe-l'oeil (columns, arches, vaults)
- Drapery with complex, dynamic folds
- Ornate frames and cartouches

Subject treatment:
- Dramatic poses and gestures
- Flowing fabrics and movement
- Rich textures (velvet, silk, gold, marble)
- Allegorical and mythological references
- Religious ecstasy and martyrdom themes
- Opulent court life and grandeur

Color and lighting:
- Deep shadows with golden light sources
- Rich jewel tones
- Warm earth tones in shadows
- Luminous highlights
- Atmospheric perspective

Color palette:
Deep crimson (#8B0000), gold (#D4AF37), ultramarine (#120A8F), burnt sienna (#E97451), ivory (#FFFFF0), deep shadow (#1A1A1A).

Compositional approach:
- Diagonal movement and energy
- Asymmetrical balance
- Figures breaking frame boundaries
- Layered depth with foreground, middle, background
- Theatrical staging and drama

Quality level: Old Master Baroque painting quality (Caravaggio, Rubens, Rembrandt) with dramatic lighting, rich colors, and theatrical grandeur.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Ornate serif with baroque flourishes (Garamond, Caslon)',
        messageStyle: 'Grand, theatrical typography with elaborate decoration',
        textReadability: 'Use gold or ivory text with dramatic shadows. Apply chiaroscuro lighting effect on text. Integrate ornate scrollwork and flourishes. Create theatrical, spotlit effect with strong drop shadows (4px, 80% opacity).'
    };
}

/**
 * African Art Style Template
 */
function getAfricanArtTemplates() {
    return {
        basePrompt: `Apply traditional African art style to the subject matter.

VISUAL STYLE TECHNIQUES (how to render):

African artistic conventions:
- Stylized, abstract forms emphasizing essence over realism
- Bold, geometric simplification of human and animal figures
- Tribal mask aesthetics (elongated faces, stylized features)
- Repetitive geometric patterns and motifs
- Scarification and body decoration patterns
- Emphasis on symmetry and balance

Color and pattern:
- Earth tones as primary palette
- Bold geometric patterns (triangles, diamonds, zigzags)
- Mud cloth (bogolanfin) patterns and symbolism
- Kente cloth color blocks and stripes
- Adinkra symbols with meaning
- Natural pigment colors

Sculptural and relief qualities:
- Carved wood texture and grain visible
- Simplified, elongated proportions
- Emphasis on ritual and spiritual power
- Mask-like facial features
- Rhythmic, repetitive forms
- Strong vertical and horizontal structures

Cultural motifs:
- Animal symbolism (lion, elephant, giraffe, antelope)
- Tribal patterns and symbols
- Drums, shields, spears as cultural markers
- Beadwork patterns
- Connection to earth, ancestors, spirits

Color palette:
Terracotta red (#E2725B), ochre (#CC7722), burnt sienna (#E97451), deep brown (#654321), black (#000000), white (#FFFFFF), natural earth tones.

Compositional approach:
- Strong, bold shapes
- Rhythmic repetition
- Vertical emphasis suggesting dignity and spirituality
- Tribal border patterns framing composition
- Connection between geometric and organic forms

Quality level: Authentic tribal art quality with bold geometric forms, earth pigments, and spiritual power embodied in simplified, abstracted forms.

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, geometric font with tribal aesthetic',
        messageStyle: 'Strong, rhythmic typography with geometric tribal patterns',
        textReadability: 'Use white or ochre text on dark earth tone backgrounds. Frame with tribal geometric patterns (triangles, diamonds). Apply bold shadows (3-4px, 70% opacity) creating strong, grounded presence.'
    };
}

// =============================================================================
// NEW STYLES - Jump/Magazine/Shoujo/Seinen/Studio/Western (Added 2025-11)
// =============================================================================

/**
 * One Piece Style Template (Weekly Shonen Jump)
 */
function getOnePieceTemplates() {
    return {
        basePrompt: `Think step-by-step about One Piece's dynamic adventure and Eiichiro Oda's distinctive art style before generating this scene.

One Piece manga style by Eiichiro Oda.

CHARACTER DESIGN REFERENCES:
- Luffy: Straw hat with red band, red vest/cardigan, blue shorts, scar under left eye, rubber stretch effects
- Zoro: Green hair, three katanas (Wado Ichimonji white), green haramaki, intense gaze, bandana when serious
- Sanji: Blonde hair covering left eye, black suit, cigarette, heart-eyes for ladies, kicks only
- Nami: Orange hair, blue tattoo on left shoulder, Navigator tools, Clima-Tact staff
- Character proportions: Tall thin legs, exaggerated dynamic poses, unique silhouettes for each character

VISUAL STYLE:
- Bold ink outlines with varying thickness for depth and emphasis
- Cross-hatching for shading and texture on detailed panels
- Exaggerated emotional expressions (shock lines, sweat drops, giant tears, bulging eyes)
- Action effects: Speed lines, impact bursts, Haki aura (black lightning crackling)
- Devil Fruit powers visualized with unique effects (rubber stretching, fire, ice)
- Manga screentone textures on shadows

ENVIRONMENT:
- Grand Line adventure aesthetics
- Pirate ships (Thousand Sunny design), tropical islands, mysterious seas
- Dramatic sky with clouds and sunlight beams
- Exotic locations: Sky Island clouds, underwater Fish-Man Island, Wano Country Japanese aesthetics

Camera: Dynamic low-angle for heroic poses, Dutch angle for action, dramatic perspective for battles
Color palette: Bold primary colors - Luffy red (#DC143C), ocean blue (#1E90FF), warm sunset oranges (#FF8C00), straw hat tan (#D2B48C)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, adventurous display font with pirate energy (similar to Impact or custom manga titles). Strong, commanding presence.',
        messageStyle: 'Dynamic, adventure-oriented typography that matches the epic scale and humor.',
        textReadability: 'Text color: White (#FFFFFF) or gold (#FFD700). Apply thick black text-stroke (3-4px) for bold outline. Add drop shadow (4px offset, 80% opacity). Include warm glow effect (#FF8C00, 5px radius, 30% opacity) for adventure feel.'
    };
}

/**
 * JoJo's Bizarre Adventure Style Template (Weekly Shonen Jump)
 */
function getJojoTemplates() {
    return {
        basePrompt: `Think step-by-step about JoJo's iconic poses, dramatic fashion, and Hirohiko Araki's Renaissance-influenced art before generating this scene.

JoJo's Bizarre Adventure style by Hirohiko Araki.

CHARACTER DESIGN:
- Extreme muscular definition with anatomical detail rivaling classical sculpture
- Dramatic fashion-forward poses (contrapposto, vogue poses, finger pointing)
- Unique character silhouettes with distinctive hairstyles (pompadour, spiky, flowing)
- Stand manifestations: Ethereal humanoid figures floating behind users with special abilities
- Detailed fabric folds showing texture and weight

VISUAL STYLE:
- Bold, unconventional color choices (green lips, purple shadows on skin, multicolored hair)
- Menacing aura effects with SFX text floating in scene ("ゴゴゴゴ" for menace, "ドドド" for rumbling)
- High contrast dramatic lighting with bold shadows
- Renaissance art influence in poses and composition
- Color shifting based on mood (same scene rendered in different palettes)
- Perspective warping for dramatic effect and tension

SIGNATURE ELEMENTS:
- Iconic pointing poses and finger gestures
- Intense eye details with multiple highlights and detailed irises
- Fashion magazine quality clothing and accessories
- Muscular poses showing power and confidence
- Stand aura effects (ethereal glow, geometric patterns)

Camera: Low angle dramatic perspective with foreshortening, Dutch angle for intensity
Color palette: Bold unconventional - magenta (#FF00FF), cyan (#00FFFF), gold (#FFD700), deep purple (#4B0082), lime green (#32CD32)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, dramatic display font with fashion magazine quality. Strong angular forms suggesting power and style.',
        messageStyle: 'Menacing yet stylish typography with dramatic presence. Consider italic for intensity.',
        textReadability: 'Text color: Bold gold (#FFD700) or white (#FFFFFF). Apply strong outline (3px black) and dramatic drop shadow (5px, 90% opacity). Add subtle glow matching scene\'s dominant color for integration with the dramatic lighting.'
    };
}

/**
 * BLEACH Style Template (Weekly Shonen Jump)
 */
function getBleachTemplates() {
    return {
        basePrompt: `Think step-by-step about BLEACH's clean minimalist aesthetic and Tite Kubo's fashion-influenced art style before generating this scene.

BLEACH manga style by Tite Kubo.

CHARACTER DESIGN:
- Ichigo Kurosaki: Spiky orange hair, Substitute Shinigami badge, Zangetsu sword (large cleaver-style blade wrapped in bandages)
- Rukia Kuchiki: Black bob/short hair, Shinigami robes (shihakusho), ice zanpakuto Sode no Shirayuki
- Byakuya Kuchiki: Long black hair, noble demeanor, kenseikan headpiece, Senbonzakura cherry blossom effects
- Shinigami robes: Black hakama and kosode, white captain haori with division number
- High fashion influence - characters styled like models even in battle

VISUAL STYLE:
- Clean, minimalist linework with strategic use of empty space
- High fashion influence in character design and posing
- Stark black and white contrast with selective color accents
- Reiatsu (spiritual pressure) visualized as glowing aura surrounding characters
- Zanpakuto release effects: Elemental transformations (ice, fire, petals, blades)
- Bold silhouettes against minimal backgrounds

SIGNATURE ELEMENTS:
- Dramatic silhouettes against stark white or black backgrounds
- Typography integration (chapter titles, attack name call-outs)
- Hollow masks: Bone-white with unique patterns and expressions
- Soul Society architecture: Traditional Japanese + otherworldly scale
- Bankai releases with dramatic transformation effects

Camera: Medium shots with strong composition, emphasis on negative space and silhouette
Color palette: Black (#000000), white (#FFFFFF), selective accent colors - Ichigo orange (#FF6600), Rukia ice blue (#87CEEB), Byakuya cherry pink (#FFB7C5)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, stylish sans-serif font with fashion magazine elegance. Minimal but impactful.',
        messageStyle: 'Sophisticated, minimalist typography matching the clean aesthetic. Strategic use of space.',
        textReadability: 'Text color: White (#FFFFFF) on dark areas or black (#000000) on light. Apply subtle drop shadow (2px, 50% opacity) for separation. Keep effects minimal to match BLEACH\'s clean aesthetic.'
    };
}

/**
 * Demon Slayer (Kimetsu no Yaiba) Style Template (Weekly Shonen Jump)
 */
function getKimetsuTemplates() {
    return {
        basePrompt: `Think step-by-step about Kimetsu no Yaiba's ukiyo-e influenced effects and emotional intensity before generating this scene.

Demon Slayer (Kimetsu no Yaiba) style by Koyoharu Gotouge with ufotable animation influence.

CHARACTER DESIGN:
- Tanjiro Kamado: Green-black checkered (ichimatsu) haori, burgundy hair with scar on forehead, hanafuda earrings
- Nezuko Kamado: Pink hemp leaf (asanoha) pattern kimono, bamboo muzzle, gradient pink-tipped black hair
- Zenitsu: Yellow/orange hair, terrified expressions that shift to intense focus when asleep
- Inosuke: Boar head mask, bare chest with muscles, dual serrated blades
- Hashira: Unique haori patterns and colors representing their breathing techniques

VISUAL STYLE:
- Ukiyo-e woodblock print influence in breathing technique effects
- Breathing technique visualization:
  * Water Breathing: Flowing water effects with foam, waves, and splashing (blue #1E90FF)
  * Flame Breathing: Swirling fire patterns with ember particles (orange #FF4500, red #DC143C)
  * Thunder Breathing: Lightning bolts and electric crackling (yellow #FFD700)
  * Wind Breathing: Swirling green vortex effects (#228B22)
- Nichirin blade color glow matching breathing style
- Demons: Dark corruption patterns, regeneration red muscle effects, grotesque transformations

SIGNATURE ELEMENTS:
- Traditional Japanese patterns (checkered, hemp leaf, wave patterns)
- Emotional intensity in facial expressions with speed lines
- Dynamic action with flowing fabric and hair
- Day/night contrast (demons burn in sunlight, golden particles)
- Blood demon art unique visual effects for each demon

Camera: Cinematic action shots, dramatic lighting emphasizing technique effects
Color palette: Deep burgundy (#8B0000), forest green (#228B22), technique-specific colors, night sky purples (#4B0082)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Traditional Japanese brush-influenced font with modern strength. Balance of elegance and power.',
        messageStyle: 'Emotionally resonant typography matching the series\' heart. Strong but not harsh.',
        textReadability: 'Text color: White (#FFFFFF) or cream (#FFF8DC). Apply text-stroke (2-3px black) and drop shadow (3px, 70% opacity). Consider adding subtle glow matching the breathing technique color for thematic integration.'
    };
}

/**
 * Chainsaw Man Style Template (Weekly Shonen Jump / Jump+)
 */
function getChainsawTemplates() {
    return {
        basePrompt: `Think step-by-step about Chainsaw Man's gritty horror aesthetic and Tatsuki Fujimoto's cinematic composition before generating this scene.

Chainsaw Man style by Tatsuki Fujimoto.

CHARACTER DESIGN:
- Denji: Chainsaw head transformation with pull-cord in chest, chainsaw arms extending from wrists, yellow devil eyes in transformed form, messy blonde hair in human form
- Power: Red/blonde gradient hair, small horns on forehead, sharp teeth, Blood Devil powers with blood manipulation effects
- Makima: Yellow ringed eyes (control devil), auburn/red hair in braids, business attire, calm unsettling expression
- Aki: Black hair, topknot, Fox Devil contract, formal Public Safety uniform
- Devils: Body horror designs, weapons manifesting from flesh, grotesque transformations

VISUAL STYLE:
- Gritty, raw manga aesthetic with heavy black inks and bold lines
- Gore and action with impactful blood splash effects
- Cinematic panel composition inspired by movie framing (wide establishing shots, dramatic close-ups)
- Urban decay environments - dirty apartments, rainy streets, rundown buildings
- Contrast between mundane daily life scenes and extreme graphic violence
- Minimal screentone, emphasis on stark blacks and whites

SIGNATURE ELEMENTS:
- Chainsaw motifs and mechanical horror (chainsaws emerging from flesh)
- Blood effects with dynamic splatter patterns
- Psychological horror elements and surreal imagery
- Black humor and absurdist situations juxtaposed with darkness
- Devil contracts visualized through body modifications

Camera: Cinematic wide shots for scale, horror movie angles for tension, intimate close-ups for character moments
Color palette: Muted earth tones, urban grays (#5A5A5A), blood red (#C41E3A, #8B0000) for violent accents

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Raw, aggressive display font with horror edge. Slightly rough or distressed for gritty feel.',
        messageStyle: 'Impactful, visceral typography matching the manga\'s intense energy.',
        textReadability: 'Text color: White (#FFFFFF) or blood red (#C41E3A). Apply heavy drop shadow (4px, 80% opacity, black). Consider slight texture or distress effect for gritty aesthetic integration.'
    };
}

/**
 * NARUTO Style Template (Weekly Shonen Jump)
 */
function getNarutoTemplates() {
    return {
        basePrompt: `Think step-by-step about NARUTO's ninja aesthetics and Masashi Kishimoto's action-oriented style before generating this scene.

NARUTO manga style by Masashi Kishimoto.

CHARACTER DESIGN:
- Naruto Uzumaki: Blonde spiky hair, orange/black tracksuit (Shippuden), whisker marks on cheeks, Konoha forehead protector
- Sasuke Uchiha: Black duck-butt hairstyle, Sharingan red eyes with tomoe, Uchiha crest on back
- Sakura Haruno: Pink hair, red qipao-style dress (Shippuden), diamond Strength of a Hundred Seal on forehead
- Kakashi Hatake: Silver spiky gravity-defying hair, mask covering lower face, Sharingan in left eye (covered)
- Distinctive ninja attire: Flak jackets, forehead protectors, tool pouches

VISUAL STYLE:
- Ninja aesthetics with traditional Japanese village influence
- Jutsu effects rendered dramatically:
  * Rasengan: Spiraling blue sphere (#00BFFF) with rotating chakra
  * Chidori: Lightning concentrated in hand (#FFFF00), crackling electricity
  * Sharingan: Red eyes (#FF0000) with black tomoe patterns rotating
  * Byakugan: Pale lavender eyes (#E6E6FA) with visible veins around temples
- Hand sign sequences for jutsu activation
- Chakra visualization as blue (#0066CC) flowing energy aura

SIGNATURE ELEMENTS:
- Forehead protectors with village symbols (Leaf, Sand, Mist, Cloud, Stone)
- Summoning animals (toads, snakes, slugs) appearing in smoke
- Tailed beast chakra cloaks (orange/red aura with beast features)
- Classic running pose with arms behind
- ANBU masks and cloaks for special ops

Camera: Action-oriented dynamic angles, speed emphasized through motion blur and lines
Color palette: Orange (#FF7F00), blue (#0066CC), black ninja attire, red Sharingan, green leaf symbol (#228B22)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, energetic display font with ninja edge. Strong and dynamic like the action.',
        messageStyle: 'Action-oriented typography matching high-energy ninja battles.',
        textReadability: 'Text color: White (#FFFFFF) or bright orange (#FF7F00). Apply black text-stroke (3px) and drop shadow (3px, 70% opacity). Consider blue glow (#0066CC, 4px radius, 30% opacity) for chakra energy feel.'
    };
}

/**
 * Hunter x Hunter Style Template (Weekly Shonen Jump)
 */
function getHunterXHunterTemplates() {
    return {
        basePrompt: `Think step-by-step about Hunter x Hunter's strategic depth and Yoshihiro Togashi's variable art style before generating this scene.

Hunter x Hunter style by Yoshihiro Togashi.

CHARACTER DESIGN:
- Gon Freecss: Spiky black hair with green tips, green jacket/shorts, fishing rod as signature item
- Killua Zoldyck: White fluffy hair, blue eyes, skateboard, yo-yos as weapons, casual streetwear
- Kurapika: Blonde hair, chain weapons (holy chain, dowsing chain), scarlet eyes (#FF0000) when emotional
- Leorio: Slicked back black hair, suit and glasses, briefcase
- Hisoka: Pink/red styled hair, playing card motifs, jester star/teardrop face paint

VISUAL STYLE:
- Clean shonen style with strategic detail variation (simple for calm, detailed for intense)
- Nen aura visualization:
  * Enhancement: White/yellow (#FFFACD) glowing aura
  * Transmutation: Electricity (#FFFF00), rubber texture, specialized forms
  * Emission: Projectile aura attacks, energy blasts (#FF69B4)
  * Conjuration: Materialized objects appearing from nen
  * Manipulation: Control threads, puppet effects
  * Specialization: Unique visual per ability
- Psychological intensity in confrontation scenes
- Strategic battle compositions showing tactical thinking

SIGNATURE ELEMENTS:
- Hunter License card (iconic item)
- Nen types and hatsu ability visual effects
- Chimera Ant designs (insect-human hybrid creatures)
- Greed Island game elements (cards, spells)
- Heaven's Arena tournament setting

Camera: Varied to match scene intensity - calm for strategy, dynamic for action
Color palette: Natural tones with Nen-specific accent colors, Gon green (#228B22), Killua blue (#4169E1), Kurapika scarlet (#DC143C)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, versatile font that can shift from friendly to intense. Adaptable to scene mood.',
        messageStyle: 'Strategic, thoughtful typography matching the series\' intellectual battles.',
        textReadability: 'Text color: White (#FFFFFF) or scene-appropriate accent. Apply drop shadow (3px, 60% opacity). Minimal effects for clean look, matching Togashi\'s variable style.'
    };
}

/**
 * Attack on Titan (Shingeki no Kyojin) Style Template (Bessatsu Shonen Magazine)
 */
function getShingekiTemplates() {
    return {
        basePrompt: `Think step-by-step about Attack on Titan's scale contrast and Hajime Isayama's intense action before generating this scene.

Attack on Titan (Shingeki no Kyojin) style by Hajime Isayama.

CHARACTER DESIGN:
- Survey Corps uniform: Brown/tan jacket with green cloak, 3D Maneuver Gear harnesses (leather straps, gas canisters, blade holders)
- Eren Yeager (Titan form): 15-meter muscular titan, pointed ears, dark hair, lipless exposed teeth
- Mikasa Ackerman: Black hair with undercut, red scarf (signature item), stoic determined expression
- Levi Ackerman: Undercut black hair, cravat, dual blade combat stance, short stature but intimidating
- Wings of Freedom emblem: Blue and white crossed wings on cloaks

VISUAL STYLE:
- Gritty, realistic proportions for human characters with detailed anatomy
- Titans: Grotesque, uncanny valley humanoid giants with varying deformities
- Heavy crosshatching for shadow, texture, and atmospheric depth
- Dramatic scale contrast between tiny humans and massive titans
- 3D Maneuver Gear wire/grappling effects showing momentum and speed
- Environmental destruction on massive scale

SIGNATURE ELEMENTS:
- The Walls (Maria, Rose, Sina): Massive 50-meter stone walls with fortress cities
- Steam effects rising from titan bodies (regeneration, heat)
- Blood and violence rendered with intense impact
- Military formations and strategic positioning
- Transformation lightning effects (yellow lightning, steam explosion)

Camera: Extreme perspective emphasizing scale difference, wide shots of walls and titans, dynamic 3D gear action
Color palette: Muted military greens (#556B2F), browns (#8B4513), titan flesh tones, blood red accents (#8B0000), steel gray (#708090)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Military stencil or bold gothic font with weight and authority. Serious and imposing.',
        messageStyle: 'Heavy, impactful typography matching the series\' dire tone.',
        textReadability: 'Text color: White (#FFFFFF) or cream. Apply strong drop shadow (4px, 80% opacity, black) for readability against complex backgrounds. Consider military stencil effect for authenticity.'
    };
}

/**
 * Rumiko Takahashi Style Template (Shonen Sunday)
 */
function getTakahashiTemplates() {
    return {
        basePrompt: `Think step-by-step about Rumiko Takahashi's comedic timing and classic manga style before generating this scene.

Rumiko Takahashi art style (Urusei Yatsura, Inuyasha, Ranma 1/2).

CHARACTER DESIGN REFERENCES:
- Lum (Urusei Yatsura): Tiger-striped bikini (yellow and black), green hair, small oni horns, electric powers, flying
- Inuyasha: White/silver long hair, red kimono (fire-rat robe), dog ears atop head, Tessaiga sword transforms
- Ranma (Ranma 1/2): Pigtail black hair (male), red hair in same style (female), martial arts gi or Chinese clothing
- Kagome: School uniform (green skirt, white top), bow and arrows, modern girl in feudal era
- Expressive faces with classic 80s-90s anime aesthetics, large emotive eyes

VISUAL STYLE:
- Clean, rounded linework with consistent stroke weight
- Comedic timing in expressions (exaggerated shock, anger, embarrassment)
- Slapstick action effects (giant mallets appearing, explosions, chase sequences with dust clouds)
- Romantic comedy visual language (sparkles, flower backgrounds, blush marks)
- Supernatural elements integrated naturally into everyday settings

SIGNATURE ELEMENTS:
- Gender/form transformation scenes (Ranma's water curse)
- Alien and demon character designs with cute appeal
- Hot spring/bath house comedy scenes (staple of her works)
- Traditional Japanese settings mixed with modern elements
- Love triangle chaos and misunderstandings visualized

Camera: Standard manga framing with emphasis on comedic timing and reaction shots
Color palette: Warm, inviting colors - Lum's tiger stripe yellow (#FFD700), Inuyasha's red (#DC143C), playful pastels for romantic scenes

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Friendly, rounded font with classic manga feel. Approachable and energetic.',
        messageStyle: 'Playful, expressive typography matching comedic and romantic tones.',
        textReadability: 'Text color: White (#FFFFFF) or black depending on background. Apply clean drop shadow (2px, 50% opacity). Keep effects light and fun to match the comedic style.'
    };
}

/**
 * Sailor Moon Style Template (Nakayoshi)
 */
function getSailorMoonTemplates() {
    return {
        basePrompt: `Think step-by-step about Sailor Moon's magical girl transformation and Naoko Takeuchi's elegant shoujo style before generating this scene.

Sailor Moon (Bishoujo Senshi Sailor Moon) style by Naoko Takeuchi.

CHARACTER DESIGN:
- Sailor Moon/Usagi: Long blonde hair in odango (bun) twin-tails, white/blue/red sailor uniform with large bow, tiara with red gem, Moon Stick/Spiral Heart Moon Rod
- Sailor Mars/Rei: Long black hair, red/purple sailor uniform, fire powers, ofuda talismans
- Sailor Mercury/Ami: Short blue hair, blue sailor uniform, water/ice powers, mini-computer visor
- Tuxedo Mask/Mamoru: Black tuxedo, white mask, cape, red roses as weapons
- Each Sailor Senshi: Unique sailor uniform colors, tiaras, transformation items

VISUAL STYLE:
- Magical girl transformation sequences with ribbons, sparkles, silhouettes
- Sparkling effects and star/moon motifs throughout
- Long, elegant limbs and large expressive eyes with multiple highlights
- Flowing hair in dramatic poses defying gravity
- Celestial and lunar imagery (crescent moons, stars, planets)
- Screentone patterns for sparkle and gradient effects

SIGNATURE ELEMENTS:
- Transformation brooch and compact designs (circular, heart-shaped)
- Attack sequences with named moves ("Moon Tiara Action!", "Mars Fire Ignite!")
- Moon crescent symbols on foreheads
- Sailor uniform variations with unique accessories
- Villain designs from Dark Kingdom, Black Moon, Death Busters

Camera: Elegant transformation poses, dramatic attack stances, romantic compositions
Color palette: Pastel pinks (#FFB6C1), soft blues (#87CEEB), purples (#DDA0DD), gold accents (#FFD700), silver moon (#C0C0C0)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant, feminine script or display font with magical sparkle. Graceful and powerful.',
        messageStyle: 'Romantic, empowering typography befitting magical warriors of love and justice.',
        textReadability: 'Text color: White (#FFFFFF) or soft pink (#FFB6C1). Apply sparkle glow effect (outer glow 5px, #FFD700, 40% opacity) and subtle drop shadow (2px, 40% opacity). Consider star accent elements.'
    };
}

/**
 * Rose of Versailles Style Template (Margaret)
 */
function getVersaillesTemplates() {
    return {
        basePrompt: `Think step-by-step about Rose of Versailles' historical drama and Riyoko Ikeda's classic shoujo art before generating this scene.

Rose of Versailles (Versailles no Bara) style by Riyoko Ikeda.

CHARACTER DESIGN:
- Oscar François de Jarjayes: Blonde wavy hair, French Royal Guard military uniform (blue coat, white pants, sword), androgynous beauty
- Marie Antoinette: Elaborate tall hairstyles with feathers/flowers, extravagant French court dresses, royal jewelry
- André Grandier: Dark wavy hair, devoted expression, servant/guard attire, loyal companion
- French aristocracy fashion: Rococo style, corsets, wigs, fans, beauty marks

VISUAL STYLE:
- Dramatic classic shoujo manga aesthetics with 1970s influence
- Large, starry eyes with detailed reflections and emotional depth
- Roses as recurring visual motif (backgrounds, borders, symbolism)
- Flowing hair and fabric with romantic wind effects
- Historical accuracy in costume, architecture, and setting
- Screentone for emotional atmosphere and sparkle effects

SIGNATURE ELEMENTS:
- Versailles Palace interiors and gardens (Hall of Mirrors, elaborate gardens)
- Military and ballroom scenes with period accuracy
- Emotional intensity with speed lines, radiating backgrounds, screentones
- Tragic romance visual language (tears, dramatic poses, symbolic imagery)
- French Revolution era drama (crowds, guillotine shadows, political tension)

Camera: Romantic and dramatic compositions, theatrical framing like stage productions
Color palette: Rich royal reds (#8B0000), blues (#000080), golds (#FFD700) of French aristocracy, rose pink (#FF69B4)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant, classical serif font with French aristocratic refinement. Dramatic and romantic.',
        messageStyle: 'Theatrical, passionate typography matching historical drama intensity.',
        textReadability: 'Text color: White (#FFFFFF) or gold (#FFD700). Apply elegant drop shadow (2px, 50% opacity). Consider rose petal accents or classical border elements for authenticity.'
    };
}

/**
 * NANA Style Template (Cookie)
 */
function getNanaTemplates() {
    return {
        basePrompt: `Think step-by-step about NANA's fashion-forward aesthetic and Ai Yazawa's stylish illustration before generating this scene.

NANA style by Ai Yazawa.

CHARACTER DESIGN:
- Nana Osaki: Punk rock style, black spiky short hair, heavy dark eyeliner and makeup, leather jacket, studs, Vivienne Westwood influence, cigarette
- Nana Komatsu ("Hachi"): Cute/girly style, brown hair, feminine dresses and accessories, softer makeup
- Ren Honjo: Visual kei rock star aesthetic, long black hair, leather, chains, guitarist poses
- Takumi: Blonde, stylish suits and casual wear, charismatic presence
- Contemporary Japanese street fashion with brand consciousness

VISUAL STYLE:
- Highly stylized fashion illustration influence
- Slim, elongated figure proportions (fashion model-like)
- Extremely detailed clothing, accessories, and brand items
- Urban Tokyo settings (apartments, live houses, streets)
- Emotional depth through subtle expressions and body language
- Clean linework with focus on fashion and style

SIGNATURE ELEMENTS:
- Music and band aesthetics (BLAST band, Trapnest)
- Cigarettes as character motif (especially Nana O)
- Apartment 707 setting (iconic living space)
- Strawberry glasses motif (Nana K's symbol)
- Punk vs cute contrast between the two Nanas
- Brand fashion items prominently featured

Camera: Fashion-forward compositions like magazine editorial, intimate character moments
Color palette: Black (#000000), leopard print, deep red (#8B0000), punk rock colors, soft pink (#FFB6C1) for Hachi

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Stylish, fashion-magazine quality font. Clean and sophisticated with edge.',
        messageStyle: 'Editorial, fashion-conscious typography with emotional undertone.',
        textReadability: 'Text color: White (#FFFFFF) or black (#000000) depending on background. Apply minimal shadow (2px, 40% opacity) for clean, fashionable look. Less effects, more style.'
    };
}

/**
 * Golden Kamuy Style Template (Young Jump)
 */
function getGoldenKamuyTemplates() {
    return {
        basePrompt: `Think step-by-step about Golden Kamuy's Ainu cultural detail and Satoru Noda's dynamic art before generating this scene.

Golden Kamuy style by Satoru Noda.

CHARACTER DESIGN:
- Saichi Sugimoto ("Immortal"): Heavily scarred face, military cap or earflap hat, Russo-Japanese War veteran uniform, determined expression
- Asirpa: Young Ainu girl, matanpushi (embroidered headband), traditional Ainu attire with geometric patterns, blue eyes, bow and arrows
- Yoshitake Shiraishi: Bald "Escape King", comedic expressions, flexible acrobatic poses
- Detailed Ainu traditional clothing with authentic patterns
- Meiji-era Japanese military uniforms and equipment

VISUAL STYLE:
- Highly detailed realistic rendering of characters, weapons, and environments
- Authentic Ainu cultural elements (clothing, tools, buildings, rituals)
- Intense action scenes with graphic violence
- Comedy moments with exaggerated expressions (contrasting serious scenes)
- Nature and wildlife of Hokkaido rendered with documentary detail
- Historical accuracy for Meiji-era Japan

SIGNATURE ELEMENTS:
- Tattooed human skin maps (cryptic treasure map elements)
- Ainu cuisine scenes (citatap, ohaw, other traditional dishes) rendered appetizingly
- Wild animal hunting scenes (Hokkaido brown bears, deer, wolves)
- Meiji-era weapons: Type 30 rifles, swords, military equipment
- Hot spring comedic scenes (recurring element)
- Snowy Hokkaido landscapes

Camera: Cinematic compositions, nature photography influence for wildlife, intense close-ups for violence
Color palette: Natural Hokkaido tones - snow white (#FFFAFA), forest green (#228B22), brown earth (#8B4513), Ainu pattern blue (#4169E1)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Strong, rugged display font with historical weight. Adventurous and grounded.',
        messageStyle: 'Bold, earthy typography matching the survival adventure tone.',
        textReadability: 'Text color: White (#FFFFFF) or cream (#FFF8DC). Apply strong drop shadow (4px, 80% opacity) for visibility against detailed backgrounds. Consider textured or rugged edge for authenticity.'
    };
}

/**
 * Makoto Shinkai Style Template (Anime Director)
 */
function getShinkaiTemplates() {
    return {
        basePrompt: `Think step-by-step about Makoto Shinkai's breathtaking sky renderings and photorealistic backgrounds before generating this scene.

Makoto Shinkai animation style (Your Name, Weathering with You, Suzume).

VISUAL STYLE - BACKGROUNDS:
- Photorealistic background art with extraordinary detail
- Extraordinary sky renderings as emotional centerpiece:
  * Dramatic cloud formations with volumetric lighting and depth
  * Golden hour emphasis with warm orange/pink gradients
  * Blue hour twilight with deep indigo to warm horizon transitions
  * Lens flare and light scatter effects through clouds
- Rain, snow, and weather as emotional storytelling elements
- Urban Japanese settings rendered with loving architectural detail

VISUAL STYLE - CHARACTERS:
- Anime characters with subtle, naturalistic expressions
- Subsurface scattering on skin for realistic light transmission
- Hair animation quality with individual strands catching light
- Fabric physics showing natural movement and weight
- Eyes with complex reflections showing environment

SIGNATURE ELEMENTS:
- Trains and railway crossings (romantic meeting points)
- Tokyo cityscapes at twilight with countless lights
- Celestial events (comets, shooting stars, aurora)
- Cell phones and modern technology integrated naturally
- Emotional separation and connection themes (distance, longing)
- Rain on windows, puddle reflections, wet surfaces

TECHNICAL ELEMENTS:
- Depth of field with beautiful bokeh on lights
- God rays through clouds and architecture
- Wet surface reflections doubling city lights
- Color grading emphasizing emotional tone

Camera: Cinematic wide shots of sky and city, intimate close-ups on characters, dramatic low angles
Color palette: Vibrant sky blues (#1E90FF), sunset oranges (#FF8C00), twilight magentas (#FF00FF), deep evening purple (#4B0082)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Clean, modern sans-serif font with gentle elegance. Emotional but not heavy.',
        messageStyle: 'Poetic, contemplative typography matching the emotional depth.',
        textReadability: 'Text color: White (#FFFFFF) with subtle warm tint. Apply soft glow (4px, 30% opacity) matching scene lighting and gentle drop shadow (3px, 40% opacity). Integration with the luminous atmosphere is key.'
    };
}

/**
 * Kyoto Animation (KyoAni) Style Template (Anime Studio)
 */
function getKyoaniTemplates() {
    return {
        basePrompt: `Think step-by-step about Kyoto Animation's warm attention to detail and character-focused storytelling before generating this scene.

Kyoto Animation (KyoAni) studio style.

VISUAL STYLE:
- Soft, warm lighting with subtle gradients creating welcoming atmosphere
- Extremely detailed character animation quality
- Emphasis on finding beauty in everyday life moments
- Subtle, nuanced emotional expressions (micro-expressions, eye movements)
- Naturalistic character movement and physics
- Rich, detailed backgrounds with atmospheric perspective

SIGNATURE SERIES ELEMENTS:
- School settings with meticulous architectural detail (K-ON!, Haruhi, Hyouka)
- Musical performance scenes with instrument accuracy (K-ON!, Sound! Euphonium)
- Swimming and water effects with beautiful caustics (Free!)
- Light novel adaptation aesthetic (ornate, detailed)
- Slice of life atmosphere celebrating mundane moments

TECHNICAL EXCELLENCE:
- Hair animation with individual strand movement and bounce
- Eye reflections with environment mapping and emotional depth
- Fabric and cloth physics responding to movement realistically
- Background art with atmospheric perspective and depth
- Lighting that wraps naturally around forms
- Attention to small details (food, instruments, sports equipment)

CHARACTER DESIGN:
- Expressive, relatable character designs
- Varied body types and personalities
- Detailed school uniforms and casual wear
- Natural, grounded color palettes for clothing

Camera: Intimate character-focused compositions, gentle pacing, attention to environment
Color palette: Soft, warm pastels - sunset orange (#FFB347), sky blue (#87CEEB), cherry blossom pink (#FFB7C5), natural lighting greens

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Warm, friendly rounded font with gentle personality. Inviting and comforting.',
        messageStyle: 'Soft, heartfelt typography matching the warm slice-of-life tone.',
        textReadability: 'Text color: White (#FFFFFF) or warm cream (#FFF8DC). Apply soft drop shadow (2px, 40% opacity) with warm tint. Gentle outer glow (3px, 20% opacity) for warmth. Keep effects subtle and natural.'
    };
}

/**
 * Studio TRIGGER Style Template (Anime Studio)
 */
function getTriggerTemplates() {
    return {
        basePrompt: `Think step-by-step about Studio TRIGGER's explosive energy and Gainax DNA before generating this scene.

Studio TRIGGER animation style (Kill la Kill, Promare, Gurren Lagann influence, BNA).

VISUAL STYLE:
- Extreme dynamic poses with exaggerated anatomy during action
- Bold, graphic color blocking with limited palette per scene
- Exaggerated action sequences with spiral motifs (Gainax heritage)
- Flat colors with minimal gradient for graphic impact
- Constant sense of motion and escalating energy
- Thick, bold linework that gets rougher during intense moments

SIGNATURE ELEMENTS:
- Drill and spiral imagery (Gurren Lagann DNA, "spiral power")
- Geometric fire effects with triangular shapes (Promare style)
- Clothing transformation and battle gear (Kill la Kill's Kamui)
- Over-the-top scale escalation (galaxy-sized mecha)
- Fourth wall breaking visuals and meta humor
- Hot-blooded determination expressions

TECHNICAL ANIMATION ELEMENTS:
- Speed lines dominating action frames
- Impact frames with stark color contrast
- Smear frames for motion (stretched, distorted)
- Sakuga-quality key animation highlights
- Aggressive camera zooms and rotations
- Screen shake and impact vibration effects

CHARACTER ENERGY:
- Characters burst with personality in every pose
- Exaggerated silhouettes for recognition
- Power-up transformations with escalating detail
- Eyes that burn with determination

Camera: Extreme angles (fish-eye, dramatic Dutch), aggressive zooms, upward heroic shots
Color palette: Hot pink (#FF1493), electric cyan (#00FFFF), blazing yellow (#FFD700), neon green (#39FF14) - bold and saturated

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Explosive, angular display font with maximum impact. Bold and aggressive.',
        messageStyle: 'High-energy, over-the-top typography that matches the visual intensity.',
        textReadability: 'Text color: Bright contrasting colors (white, yellow, cyan). Apply thick outline (4px black) and strong drop shadow (5px, 90% opacity). Consider adding speed lines or impact effects around text for TRIGGER energy.'
    };
}

/**
 * Spider-Verse Style Template (Western Animation)
 */
function getSpiderverseTemplates() {
    return {
        basePrompt: `Think step-by-step about Spider-Verse's revolutionary comic book 3D animation style before generating this scene.

Spider-Man: Into the Spider-Verse animation style by Sony Pictures Animation.

VISUAL STYLE:
- Comic book aesthetic translated into 3D animation
- Halftone dot patterns for shading (Ben-Day dots like classic comics)
- CMYK color separation with intentional misalignment on edges
- Reduced frame rate animation (2s and 4s) for stylized movement
- Hand-drawn line effects overlaid on 3D renders
- Paint stroke and ink splatter textures integrated

SIGNATURE ELEMENTS:
- Onomatopoeia text effects floating in scene ("THWIP", "POW", "BOOM")
- Different art styles for each Spider-Person (anime, noir, cartoon)
- Kirby dots (cosmic energy dots) and classic comic panel transitions
- Glitch effects for dimensional travel (RGB splitting, frame tearing)
- Motion blur rendered as speed lines, not smooth blur
- Thought bubbles and comic panel borders appearing in 3D space

TECHNICAL EFFECTS:
- Chromatic aberration on motion edges (red/blue fringing)
- Offset shadow and outline effects (not perfectly aligned)
- Paint stroke textures on surfaces
- Ink line weight variation for emphasis
- Multiple exposure for motion
- Depth of field using halftone density

CHARACTER ELEMENTS:
- Dynamic Spider-poses with exaggerated proportions
- Costume details with comic-accurate designs
- Expressive masks (eye shapes changing with emotion)
- Web effects with geometric precision

Camera: Comic panel compositions, dramatic Dutch angles, dynamic action perspectives
Color palette: Bold primaries - Spider-red (#E62020), Spider-blue (#1E40AF), accent neon pink (#FF10F0), electric purple (#8B00FF)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Comic book lettering font with bold impact. Hand-drawn quality with professional punch.',
        messageStyle: 'Dynamic comic book typography with POW and impact.',
        textReadability: 'Text color: White (#FFFFFF) or bold yellow (#FFFF00). Apply comic-style outline (3px black) with slight offset for print effect. Add halftone texture or Kirby dots for Spider-Verse authenticity.'
    };
}

/**
 * Tim Burton Style Template (Western Animation)
 */
function getTimburtonTemplates() {
    return {
        basePrompt: `Think step-by-step about Tim Burton's gothic whimsy and German Expressionism influence before generating this scene.

Tim Burton gothic animation style (The Nightmare Before Christmas, Corpse Bride, Frankenweenie).

VISUAL STYLE:
- Stop-motion inspired 3D aesthetic with visible puppet-like quality
- Gothic and German Expressionism influence (angular shadows, distorted architecture)
- Exaggerated thin limbs and disproportionately large heads
- Spiraling patterns in environment (curling hills, twisted trees)
- Stark contrast lighting with deep shadows
- Desaturated base palette with selective vibrant accents

SIGNATURE ELEMENTS:
- Black and white striped patterns (Beetlejuice influence)
- Stitched and patchwork characters (Sally, Sparky)
- Halloween and macabre themes with playful approach
- Quirky, lovable monsters and misfits as protagonists
- Victorian-gothic settings (mansions, graveyards, twisted towns)
- Spiral and curl motifs throughout (hills, trees, smoke)

CHARACTER DESIGN (Tim Burton Style):
- Jack Skellington: Impossibly tall and thin, pinstripe suit, skull head with expressive eye sockets
- Sally: Ragdoll with visible stitches, blue skin, red yarn hair
- Large, round expressive eyes on simple round faces
- Spindly fingers with exaggerated length
- Neck and limb proportions stretched beyond natural
- Pale, monochromatic skin tones

Camera: Low angles emphasizing height, skewed perspectives, shadows creating atmosphere
Color palette: Desaturated grays and blacks with selective accents - pumpkin orange (#FF7518), ghostly blue (#B0E0E6), blood red (#8B0000), moonlight white

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Spooky, whimsical display font with gothic character. Playfully creepy.',
        messageStyle: 'Gothic-whimsical typography balancing spooky and charming.',
        textReadability: 'Text color: White (#FFFFFF) or ghostly blue (#B0E0E6). Apply dramatic shadow (4px, 70% opacity) for gothic depth. Consider slight spiral or curl accent for Burton flair.'
    };
}

/**
 * The Simpsons Style Template (Western Animation)
 */
function getSimpsonsTemplates() {
    return {
        basePrompt: `Think step-by-step about The Simpsons' iconic yellow characters and Matt Groening's distinctive style before generating this scene.

The Simpsons animation style by Matt Groening.

VISUAL STYLE:
- Signature yellow skin tone (#FFD800) for all human characters
- Simple oval/round head shapes with overbite
- Four-fingered hands (animation standard)
- Bold, consistent black outlines on all elements
- Flat colors with minimal shading or gradients
- Simple, readable character silhouettes

CHARACTER DESIGN:
- Homer Simpson: Bald with M-shaped hair wisps, white shirt, blue pants, round belly
- Marge Simpson: Impossibly tall blue beehive hair, green dress, pearl necklace
- Bart Simpson: Spiky yellow hair (9 points), red shirt, blue shorts, skateboard
- Lisa Simpson: Star-shaped spiky hair, red dress, saxophone, pearl necklace
- Consistent design language across all Springfield residents

SIGNATURE ELEMENTS:
- Springfield setting (Kwik-E-Mart, Nuclear Power Plant, Moe's Tavern)
- Couch gag setup elements (living room, TV, couch)
- Wide variety of background character designs
- Pop culture parody elements integrated naturally
- Three-eyed fish Blinky (radioactive humor)
- Iconic locations: Springfield Elementary, Krusty Burger

Camera: Standard TV animation framing, eye-level shots, simple compositions
Color palette: Simpsons yellow (#FFD800), sky blue (#87CEEB), grass green (#228B22), Marge's hair blue (#0066CC), saturated primaries

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, friendly rounded sans-serif font. Approachable and recognizable.',
        messageStyle: 'Clean, simple typography matching the show\'s accessible style.',
        textReadability: 'Text color: Simpsons yellow (#FFD800) on dark or white (#FFFFFF) on colored backgrounds. Apply bold black outline (2-3px) for cartoon style. Keep effects minimal and clean.'
    };
}

/**
 * South Park Style Template (Western Animation)
 */
function getSouthparkTemplates() {
    return {
        basePrompt: `Think step-by-step about South Park's construction paper cutout aesthetic and deliberate simplicity before generating this scene.

South Park cutout animation style by Trey Parker and Matt Stone.

VISUAL STYLE:
- Construction paper cutout aesthetic (visible paper texture)
- Simple geometric shapes for all characters and objects
- Minimal, jerky animation movement (cutout puppet style)
- Bold, flat colors with no gradients
- Intentionally crude but highly recognizable simplicity
- Black outlines defining all shapes

CHARACTER DESIGN:
- Stan Marsh: Blue/red puffball hat (covers hair), brown hair visible at sides, blue jacket
- Kyle Broflovski: Green ushanka hat, red hair (when visible), orange jacket
- Eric Cartman: Teal and yellow puffball hat, red jacket, significantly round body shape
- Kenny McCormick: Orange parka completely covering face (muffled voice implied), only eyes visible
- All children: Simple round heads, dot eyes, simple line mouths

SIGNATURE ELEMENTS:
- Colorado mountain town setting (snowy peaks, small town)
- Simple adults drawn slightly taller with similar aesthetic
- Canadian characters: Flapping hinged heads (top of head separates when talking)
- Mr. Hankey, Chef, and other iconic side characters
- Crude but effective satirical and absurdist visual humor
- Simple interiors (school, homes, restaurants)

Camera: Simple side-view and front-view shots, minimal camera movement, flat compositions
Color palette: Bold saturated primaries, construction paper texture - orange (#FF8C00), blue (#0066CC), green (#228B22), red (#DC143C)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Simple, bold sans-serif font matching the crude aesthetic. Unpretentious and direct.',
        messageStyle: 'Straightforward, no-frills typography fitting the satirical style.',
        textReadability: 'Text color: Bold primary colors or white (#FFFFFF). Apply simple black outline (2px) for cutout look. Consider paper texture effect for authenticity. Keep extremely simple.'
    };
}

// ========================================
// 📘 Magazine/Sunday Templates (New Additions)
// ========================================

/**
 * Hajime no Ippo Style Template (Boxing Manga)
 */
function getHajimeNoIppoTemplates() {
    return {
        basePrompt: `Think step-by-step about Hajime no Ippo's intense boxing action and emotional sports drama aesthetic before generating this scene.

Hajime no Ippo boxing manga style by George Morikawa.

VISUAL STYLE:
- Dynamic boxing action with powerful impact effects
- Realistic muscle anatomy and body mechanics
- Speed lines radiating from punches
- Sweat droplets and water spray effects
- High contrast dramatic lighting in the ring
- Intense close-up expressions during crucial moments

CHARACTER DESIGN:
- Ippo Makunouchi: Compact muscular build, determined expression, orthodox stance
- Takamura Mamoru: Tall powerful frame, confident smirk, intimidating presence
- Sendo Takeshi: Wild hair, aggressive expression, southpaw stance
- Date Eiji: Experienced veteran look, composed expression
- Realistic boxing physiques with defined musculature

SIGNATURE ELEMENTS:
- Boxing ring with ropes and corner posts
- Crowd silhouettes in background
- Trainer corner with towels and water bottles
- Dramatic spotlight on fighters
- Impact explosions with "DEMPSEY ROLL" motion blur
- Emotional flashback panels with softer tones

Camera: Low angle for power shots, dramatic close-ups on faces and fists, motion blur for speed
Color palette: High contrast with warm skin tones, cool ring lighting - red (#CC0000), white (#FFFFFF), blue (#0066CC) for boxing themes

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, impactful sports font with dynamic angles. Strong and determined.',
        messageStyle: 'Intense, motivational typography reflecting boxing spirit.',
        textReadability: 'Text color: White (#FFFFFF) with strong black outline (3px) for impact. Red (#CC0000) for emphasis. Keep bold and readable against action backgrounds.'
    };
}

/**
 * GTO Style Template (Yankee/School Drama)
 */
function getGtoTemplates() {
    return {
        basePrompt: `Think step-by-step about GTO's delinquent humor and heartfelt school drama aesthetic before generating this scene.

GTO (Great Teacher Onizuka) manga style by Tohru Fujisawa.

VISUAL STYLE:
- Bold linework with exaggerated expressions
- Dramatic pose compositions for comedic effect
- Detailed motorcycle and yankee fashion elements
- High contrast shadows for tough guy aesthetic
- Comedic chibi reactions mixed with serious scenes
- Urban Japanese school and street settings

CHARACTER DESIGN:
- Eikichi Onizuka: Bleached blonde pompadour, pierced ears, muscular build, leather jacket or teacher suit
- Fierce yankee expressions with comedic timing
- Exaggerated angry faces and comedic reactions
- School uniforms (gakuran, sailor suits) with delinquent modifications
- Detailed facial features with strong jawlines

SIGNATURE ELEMENTS:
- Customized motorcycles (Cresta) with detailed mechanics
- School rooftop scenes
- Comedic reaction faces (bug eyes, nosebleeds)
- Dramatic tough guy poses
- Urban Tokyo street backgrounds
- Teacher's desk and classroom settings

Camera: Low angle for intimidating shots, exaggerated perspective for comedy, dramatic lighting
Color palette: Bold primary colors, leather black, bleached blonde - black (#1A1A1A), blonde (#FFD700), white (#FFFFFF)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, aggressive font with punk rock energy. Mix of tough and comedic.',
        messageStyle: 'Dynamic typography with attitude, fitting the yankee aesthetic.',
        textReadability: 'Text color: White (#FFFFFF) or bright yellow (#FFD700) on dark backgrounds. Bold black outline (2-3px) for readability. Add impact effects for emphasis.'
    };
}

/**
 * Shonan Junai Gumi Style Template (Yankee Drama)
 */
function getShonanJunaiTemplates() {
    return {
        basePrompt: `Think step-by-step about Shonan Junai Gumi's classic yankee aesthetic and bromance dynamics before generating this scene.

Shonan Junai Gumi manga style by Tohru Fujisawa.

VISUAL STYLE:
- Classic 90s yankee manga linework
- Detailed pompadour and regent hairstyles
- Dynamic fight scene compositions
- Urban Shonan coastal setting
- Motorcycle gang aesthetics
- Mix of tough action and comedic moments

CHARACTER DESIGN:
- Eikichi Onizuka: Classic pompadour, tough expression, leather jacket, muscular
- Ryuji Danma: Long hair, cool demeanor, refined delinquent look
- Classic yankee fashion: gakuran modified, bomber jackets, boots
- Exaggerated tough guy expressions
- Detailed hair styling (regent, pompadour, punch perm)

SIGNATURE ELEMENTS:
- Customized motorcycles (bosozoku style)
- Shonan beach and highway backgrounds
- Gang confrontation scenes
- School rooftop hangouts
- Classic 90s Japanese street fashion
- Dramatic sunset silhouettes on bikes

Camera: Dynamic action angles, dramatic low angles for intimidation, wide shots for gang scenes
Color palette: Sunset oranges, ocean blues, leather blacks - orange (#FF6B35), blue (#4A90D9), black (#1A1A1A)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Bold, retro yankee font with 90s aesthetic. Tough and nostalgic.',
        messageStyle: 'Classic manga typography with impact and attitude.',
        textReadability: 'Text color: White (#FFFFFF) or sunset orange (#FF6B35) on dark backgrounds. Strong outline (2-3px) for yankee impact.'
    };
}

/**
 * Baki Style Template (Martial Arts/Fighting)
 */
function getBakiTemplates() {
    return {
        basePrompt: `Think step-by-step about Baki's extreme muscle anatomy and brutal martial arts aesthetic before generating this scene.

Grappler Baki manga style by Keisuke Itagaki.

VISUAL STYLE:
- Hyper-detailed muscular anatomy (extreme definition)
- Exaggerated muscle fibers and veins
- Brutal impact effects with blood spray
- Dynamic fighting poses with impossible flexibility
- Cross-section anatomy diagrams during techniques
- Intense shadow work emphasizing muscle definition

CHARACTER DESIGN:
- Baki Hanma: Lean but extremely defined muscles, wild hair, confident smirk
- Yujiro Hanma: Massive demon-like physique, back muscles forming "demon face"
- Fighters with grotesquely detailed musculature
- Scarred, battle-worn bodies
- Each fighter with unique fighting stance
- Exaggerated height and proportion differences

SIGNATURE ELEMENTS:
- Underground arena settings
- Detailed muscle anatomy breakdowns
- Bone-crunching impact frames
- Sweat and blood effects
- Prison and street fight settings
- Ancient martial arts technique visualizations

Camera: Extreme close-ups on muscles and impacts, dynamic action angles, dramatic perspective distortion
Color palette: Flesh tones with high contrast shadows, blood red accents - skin (#E8B89D), red (#8B0000), black (#1A1A1A)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Heavy, brutal font reflecting raw fighting power. Aggressive and primal.',
        messageStyle: 'Intense, visceral typography matching the brutal martial arts theme.',
        textReadability: 'Text color: White (#FFFFFF) or blood red (#8B0000) on dark backgrounds. Heavy outline (3-4px) for maximum impact.'
    };
}

/**
 * Kindaichi Case Files Style Template (Mystery)
 */
function getKindaichiTemplates() {
    return {
        basePrompt: `Think step-by-step about Kindaichi Case Files' classic mystery manga aesthetic and suspenseful atmosphere before generating this scene.

Kindaichi Case Files manga style by Fumiya Sato and Yozaburo Kanari.

VISUAL STYLE:
- Classic 90s manga linework with detailed backgrounds
- Suspenseful shadow play and lighting
- Mystery-solving dramatic reveals
- Detailed crime scene environments
- Flashback sequences with different toning
- Split-screen deduction panels

CHARACTER DESIGN:
- Hajime Kindaichi: Messy hair, casual clothes, intense "aha!" expressions
- Miyuki Nanase: Cute, supportive girlfriend design
- Suspects with distinct memorable features
- Dramatic villain reveals with distorted expressions
- Classic 90s Japanese fashion and hairstyles

SIGNATURE ELEMENTS:
- Locked room mystery settings
- "Jichha no na ni kakete!" (In grandfather's name) pose
- Crime scene investigation panels
- Dramatic accusation pointing
- Isolated locations (islands, mansions, hotels)
- Visual clue highlights and evidence close-ups
- Tragic backstory flashbacks

Camera: Dramatic reveals with spotlight effects, suspenseful angles, evidence close-ups
Color palette: Dark atmospheric tones with dramatic lighting - navy (#1A2B4A), blood red (#8B0000), white (#FFFFFF)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Classic mystery font with suspenseful elegance. Dramatic but readable.',
        messageStyle: 'Suspenseful typography with dramatic impact for reveals.',
        textReadability: 'Text color: White (#FFFFFF) on dark backgrounds, red (#CC0000) for emphasis. Clean outline (2px) for readability in atmospheric scenes.'
    };
}

// ========================================
// 💕 Shoujo Templates (New Additions)
// ========================================

/**
 * Cardcaptor Sakura Style Template (Magical Girl)
 */
function getCardcaptorTemplates() {
    return {
        basePrompt: `Think step-by-step about Cardcaptor Sakura's magical girl aesthetic and CLAMP's elegant art style before generating this scene.

Cardcaptor Sakura style by CLAMP.

VISUAL STYLE:
- Elegant, flowing linework characteristic of CLAMP
- Intricate magical circle designs
- Soft, dreamy atmospheric effects
- Detailed costume and accessory designs
- Cherry blossom petals floating in scenes
- Luminous magical aura effects
- Art nouveau influenced decorative frames

CHARACTER DESIGN:
- Sakura Kinomoto: Auburn hair, cheerful expression, elaborate battle costumes
- Tomoyo: Long dark hair, gentle smile, elegant fashion
- Syaoran: Brown hair, determined expression, Chinese-inspired elements
- Kero-chan: Cute mascot form, dignified guardian form
- Clow Cards with unique character designs

SIGNATURE ELEMENTS:
- Clow Card magic circles (intricate geometric patterns)
- Winged staff (Sealing Wand) designs
- Tomoyo's handmade battle costumes (different each episode)
- Sakura Cards glowing with power
- Moon and star motifs throughout
- Soft feather and petal effects
- Tomoeda town backgrounds

Camera: Elegant magical transformation sequences, soft focus romantic moments, dynamic action with flowing effects
Color palette: Soft pastels with magical glow - pink (#FFB7C5), white (#FFFFFF), gold (#FFD700), soft blue (#87CEEB)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant, whimsical font with magical charm. Delicate and dreamy.',
        messageStyle: 'Soft, romantic typography with gentle curves and sparkle effects.',
        textReadability: 'Text color: Soft pink (#FFB7C5) or white (#FFFFFF) with gentle glow effect. Light outline for magical softness.'
    };
}

/**
 * Fruits Basket Style Template (Drama/Romance)
 */
function getFruitsBasketTemplates() {
    return {
        basePrompt: `Think step-by-step about Fruits Basket's emotional depth and delicate shoujo aesthetic before generating this scene.

Fruits Basket manga style by Natsuki Takaya.

VISUAL STYLE:
- Delicate, emotional linework
- Soft toning and gentle gradients
- Flower and nature symbolism throughout
- Zodiac animal motifs integrated into design
- Emotional sparkle and tear effects
- Soft, dreamlike background treatments
- Clean, elegant panel compositions

CHARACTER DESIGN:
- Tohru Honda: Long brown hair, gentle smile, humble appearance, onigiri hair clips
- Yuki Sohma: Elegant "prince" look, silver hair, refined features
- Kyo Sohma: Orange hair, energetic, cat-like features when annoyed
- Shigure: Casual, playful adult with dark hair
- Each Sohma with their zodiac animal traits subtly visible

SIGNATURE ELEMENTS:
- Zodiac animal transformation smoke effects
- Sohma estate traditional Japanese architecture
- School uniform scenes (Kaibara High)
- Emotional crying scenes with flower backgrounds
- Gentle healing moments in nature
- Symbolic imagery (ribbons, flowers, zodiac animals)

Camera: Intimate emotional close-ups, soft focus for romantic moments, wide shots of nature settings
Color palette: Soft, warm tones - cream (#FFF8E7), soft orange (#FFCC99), gentle blue (#B4D4E7), lavender (#E6E6FA)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Soft, gentle font with emotional warmth. Elegant and heartfelt.',
        messageStyle: 'Delicate typography reflecting the series emotional depth.',
        textReadability: 'Text color: Soft cream (#FFF8E7) or gentle brown (#8B7355) on colored backgrounds. Subtle shadow for depth without harshness.'
    };
}

/**
 * Kimi ni Todoke Style Template (School Romance)
 */
function getKimiNiTodokeTemplates() {
    return {
        basePrompt: `Think step-by-step about Kimi ni Todoke's pure romantic aesthetic and heartwarming school life atmosphere before generating this scene.

Kimi ni Todoke manga style by Karuho Shiina.

VISUAL STYLE:
- Soft, delicate linework with emotional expression
- Light, airy compositions with lots of white space
- Flower and sparkle effects for romantic moments
- Gentle screentone gradients
- Comedic chibi reactions for contrast
- Clean school life backgrounds
- Seasonal imagery (cherry blossoms, autumn leaves)

CHARACTER DESIGN:
- Sawako Kuronuma: Long black straight hair, shy smile, "Sadako" look transforming to beautiful
- Shota Kazehaya: Bright smile, refreshing appearance, popular boy design
- Ayane and Chizu: Supportive friends with distinct personalities
- Simple but expressive character designs
- School uniforms with individual touches

SIGNATURE ELEMENTS:
- Cherry blossom confessions
- Classroom and school corridor scenes
- Genuine smile moments (Sawako's smile transformations)
- Hand-holding and subtle romantic gestures
- Supportive friendship scenes
- Seasonal school events (festivals, graduation)

Camera: Soft romantic close-ups, wide school life scenes, emotional reaction shots
Color palette: Soft, pure tones - white (#FFFFFF), soft pink (#FFCCE5), sky blue (#87CEEB), cherry blossom (#FFB7C5)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Light, pure font reflecting innocent romance. Fresh and heartwarming.',
        messageStyle: 'Gentle, clean typography with subtle romantic accents.',
        textReadability: 'Text color: Soft pink (#FFCCE5) or pure white (#FFFFFF). Light effects for dreamy romantic atmosphere.'
    };
}

/**
 * Revolutionary Girl Utena Style Template (Avant-garde Shoujo)
 */
function getUtenaTemplates() {
    return {
        basePrompt: `Think step-by-step about Revolutionary Girl Utena's avant-garde aesthetic and symbolic visual language before generating this scene.

Revolutionary Girl Utena style by Chiho Saito/Be-Papas.

VISUAL STYLE:
- Bold, theatrical compositions
- Extensive rose and floral symbolism
- Surrealist architectural elements (floating stairs, impossible spaces)
- Shadow puppet silhouette sequences
- Art deco and art nouveau influenced designs
- Dramatic color contrasts
- Repeated symbolic imagery (roses, swords, stairs, castles)

CHARACTER DESIGN:
- Utena Tenjou: Pink hair, princely bearing, male uniform (shorts version)
- Anthy Himemiya: Long purple hair, mysterious, Rose Bride dress
- Student council members: Distinctive uniform designs, each with rose color
- Princely and princess archetypes subverted
- Elegant, elongated figure proportions

SIGNATURE ELEMENTS:
- Ohtori Academy's impossible architecture
- Dueling arena in the floating castle
- Rose crest rings and emblems
- Sword pulled from chest (Anthy)
- Shadow puppet narrative sequences
- Spiral staircase motifs
- Cars and technological anachronisms

Camera: Theatrical framing, dramatic angles, surrealist compositions, symbolic imagery emphasis
Color palette: Bold roses and pastels - pink (#FF69B4), white (#FFFFFF), deep red (#8B0000), purple (#800080), black (#1A1A1A)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Elegant, theatrical font with revolutionary spirit. Bold and artistic.',
        messageStyle: 'Dramatic, avant-garde typography matching the series artistic vision.',
        textReadability: 'Text color: White (#FFFFFF) or rose pink (#FF69B4) on dramatic backgrounds. Clean outline for theatrical clarity.'
    };
}

/**
 * Hanasakeru Seishounen Style Template (Epic Romance)
 */
function getHanasakeruTemplates() {
    return {
        basePrompt: `Think step-by-step about Hanasakeru Seishounen's elegant international setting and epic romance aesthetic before generating this scene.

Hanasakeru Seishounen (Flower of Youth) manga style by Natsumi Itsuki.

VISUAL STYLE:
- Elegant, detailed linework with bishonen beauty
- International luxury settings (palaces, hotels, nature)
- Sophisticated fashion and costume design
- Dramatic emotional expressions
- Soft flower and nature imagery
- Detailed background architecture
- Film-like cinematic compositions

CHARACTER DESIGN:
- Kajika Burnsworth: Unique beauty, mixed heritage features, wild nature childhood
- Li-Ren Fang: Chinese elegance, long dark hair, mysterious charm
- Eugene Alexander: European prince, blonde, refined nobility
- Rumaty Ivan: Strong features, Russian aristocracy
- Each suitor with distinct cultural aesthetic

SIGNATURE ELEMENTS:
- Leopard companion (Mustafa) from Kajika's childhood
- International luxury locations
- Political intrigue and romance blend
- Traditional cultural elements (Chinese, Russian, Middle Eastern)
- Elegant ball and formal event scenes
- Nature contrasted with civilization

Camera: Elegant wide shots of locations, intimate romantic moments, dramatic political scenes
Color palette: Rich, sophisticated tones - gold (#FFD700), deep green (#228B22), royal blue (#4169E1), cream (#FFFDD0)

Aspect ratio: 16:9 landscape orientation.`,
        fontStyle: 'Sophisticated, international font with elegant curves. Refined and worldly.',
        messageStyle: 'Elegant typography reflecting the series global scope and romance.',
        textReadability: 'Text color: Cream (#FFFDD0) or gold (#FFD700) on rich backgrounds. Subtle elegance without overwhelming imagery.'
    };
}
