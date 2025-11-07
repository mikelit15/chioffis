# Cioffi's Italian Restaurant - Modern Website

A modern, sleek redesign of the Cioffi's Italian Restaurant website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🍝 About Cioffi's

Cioffi's has been serving authentic Italian cuisine in New Jersey since 1958. This website showcases three generations of the Cioffi family's dedication to quality Italian food and exceptional service.

## ✨ Features

- **Modern Design**: Sleek, contemporary interface with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- **SEO Optimized**: Proper metadata and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type Safe**: Built with TypeScript for better code quality and developer experience

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Deployment Ready**: Optimized for Vercel deployment

## 📁 Project Structure

```
chioffis/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Home page
│   ├── our-story/          # Our Story page
│   ├── catering/           # Catering services page
│   ├── contact/            # Contact page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Responsive navigation component
│   ├── Footer.tsx          # Footer component
│   └── Hero.tsx            # Reusable hero section component
└── public/                 # Static assets
```

## 🎨 Design Features

### Color Scheme
- Primary: Red (#B91C1C) - Traditional Italian restaurant color
- Accent: Various shades of red and gray
- Background: White and light gray for clean, modern look

### Typography
- **Headings**: Playfair Display (serif) - Elegant and classic
- **Body**: Inter (sans-serif) - Modern and highly readable

### Animations
- Fade-in animations on page load
- Smooth hover effects on buttons and cards
- Responsive mobile menu with slide animation
- Scroll-based navigation background change

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd chioffis
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Welcome message
- Feature highlights (History, Quality, Catering)
- Call-to-action section

### Our Story (`/our-story`)
- Family history timeline
- Journey from 1958 to present
- Core values section

### Catering (`/catering`)
- Service offerings
- Event types (Weddings, Corporate, Private Parties)
- Why choose Cioffi's
- Contact call-to-action

### Contact (`/contact`)
- Location information
- Phone number
- Interactive map
- Quick action cards

## 🎯 Key Improvements from Original

1. **Modern UI/UX**: Contemporary design with smooth animations
2. **Better Performance**: Next.js optimization and lazy loading
3. **Mobile-First**: Fully responsive design
4. **Better SEO**: Proper metadata and semantic HTML
5. **Accessibility**: WCAG compliant
6. **Type Safety**: TypeScript for better code quality
7. **Component Architecture**: Reusable, maintainable components

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

This project is created for Cioffi's Italian Restaurant.

## 🤝 Contributing

This is a client project. For any changes or improvements, please contact the development team.

---

Built with ❤️ for Cioffi's Italian Restaurant
