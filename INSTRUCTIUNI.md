# 📋 INSTRUCȚIUNI COMPLETE - Car Experts Website

## ✅ TO-DO LIST - Ce trebuie să faci tu

### 1. Instalare Dependențe
```bash
npm install
```
**Ce face:** Instalează toate pachetele necesare (Next.js, React, TypeScript, Tailwind CSS, Framer Motion, etc.)

---

### 2. Verificare Structură
Asigură-te că ai următoarele directoare și fișiere:
- ✅ `app/` - cu toate paginile
- ✅ `components/` - cu toate componentele
- ✅ `public/` - cu robots.txt
- ✅ `package.json`, `tsconfig.json`, `next.config.js`
- ✅ `tailwind.config.js`, `postcss.config.js`

---

### 3. Rulare Server Dezvoltare
```bash
npm run dev
```
**Ce face:** Pornește serverul Next.js pe `http://localhost:3000`

**Așteaptă să vezi:**
```
✓ Ready in Xs
○ Compiling / ...
✓ Compiled / in Xs
```

---

### 4. Testare Site
Deschide în browser: **http://localhost:3000**

**Verifică:**
- ✅ Pagina principală se încarcă
- ✅ Navigarea între pagini funcționează
- ✅ Animațiile se văd corect
- ✅ Design-ul este responsive (testează pe mobile)
- ✅ Formularul de contact se afișează
- ✅ Google Maps se încarcă în pagina Contact

---

### 5. Personalizare Conținut (OPȚIONAL)

#### A) Înlocuiește Imagini Placeholder
- În `components/GalleryGrid.tsx` - înlocuiește URL-urile Unsplash cu imagini reale
- În `components/AboutContent.tsx` - înlocuiește placeholder-urile pentru echipă

#### B) Actualizează Email Contact
- În `components/ContactForm.tsx` - schimbă `contact@carexperts.ro` cu email-ul real

#### C) Actualizează URL-uri SEO
- În `app/sitemap.ts` - schimbă `https://carexperts.ro` cu domeniul real
- În `public/robots.txt` - actualizează URL-ul sitemap-ului

---

### 6. Build pentru Producție
```bash
npm run build
```
**Ce face:** Compilează site-ul pentru producție

**Dacă vezi erori:**
- Verifică că toate dependențele sunt instalate
- Verifică că nu există erori de TypeScript

---

### 7. Testare Build Local (OPȚIONAL)
```bash
npm start
```
**Ce face:** Rulează versiunea de producție local pentru testare

---

### 8. Deployment

#### Opțiunea 1: Vercel (RECOMANDAT pentru Next.js)
1. Creează cont pe [vercel.com](https://vercel.com)
2. Conectează repository-ul GitHub/GitLab
3. Vercel detectează automat Next.js și configurează totul
4. Site-ul va fi live în câteva minute

#### Opțiunea 2: Netlify
1. Creează cont pe [netlify.com](https://netlify.com)
2. Drag & drop folder-ul `.next` după build
3. Sau conectează repository-ul

#### Opțiunea 3: Server Propriu
1. Rulează `npm run build`
2. Copiază folder-ul `.next` și `public` pe server
3. Configurează Node.js și PM2 sau similar

---

## 🎯 COMENZI COMPLETE - Copy/Paste

### Instalare Inițială
```bash
# Navighează în folderul proiectului
cd carexperts

# Instalează dependențele
npm install
```

### Dezvoltare
```bash
# Rulează serverul de dezvoltare
npm run dev
```

### Build Producție
```bash
# Creează build-ul optimizat
npm run build

# Testează build-ul local
npm start
```

### Alte Comenzi Utile
```bash
# Verifică erori de linting
npm run lint

# Verifică tipurile TypeScript
npx tsc --noEmit
```

---

## ⚠️ PROBLEME COMUNE ȘI SOLUȚII

### Eroare: "Cannot find module"
**Soluție:** Rulează `npm install` din nou

### Eroare: "Port 3000 already in use"
**Soluție:** 
```bash
# Opțiunea 1: Oprește procesul care folosește portul 3000
# Opțiunea 2: Rulează pe alt port
PORT=3001 npm run dev
```

### Animațiile nu funcționează
**Soluție:** Verifică că ai instalat `framer-motion`:
```bash
npm install framer-motion
```

### Tailwind CSS nu se aplică
**Soluție:** Verifică că ai `tailwind.config.js` și `postcss.config.js` configurate corect

### Google Maps nu se încarcă
**Soluție:** Verifică că iframe-ul are URL-ul corect în `components/ContactForm.tsx`

---

## 📝 CHECKLIST FINAL

Înainte de a deploya, verifică:

- [ ] Toate paginile se încarcă corect
- [ ] Navigarea funcționează pe toate paginile
- [ ] Design-ul este responsive (testează pe telefon)
- [ ] Animațiile funcționează
- [ ] Formularul de contact se afișează (funcționalitatea backend e opțională)
- [ ] Google Maps se încarcă în pagina Contact
- [ ] Toate link-urile funcționează
- [ ] Meta tags sunt corecte pentru SEO
- [ ] Sitemap și robots.txt sunt configurate
- [ ] Imagini placeholder sunt înlocuite (opțional)

---

## 🎉 GATA!

Site-ul este complet funcțional și gata de deployment. Toate paginile, componentele, animațiile și SEO-ul sunt implementate.

**Următorul pas:** Deploy pe Vercel sau platforma preferată!

---

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică că ai instalat toate dependențele
2. Verifică că rulezi Node.js versiunea 18+ sau 20+
3. Verifică erorile din terminal
4. Consultă documentația Next.js: https://nextjs.org/docs

