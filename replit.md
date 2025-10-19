# Excellence Senior High School - Promotional Website

## Overview

This is a promotional website for Excellence Senior High School, built as a modern single-page application with server-side rendering capabilities. The project showcases the school's academic programs, facilities, student life, and provides a contact form for prospective students and parents. The website emphasizes visual storytelling through an image gallery, video content, and a professional design system inspired by premium educational institutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18+ with TypeScript, using Vite as the build tool and development server
- **Routing:** Wouter for client-side routing (lightweight React Router alternative)
- **State Management:** TanStack Query (React Query) for server state management
- **UI Framework:** Shadcn/ui components built on Radix UI primitives
- **Styling:** Tailwind CSS with custom design tokens following the New York style variant

**Design System:**
- Custom color palette with HSL-based CSS variables for theming
- Primary colors: Deep Navy (220 85% 25%) and Academic Blue (210 100% 45%)
- Typography: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- Responsive grid layouts with mobile-first approach
- Light mode dominant design with strategic dark sections for visual hierarchy

**Key Pages:**
- Home: Hero section with feature highlights
- About: School history, mission, and facilities showcase
- Gallery: Filterable image gallery with lightbox functionality
- Videos: Embedded video content with categorization
- Contact: Form with validation using React Hook Form and Zod schemas

**Component Organization:**
- Reusable UI components in `/client/src/components/ui/` (Shadcn pattern)
- Page-level components in `/client/src/pages/`
- Shared navigation and footer components
- Form validation using Zod schemas with Hookform resolvers

### Backend Architecture

**Server Framework:** Express.js with TypeScript
- RESTful API endpoints under `/api/*` prefix
- Custom middleware for request logging and error handling
- Integration with Vite dev server in development mode
- Static file serving for production builds

**API Structure:**
- `POST /api/contact`: Contact form submission endpoint with validation
- Input validation using Drizzle-Zod schemas
- Error responses with appropriate HTTP status codes

**Development Features:**
- Hot Module Replacement (HMR) via Vite
- Replit-specific plugins for development experience (cartographer, dev banner)
- Runtime error overlay for debugging

### Data Storage

**Database:** PostgreSQL via Neon serverless driver
- **ORM:** Drizzle ORM with type-safe queries
- **Schema Location:** `/shared/schema.ts`
- **Migrations:** Managed via Drizzle Kit in `/migrations` directory

**Data Models:**
- `contactSubmissions` table: Stores contact form submissions
  - Fields: id (UUID), name, email, phone (optional), subject, message, submittedAt (timestamp)
  - Validation: Email format, minimum character requirements for text fields

**In-Memory Storage Fallback:**
- MemStorage class provides temporary storage during development
- Implements the same interface as database storage for seamless switching
- Uses Map data structure with UUID keys

### External Dependencies

**UI Components & Styling:**
- Radix UI: Accessible component primitives (dialog, dropdown, toast, etc.)
- Tailwind CSS: Utility-first CSS framework
- Class Variance Authority: Component variant styling
- Embla Carousel: Touch-friendly carousel implementation

**Forms & Validation:**
- React Hook Form: Form state management
- Zod: Schema validation
- @hookform/resolvers: Integration between React Hook Form and Zod

**Database & Backend:**
- @neondatabase/serverless: PostgreSQL serverless driver
- Drizzle ORM: Type-safe database queries
- connect-pg-simple: PostgreSQL session store (available but not actively used)

**Development Tools:**
- Vite: Build tool and dev server
- TSX: TypeScript execution for development
- ESBuild: Production bundling
- @replit/vite-plugin-*: Replit-specific development enhancements

**Utilities:**
- date-fns: Date formatting and manipulation
- nanoid: Unique ID generation
- clsx & tailwind-merge: Conditional CSS class management
- Wouter: Lightweight routing solution

**Assets:**
- Generated images stored in `/attached_assets/generated_images/`
- Google Fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono (loaded via CDN)