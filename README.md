# 🚀 Modern Portfolio Website Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-Runtime-000000?style=for-the-badge&logo=bun&logoColor=white)

**A stunning, modern portfolio website template with AI chat integration, dark/light themes, and smooth animations.**

[🌟 Live Demo](https://max.a42.ch) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [🎨 Customization](#-customization-guide)

</div>

---

## ✨ Features

### 🎯 **Core Features**

- **🤖 AI Chat Assistant** - Integrated OpenRouter-powered chat with streaming responses
- **🌓 Dark/Light Theme** - Seamless theme switching with system preference detection
- **📱 Fully Responsive** - Mobile-first design that looks great on all devices
- **⚡ Performance Optimized** - Built with Next.js 15 and React 19 for blazing speed
- **🎨 Modern UI/UX** - Beautiful animations and hover effects throughout

### 🛠️ **Technical Highlights**

- **TypeScript** - Full type safety and better developer experience
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Tailwind CSS** - Utility-first styling with custom color palettes
- **Radix UI** - Accessible, unstyled UI primitives
- **Geist Font** - Modern typography with variable font support
- **ESLint + Prettier** - Consistent code formatting and quality
- **Docker Ready** - Production-ready containerization

### 📄 **Sections Included**

- **Hero Section** - Eye-catching introduction with video backgrounds
- **AI Chat** - Interactive AI assistant for visitors
- **Skills** - Visual skill representation with progress bars
- **About** - Personal story and background
- **Projects** - Showcase of work and achievements
- **Resume** - Professional experience timeline
- **Contact** - Easy ways to get in touch

---

## 🚀 Quick Start

### Prerequisites

- **Bun** (recommended) or Node.js 18+
- **Git** for version control

### 1. Fork & Clone

```bash
# Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/my-next-js-page.git
cd my-next-js-page
```

### 2. Install Dependencies

```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### 3. Environment Setup

```bash
# Copy the environment template
cp .env.example .env.local

# Add your OpenRouter API key for AI chat functionality
OPENROUTER_API_KEY=your_api_key_here
```

### 4. Start Development Server

```bash
# Using Bun
bun dev

# Or using npm
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site! 🎉

---

## 🎨 Customization Guide

### 🎯 **Quick Personalization**

1. **Update Personal Information**
   - Edit `src/components/constantsAboutMe.ts` for contact details
   - Replace images in `src/components/` and `public/` folders
   - Modify the AI assistant prompt in `src/app/api/chat/route.ts`

2. **Customize Colors & Styling**
   - Edit `src/components/colorPalette.ts` for theme colors
   - Modify `src/app/globals.css` for global styles
   - Update Tailwind config if needed

3. **Content Updates**
   - **Hero Section**: `src/components/hero-section.tsx`
   - **About**: `src/components/about-section.tsx`
   - **Skills**: `src/components/skills-section.tsx`
   - **Projects**: `src/components/projects-section.tsx`
   - **Resume**: `src/components/resume-section.tsx`

### 🤖 **AI Chat Configuration**

The AI assistant is powered by OpenRouter and can be customized in `src/app/api/chat/route.ts`:

```typescript
// Change the AI model (OpenRouter supports many providers)
model: openrouter.chat("openai/gpt-4o-mini"), // OpenAI via OpenRouter
model: openrouter.chat("anthropic/claude-3-sonnet"), // Anthropic via OpenRouter
model: openrouter.chat("google/gemini-pro"), // Google via OpenRouter

// Customize the system prompt
system: `You are an AI assistant representing [YOUR NAME]...`
```

### 🎨 **Theme Customization**

Colors are managed in `src/components/colorPalette.ts`:

```typescript
export const pageColors = {
  primary: "#your-color",
  secondary: "#your-color",
  // ... customize all colors
};
```

### 🧩 **shadcn/ui Components**

This project uses shadcn/ui for consistent, accessible components. The configuration is in `components.json`:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "baseColor": "neutral",
    "cssVariables": true
  }
}
```

**Available Components:**

- `Button` - Interactive buttons with variants
- `Card` - Content containers with headers
- `Input` - Form input fields
- `Badge` - Status and category labels
- `Progress` - Loading and progress indicators
- `Tooltip` - Contextual information overlays

**Adding New Components:**

```bash
# Install shadcn/ui CLI globally
npm install -g shadcn-ui

# Add new components
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

---

## 📁 Project Structure

```
my-next-js-page/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📁 api/chat/        # AI chat API endpoint
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── 📁 components/          # React components
│   │   ├── 📁 ui/              # Reusable UI components
│   │   ├── hero-section.tsx    # Landing section
│   │   ├── ai-chat-section.tsx # AI chat interface
│   │   ├── navigation.tsx      # Header navigation
│   │   └── ...                 # Other sections
│   └── 📁 lib/                 # Utility functions
├── 📁 public/                  # Static assets
├── 📄 package.json             # Dependencies
├── 📄 tailwind.config.js       # Tailwind configuration
├── 📄 next.config.ts           # Next.js configuration
└── 📄 Dockerfile              # Docker configuration
```

---

## 🛠️ Development

### Available Scripts

```bash
# Development
bun dev          # Start development server with Turbo
bun build        # Build for production
bun start        # Start production server
bun lint         # Run ESLint with auto-fix

# Docker
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

### Code Quality

This project uses:

- **ESLint** with Airbnb config for code quality
- **Prettier** for consistent formatting
- **TypeScript** for type safety
- **Husky** for git hooks (if configured)

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy! ✨

### Docker

```bash
# Build the image
docker build -t my-portfolio .

# Run the container
docker run -p 3000:3000 my-portfolio
```

### Other Platforms

This Next.js app can be deployed to:

- **Netlify** - Static export or SSR
- **Railway** - Full-stack deployment
- **DigitalOcean** - App Platform
- **AWS** - Amplify or EC2

---

## 🎯 Key Technologies

| Technology       | Purpose               |
| ---------------- | --------------------- |
| **Next.js**      | React framework       |
| **React**        | UI library            |
| **TypeScript**   | Type safety           |
| **shadcn/ui**    | Component system      |
| **Tailwind CSS** | Styling               |
| **Radix UI**     | Accessible primitives |
| **OpenRouter**   | AI API provider       |
| **Lucide React** | Icon library          |
| **Next Themes**  | Theme switching       |
| **Geist Font**   | Typography            |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔄 Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **my root server** - For hosting and deployment
- **shadcn** - For the beautiful component system built on Radix UI
- **Tailwind CSS** - For the utility-first CSS framework
- **Radix UI** - For accessible component primitives
- **OpenRouter** - For AI API access

---

## 📞 Support & Questions

- **🐛 Bug Reports**: [Open an issue](https://github.com/techfreaque/my-next-js-page/issues)
- **💡 Feature Requests**: [Start a discussion](https://github.com/techfreaque/my-next-js-page/discussions)
- **📧 Direct Contact**: [max@a42.ch](mailto:max@a42.ch)

---

<div align="center">

**⭐ If this template helped you, please give it a star! ⭐**

Made with ❤️ by [Max Brandstaetter](https://max.a42.ch)

</div>
