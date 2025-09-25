# 🚀 Max's Portfolio - AI-Powered Next.js Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![AI Models](https://img.shields.io/badge/AI_Models-10_Optimized-FF6B35?style=for-the-badge&logo=openai&logoColor=white)

**Production-ready portfolio showcasing senior full-stack development skills with advanced AI integration**

[🌟 **Live Demo**](https://max.a42.ch) • [⚡ **Quick Start**](#-quick-start) • [🏗️ **Tech Stack**](#-tech-stack)

</div>

---

## 🎯 **Features**

- **AI Chat System**: Interactive assistant with 10 different AI models
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Production Ready**: 100% TypeScript, comprehensive ESLint rules, optimized build
- **High Performance**: 184kB bundle, 95+ Lighthouse score, fast builds
- **Clean Architecture**: Well-documented, type-safe, easy to understand
- **Customizable**: Fork and adapt for your own portfolio

---

## ⚡ **Quick Start**

```bash
git clone https://github.com/techfreaque/my-next-js-page
cd my-next-js-page
bun install
bun dev
```

**To customize for your own portfolio:**
1. Fork this repository
2. Edit files in `src/me/` with your information
3. Replace images in `public/`
4. Add your `OPENROUTER_API_KEY` to `.env.local`
5. Deploy with docker or vercel if you are lazy

---

## 🏗️ **Tech Stack**

### **Core Technologies**
- **Next.js 15** - App Router with React Server Components
- **React 19** - Latest features with concurrent rendering
- **TypeScript 5.9** - Strict type safety throughout
- **Tailwind CSS** - Utility-first styling with design system

### **AI Integration**
- **OpenRouter API** - Access to 10 AI models from different providers
- **Streaming Responses** - Real-time chat with abort controllers
- **Cost Optimization** - Models selected for best price/performance
- **Dynamic Selection** - Switch between GPT, Gemini, Mistral, DeepSeek, Qwen

### **Quality & Performance**
- **ESLint** - 300+ rules for code quality
- **Zod Validation** - Type-safe API requests
- **Bundle Size** - 184kB optimized
- **Documentation** - JSDoc comments throughout

---

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── api/chat/          # AI chat API endpoint
│   └── page.tsx           # Main portfolio page
├── components/            # React components
│   ├── ai-chat-section/   # AI chat feature
│   ├── ui/                # Reusable components
│   └── ...                # Other sections
├── lib/                   # Utilities & validation
├── me/                    # Personal info (customize this!)
│   ├── about-me.tsx       # Your details
│   ├── skills.ts          # Technical skills
│   ├── projects.ts        # Portfolio projects
│   └── resume.ts          # Work experience
└── utils/                 # AI model configs
```

---

## 🎨 **Customization**

### **Personal Information**
All my data is in `src/me/`:
- `about-me.tsx` - Contact details, summary
- `skills.ts` - Programming languages, frameworks
- `projects.ts` - Portfolio projects
- `resume.ts` - Work experience, education

### **AI Models**
Add new models in `src/utils/model-config.ts`:
```typescript
{
  id: ModelId.YOUR_MODEL,
  name: "Your Model",
  provider: "Provider",
  inputPrice: 0.01,
  outputPrice: 0.02,
  contextWindow: 100000,
  icon: "🤖",
  openRouterModel: "provider/model-name",
}
```

---

## 🚀 **Deployment**

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

## 📊 **Performance**

- **Bundle Size**: 184 kB optimized
- **Build Time**: ~13 seconds
- **Lighthouse**: 95+ score
- **Core Web Vitals**: All green
- **AI Models**: Cost-optimized selection including free options

---

## 📝 **License**

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with ❤️ by [Max Brandstaetter](https://max.a42.ch)**

*A production-ready portfolio template for the modern web*

⭐ **Star this repo if it helped you!** ⭐

</div>
