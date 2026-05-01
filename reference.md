Role: You are a world-class Creative Developer and UI/UX Designer 
specializing in Awwwards-winning luxury education consultancy websites. 
You are an expert in Next.js 14, TypeScript, Tailwind CSS, GSAP, 
and Framer Motion.

Objective: Build a complete, production-ready, high-performance website 
for "Beyond Borders NZ", a premium education consultancy based in 
New Zealand that helps international students get into top universities. 
The site must feel premium, cinematic, and trustworthy.

Tech Stack:
- Framework: Next.js 14 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v3
- Animation: Framer Motion, GSAP ScrollTrigger
- Smooth Scroll: Lenis (@studio-freight/lenis)
- Forms: React Hook Form + Zod
- Deployment: Netlify

1. DESIGN & AESTHETIC SYSTEM

Theme: "Oxford meets New Zealand" — dark prestigious academia.
Default: Dark mode (#0c0c0c deep navy).

Typography:
- Headlines: Cormorant Garamond (Serif)
- Body: Outfit (Sans-serif)
- Tags: Space Mono

Colors:
- Background: #0c0c0c (Deep Navy)
- Primary Accent: #C8A96E (Prestige Gold)
- Secondary: #FAFAF8 (Off White)
- Mid Navy: #1A3A5C
- Glassmorphism: bg-white/5 backdrop-blur-md border border-white/10

2. CANVAS SCROLL ANIMATION

HeroScroll.tsx:
- Canvas-based scrollytelling
- h-[500vh] sticky container
- Load 300 frames from /public/sequence-1/
- Files named: ezgif-frame-001.jpg to ezgif-frame-300.jpg
- Scroll progress 0 to 1 maps to frame 1 to 300
- useSpring for smooth spring physics animation
- filter: contrast(1.05) saturate(1.1) on canvas for cinematic sharpness
- Dark gradient overlay bottom for text readability
- Gold progress bar loading state

CINEMATIC TEXT OVERLAYS:

Frames 1-75 (Clouds → Ocean → New Zealand):
  Headline: "The World Is Waiting For You"
  Subtext: "New Zealand's Premier Education Consultancy"
  Animation: fade in at frame 10, fade out at frame 65

Frames 76-150 (Aerial Campus → Clock Tower):
  Headline: "New Zealand's Finest Universities"
  Subtext: "University of Otago · Auckland · Victoria · Canterbury"
  Animation: fade in at frame 85, fade out at frame 140

Frames 151-225 (Library Interior):
  Headline: "You Deserve World-Class Education"
  Subtext: "What are you waiting for?"
  Animation: fade in at frame 160, fade out at frame 215

Frames 226-300 (Classroom → Open Book):
  Headline: "Your Future Starts Here"
  Subtext: "500+ students placed. 98% visa success rate."
  CTA Button: "START YOUR JOURNEY →"
  Button: gold background #C8A96E, navy text, uppercase
  Animation: fade in at frame 235, stays visible until end

3. NAVIGATION

Navbar.tsx:
- Fixed position top
- Transparent to frosted glass blur on scroll
- Logo left: "Beyond Borders NZ"
  Font: Cormorant Garamond
  "Borders" in gold italic
- Links: About, Services, Universities, Process, Contact
- CTA right: "FREE CONSULTATION"
  Gold background, navy text, uppercase, tracked

4. STATS BAR

StatsBar.tsx:
- Full width gold background #C8A96E
- Animated number counters trigger on scroll into view
- Four stats:
  "500+" — Students Placed
  "98%" — Visa Success Rate
  "40+"  — Partner Universities
  "12"   — Countries Served
- Font: Cormorant Garamond large numbers, navy color
- Labels: Outfit small uppercase tracked, navy/70

5. SERVICES GRID

ServicesGrid.tsx:
- Section heading: "Everything You Need to Get There"
- Subheading: "Expert guidance at every step of your journey"
- 3x2 bento grid layout
- Glassmorphism cards: bg-white/5 backdrop-blur-md border border-white/10
- Gold border on hover
- Hover lifts card slightly

Six service cards:
Card 1:
  Icon: graduation cap
  Title: "University Placement"
  Description: "Personalised matching to NZ universities based on
  your academic profile, budget, and career goals."

Card 2:
  Icon: passport
  Title: "Visa Consultation"
  Description: "Expert guidance through New Zealand student visa
  applications with a 98% success rate."

Card 3:
  Icon: document
  Title: "SOP & Application Writing"
  Description: "Compelling statements of purpose crafted by
  former university admissions advisors."

Card 4:
  Icon: book
  Title: "English Proficiency Prep"
  Description: "IELTS and PTE coaching with tailored study
  plans and mock tests to meet entry requirements."

Card 5:
  Icon: plane
  Title: "Pre-Departure Support"
  Description: "From accommodation to bank accounts — arrive
  in New Zealand fully prepared and confident."

Card 6:
  Icon: handshake
  Title: "Post-Arrival Support"
  Description: "Orientation assistance, part-time work guidance,
  and ongoing welfare check-ins throughout your studies."

6. FEATURED UNIVERSITIES

FeaturedUni.tsx:
- Section heading: "Featured Universities"
- Subheading: "Handpicked institutions for your future"
- 3 column cinematic card grid on desktop
- Single column stack on mobile
- Each card: full bleed background image
- Dark gradient overlay bottom 50%
- Image zoom 5% on hover
- Card lifts slightly on hover

Card 1 — American College Cyprus:
  Background: Mediterranean campus image, warm golden sunlight,
              blue sky, white architecture
  Tag: "NICOSIA, CYPRUS 🇨🇾"
  University: "American College Cyprus"
  Tagline: "Mediterranean Excellence"
  Description: "A globally recognised American-curriculum college
  set in the heart of Cyprus. Business, IT, Law and
  Hospitality programs in a stunning Mediterranean setting."
  Button: "EXPLORE PROGRAMS →"
  Overlay accent: gold

Card 2 — University of Otago:
  Background: Aerial autumn Otago campus, clock tower,
              vivid blue Leith river, orange red autumn trees
  Tag: "DUNEDIN, NEW ZEALAND 🇳🇿"
  University: "University of Otago"
  Tagline: "New Zealand's Finest"
  Description: "New Zealand's first university, ranked among the
  world's best. Medicine, Law, Business, and Science
  programs on one of the world's most beautiful campuses."
  Button: "EXPLORE PROGRAMS →"
  Overlay accent: gold

Card 3 — AIS St Helens Auckland:
  Background: Modern contemporary campus building,
              bright interiors, Auckland city feel
  Tag: "AUCKLAND, NEW ZEALAND 🇳🇿"
  University: "AIS St Helens"
  Tagline: "Business & Hospitality Leadership"
  Description: "Auckland's leading business and hospitality school.
  Practical industry-focused programs in the heart of
  Auckland city, preparing graduates for global careers."
  Button: "EXPLORE PROGRAMS →"
  Overlay accent: gold

7. PROCESS SECTION

Process.tsx:
- Section heading: "Your Path to New Zealand"
- Subheading: "Four simple steps to your dream university"
- Horizontal timeline on desktop, vertical on mobile
- Roman numerals I II III IV
- Gold SVG connecting line between steps
- Each step animates in on scroll

Step I:   "Free Consultation"
          "Meet our counsellors to discuss your goals,
          qualifications, and preferred institutions."

Step II:  "University Matching"
          "We shortlist the best-fit universities based
          on your profile and career aspirations."

Step III: "Application & Visa"
          "Full application support, document preparation,
          and visa lodgement handled for you."

Step IV:  "Arrive & Succeed"
          "Pre-departure briefings, arrival support, and
          ongoing check-ins throughout your studies."

8. TESTIMONIALS

TestimonialSection.tsx:
- Section heading: "Students Who Made It"
- Subheading: "Real students. Real results."
- 3 dark glassmorphism cards
- Gold large quote marks
- Name, country flag, university placed

Testimonial 1:
  Quote: "Beyond Borders NZ changed my life. Within 3 months
  I had my offer letter from University of Otago and my
  visa approved. I could not have done this without them."
  Name: Priya Sharma
  Country: India 🇮🇳
  Placed at: University of Otago

Testimonial 2:
  Quote: "The team handled everything from my SOP to my visa
  application. I just had to focus on preparing for my
  new life in New Zealand. Absolutely world class service."
  Name: Rahul Mehta
  Country: Nepal 🇳🇵
  Placed at: University of Auckland

Testimonial 3:
  Quote: "Professional, fast, and genuinely caring. Best
  decision I ever made was choosing Beyond Borders NZ.
  My student visa was approved in under 4 weeks."
  Name: Sara Kim
  Country: South Korea 🇰🇷
  Placed at: Victoria University of Wellington

9. CONTACT SECTION

ContactForm.tsx:
- Section heading: "Ready to Cross Borders?"
- Subheading: "Book your free 30-minute consultation today.
  No obligations, just honest guidance."
- Split screen layout on desktop
- Left side: contact information
  Location: Auckland, New Zealand
  Email: hello@beyondbordersnz.co.nz
  Phone: +64 9 123 4567
  Hours: Monday to Friday 9am to 6pm NZST
- Right side: glassmorphic form
  Fields: Full Name, Email Address, Country,
          Course Interest (dropdown), Message
  Submit button: "BOOK FREE CONSULTATION"
  Gold background, navy text, full width
- Form validation with React Hook Form and Zod

10. FOOTER

Footer.tsx:
- Background: #0c0c0c deep navy
- Border top: gold/20
- Logo: "Beyond Borders NZ" Cormorant Garamond
  "Borders" in gold italic
- Tagline: "New Zealand's Education Gateway · Est. 2018"
- Three columns:
  Column 1 — Services:
    University Placement
    Visa Consultation
    SOP Writing
    English Prep
  Column 2 — Universities:
    University of Otago
    University of Auckland
    Victoria University
    AIS St Helens
    American College Cyprus
  Column 3 — Contact:
    Auckland, New Zealand
    hello@beyondbordersnz.co.nz
    +64 9 123 4567
    Mon-Fri 9am-6pm NZST
- Bottom: copyright line
  "© 2026 Beyond Borders NZ. All rights reserved."
- Large faded text full width at very bottom:
  "BEYOND BORDERS"
  Font: Cormorant Garamond bold
  Size: 12vw
  Color: white/5
  Not selectable

11. PERFORMANCE

- Preload first 50 frames on initial load
- Lazy load remaining 250 frames in background
- Gold progress bar shown until frames ready
- Mobile fallback: static image if canvas fails
- requestAnimationFrame for 60fps canvas render
- DPR aware canvas scaling for retina displays
- next/font/google for Cormorant Garamond and Outfit

12. DEPLOYMENT

netlify.toml:
[build]
command = "npm run build"
publish = ".next"
[[redirects]]
from = "/*"
to = "/index.html"
status = 200

DELIVER:
Complete working Next.js 14 application.
Every component fully coded.
No placeholders. No TODO comments.
No missing imports.
Production ready.
Frames are in /public/sequence-1/
named ezgif-frame-001.jpg to ezgif-frame-300.jpg
Total: 300 frames.