# iMann Agency Website

A modern, award-style agency website built with React, Vite, Tailwind CSS, Framer Motion, and GSAP.

## Features

✨ **Modern Design**
- Dark, premium agency aesthetic
- Large bold typography
- Smooth scroll-based animations
- Page transition effects
- Hover effects and interactive elements
- Subtle parallax effects
- Fully responsive design

🎨 **Technology Stack**
- React 18.3+
- Vite
- Tailwind CSS
- Framer Motion (for React animations)
- GSAP (for advanced scroll animations)
- React Router DOM

📄 **Pages**
- Home (with hero, services, portfolio preview, about, clients, CTA)
- Services (service cards with features, process timeline)
- Portfolio (project grid with filtering and modal details)
- About (company story, timeline, team, values)
- Careers (culture, open positions, benefits)
- Contact (contact form, locations, FAQ)

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd imann
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   └── PageTransition.jsx
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── PortfolioPage.jsx
│   ├── CareersPage.jsx
│   ├── AboutPage.jsx
│   └── ContactPage.jsx
├── animations/         # Animation utilities
│   ├── variants.js
│   └── useScrollAnimations.js
├── App.jsx            # Main app component with routing
├── main.jsx           # React entry point
└── index.css          # Global styles

public/               # Static assets
index.html           # HTML entry point
package.json         # Dependencies and scripts
tailwind.config.js   # Tailwind configuration
postcss.config.js    # PostCSS configuration
vite.config.js       # Vite configuration
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  dark: '#0a0e27',
  'dark-light': '#1a1f3a',
  'dark-lighter': '#0f1219',
  accent: '#00d9ff',
  'accent-hover': '#00a8cc',
}
```

### Content
Replace placeholder content and images throughout the pages:
- Update company information in components
- Replace placeholder images with your own
- Modify text and descriptions

### Animations
- Framer Motion variants are defined in `src/animations/variants.js`
- GSAP scroll animations are in `src/animations/useScrollAnimations.js`
- Adjust animation timings and effects as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The website is optimized for performance:
- Code splitting with React Router
- Image optimization with lazy loading
- Smooth 60fps animations
- Efficient scroll triggers

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact hello@imann.agency

---

Built with ❤️ by the iMann Team
