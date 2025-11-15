# Farm Houses Website - Vanilla HTML/CSS/JavaScript Version

A pure HTML, CSS, and JavaScript implementation of the luxury farm houses booking website. No frameworks required!

## Features

✅ **Pure Vanilla Web Technologies**
- HTML5 for structure
- CSS3 for styling and animations
- Vanilla JavaScript (ES6+) for functionality
- No dependencies, no build process, no npm packages

✅ **Complete Functionality**
- Responsive navigation with mobile menu
- Image slider/carousel with full-size images
- Date range booking with WhatsApp integration
- Weekday and weekend pricing display
- Smooth animations and transitions
- Mobile-first responsive design

✅ **Easy Customization**
- All data in single `data.js` file
- Clear comments showing where to make changes
- Simple to update images, prices, and content

---

## File Structure

```
html-version/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── data.js             # Farm houses data
└── README.md           # This file
```

---

## Quick Start

### 1. Open the Website

Simply open `index.html` in any modern web browser:

- **Double-click** `index.html`
- Or **right-click** → Open with → Your Browser
- Or drag `index.html` into your browser window

That's it! No installation, no build process needed.

### 2. Customize Your Content

All customization can be done in `data.js`. See the Customization Guide below.

---

## Customization Guide

### Update Farm House Data

**File:** `data.js`

Each farm house has this structure:

```javascript
'FarmName': {
    id: 'farm-id',
    name: 'Farm Name',
    instagram: 'https://www.instagram.com/handle',
    mapUrl: 'https://maps.app.goo.gl/your-location',
    images: [
        'https://your-image-1.jpg',
        'https://your-image-2.jpg',
        // ... 7 images total
    ],
    videos: [
        'https://player.vimeo.com/video/XXXXX',
        // ... 3 videos total
    ],
    description: 'Your farm description here',
    amenities: ['Pool', 'WiFi', 'Bonfire', ...],
    price: 5000,  // Weekday price
    phone: '7981634286'
}
```

### Change Phone Number

**File:** `data.js` (Line 11)

```javascript
const WHATSAPP_PHONE = '7981634286'; // ← CHANGE THIS
```

### Change Homepage Background

**File:** `styles.css` (Line 212)

```css
.hero-section {
    background: url('YOUR_IMAGE_URL_HERE.jpg') center/cover;
}
```

Or **File:** `index.html` (Add inline style)

```html
<section id="home" class="hero-section" style="background: url('YOUR_IMAGE.jpg') center/cover;">
```

### Update Farm Images

Replace URLs in the `images` array in `data.js`:

```javascript
images: [
    'https://your-image-1.jpg',  // ← First image shows on card
    'https://your-image-2.jpg',
    // ... more images
]
```

### Update Pricing

Change the `price` property (weekday price). Weekend price is automatically calculated as 2x:

```javascript
price: 5000,  // ← Weekday: ₹5000, Weekend: ₹10000
```

---

## How It Works

### Image Slider

The slider is built with vanilla JavaScript:

- **Previous/Next buttons** to navigate
- **Dot indicators** show current slide
- **Supports images and videos** (Vimeo/YouTube)
- **Full-size images** using `object-fit: contain`

### Booking System

1. User selects check-in and check-out dates
2. System calculates number of days
3. Shows pricing summary with weekday/weekend rates
4. Sends booking request via WhatsApp

### WhatsApp Integration

When user submits the form, it:
1. Collects all booking information
2. Formats it into a message
3. Opens WhatsApp with pre-filled message
4. User just needs to click "Send"

---

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome / Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Responsive Design

The website is fully responsive:

- **Desktop:** Full layout with sidebar
- **Tablet:** Adjusted grid layout
- **Mobile:** Single column, hamburger menu

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Customization Checklist

### Required Changes:

- [ ] Update `WHATSAPP_PHONE` in `data.js`
- [ ] Replace farm house images in `data.js`
- [ ] Update map URLs for each farm in `data.js`
- [ ] Change pricing in `data.js`
- [ ] Update Instagram links in `data.js`
- [ ] Replace homepage background in `styles.css`

