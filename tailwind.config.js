/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#34367F",
        "blue": "#C2D6EE",
        "orange": "#ED7023"
      }
    },
    backgroundImage: {
      "banner": "url('https://v2.medizona.com.mx/_nuxt/BANNER-HOME-MEDIZONA-web.42bfa6a8.png')",
      "second-banner": "url('https://v2.medizona.com.mx/_nuxt/bg-section.0aaa8299.webp')",
      "articles-banner": "url('https://v2.medizona.com.mx/_nuxt/bgapp.60b9e08f.webp')"
    }
  },
  plugins: [],
}

