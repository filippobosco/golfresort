# 🏌️ Golf Resort Rome - Landing Page

Landing page elegante e professionale per Golf Resort Rome, progettata per convertire visitatori in clienti attraverso un design raffinato e strategie di marketing avanzate.

## 🎯 Caratteristiche

- **Design Elegante**: UI/UX moderno che rispecchia il lusso e la raffinatezza del resort
- **Completamente Responsive**: Ottimizzato per desktop, tablet e mobile
- **Performance Ottimizzate**: Caricamento veloce con lazy loading e ottimizzazione immagini
- **Accessibilità (A11Y)**: Conforme agli standard WCAG AA
- **Animazioni Fluide**: Micro-interazioni con Framer Motion per un'esperienza coinvolgente
- **Form di Contatto Completo**: Con validazione client-side e feedback visivo
- **SEO Ottimizzato**: Meta tags e struttura semantica per migliore indicizzazione

## 🛠️ Stack Tecnologico

- **Framework**: [Next.js 14](https://nextjs.org/) con App Router
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animazioni**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icone**: [Heroicons](https://heroicons.com/)
- **Font**: Google Fonts (Cinzel & Lato)
- **Linguaggio**: TypeScript

## 📦 Installazione

### Prerequisiti

- Node.js 18.x o superiore
- npm o yarn

### Setup

1. **Installa le dipendenze**:

```bash
npm install
# oppure
yarn install
```

2. **Configura le immagini**:

Crea una cartella `public/images/` e aggiungi le seguenti immagini:

```
public/images/
├── hero-golf-sunset.jpg        # Hero background (minimo 1920x1080px)
├── golf-green.jpg              # Campo da golf
├── restaurant-interior.jpg     # Ristorante interno
├── relax-area.jpg              # Area relax
├── package-charme.jpg          # Pacchetto Charme
├── package-early.jpg           # Pacchetto Early Bird
├── package-book.jpg            # Pacchetto Book Early
├── gallery-panoramic.jpg       # Galleria 1
├── gallery-green.jpg           # Galleria 2
├── gallery-clubhouse.jpg       # Galleria 3
├── gallery-restaurant.jpg      # Galleria 4
├── gallery-room.jpg            # Galleria 5
└── gallery-social.jpg          # Galleria 6
```

**Nota**: Utilizza immagini in formato WebP per prestazioni ottimali. Qualità minima 4K per hero image.

3. **Avvia il server di sviluppo**:

```bash
npm run dev
# oppure
yarn dev
```

4. **Apri il browser**:

Visita [http://localhost:3000](http://localhost:3000)

## 🚀 Build per Produzione

```bash
npm run build
npm start
```

## 📁 Struttura del Progetto

```
├── app/
│   ├── layout.tsx              # Layout principale con font
│   ├── page.tsx                # Homepage
│   └── globals.css             # Stili globali
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Componente bottone riutilizzabile
│   │   ├── Container.tsx       # Container responsive
│   │   └── Section.tsx         # Wrapper sezione con animazioni
│   └── sections/
│       ├── HeroSection.tsx     # Sezione hero con parallax
│       ├── TrustBar.tsx        # Barra social proof
│       ├── IntroductionSection.tsx
│       ├── PackagesSection.tsx # Pacchetti con pricing cards
│       ├── UrgencyBanner.tsx   # Banner urgency/scarcity
│       ├── WhyGolfResort.tsx   # 4 colonne features
│       ├── GallerySection.tsx  # Galleria con lightbox
│       ├── TestimonialsSection.tsx
│       ├── ContactFormSection.tsx
│       ├── FAQSection.tsx      # Accordion FAQ
│       └── Footer.tsx
├── public/
│   └── images/                 # Immagini del sito
├── documentation.md            # Documentazione completa del progetto
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Personalizzazione

### Colori

I colori principali sono definiti in `tailwind.config.ts`:

- **Primary Green**: `#076f3e`
- **Gold**: `#be9c4d`
- **Dark Primary**: `#0a5a32`

### Font

I font sono configurati in `app/layout.tsx`:

- **Headings**: Cinzel (serif)
- **Body**: Lato (sans-serif)

### Contenuti

Per modificare i testi, edita direttamente i componenti nella cartella `components/sections/`.

## ✅ Checklist Pre-Lancio

- [ ] Sostituire tutte le immagini placeholder con foto professionali
- [ ] Aggiornare informazioni di contatto nel Footer
- [ ] Configurare form backend per invio email
- [ ] Testare su tutti i browser principali (Chrome, Firefox, Safari, Edge)
- [ ] Verificare responsive su dispositivi reali
- [ ] Eseguire audit Lighthouse (puntare a 90+ su tutte le metriche)
- [ ] Configurare Google Analytics / Meta Pixel
- [ ] Impostare meta tags Open Graph per social sharing
- [ ] Verificare accessibilità con screen reader
- [ ] Configurare sitemap.xml e robots.txt

## 📊 Performance

La landing page è ottimizzata per prestazioni eccellenti:

- **Lazy Loading**: Tutte le immagini below the fold
- **Code Splitting**: Caricamento incrementale dei componenti
- **Preload**: Font e hero image precaricati
- **WebP**: Formato immagini ottimizzato
- **GPU Acceleration**: Animazioni hardware-accelerated

## 🔒 Accessibilità

- Contrast ratio WCAG AA compliant
- Navigazione completa da tastiera
- ARIA labels e landmark regions
- Alt text descrittivi per tutte le immagini
- Supporto per prefers-reduced-motion

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributi

Questo progetto è stato sviluppato seguendo le best practices di:

- Next.js App Router
- Tailwind CSS utility-first
- Framer Motion animations
- TypeScript type safety
- Accessibility guidelines

## 📄 Licenza

© 2025 Golf Resort Rome. Tutti i diritti riservati.

## 🆘 Supporto

Per domande o supporto, contatta:
- Email: info@golfresortrome.com
- Tel: +39 06 1234 5678

---

**Buon golf! ⛳**

