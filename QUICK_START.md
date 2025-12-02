# 🚀 Quick Start - Golf Resort Rome

## Avvio Rapido in 3 Passi

### 1️⃣ Installa le Dipendenze

```bash
npm install
```

### 2️⃣ Aggiungi le Immagini

Prima di avviare il progetto, devi aggiungere le immagini nella cartella `public/images/`.

**Immagini richieste:**
- `hero-golf-sunset.jpg` - Sfondo hero (1920x1080px min)
- `golf-green.jpg` - Campo da golf
- `restaurant-interior.jpg` - Ristorante
- `relax-area.jpg` - Area relax
- `package-charme.jpg` - Pacchetto 1
- `package-early.jpg` - Pacchetto 2
- `package-book.jpg` - Pacchetto 3
- `gallery-panoramic.jpg` - Galleria 1
- `gallery-green.jpg` - Galleria 2
- `gallery-clubhouse.jpg` - Galleria 3
- `gallery-restaurant.jpg` - Galleria 4
- `gallery-room.jpg` - Galleria 5
- `gallery-social.jpg` - Galleria 6

**💡 Suggerimento**: Se non hai ancora le immagini, puoi utilizzare placeholder da:
- [Unsplash](https://unsplash.com/s/photos/golf-course)
- [Pexels](https://www.pexels.com/search/golf/)

### 3️⃣ Avvia il Server

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

---

## 🎨 Personalizzazione Rapida

### Colori

Modifica i colori in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#076f3e',  // Verde principale
  gold: '#be9c4d',     // Oro
}
```

### Testi

Modifica i testi direttamente nei componenti nella cartella `components/sections/`.

### Contatti Footer

Aggiorna le informazioni in `components/sections/Footer.tsx`:

```typescript
const contactInfo = {
  address: 'Via del Golf, 1 - 00100 Roma, Italia',
  phone: '+39 06 1234 5678',
  email: 'info@golfresortrome.com',
}
```

---

## 📦 Build per Produzione

```bash
npm run build
npm start
```

---

## ✅ Checklist Pre-Lancio

- [ ] Tutte le immagini caricate
- [ ] Informazioni di contatto aggiornate
- [ ] Form backend configurato
- [ ] Testato su mobile
- [ ] Google Analytics configurato
- [ ] Meta tags verificati

---

## 🆘 Problemi Comuni

### Errore: Immagini non trovate
**Soluzione**: Assicurati che tutte le immagini siano presenti in `public/images/`

### Errore: Modulo non trovato
**Soluzione**: Esegui `npm install` di nuovo

### Porta 3000 già in uso
**Soluzione**: Usa `npm run dev -- -p 3001` per usare la porta 3001

---

**Pronto per iniziare! 🏌️⛳**

