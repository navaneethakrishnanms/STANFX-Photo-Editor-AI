# StanFX - Professional Image Editor with AI

A powerful web-based image editor with AI-powered features, built with React, TypeScript, and Vite.

## ✨ Features

- 🎨 **Advanced Image Editing**: Text, shapes, drawing, filters, crop, rotate, and more
- 🤖 **AI-Powered Editing**: Gemini AI and OpenAI integration for intelligent image modifications
- 🖼️ **Text-to-Image Generation**: Multiple AI models (Stable Diffusion, OpenAI, Hugging Face)
- 📐 **Collage Creator**: Create professional photo collages with custom templates
- 🎭 **Image Overlays**: Blend images with multiple blend modes and masking
- 🌓 **Dark/Light Theme**: Beautiful UI with theme switching
- 💾 **Gallery Management**: Save and manage your edited images
- ⚡ **High Performance**: Optimized canvas rendering with smooth 60 FPS operations

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- API keys for the services you want to use (see Configuration below)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stanfx.git
cd stanfx
```

2. Install dependencies:
```bash
npm install
```

3. Set up your API keys:
   - Copy `.env.example` to `.env.local`
   - Add your API keys to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## 🔑 Configuration

Copy `.env.example` to `.env.local` and configure your API keys:

```env
# Required for AI image editing
GEMINI_API_KEY=your_gemini_api_key_here

# Optional - for additional features
OPENAI_IMAGE_EDIT_KEY=your_openai_key_here
OPENAI_TEXT_TO_IMAGE_KEY=your_openai_key_here
STABILITY_API_KEY=your_stability_key_here
HF_API_TOKEN=your_huggingface_token_here
```

### Getting API Keys

- **Gemini API**: https://aistudio.google.com/app/apikey
- **OpenAI API**: https://platform.openai.com/api-keys
- **Stability AI**: https://platform.stability.ai/account/keys
- **Hugging Face**: https://huggingface.co/settings/tokens

## 🛠️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Canvas API** - Image manipulation
- **Gemini AI** - AI-powered image editing
- **Tailwind CSS** - Styling (via CSS variables)

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🔒 Security Note

**IMPORTANT**: Never commit your `.env.local` file or expose your API keys publicly. The `.env.local` file is already included in `.gitignore` to prevent accidental commits.

## 📝 License

This project is for educational and personal use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using AI Studio