from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, output_path):
    """Create a simple icon with gradient background and text"""
    img = Image.new('RGB', (size, size), color='white')
    draw = ImageDraw.Draw(img)
    
    # Create gradient background (blue to purple)
    for y in range(size):
        r = int(66 + (147 - 66) * y / size)
        g = int(133 + (112 - 133) * y / size)
        b = int(244 + (219 - 244) * y / size)
        for x in range(size):
            draw.point((x, y), fill=(r, g, b))
    
    # Add rounded rectangle effect
    margin = size // 8
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=size // 6,
        fill=None,
        outline='white',
        width=max(1, size // 32)
    )
    
    # Add "S" letter in center
    font_size = size // 2
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        font = ImageFont.load_default()
    
    text = "S"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - bbox[1]
    
    draw.text((x, y), text, fill='white', font=font)
    
    img.save(output_path, 'PNG')
    print(f"Created: {output_path}")

def create_banner(width, height, output_path):
    """Create banner image"""
    img = Image.new('RGB', (width, height), color='white')
    draw = ImageDraw.Draw(img)
    
    # Create gradient background
    for y in range(height):
        r = int(66 + (147 - 66) * y / height)
        g = int(133 + (112 - 133) * y / height)
        b = int(244 + (219 - 244) * y / height)
        for x in range(width):
            draw.point((x, y), fill=(r, g, b))
    
    # Add text
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
        small_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 12)
    except:
        font = ImageFont.load_default()
        small_font = font
    
    text = "Speech to Slide"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    x = (width - text_width) // 2
    draw.text((x, 45), text, fill='white', font=font)
    
    subtext = "AI-powered presentation creator"
    bbox2 = draw.textbbox((0, 0), subtext, font=small_font)
    subtext_width = bbox2[2] - bbox2[0]
    x2 = (width - subtext_width) // 2
    draw.text((x2, 85), subtext, fill='rgba(255,255,255,200)', font=small_font)
    
    img.save(output_path, 'PNG')
    print(f"Created: {output_path}")

# Create icons
os.makedirs('/Users/usedhonda/projects/GAS/slide_gen/assets', exist_ok=True)

create_icon(32, '/Users/usedhonda/projects/GAS/slide_gen/assets/icon_32.png')
create_icon(48, '/Users/usedhonda/projects/GAS/slide_gen/assets/icon_48.png')
create_icon(96, '/Users/usedhonda/projects/GAS/slide_gen/assets/icon_96.png')
create_icon(128, '/Users/usedhonda/projects/GAS/slide_gen/assets/icon_128.png')
create_banner(220, 140, '/Users/usedhonda/projects/GAS/slide_gen/assets/banner_220x140.png')

print("All icons created successfully!")
