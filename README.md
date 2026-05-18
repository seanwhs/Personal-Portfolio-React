# React Portfolio — Modern Developer Portfolio

A modern, animated, and responsive developer portfolio built with **React + Vite + Tailwind CSS**, featuring a full multi-section layout and EmailJS-powered contact form.

---

# ✨ Live Features

* ⚛️ React 19 + Vite 8 setup
* 🎨 Tailwind CSS 4 styling
* 🧭 Smooth multi-section scrolling layout
* 🪟 Glassmorphism UI design system
* ✨ Animated hero section with particles + marquee skills
* 📁 Projects showcase grid
* 🧑‍💼 Experience timeline
* 💬 Testimonials carousel
* 📬 Functional contact form (EmailJS)
* 📱 Fully responsive (mobile → desktop)
* 🔗 Clean alias imports (`@/`)

---

# 🧱 Tech Stack

## Core

* React 19
* Vite 8
* Tailwind CSS 4

## UI / Icons

* Lucide React
* React Icons

## Services

* EmailJS (contact form backend alternative)

---

# 📦 Installation

## 1. Clone the repository

```bash
git clone <your-repo-url>
cd react-portfolio
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run development server

```bash
npm run dev
```

---

## 4. Build for production

```bash
npm run build
```

---

## 5. Preview production build

```bash
npm run preview
```

---

# 📁 Project Structure

```plaintext
src/
├── components/
│   ├── Button.jsx
│   ├── AnimatedBorderButton.jsx
│
├── layout/
│   └── Navbar.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Vite Configuration

This project uses a custom Vite setup with:

* React plugin
* Tailwind CSS plugin
* Path alias (`@/` → `/src`)

```js
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
}
```

Example import:

```js
import { Navbar } from "@/layout/Navbar";
```

---

# 🎨 Styling

* Tailwind CSS 4
* Glassmorphism UI system
* Custom animations:

  * fade-in
  * float
  * marquee
  * slow-drift
* Responsive utility-first layout

---

# ✉️ Contact Form (EmailJS)

The contact form uses **EmailJS** to send emails directly from the frontend (no backend required).

---

## ⚠️ Required External Setup

You MUST create an EmailJS account for the contact form to work.

* [EmailJS Website](https://www.emailjs.com/?utm_source=chatgpt.com)
* [EmailJS Dashboard](https://dashboard.emailjs.com/?utm_source=chatgpt.com)

---

## 🔑 Required Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

These values are required for EmailJS to send emails successfully.

---

## 📍 Where to get EmailJS credentials

### 1. Service ID

* Go to Email Services
* Connect Gmail / Outlook / SMTP
* Copy:

```env
VITE_EMAILJS_SERVICE_ID
```

---

### 2. Template ID

* Go to Email Templates
* Create template using:

```txt
{{name}}
{{email}}
{{message}}
```

Copy:

```env
VITE_EMAILJS_TEMPLATE_ID
```

---

### 3. Public Key

* Go to Account → API Keys
* Copy:

```env
VITE_EMAILJS_PUBLIC_KEY
```

---

# 📦 Install Required Dependencies

## Main dependencies

```bash
npm install react react-dom
npm install vite @vitejs/plugin-react
npm install tailwindcss @tailwindcss/vite
npm install lucide-react react-icons
npm install @emailjs/browser
```

---

## Dev dependencies

```bash
npm install -D eslint
npm install -D @eslint/js
npm install -D eslint-plugin-react-hooks
npm install -D eslint-plugin-react-refresh
npm install -D globals
npm install -D @types/react @types/react-dom
```

---

# 🧩 External Resources

## EmailJS

Used for sending emails without backend:

* [EmailJS Official Site](https://www.emailjs.com/?utm_source=chatgpt.com)
* [EmailJS Dashboard](https://dashboard.emailjs.com/?utm_source=chatgpt.com)

---

## Icons

### Lucide React

* [Lucide Icons](https://lucide.dev/?utm_source=chatgpt.com)

Install:

```bash
npm install lucide-react
```

---

### React Icons

* [React Icons Library](https://react-icons.github.io/react-icons/?utm_source=chatgpt.com)

Install:

```bash
npm install react-icons
```

---

## Deployment Platforms

* [Vercel](https://vercel.com/?utm_source=chatgpt.com)
* [Netlify](https://www.netlify.com/?utm_source=chatgpt.com)
* [Cloudflare Pages](https://pages.cloudflare.com/?utm_source=chatgpt.com)

---

# 🚀 Features Breakdown

## 🏠 Hero Section

* Animated particle background
* Skills marquee loop
* CTA buttons
* Social links
* Profile card with badges

---

## 👤 About Section

* Personal introduction
* Mission statement
* Highlight feature cards

---

## 💼 Projects Section

* Responsive project grid
* Hover overlays (GitHub + Live link)
* Tech tags per project

---

## 🧭 Experience Section

* Vertical timeline
* Animated progression dots
* Technology stack labels

---

## 💬 Testimonials

* Carousel navigation
* Avatar + role display
* Smooth transitions

---

## 📬 Contact Section

* EmailJS form integration
* Loading / success / error states
* Contact info cards
* Availability badge

---

# 📱 Responsive Design

Optimized for:

* Mobile phones
* Tablets
* Laptops
* Large screens

---

# ⚡ Performance Notes

* Vite fast refresh
* Component-based architecture
* Minimal re-renders
* Lightweight dependencies
* Optimized asset loading

---

# 📌 Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

---

# 👨‍💻 Author

Built by Sean Wong

* Software Engineer
* Trainer
* Consultant

Focused on building scalable and performant frontend systems.

---

# 📜 License

MIT — free to use and modify.
