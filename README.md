# Landing Page - Rapid MVP Development

A clean, minimal landing page for freelance MVP development services.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

Before deploying, update the following:

1. **Your Name/Brand**: Replace "Your Name" in:
   - `app/page.tsx` (header and footer)
   - `app/layout.tsx` (metadata title)

2. **Contact Information**: Update in the Contact section:
   - Email address
   - Calendar link (cal.com)

3. **Project Screenshots**: Replace the placeholder divs in the Recent Projects section with actual screenshots:
   - Add images to `public/` folder
   - Update the image paths in `app/page.tsx`

4. **Project Links**: Update the "View Live" links with actual URLs

## Deployment

Deploy to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Design

- Clean white background with gray accents
- Blue (#2563eb) as the accent color for CTAs
- Inter font for typography
- Max width: 1200px (6xl in Tailwind)
- Fully responsive, single column on mobile

