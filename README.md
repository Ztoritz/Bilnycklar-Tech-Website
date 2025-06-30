# Bilnycklar Tech Website

A modern, responsive website for Bilnycklar Tech - a technology company specializing in software development, cloud computing, and technology consulting services.

## Features

- **Modern Design**: Clean, professional layout with a light theme
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized images and fast loading times
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Compelling introduction with call-to-action
2. **About Section**: Company mission, values, and statistics
3. **Services Section**: Three main service offerings with detailed descriptions
4. **Team Section**: Professional team showcase
5. **Contact Section**: Contact information and inquiry form
6. **Footer**: Company branding and copyright

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: shadcn/ui components
- **Icons**: Lucide React icons
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Development

### Prerequisites
- Node.js 20+
- pnpm

### Installation
```bash
cd bilnycklar-tech
pnpm install
```

### Development Server
```bash
pnpm run dev
```
Visit http://localhost:5173 to view the website.

### Build for Production
```bash
pnpm run build
```

## Deployment

This website is configured for deployment with Coolify using Docker. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy with Coolify
1. Connect your Git repository to Coolify
2. Set domain to `bilnyckel.tech`
3. Deploy using the included Docker configuration

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── ui/         # shadcn/ui components
├── App.jsx         # Main application component
├── App.css         # Custom styles and animations
└── main.jsx        # Application entry point
```

## Customization

### Colors
The website uses a blue-based color scheme:
- Primary: Deep blue (#1e3a8a)
- Secondary: Light blue (#3b82f6)
- Accent: Bright cyan (#06b6d4)

### Images
All images are stored in `src/assets/` and are optimized for web use. Replace with your own images as needed.

### Content
Update the content in `App.jsx` to match your company's information, services, and branding.

## Performance

- Optimized images with proper sizing
- Lazy loading for images
- Minified CSS and JavaScript
- Gzip compression (when deployed)
- Browser caching headers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Bilnycklar Tech. All rights reserved.

## Contact

For questions about this website:
- Email: hello@bilnyckel.tech
- Phone: +1 (555) 123-4567

