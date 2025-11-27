# Car Experts - Site Tuning Auto Premium

Site profesional pentru atelierul de tuning auto Car Experts din București, construit cu Next.js 14, TypeScript, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- **Design Premium**: UI modern cu paletă de culori automotive (roșu #D90429, negru #0B0B0B)
- **Animații Spectaculoase**: Efecte 3D, neon glow, liquid shine, energy pulse
- **Responsive**: Optimizat pentru toate dispozitivele (mobile-first)
- **SEO Optimizat**: Meta tags, JSON-LD, sitemap, robots.txt
- **Performanță**: Next.js 14 cu App Router pentru viteze maxime

## 📋 Pagini

- **Acasă** (`/`) - Hero cinematic, preview servicii, timeline, testimonials
- **Servicii** (`/services`) - Listă detaliată cu toate serviciile
- **Galerie** (`/gallery`) - Before/After proiecte cu modal interactiv
- **Despre Noi** (`/about`) - Povestea, echipa, valori
- **Contact** (`/contact`) - Formular contact + Google Maps embed

## 🛠️ Tehnologii

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animații fluide
- **React** - UI library

## 📦 Instalare

1. **Instalează dependențele:**
```bash
npm install
```

2. **Rulează serverul de dezvoltare:**
```bash
npm run dev
```

3. **Deschide în browser:**
```
http://localhost:3000
```

## 🏗️ Build pentru producție

```bash
npm run build
npm start
```

## 📁 Structura Proiectului

```
carexperts/
├── app/
│   ├── layout.tsx          # Layout principal cu metadata SEO
│   ├── page.tsx             # Pagina principală
│   ├── globals.css          # Stiluri globale și animații
│   ├── services/
│   ├── gallery/
│   ├── about/
│   ├── contact/
│   └── sitemap.ts           # Sitemap generat automat
├── components/
│   ├── Navbar.tsx           # Bara de navigație inteligentă
│   ├── Footer.tsx           # Footer premium cu energy pulse
│   ├── Hero.tsx             # Hero section cinematic
│   ├── ServiceCard.tsx      # Card servicii cu efect 3D
│   ├── Timeline.tsx         # Timeline animat proces tuning
│   ├── Testimonials.tsx     # Slider testimonials cinematic
│   ├── ServicesPreview.tsx  # Preview servicii pe homepage
│   ├── ServicesDetail.tsx   # Pagină detaliată servicii
│   ├── GalleryGrid.tsx      # Galerie cu before/after
│   ├── AboutContent.tsx     # Conținut pagină despre noi
│   ├── ContactForm.tsx      # Formular contact + Maps
│   └── CTA.tsx              # Call-to-action section
├── public/
│   └── robots.txt           # Robots.txt pentru SEO
└── package.json
```

## 🎨 Paleta de Culori

- **Roșu Premium**: `#D90429` - Accent principal
- **Negru Premium**: `#0B0B0B` - Background principal
- **Gri Închis**: `#1A1A1A` - Secțiuni secundare
- **Alb**: `#FFFFFF` - Text principal

## ✨ Efecte Speciale

- **Neon Glow**: Efect de strălucire roșie în jurul textului
- **Liquid Shine**: Animație buton cu efect de strălucire lichidă
- **3D Tilt**: Carduri cu efect de înclinare 3D la hover
- **Red Neon Underglow**: Linie roșie strălucitoare sub elemente
- **Energy Pulse**: Linie animată continuu (footer)
- **Tracking Expand**: Text care se extinde la hover

## 📱 Responsive Design

Site-ul este complet optimizat pentru:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🔍 SEO

- Meta tags optimizate pentru fiecare pagină
- JSON-LD pentru local business
- Sitemap.xml generat automat
- Robots.txt configurat
- OpenGraph tags pentru social media
- Structură semantică corectă

## 📞 Informații Contact

- **Telefon**: 0725562178
- **Adresă**: Strada Luigi Galvani, București 020362
- **Google Maps**: Embed inclus în pagina Contact

## 🚀 Deployment

Site-ul poate fi deployat pe:
- **Vercel** (recomandat pentru Next.js)
- **Netlify**
- **AWS Amplify**
- Orice platformă care suportă Next.js

## 📝 Note

- Imagini din galerie folosesc placeholder-uri Unsplash (înlocuiește cu imagini reale)
- Formularul de contact necesită backend pentru funcționalitate completă
- Actualizează URL-ul în sitemap.ts cu domeniul real

## 📄 Licență

Proprietate Car Experts © 2024

