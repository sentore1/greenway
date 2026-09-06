# Green Way Safaris - Rwanda

A Next.js website recreation based on the Green Way Safaris design, featuring a Rwanda travel company created by photographers who grew up in its forests and hills.

## Features

- **Hero Section**: Full-screen hero with compelling tagline
- **Encounters Section**: Wildlife encounters (gorillas, chimpanzees, golden monkeys, game drives, birding)
- **Cultural Encounters**: Museums, galleries, and home visits
- **Wild Places**: Luxury lodges and accommodations
- **Photography Experiences**: Two photography-focused travel options
- **Our Story**: Background of founders Gadi and Mussa
- **Impact Section**: Photography for good - supporting local organizations
- **Contact Form**: Plan your trip section with enquiry form
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Typography**: Using Cormorant Garamond font for elegant serif styling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Cormorant Garamond (Google Fonts)

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── EncountersIntro.tsx # Encounters introduction
│   ├── WildlifeEncounters.tsx # Wildlife experiences
│   ├── CulturalEncounters.tsx # Cultural experiences
│   ├── WildPlaces.tsx      # Lodges and accommodations
│   ├── Photography.tsx     # Photography experiences
│   ├── OurStory.tsx        # Company story
│   ├── Impact.tsx          # Social impact section
│   ├── PlanTrip.tsx        # Contact form
│   └── Footer.tsx          # Footer
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Home page
```

## Design Notes

The website follows a sophisticated, editorial design style with:

- Elegant serif typography (Cormorant Garamond)
- Generous whitespace and breathing room
- Muted color palette (neutrals, blacks, earth tones)
- Large, impactful typography
- Italicized taglines and emphasis text
- Wide letter-spacing for labels and headings
- Clean, minimal interface

## Customization

To add images:
1. Place images in the `public/` directory
2. Update component imports to use Next.js `Image` component
3. Replace background gradient placeholders with actual images

## Contact Information

- Email: hello@greenwaysafaris.com
- WhatsApp: +250 788 694 331
- Location: Kigali, Rwanda

---

Built with Next.js and Tailwind CSS
