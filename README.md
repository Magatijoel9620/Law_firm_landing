# Kanyi J. & Company Advocates - Landing Page

A modern, professional, and fully responsive landing page for Kanyi J. & Company Advocates, a top-tier law firm based in Mombasa, Kenya. This project was built using Next.js, Tailwind CSS, and ShadCN UI, featuring a clean design, smooth animations with Framer Motion, and a full light/dark mode implementation.

## ✨ Features

- **Modern UI/UX**: Clean, professional design following the latest web trends.
- **Fully Responsive**: Adapts seamlessly to all screen sizes, from mobile to desktop.
- **Dark & Light Mode**: User-selectable themes with system preference detection and a manual toggle.
- **Interactive & Animated Sections**:
  - **Hero Section**: Features macro typography and an animated call-to-action button.
  - **Animated Stats**: Numbers count up to showcase firm achievements.
  - **Smooth Scrolling & Transitions**: Built with Framer Motion for a polished user experience.
  - **Back-to-Top Button**: Improves navigation on a content-rich page.
- **Client Portal Link**: Seamlessly connects to an external client portal application.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Firebase App Hosting

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install NPM packages:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## 📂 Project Structure

The project follows the standard Next.js App Router structure:

```
.
├── public/              # Static assets (images, fonts)
├── src/
│   ├── app/             # Main application routes and pages
│   │   ├── globals.css  # Global styles and Tailwind directives
│   │   └── page.tsx     # Homepage component
│   │   └── layout.tsx   # Root layout
│   ├── components/      # Reusable React components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── sections/    # Page-specific sections (Hero, About, etc.)
│   │   └── ui/          # ShadCN UI components
│   └── lib/             # Utility functions and constants
└── ...
```

## 🌐 Deployment

This application is configured for easy deployment on **Firebase App Hosting**. The `apphosting.yaml` file contains the necessary configuration. To deploy, connect your repository to a Firebase App Hosting backend.
