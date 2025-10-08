# 🚀 Max's Portfolio - AI-Powered Next.js Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![AI Models](https://img.shields.io/badge/AI_Models-10-FF6B35?style=for-the-badge&logo=openai&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-1.1-FF6B35?style=for-the-badge&logo=bun&logoColor=white)

**Production-ready portfolio showcasing senior full-stack development skills with advanced AI integration**

[🌟 **Live Demo**](https://max.a42.ch) • [⚡ **Quick Start**](#-quick-start) • [🏗️ **Tech Stack**](#-tech-stack)

</div>

---

## 🎯 **Features**

- **AI Chat System**: Interactive assistant with 10 different AI models and 6 personality tones
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **Production Ready**: 100% TypeScript, comprehensive ESLint rules, optimized build
- **High Performance**: <300kB bundle, fast builds with Bun, optimized for production
- **Advanced UI**: Custom design system with rainbow gradients, dark/light themes, responsive design
- **Clean Architecture**: Well-documented, type-safe, modular component structure
- **Customizable**: Fork and adapt for your own portfolio

---

## ⚡ **Quick Start**

```bash
git clone https://github.com/techfreaque/my-next-js-page
cd my-next-js-page
bun install
bun dev
```

> **Note**: This project uses Bun for optimal performance. You can also use `npm`, `pnpm`, `yarn` etc. if preferred.

**To customize for your own portfolio:**

1. Fork this repository
2. Edit files in `src/me/` with your information
3. Replace images in `public/` and `src/`
4. Add your `OPENROUTER_API_KEY` to `.env.local`
5. Customize AI models and tones in `src/utils/`
6. Deploy with Docker or Vercel

---

## 🏗️ **Tech Stack**

### **Core Technologies**

- **Next.js 15** - Awesome DX, React SSR and client hydration for a fast site and built in api server
- **React 19** - Latest features with concurrent rendering and compiler
- **TypeScript 5.9** - Strict type safety throughout
- **Tailwind CSS 4** - Modern utility-first styling with CSS variables
- **Bun** - Ultra-fast JavaScript runtime and package manager

### **AI Integration**

- **OpenRouter API** - Access to 10 selected AI models from different providers
- **AI SDK** - Vercel AI SDK for the backend with custom React hooks for streaming
- **Multiple Providers** - OpenAI, Google, Mistral, DeepSeek, X-AI, Alibaba, MoonshotAI
- **Tone System** - 6 different AI personalities (Professional, Pirate, Enthusiastic, Zen, Detective, Shakespearean)
- **Cost Optimization** - Mix of cheap premium and free models, because why not
- **Real-time Streaming** - Live response streaming with abort controllers
- **Local Storage as DB** - Input and messages are always in sync with with local storage. For this purpose its perfectly fine, as I want to avoid a DB for this project.

### **UI & Design System**

- **UI Components** - Shared UI library with consistent styling, some based on shadcn
- **Rainbow Gradients** - Dynamic color system with CSS variables
- **Dark/Light Themes** - Complete theme system with next-themes
- **Responsive Design** - Optimal design for any screen size with tailwind breakpoints
- **Animations** - Smooth transitions and hover effects

### **Quality & Performance**

- **ESLint** - Comprehensive linting rules
- **TypeScript Strict Mode** - Maximum type safety
- **Bundle Size** - <300kB optimized production build
- **Build Performance** - ~9 second builds with Bun
- **Documentation** - JSDoc comments throughout codebase

---

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── api/chat/          # AI chat API endpoint with streaming
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main portfolio page
├── components/            # React components
│   ├── ai-chat-section/   # Complete AI chat system
│   │   ├── components/    # Chat UI components
│   │   ├── hooks/         # Custom React hooks
│   │   └── AIChatContext.tsx # Chat state management
│   ├── navbar/            # Navigation with responsive design
│   ├── footer/            # Footer with social links
│   ├── loading-cat/       # Animated loading component
│   ├── ui/                # Shared UI component library
│   └── [section].tsx      # other portfolio sections
├── lib/                   # Core utilities
│   ├── constants.ts       # App constants
│   ├── rainbow-style.ts   # Rainbow gradient system
│   ├── api-validation.ts  # Zod schemas
│   └── utils.ts           # Helper functions
├── me/                    # Personal info (customize this!)
│   ├── about-me.tsx       # Personal details & story
│   ├── projects.tsx       # Portfolio projects
│   ├── resume.tsx         # Work experience & education
│   └── metadata.ts        # SEO metadata
└── utils/                 # AI system configuration
    ├── model-config.ts    # AI model definitions
    ├── tone-config.ts     # Personality configurations
    └── system-prompt.ts   # AI system prompts
```

---

## 🎨 **Customization**

### **Personal Information**

All personal data is centralized in `src/me/`:

- `about-me.tsx` - Contact details, personal story, social links
- `projects.tsx` - Portfolio projects with descriptions and tech stacks
- `resume.tsx` - Work experience, education, and skills organized by learning journey
- `metadata.ts` - SEO metadata and site configuration

### **AI System Configuration**

Customize the AI chat system in `src/utils/`:

**Add new AI models** in `model-config.ts`:

```typescript
{
  id: ModelId.YOUR_MODEL,
  name: "Your Model",
  provider: "Provider",
  description: "Model description",
  parameterCount: 70,
  contextWindow: 100000,
  icon: "🤖", // or React component
  openRouterModel: "provider/model-name",
}
```

**Add new personality tones** in `tone-config.ts`:

```typescript
{
  id: ToneId.YOUR_TONE,
  name: "Your Tone",
  description: "Tone description",
  systemPromptModifier: "Instructions for AI behavior...",
  emoji: "🎭",
}
```

### **UI Customization**

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Components**: Customize shared components in `src/components/ui/`
- **Themes**: Extend the theme system in the globals.css file
- **Animations**: Adjust rainbow gradients in `src/lib/rainbow-style.ts`

---

## **Development**

### **Available Scripts**

```bash
# Development with Turbo (recommended)
bun dev

# Production build
bun run build

# Start production server
bun start

# Lint and fix code issues
bun lint

# Type checking
bun typecheck
```

### **Development Tips**

- Use `bun dev` for the fastest development experience with Turbo
- Run `bun run build` before committing for typecheck and lint
- The project uses strict TypeScript - all types must be properly defined
- Components are organized by feature with shared UI components in `src/components/ui/`

---

## �🚀 **Deployment**

### **Vercel (the easy way)**

1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Add `OPENROUTER_API_KEY` environment variable
4. Deploy!

### **Docker**

```bash
docker build -t portfolio .
docker run -p 3000:3000 -e OPENROUTER_API_KEY=your_key portfolio
```

---

## 📝 **License**

GPL-V3 License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ and lots of ☕ by [Max Brandstaetter](https://max.a42.ch)**

*A production-ready portfolio template for the modern web*

⭐ **Star this repo if it helped you!** ⭐

</div>
