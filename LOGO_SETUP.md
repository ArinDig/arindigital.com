# Logo Setup Instructions

## Required Logo Files

You need to add the following logo files to the `/public` directory:

### 1. `logo-transparent.png`
- This should be your logo with a **transparent background**
- Recommended size: 200x200 pixels or larger
- Used in: Navigation bar, footer, and throughout the site
- Format: PNG with transparency

### 2. `og-image.png` (Open Graph Image)
- This is the image that appears when your site is shared on social media
- Recommended size: 1200x630 pixels
- Can be your logo on a colored background or a branded banner
- Format: PNG or JPG

## How to Add the Logos

### Option 1: Using Finder (macOS)

1. Open Finder
2. Navigate to: `Documents/Arin Digital Innovations/Website/Cursor_ADI/public`
3. Drag and drop your logo files into this directory
4. Ensure they are named exactly:
   - `logo-transparent.png`
   - `og-image.png`

### Option 2: Using Terminal

```bash
# Navigate to the public directory
cd "/Users/arinbrown/Documents/Arin Digital Innovations/Website/Cursor_ADI/public"

# Copy your logo files (update the source paths to where your logos are located)
cp /path/to/your/logo-transparent.png ./logo-transparent.png
cp /path/to/your/og-image.png ./og-image.png
```

## Logo Specifications

### Logo Transparent (logo-transparent.png)
- **Use Case**: Navigation bar, footer, general site usage
- **Background**: Transparent
- **Recommended Dimensions**: 200x200px minimum, 500x500px ideal
- **Format**: PNG
- **Color Mode**: RGB
- **File Size**: Keep under 100KB for optimal performance

### Open Graph Image (og-image.png)
- **Use Case**: Social media sharing (Facebook, Twitter, LinkedIn)
- **Background**: Can have background color (use your brand color)
- **Required Dimensions**: 1200x630px (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **Color Mode**: RGB
- **File Size**: Keep under 300KB
- **Content**: Should include your logo and possibly tagline

## Creating an Open Graph Image

If you don't have an og-image.png yet, you can create one:

1. **Use the logo with colored background** you uploaded
2. **Resize it** to 1200x630 pixels
3. **Add text** (optional): "Arin Digital Innovations - AI & Digital Marketing in Austin, TX"
4. **Export** as PNG or JPG at high quality
5. **Save** as `og-image.png`

### Quick Tools for Creating OG Images:
- [Canva](https://canva.com) - Free online tool
- [Figma](https://figma.com) - Professional design tool
- Preview (macOS) - Simple resizing
- Photoshop/GIMP - Advanced editing

## Verification

After adding your logos, verify they appear correctly:

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Check these pages**:
   - Navigation bar (top of every page) - should show `logo-transparent.png`
   - Footer (bottom of every page) - should show `logo-transparent.png`

3. **Check Open Graph tags**:
   - Share a link to your site on Facebook/LinkedIn (after deployment)
   - Or use [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

## Troubleshooting

### Logo Not Appearing
1. Verify file names are exactly: `logo-transparent.png` and `og-image.png` (case-sensitive)
2. Verify files are in the `/public` directory
3. Clear browser cache (Cmd+Shift+R on macOS)
4. Restart development server

### Logo Looks Pixelated
1. Use a higher resolution logo
2. Ensure you're using PNG format with transparency
3. Export at 2x or 3x resolution for retina displays

### Wrong Logo Showing
1. Clear browser cache
2. Delete `.next` folder and restart dev server
3. Verify file names match exactly

## Current Logo Colors (from your uploaded logos)

Based on your logo files:
- **Primary Blue**: #5ba3d0 (light blue)
- **Navy Blue**: #0d2e4f (dark blue)
- **White**: #ffffff (text and inner elements)

These colors are already configured in the Tailwind config and used throughout the site.

---

**Note**: The logo images you uploaded in the chat are available. You'll need to save them to the public directory with the correct filenames.

