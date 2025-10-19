# Senior High School Promotional Website - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from premium educational institutions (modern university sites, international schools) with emphasis on visual storytelling and community showcase. The design will convey academic excellence, vibrant student life, and institutional trust through rich imagery and clean, professional layouts.

**Core Principles**:
- Visual-first storytelling showcasing student achievements and campus life
- Professional yet approachable aesthetic balancing tradition with modernity
- Clear hierarchy guiding prospective students and parents through key information
- Trustworthy and authoritative presentation

## Color Palette

**Primary Colors (Trust & Academia)**:
- Deep Navy: 220 85% 25% (main brand, headers, trust elements)
- Academic Blue: 210 100% 45% (links, CTAs, accents)

**Supporting Colors**:
- Warm Gold: 40 75% 55% (achievements, highlights, badges)
- Clean White: 0 0% 100% (backgrounds, breathing room)
- Soft Gray: 220 10% 96% (section backgrounds, subtle contrast)
- Text Dark: 220 20% 20% (body text)
- Text Medium: 220 15% 45% (secondary text)

**Light Mode Dominance**: Primary light backgrounds with strategic dark navy sections for visual contrast and hierarchy.

## Typography

**Font Families** (Google Fonts):
- **Headings**: 'Playfair Display' - serif, elegant, academic
- **Body**: 'Inter' - sans-serif, clean, highly readable
- **Accents**: 'Inter' medium/semibold for labels and captions

**Scale**:
- Hero H1: text-5xl md:text-7xl, font-bold
- Section H2: text-3xl md:text-5xl, font-bold
- Card H3: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg, leading-relaxed
- Captions: text-sm, text-medium-gray

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (consistent rhythm)
- Component padding: p-6 md:p-8
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-6

**Grid System**: 
- Feature grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Content splits: 60/40 ratio (content/image)
- Photo galleries: Masonry-style or 3-4 column grid

## Component Library

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Logo left, menu items center-right, CTA button right
- Mobile: Hamburger menu with slide-in overlay
- Links: Smooth scroll behavior, active state indicators

### Hero Section (Main Page)
**Large Hero Image**: Full-width, high-quality photo of campus or students in action
- Height: 85vh on desktop, 70vh mobile
- Overlay: Subtle dark gradient (bottom-to-top) for text legibility
- Content: Centered, bold headline + subheadline + dual CTAs
- CTAs: "Apply Now" (solid blue) + "Virtual Tour" (outline with backdrop-blur)

### About Page Layout
- Hero banner with mission statement
- Timeline/milestones section (horizontal scroll or vertical)
- Programs grid (3 columns) with icons and descriptions
- Faculty showcase with photo cards
- Achievements/statistics counter section

### Photo Gallery
- Masonry grid layout showcasing student life, facilities, events
- Lightbox viewer on click (modal with navigation)
- Categories/filters: Campus, Events, Sports, Academics, Student Life
- Lazy loading for performance

### Video Section
- Featured video player (embedded YouTube/Vimeo) with custom controls
- Thumbnail grid for additional videos (2x2 or 3x3)
- Play button overlay on thumbnails
- Captions describing each video

### Contact Page
- Two-column layout: Contact form (60%) + Info sidebar (40%)
- Form fields: Name, Email, Phone, Subject, Message
- Info sidebar: Address, phone, email, office hours, embedded Google Maps
- Social media links

### Cards & Components
- Rounded corners: rounded-xl throughout
- Shadows: shadow-lg for elevation, shadow-md for cards
- Hover states: subtle scale transform (scale-105) + shadow increase
- Images: Always aspect-ratio-16/9 or aspect-ratio-4/3, object-cover

## Images Strategy

**Hero Image**: Inspiring campus shot - students collaborating, modern facilities, or aerial campus view (large, impactful, professionally shot)

**Section Images**:
- About: Administrative building, classroom scenes, laboratory equipment
- Programs: Subject-specific imagery (science lab, sports field, arts studio)
- Gallery: 20-30+ diverse photos showing student life, events, achievements
- Faculty: Professional headshots with consistent style

**Image Treatment**: High resolution, natural lighting, authentic moments (not stock photos), consistent color grading

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:
- Hamburger menu replaces horizontal navigation
- Hero text sizes scale down appropriately
- Grids collapse to single column
- Touch-friendly button sizes (min-height: 44px)
- Images maintain aspect ratios, no cropping critical content

## Animations

**Minimal, purposeful animations**:
- Scroll-triggered fade-ins for sections (IntersectionObserver)
- Navigation transition (transparent to solid)
- Smooth scrolling between sections
- Hover states on cards (subtle transform)
- **Avoid**: Excessive parallax, distracting motion, auto-playing carousels

## Accessibility & Polish

- High contrast ratios (WCAG AA minimum)
- Focus states visible on all interactive elements
- Alt text for all images describing content
- Semantic HTML structure (header, nav, main, section, footer)
- Form labels and error states
- Keyboard navigation support

**Performance**:
- Lazy loading for images below fold
- Optimized image formats (WebP with fallbacks)
- Minified CSS/JS
- CDN delivery for fonts and libraries

This design creates a polished, trustworthy promotional website that showcases your school's excellence through compelling visuals and clear, accessible information architecture.