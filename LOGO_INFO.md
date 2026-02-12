# Logo Information

## Current Logo Setup

The project now includes SVG logos that will display correctly:

### Files Created:
1. **`/public/icon.svg`** - Small 32x32 icon (used in navbar)
2. **`/public/logo.svg`** - Large 200x200 logo (for other uses)

### Design:
- Yellow circular background (#FCD34D)
- Black brain-lightbulb illustration
- Light rays emanating from the top
- Simplified design that scales well

## Using Your Custom Logo

If you want to use your own PNG logo instead:

### Option 1: Replace the SVG
1. Save your logo as `/public/icon.svg` (for best quality)
2. The logo will automatically update

### Option 2: Use PNG
1. Save your logo as `/public/logo.png`
2. Update `components/Layout.tsx`:
   ```tsx
   <img 
     src="/logo.png"  // Change from /icon.svg
     alt="IgniteXT Logo" 
     className="w-8 h-8 rounded-full transition-transform group-hover:scale-110 shrink-0 object-cover"
   />
   ```

### Option 3: Use External URL
```tsx
<img 
  src="https://your-cdn.com/logo.png"
  alt="IgniteXT Logo" 
  className="w-8 h-8 transition-transform group-hover:scale-110 shrink-0"
/>
```

## Logo Specifications

### Navbar Logo:
- Size: 32x32 pixels (displayed at 8x8 in Tailwind units)
- Format: SVG (recommended) or PNG
- Background: Transparent or circular

### Favicon:
- Automatically uses `/public/icon.svg`
- Shows in browser tab
- Size: 32x32 pixels

### Large Logo:
- Use `/public/logo.svg` for larger displays
- Size: 200x200 pixels
- Can be used in hero sections, about pages, etc.

## Troubleshooting

### Logo not showing?
1. Check browser console for 404 errors
2. Verify file exists in `/public/` folder
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check file permissions

### Logo showing as "?" or broken image?
1. File might be corrupted
2. Wrong file path
3. File format not supported
4. Try using SVG format instead

### Logo too large/small?
Adjust the Tailwind classes in `components/Layout.tsx`:
- `w-8 h-8` = 32x32 pixels
- `w-10 h-10` = 40x40 pixels
- `w-12 h-12` = 48x48 pixels

## Current Implementation

The logo is used in:
- **Navbar** (`components/Layout.tsx`) - Top left corner
- **Favicon** (`index.html`) - Browser tab icon
- Can be added to footer, hero section, etc.

## Customization

To change logo colors in the SVG:
1. Open `/public/icon.svg` in a text editor
2. Find `fill="#FCD34D"` (yellow background)
3. Change to your brand color
4. Find `stroke="#1F2937"` (dark lines)
5. Change to your preferred color

Example:
```svg
<!-- Change yellow to blue -->
<circle cx="16" cy="16" r="16" fill="#3B82F6"/>

<!-- Change black to white -->
<path ... stroke="#FFFFFF" ... />
```

## Best Practices

1. **Use SVG when possible** - Scales perfectly at any size
2. **Keep it simple** - Complex logos don't work well at small sizes
3. **High contrast** - Ensure logo is visible on dark backgrounds
4. **Square aspect ratio** - Works best for circular containers
5. **Transparent background** - For PNG files

## Need Help?

If you have a logo file but need help implementing it:
1. Place the file in `/public/` folder
2. Note the filename (e.g., `my-logo.png`)
3. Update the `src` attribute in `components/Layout.tsx`
4. Refresh the browser

The logo should now display correctly!