### Optional Changes:

- [ ] Modify colors in `:root` section of `styles.css`
- [ ] Update farm descriptions in `data.js`
- [ ] Change amenities list in `data.js`
- [ ] Add/remove farms from `data.js`
- [ ] Customize fonts in `index.html` (Google Fonts)

---

## Adding a New Farm House

1. Open `data.js`
2. Copy an existing farm house object
3. Paste it with a new name
4. Update all properties (images, price, etc.)
5. Save the file

Example:

```javascript
'MyNewFarm': {
    id: 'mynewfarm',
    name: 'My New Farm',
    instagram: 'https://www.instagram.com/mynewfarm',
    mapUrl: 'https://maps.app.goo.gl/example',
    images: ['url1', 'url2', ...],
    videos: ['vimeo-url1', ...],
    description: 'Amazing new farm description',
    amenities: ['Pool', 'WiFi', ...],
    price: 8000,
    phone: '7981634286'
}
```

---

## Deployment

### Option 1: Simple Web Hosting

Upload all 4 files to any web host:
- Netlify (Free)
- Vercel (Free)
- GitHub Pages (Free)
- Any web hosting service

### Option 2: Local Testing

Use a local server (recommended):

**Python:**
```bash
python -m http.server 8000
```

**Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000`

### Option 3: Direct File Access

Simply open `index.html` in your browser (works but some features may be limited).

---

## Features Overview

### Homepage
- ✅ Hero section with background image
- ✅ Navigation with smooth scroll
- ✅ Farm houses grid with cards
- ✅ Hover effects and animations
- ✅ Footer with contact info

### Farm Detail Page
- ✅ Back to home button
- ✅ Full-screen image slider
- ✅ Farm description and amenities
- ✅ Google Maps integration
- ✅ Pricing display (weekday/weekend)
- ✅ Contact information
- ✅ Social media links
- ✅ Reserve now button

### Booking Modal
- ✅ Customer information form
- ✅ Date range picker
- ✅ Duration calculator
- ✅ Pricing summary
- ✅ WhatsApp integration
- ✅ Form validation

---

## Troubleshooting

### Images not loading?
- Check image URLs are valid and accessible
- Verify HTTPS URLs (mixed content issues)
- Check browser console for errors

### WhatsApp not opening?
- Verify phone number format (10 digits)
- Check `WHATSAPP_PHONE` constant in `data.js`
- Ensure WhatsApp is installed (mobile)

### Slider not working?
- Check browser console for errors
- Verify image/video URLs are correct
- Try refreshing the page

### Styling issues?
- Clear browser cache
- Check CSS file is loading
- Verify file paths are correct

---

## Performance Tips

1. **Optimize Images:**
   - Use compressed images (JPG/WebP)
   - Recommended size: 1920x1080px
   - Keep file size under 500KB

2. **Fast Loading:**
   - Use CDN for images
   - Enable browser caching
   - Minify CSS/JS for production

3. **Mobile Performance:**
   - Images load lazily
   - Responsive breakpoints
   - Touch-friendly interactions

---

## Advanced Customization

### Change Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;    /* Blue */
    --secondary-color: #16a34a;  /* Green */
    --text-dark: #1f2937;
    /* Add more custom colors */
}
```

### Modify Animations

All animations are in `styles.css`:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Add More Pages

1. Create a new HTML file
2. Copy navigation from `index.html`
3. Link stylesheets and scripts
4. Add your content

---

## Support

For questions or issues:
- Check this README first
- Review code comments
- Test in different browsers
- Clear cache and try again

---

## License

Free to use and modify for your projects.

---

## Credits

- **Fonts:** Google Fonts (Playfair Display, Inter)
- **Icons:** Inline SVG icons
- **Images:** Pexels (stock photos)
- **Design:** Modern, responsive, production-ready

---

**Enjoy your luxury farm houses website!** 🏡✨
