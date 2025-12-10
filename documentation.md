# 🏌️ TESTI COMPLETI LANDING PAGE - GOLF RESORT ROME

## STRUTTURA SEZIONI CON INDICAZIONI TECNICHE

---

## **1. HERO SECTION**

### **Immagine Hero Background**
- Full-screen hero con parallax scroll (Framer Motion)
- Immagine: campo da golf al tramonto, qualità 4K
- Overlay gradient da trasparente a rgba(7, 111, 62, 0.3)
- Animazione: fade-in + slide-up (duration: 1.2s, ease-out)

### **Logo**
- Posizione: top-left, fixed
- Animazione entrance: fade-in con delay 0.3s
- Icon: utilizzare logo SVG del brand

### **Headline Principal**
```
Il Tuo Rifugio di Golf & Lusso 
nel Cuore di Roma
```
**Styling:**
- Font: Cinzel, 56px desktop / 36px mobile
- Color: #ffffff con text-shadow per leggibilità
- Animation: fade-in + slide-up (delay: 0.5s)
- Line-height: 1.2

### **Subheadline**
```
Pacchetti esclusivi 2026: golf di alta classe, relax e ospitalità raffinata.
Prenota ora e blocca il prezzo garantito fino al 31 dicembre 2026.
```
**Styling:**
- Font: Lato, 24px desktop / 18px mobile
- Color: #ffffff
- Animation: fade-in + slide-up (delay: 0.8s)
- Max-width: 800px, text-align: center

### **CTA Button Primary**
```
Richiedi Informazioni
```
**Styling:**
- Background: #be9c4d
- Hover: #076f3e (transition: 0.3s)
- Font: Lato Bold, 20px
- Padding: 18px 48px
- Border-radius: 6px
- Icon: ArrowRightIcon (heroicons) con animazione slide-right on hover
- Animation entrance: scale-in (delay: 1.1s)
- Box-shadow: 0 4px 20px rgba(190, 156, 77, 0.4)

### **Microcopy sotto CTA**
```
✓ Consulenza personalizzata gratuita
✓ Prezzi bloccati fino al 28/02/2026
```
**Styling:**
- Font: Lato, 14px
- Color: rgba(255, 255, 255, 0.9)
- Icon: CheckCircleIcon (heroicons)
- Animation: fade-in (delay: 1.4s)

### **Scroll Indicator**
- Icon: ChevronDownIcon (heroicons)
- Animazione: bounce infinita
- Position: bottom center
- Color: rgba(255, 255, 255, 0.8)

---

## **2. TRUST BAR**

### **Background & Layout**
- Background: #ffffff
- Border-bottom: 1px solid #e5e5e5
- Padding: 32px 0
- Grid: 4 colonne desktop / 2 colonne mobile
- Animation: fade-in on scroll (IntersectionObserver + Framer Motion)

### **Trust Elements (4 items in linea)**

**Item 1:**
```
Icon: TrophyIcon (heroicons)
18 Buche Championship
```

**Item 2:**
```
Icon: StarIcon (heroicons) - filled
4.8/5 su 200+ Recensioni
```

**Item 3:**
```
Icon: ShieldCheckIcon (heroicons)
Campo Certificato FIG
```

**Item 4:**
```
Icon: SparklesIcon (heroicons)
Ospitalità 5 Stelle
```

**Styling generale items:**
- Icon size: 32px
- Icon color: #be9c4d
- Text: Lato, 16px, #333333
- Animation: stagger (0.1s delay tra un item e l'altro)
- Hover: scale(1.05) + icon color → #076f3e

---

## **3. INTRODUZIONE + VALORE**

### **Background & Layout**
- Background: #ffffff
- Padding: 100px 0
- Max-width container: 1200px
- Animation: fade-in + slide-up on scroll

### **Visual Grid**
- 3 immagini affiancate (grid-cols-3, gap-6)
- Aspect ratio: 4:3
- Border-radius: 8px
- Box-shadow: 0 4px 16px rgba(0,0,0,0.08)
- Hover effect: scale(1.03) + shadow increase
- Animation: stagger fade-in on scroll

**Immagini:**
1. Campo da golf con green impeccabile (dettaglio professionale)
2. Interni eleganti ristorante o camera luxury
3. Area relax (spa/piscina/terrazza panoramica)

### **Headline Sezione**
```
Perché Scegliere Golf Resort Rome
```
**Styling:**
- Font: Cinzel, 42px desktop / 32px mobile
- Color: #076f3e
- Text-align: center
- Margin-bottom: 32px
- Animation: fade-in + slide-up on scroll

### **Body Text**
```
Golf Resort Rome non è solo un campo da golf. È un'esperienza esclusiva dove tradizione golfistica, eleganza italiana e servizio impeccabile si fondono per creare momenti indimenticabili.

Situato a pochi chilometri dal centro di Roma, il nostro resort offre 18 buche championship, strutture premium e un'atmosfera che conquista i golfisti più esigenti da oltre 30 anni.
```

### **Subheading**
```
Che tu sia un professionista o un appassionato, qui troverai:
```

### **Lista Benefici**
```
✓ Campo da golf professionale con fairway e green curatissimi
✓ Ospitalità raffinata e servizio su misura
✓ Ristorante gourmet con vista panoramica
✓ Tranquillità e privacy assoluta
✓ Posizione strategica vicino a Roma
```

**Styling lista:**
- Font: Lato, 18px
- Color: #333333
- Line-height: 1.8
- Icon: CheckCircleIcon (heroicons), color: #076f3e
- Cada item con animation: slide-in from left (stagger 0.1s)
- Max-width: 700px, centrato

---

## **4. PACCHETTI ESCLUSIVI 2026**

### **Background & Layout**
- Background: linear-gradient(to bottom, #f5f5f5, #fafafa)
- Padding: 100px 0
- Animation: fade-in on scroll

### **Headline Sezione**
```
Pacchetti Golf Esclusivi 2026
```
**Styling:**
- Font: Cinzel, 46px desktop / 34px mobile
- Color: #076f3e
- Text-align: center
- Animation: fade-in + slide-up

### **Subheadline con Urgency**
```
Blocca Ora il Tuo Prezzo Garantito
```
**Styling:**
- Font: Lato Bold, 20px
- Color: #be9c4d
- Text-align: center
- Animation: fade-in (delay: 0.2s)

### **Intro Text**
```
Scegli l'esperienza perfetta per te. Ogni pacchetto include golf, ospitalità e momenti indimenticabili.
```
**Styling:**
- Font: Lato, 18px
- Color: #333333
- Text-align: center
- Margin-bottom: 64px

---

### **CARD PACCHETTO 1: CHARME, RELAX & GOLF WEEK**

**Card Container:**
- Background: #ffffff
- Border: 2px solid transparent
- Hover border: 2px solid #be9c4d
- Border-radius: 12px
- Box-shadow: 0 8px 24px rgba(0,0,0,0.08)
- Padding: 0 (immagine full-width in alto)
- Animation entrance: fade-in + slide-up (stagger)
- Hover: translate-y(-8px) + shadow increase
- Transition: all 0.3s ease

**Badge Angolo:**
```
ESPERIENZA COMPLETA
```
**Styling badge:**
- Position: absolute, top-right
- Background: #be9c4d
- Color: #ffffff
- Font: Lato Bold, 12px, uppercase
- Padding: 8px 16px
- Border-radius: 0 12px 0 8px
- Animation: pulse subtle (infinite)

**Immagine:**
- Campo con atmosfera rilassante (sedie sdraio visibili)
- Aspect ratio: 16:9
- Border-radius: 12px 12px 0 0

**Content Area (padding interno: 40px):**

**Titolo Pacchetto:**
```
Charme, Relax & Golf Week
```
**Styling:**
- Font: Cinzel, 28px
- Color: #076f3e
- Margin-bottom: 8px

**Tagline:**
```
La settimana perfetta tra golf e dolce vita
```
**Styling:**
- Font: Lato Italic, 18px
- Color: #666666
- Margin-bottom: 24px

**Sezione "Cosa Include":**

**Label:**
```
Cosa include:
```
**Styling:**
- Font: Lato Bold, 16px
- Color: #333333
- Margin-bottom: 16px

**Lista Inclusioni:**
```
🏌️ 7 notti in camera doppia con trattamento di mezza pensione
⛳ Green fee illimitati per 7 giorni
🍽️ Colazione e cena nel nostro ristorante gourmet
🎯 Accesso completo alle strutture del club
🌟 Servizio concierge dedicato
```
**Styling:**
- Font: Lato, 16px
- Line-height: 1.9
- Color: #333333
- Emoji sostituibili con icone heroicons colorate (#be9c4d)
- Spacing: 12px tra items

**Ideale Per:**
```
Ideale per: Coppie e golfisti che vogliono immergersi completamente nell'esperienza golf & relax
```
**Styling:**
- Font: Lato, 15px
- Color: #666666
- Background: #f9f9f9
- Padding: 16px
- Border-radius: 6px
- Margin: 24px 0
- Icon: UserGroupIcon (heroicons)

**Prezzo:**
```
A partire da €1.590 a persona
```
**Styling:**
- Font: Cinzel Bold, 32px
- Color: #076f3e
- Margin-bottom: 24px
- Animation: number counter on scroll

**CTA Button Pacchetto:**
```
Richiedi Informazioni
```
**Styling:**
- Background: #be9c4d
- Hover: #076f3e
- Full-width
- Font: Lato Bold, 18px
- Padding: 16px
- Icon: ArrowRightIcon (heroicons)
- Animation: icon slide on hover

---

### **CARD PACCHETTO 2: BE THE FIRST**

**Badge:**
```
EARLY BIRD EXCLUSIVE
```
**Badge color:** #076f3e

**Immagine:**
- Campo all'alba o mattino (atmosfera "primi tee time")

**Titolo:**
```
Be The First
```

**Tagline:**
```
Inizia la giornata come un vero campione
```

**Cosa Include:**
```
🌅 Tee time prioritari nelle prime ore del mattino
⛳ Green fee premium con campo tutto per te
☕ Colazione gourmet pre-round
🏌️ Accesso esclusivo al driving range
🎁 Welcome pack con gadget del club
```

**Ideale Per:**
```
Ideale per: Golfisti mattinieri che amano giocare con il campo perfetto e senza folla
```

**Prezzo:**
```
A partire da €1.450 per il pacchetto
```

**CTA:** (stesso stile Pacchetto 1)

---

### **CARD PACCHETTO 3: BOOK EARLY**

**Badge:**
```
PREZZO BLOCCATO 2026
```
**Badge color:** #b20000

**Immagine:**
- Clubhouse accogliente (sala con camino o atmosfera calda)

**Titolo:**
```
Book Early
```

**Tagline:**
```
Prenota in anticipo e risparmia
```

**Cosa Include:**
```
🎯 Prezzo garantito per tutta la stagione 2026
⛳ Flessibilità totale sulle date di gioco
🏌️ Green fee scontati per prenotazioni anticipate
📅 Priorità su tee time e servizi
💎 Upgrade gratuito (soggetto a disponibilità)
```

**Ideale Per:**
```
Ideale per: Chi pianifica in anticipo e vuole assicurarsi il miglior prezzo dell'anno
```

**Prezzo:**
```
A partire da €1.380 per il pacchetto
```

**CTA:** (stesso stile Pacchetto 1)

---

### **CTA Centrale Post-Pacchetti**

**Container:**
- Background: transparent
- Padding: 64px 0
- Text-align: center

**Button:**
```
Richiedi Informazioni sui Pacchetti
```
**Styling:**
- Background: #be9c4d
- Hover: #076f3e
- Font: Lato Bold, 22px
- Padding: 20px 60px
- Border-radius: 8px
- Box-shadow: 0 6px 24px rgba(190, 156, 77, 0.3)
- Icon: ArrowRightIcon (heroicons) con animazione
- Scale effect on hover: 1.05

**Microcopy sotto button:**
```
Risposta entro 24 ore · Consulenza gratuita · Prezzi garantiti fino al 28/02/2026
```
**Styling:**
- Font: Lato, 14px
- Color: #666666
- Icons: CheckCircleIcon (heroicons) per ogni punto
- Margin-top: 16px

---

## **5. URGENCY + SCARCITY BANNER**

### **Background & Layout**
- Background: #076f3e
- Padding: 64px 40px
- Text-align: center
- Animation: slide-in from bottom on scroll
- Box-shadow: inset 0 4px 12px rgba(0,0,0,0.15)

### **Icon Decorativo**
- Icon: ClockIcon (heroicons)
- Size: 64px
- Color: #be9c4d
- Animation: pulse subtle (infinite)
- Margin-bottom: 24px

### **Headline Urgency**
```
⏰ Attenzione: Prezzi Garantiti Solo Fino al 28 Febbraio 2026
```
**Styling:**
- Font: Cinzel, 32px desktop / 24px mobile
- Color: #ffffff
- Margin-bottom: 24px
- Text-shadow: 0 2px 8px rgba(0,0,0,0.2)

### **Body Text**
```
I nostri pacchetti esclusivi sono disponibili a prezzo fisso e bloccato solo fino al 28 Febbraio 2026.

Dal 1° gennaio 2026, le tariffe verranno aggiornate.

Prenota ora e assicurati il miglior valore per la tua esperienza golf.
```
**Styling:**
- Font: Lato, 18px
- Color: rgba(255, 255, 255, 0.95)
- Line-height: 1.8
- Max-width: 700px
- Margin: 0 auto

**Countdown Timer (opzionale, se implementabile):**
- Visual countdown fino al 28/02/2026
- Color scheme: #be9c4d per i numeri, bianco per le label
- Animation: flip numbers

---

## **6. PERCHÉ GOLF RESORT ROME (4 COLONNE)**

### **Background & Layout**
- Background: #ffffff
- Padding: 100px 0
- Animation: fade-in on scroll

### **Headline**
```
Un'Esperienza che Va Oltre il Golf
```
**Styling:**
- Font: Cinzel, 42px desktop / 32px mobile
- Color: #076f3e
- Text-align: center
- Margin-bottom: 64px

### **Grid Layout**
- 4 colonne desktop / 2 colonne tablet / 1 colonna mobile
- Gap: 40px
- Animation: stagger fade-in + slide-up (delay 0.15s tra colonne)

---

**COLONNA 1:**

**Icon:**
- Icon: TrophyIcon (heroicons)
- Size: 48px
- Color: #be9c4d
- Background: rgba(190, 156, 77, 0.1)
- Padding: 16px
- Border-radius: 12px
- Animation: rotate subtle on hover

**Titolo:**
```
Campo Championship
```
**Styling:**
- Font: Cinzel, 24px
- Color: #076f3e
- Margin: 24px 0 16px

**Descrizione:**
```
18 buche progettate da architetti di fama internazionale. Fairway e green curati ogni giorno per garantire un'esperienza di gioco impeccabile.
```
**Styling:**
- Font: Lato, 16px
- Color: #666666
- Line-height: 1.7

---

**COLONNA 2:**

**Icon:**
- Icon: SparklesIcon o FireIcon (heroicons) - rappresenta ristorante
- (stesso styling Colonna 1)

**Titolo:**
```
Ristorazione Gourmet
```

**Descrizione:**
```
Il nostro ristorante panoramico offre cucina italiana raffinata con ingredienti locali di prima qualità. Ogni pasto è un'esperienza per il palato.
```

---

**COLONNA 3:**

**Icon:**
- Icon: UserGroupIcon o HeartIcon (heroicons) - rappresenta servizio
- (stesso styling Colonna 1)

**Titolo:**
```
Servizio Personalizzato
```

**Descrizione:**
```
Ogni ospite riceve un'assistenza dedicata. Dal tee time alla sistemazione, ci prendiamo cura di ogni dettaglio per rendere perfetto il tuo soggiorno.
```

---

**COLONNA 4:**

**Icon:**
- Icon: MapPinIcon (heroicons)
- (stesso styling Colonna 1)

**Titolo:**
```
Posizione Strategica
```

**Descrizione:**
```
A pochi chilometri da Roma, immersi nella tranquillità della campagna romana. Il connubio perfetto tra natura, cultura e golf d'eccellenza.
```

---

## **7. GALLERY FOTOGRAFICA**

### **Background & Layout**
- Background: #f5f5f5
- Padding: 100px 0

### **Headline**
```
Vivi l'Esperienza Golf Resort Rome
```
**Styling:**
- Font: Cinzel, 42px desktop / 32px mobile
- Color: #076f3e
- Text-align: center
- Margin-bottom: 64px

### **Gallery Grid**
- Layout: Masonry grid o 3 colonne × 2 righe
- Gap: 24px
- Animation: stagger fade-in + scale on scroll
- Hover: scale(1.05) + overlay con caption

**Foto da includere (con caption on hover):**

1. **Campo da golf panoramico**
   - Caption: "18 buche championship nel cuore della campagna romana"

2. **Green con bandiera**
   - Caption: "Green impeccabili curati quotidianamente"

3. **Clubhouse esterna**
   - Caption: "Architettura elegante e accogliente"

4. **Ristorante interno**
   - Caption: "Cucina gourmet con vista panoramica"

5. **Camera/Suite**
   - Caption: "Comfort e lusso per il tuo soggiorno"

6. **Momento conviviale**
   - Caption: "Ospitalità italiana autentica"

**Styling foto:**
- Border-radius: 8px
- Box-shadow: 0 4px 16px rgba(0,0,0,0.1)
- Overlay on hover: rgba(7, 111, 62, 0.8)
- Caption: Lato, 16px, #ffffff, centrato
- Transition: 0.4s ease

**Lightbox effect:**
- Click per aprire immagine full-screen
- Navigation arrows
- Close icon: XMarkIcon (heroicons)

---

## **8. SOCIAL PROOF - RECENSIONI**

### **Background & Layout**
- Background: #ffffff
- Padding: 100px 0

### **Headline**
```
Cosa Dicono i Nostri Ospiti
```
**Styling:**
- Font: Cinzel, 42px desktop / 32px mobile
- Color: #076f3e
- Text-align: center

### **Subheadline**
```
Oltre 200 recensioni con una media di 4.8/5 stelle
```
**Styling:**
- Font: Lato, 18px
- Color: #666666
- Text-align: center
- Margin-bottom: 64px

### **Rating Visual**
- 5 stelle (StarIcon filled, color: #be9c4d)
- Size: 24px
- Display sotto subheadline
- Animation: star fill sequential

---

### **Grid Testimonial**
- 3 cards affiancate (responsive: 1 colonna mobile)
- Gap: 32px
- Animation: stagger fade-in + slide-up

**CARD TESTIMONIAL 1:**

**Container:**
- Background: #fafafa
- Border-left: 4px solid #be9c4d
- Padding: 32px
- Border-radius: 8px
- Box-shadow: 0 4px 12px rgba(0,0,0,0.06)
- Hover: shadow increase + translate-y(-4px)

**Rating:**
```
⭐⭐⭐⭐⭐
```
**Styling:**
- Margin-bottom: 16px

**Quote:**
```
"Un campo magnifico, curato in ogni dettaglio. Il personale è estremamente professionale e l'esperienza complessiva è stata eccezionale. Torneremo sicuramente!"
```
**Styling:**
- Font: Lato Italic, 17px
- Color: #333333
- Line-height: 1.7
- Quote marks: decorative with color #be9c4d

**Author:**
```
— Marco R., Milano
```
**Styling:**
- Font: Lato Bold, 15px
- Color: #076f3e
- Margin-top: 16px

---

**CARD TESTIMONIAL 2:**

**Rating:** ⭐⭐⭐⭐⭐

**Quote:**
```
"Abbiamo trascorso una settimana indimenticabile. Il campo è splendido, il ristorante eccellente e il servizio impeccabile. Consigliatissimo per chi cerca qualità."
```

**Author:**
```
— Laura & Giuseppe T., Firenze
```

---

**CARD TESTIMONIAL 3:**

**Rating:** ⭐⭐⭐⭐⭐

**Quote:**
```
"Location fantastica, a due passi da Roma ma immersi nella natura. Il campo è tecnicamente impegnativo e molto ben tenuto. Ospitalità di alto livello."
```

**Author:**
```
— John M., London
```

---

### **Link Recensioni Complete**

**Container:**
- Text-align: center
- Margin-top: 48px

**Link:**
```
Leggi tutte le 200+ recensioni →
```
**Styling:**
- Font: Lato Bold, 16px
- Color: #076f3e
- Hover: color #be9c4d
- Icon: ArrowRightIcon (heroicons)
- Underline on hover
- Link: https://golfresortrome.com/reviews

---

## **9. FORM DI CONTATTO (CTA PRINCIPALE)**

### **Background & Layout**
- Background: linear-gradient(135deg, #076f3e 0%, #0a5a32 100%)
- Padding: 100px 40px
- Box-shadow: inset 0 4px 12px rgba(0,0,0,0.2)

### **Container Form**
- Max-width: 800px
- Margin: 0 auto
- Background: rgba(255, 255, 255, 0.95)
- Padding: 64px
- Border-radius: 16px
- Box-shadow: 0 12px 48px rgba(0,0,0,0.15)
- Animation: fade-in + scale-in on scroll

### **Headline Form**
```
Richiedi Informazioni sui Pacchetti 2026
```
**Styling:**
- Font: Cinzel, 38px desktop / 28px mobile
- Color: #076f3e
- Text-align: center
- Margin-bottom: 16px

### **Subheadline Form**
```
Compila il form e ti ricontatteremo entro 24 ore con tutte le informazioni personalizzate per te.
```
**Styling:**
- Font: Lato, 18px
- Color: #666666
- Text-align: center
- Margin-bottom: 48px

---

### **FORM FIELDS**

**Layout:** Grid 2 colonne dove possibile (1 colonna su mobile)

**Styling generale inputs:**
- Background: #ffffff
- Border: 2px solid #e5e5e5
- Focus border: 2px solid #076f3e
- Border-radius: 8px
- Padding: 16px
- Font: Lato, 16px
- Color: #333333
- Transition: border 0.3s ease
- Box-shadow on focus: 0 0 0 3px rgba(7, 111, 62, 0.1)

---

**FIELD 1: Nome e Cognome***
```
Label: Nome e Cognome*
Placeholder: Es. Mario Rossi
```
**Icon:** UserIcon (heroicons) - posizionato a sinistra interno input
**Required:** true

---

**FIELD 2: Email***
```
Label: Email*
Placeholder: Es. mario.rossi@email.com
```
**Icon:** EnvelopeIcon (heroicons)
**Type:** email
**Required:** true
**Validation:** email format

---

**FIELD 3: Telefono***
```
Label: Telefono*
Placeholder: Es. +39 333 1234567
```
**Icon:** PhoneIcon (heroicons)
**Type:** tel
**Required:** true

---

**FIELD 4: Tipo Cliente***
```
Label: Sei un'Azienda o un Privato?*
Dropdown options:
- Seleziona un'opzione
- Privato
- Azienda
```
**Icon:** BuildingOfficeIcon o UserIcon (heroicons) - cambia in base a selezione
**Required:** true

---

**FIELD 5: Pacchetto di Interesse***
```
Label: Quale pacchetto ti interessa?*
Dropdown options:
- Seleziona un pacchetto
- Charme, Relax & Golf Week
- Be The First
- Book Early
- Non sono sicuro, vorrei informazioni su tutti
```
**Icon:** GiftIcon (heroicons)
**Required:** true

---

**FIELD 6: Date Preferite**
```
Label: Date preferite (opzionale)
Placeholder: Es. 15-22 Maggio 2026
```
**Icon:** CalendarIcon (heroicons)
**Type:** text (o date picker)
**Required:** false

---

**FIELD 7: Messaggio**
```
Label: Messaggio (opzionale)
Placeholder: Raccontaci le tue esigenze o eventuali richieste particolari...
```
**Type:** textarea
**Rows:** 5
**Required:** false
**Max-length:** 500 caratteri
**Character counter:** mostra "X/500" in basso a destra

---

### **PRIVACY CHECKBOX**

**Container:**
- Margin: 32px 0 24px

**Checkbox + Label:**
```
☐ Acconsento al trattamento dei miei dati personali secondo la Privacy Policy*
```
**Styling:**
- Font: Lato, 14px
- Color: #666666
- Checkbox custom styling: border #076f3e, checked background #076f3e
- Link "Privacy Policy": color #076f3e, underline on hover
- Required: true

---

### **SUBMIT BUTTON**

**Button:**
```
Richiedi Informazioni Gratuite
```
**Styling:**
- Background: #be9c4d
- Hover: #076f3e
- Full-width
- Font: Lato Bold, 20px
- Padding: 20px
- Border-radius: 8px
- Color: #ffffff
- Border: none
- Cursor: pointer
- Transition: all 0.3s ease
- Box-shadow: 0 6px 20px rgba(190, 156, 77, 0.4)
- Hover box-shadow: 0 8px 28px rgba(7, 111, 62, 0.5)
- Icon: PaperAirplaneIcon (heroicons) - slide animation on hover
- Loading state: spinner icon on submit

---

### **Microcopy sotto Submit**
```
✓ Risposta garantita entro 24 ore
✓ Nessun impegno
✓ Consulenza personalizzata gratuita
```
**Styling:**
- Font: Lato, 14px
- Color: #666666
- Text-align: center
- Margin-top: 24px
- Icons: CheckCircleIcon (heroicons), color #076f3e
- Animation: fade-in stagger

---

### **Success Message (dopo submit)**
```
✓ Grazie! La tua richiesta è stata inviata con successo.
Ti ricontatteremo entro 24 ore.
```
**Styling:**
- Background: #d4edda (verde chiaro)
- Border: 2px solid #076f3e
- Border-radius: 8px
- Padding: 24px
- Font: Lato, 16px
- Color: #155724
- Text-align: center
- Icon: CheckCircleIcon (heroicons), size 48px
- Animation: scale-in + fade-in

---

## **10. FAQ (Domande Frequenti)**

### **Background & Layout**
- Background: #f5f5f5
- Padding: 100px 0

### **Headline**
```
Domande Frequenti
```
**Styling:**
- Font: Cinzel, 42px desktop / 32px mobile
- Color: #076f3e
- Text-align: center
- Margin-bottom: 64px

### **Container FAQ**
- Max-width: 900px
- Margin: 0 auto

---

### **ACCORDION ITEMS (6 domande)**

**Styling generale accordion:**
- Background: #ffffff
- Border-radius: 8px
- Margin-bottom: 16px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.06)
- Transition: all 0.3s ease

**Question (clickable header):**
- Padding: 24px 32px
- Font: Lato Bold, 18px
- Color: #333333
- Cursor: pointer
- Display: flex, justify-between, align-items-center
- Icon: ChevronDownIcon (heroicons) - ruota 180° quando aperto
- Hover background: #f9f9f9

**Answer (collapsible content):**
- Padding: 0 32px 24px
- Font: Lato, 16px
- Color: #666666
- Line-height: 1.7
- Animation: slide-down + fade-in (Framer Motion)
- Max-height animation

---

**FAQ 1:**
```
Q: I prezzi dei pacchetti includono tutto?

A: I pacchetti includono quanto specificato nella descrizione di ciascuno. Per dettagli personalizzati o servizi aggiuntivi (es. lezioni pro, noleggio attrezzatura, trattamenti spa), contattaci e ti forniremo un preventivo su misura.
```

---

**FAQ 2:**
```
Q: Posso modificare le date della mia prenotazione?

A: Sì, offriamo flessibilità sulle date in base alla disponibilità. I pacchetti "Book Early" e "Be The First" offrono priorità e condizioni vantaggiose per eventuali modifiche.
```

---

**FAQ 3:**
```
Q: È necessario essere soci del club?

A: No, i nostri pacchetti sono aperti a tutti i golfisti. Non è necessaria alcuna affiliazione al club per prenotare.
```

---

**FAQ 4:**
```
Q: Fino a quando sono validi i prezzi 2026?

A: I prezzi dei pacchetti sono garantiti per prenotazioni effettuate entro il 28 Febbraio 2026. Dal 1° Marzo 2026 le tariffe verranno aggiornate.
```

---

**FAQ 5:**
```
Q: Posso portare ospiti non golfisti?

A: Assolutamente sì! Il resort offre attività e comfort anche per chi non gioca a golf: ristorante, aree relax, possibilità di visitare Roma e i dintorni.
```

---

**FAQ 6:**
```
Q: Come posso raggiungervi?

A: Siamo facilmente raggiungibili in auto da Roma (circa 20-30 minuti dal centro). Forniamo indicazioni dettagliate al momento della prenotazione. Su richiesta, organizziamo anche transfer privati.
```

---

### **CTA dopo FAQ**

**Container:**
- Text-align: center
- Margin-top: 48px
- Padding: 32px
- Background: rgba(190, 156, 77, 0.1)
- Border-radius: 8px

**Text:**
```
Hai altre domande?
```
**Styling:**
- Font: Lato, 18px
- Color: #333333
- Margin-bottom: 16px

**Button:**
```
Contattaci Ora
```
**Styling:**
- Background: #076f3e
- Hover: #be9c4d
- Font: Lato Bold, 18px
- Padding: 16px 40px
- Border-radius: 6px
- Icon: ChatBubbleLeftRightIcon (heroicons)

---

## **11. FOOTER**

### **Background & Layout**
- Background: #076f3e
- Color: #ffffff
- Padding: 80px 40px 32px

### **Grid Layout**
- 3 colonne desktop / 1 colonna mobile
- Gap: 64px
- Border-bottom: 1px solid rgba(255,255,255,0.2)
- Padding-bottom: 48px

---

**COLONNA 1: LOGO + TAGLINE**

**Logo:**
- Logo Golf Resort Rome (versione bianca/chiara)
- Margin-bottom: 24px

**Tagline:**
```
Il tuo golf club d'eccellenza nel cuore di Roma
```
**Styling:**
- Font: Lato Italic, 16px
- Color: rgba(255, 255, 255, 0.8)
- Line-height: 1.6

---

**COLONNA 2: LINK UTILI**

**Heading:**
```
Esplora
```
**Styling:**
- Font: Lato Bold, 18px
- Color: #be9c4d
- Margin-bottom: 24px

**Links:**
```
Home
Il Campo
Recensioni
Contatti
```
**Styling:**
- Font: Lato, 16px
- Color: rgba(255, 255, 255, 0.9)
- Line-height: 2.2
- Hover: color #be9c4d
- Transition: 0.3s ease
- Text-decoration: none
- Hover: underline

---

**COLONNA 3: CONTATTI**

**Heading:**
```
Contattaci
```
**Styling:**
- Font: Lato Bold, 18px
- Color: #be9c4d
- Margin-bottom: 24px

**Info Contatto:**
```
📍 [Indirizzo completo Golf Resort Rome]
📞 [Numero telefono]
✉️ [Email di contatto]
```
**Styling:**
- Font: Lato, 16px
- Color: rgba(255, 255, 255, 0.9)
- Line-height: 2.2
- Icons: MapPinIcon, PhoneIcon, EnvelopeIcon (heroicons)
- Icons color: #be9c4d

**Social Media:**
```
Seguici
```
**Styling:**
- Margin-top: 24px
- Font: Lato, 14px

**Social Icons:**
- Facebook, Instagram, LinkedIn (se disponibili)
- Icon size: 24px
- Color: rgba(255, 255, 255, 0.8)
- Hover: color #be9c4d
- Hover: scale(1.15)
- Background circle: rgba(255, 255, 255, 0.1)
- Padding: 12px
- Border-radius: 50%
- Transition: 0.3s ease

---

### **BOTTOM FOOTER**

**Container:**
- Padding-top: 32px
- Text-align: center
- Border-top: 1px solid rgba(255,255,255,0.2)

**Copyright:**
```
© 2025 Golf Resort Rome. Tutti i diritti riservati.
```
**Styling:**
- Font: Lato, 14px
- Color: rgba(255, 255, 255, 0.7)

**Legal Links:**
```
Privacy Policy  |  Cookie Policy
```
**Styling:**
- Font: Lato, 14px
- Color: rgba(255, 255, 255, 0.7)
- Hover: color #be9c4d
- Separator: " | "
- Margin-top: 8px

---

## **ELEMENTI GENERALI DI ANIMAZIONE (FRAMER MOTION)**

### **Scroll Animations:**
- **Fade-in on scroll:** opacity 0 → 1, threshold 0.2
- **Slide-up on scroll:** translateY(40px) → 0, opacity 0 → 1
- **Stagger children:** delay incrementale (0.1-0.15s)
- **Scale-in:** scale(0.95) → 1, opacity 0 → 1

### **Hover Animations:**
- **Button hover:** scale(1.05), shadow increase
- **Card hover:** translateY(-8px), shadow increase
- **Icon hover:** rotate(5deg) o scale(1.1)
- **Image hover:** scale(1.05), overlay fade-in

### **Loading States:**
- **Form submit:** spinner rotation
- **Page load:** skeleton screens con shimmer effect
- **Lazy images:** blur-in effect

### **Micro-interactions:**
- **Input focus:** border color transition + shadow glow
- **Checkbox check:** checkmark draw animation
- **Accordion:** smooth expand/collapse con spring animation
- **Number counter:** conteggio incrementale per prezzi
- **Success message:** bounce-in + confetti effect (opzionale)

---

## **RESPONSIVE BREAKPOINTS (TAILWIND CSS 4.1+)**

### **Mobile (< 640px):**
- Hero headline: 36px
- Sezioni padding: 60px 20px
- Grid → 1 colonna
- Form → 1 colonna
- CTA buttons: full-width
- Font sizes ridotti del 20-30%

### **Tablet (640px - 1024px):**
- Hero headline: 44px
- Grid pacchetti: 2 colonne
- Sezioni padding: 80px 40px

### **Desktop (> 1024px):**
- Full layout come descritto
- Max-width container: 1200px
- Grid pacchetti: 3 colonne inline

---

## **PERFORMANCE & OTTIMIZZAZIONE**

### **Immagini:**
- Format: WebP con fallback JPG
- Lazy loading: tutte le immagini below the fold
- Responsive images: srcset con multiple resolutions
- Compression: max 85% quality
- CDN: servire da CDN per velocità

### **Animations:**
- Use GPU acceleration: transform, opacity
- Avoid: animating width, height, margin
- Reduce motion: rispettare prefers-reduced-motion
- Throttle scroll events: useScroll con throttle

### **Loading:**
- Critical CSS: inline above the fold styles
- Defer non-critical JS
- Preload: fonts, hero image
- Code splitting: lazy load form validation

---

## **ACCESSIBILITÀ (A11Y)**

### **Contrast:**
- Verificare contrast ratio WCAG AA (min 4.5:1)
- Hover states sempre visibili
- Focus indicators: outline chiaro

### **Keyboard Navigation:**
- Tab order logico
- Skip to content link
- Accordion: keyboard accessible
- Form: full keyboard support

### **Screen Readers:**
- Alt text descrittivi per tutte le immagini
- ARIA labels per icons
- Form labels sempre associati
- Live regions per success messages

### **Semantic HTML:**
- Heading hierarchy corretta (h1 → h6)
- Landmark regions: header, nav, main, aside, footer
- Button vs link: uso corretto

---

# ✅ **NOTE FINALI PER L'IMPLEMENTAZIONE**

Questa struttura completa fornisce:
- ✓ Tutti i testi persuasivi ottimizzati per conversioni
- ✓ Indicazioni precise su styling (Tailwind CSS 4.1+)
- ✓ Suggerimenti animazioni (Framer Motion 12)
- ✓ Icons specifici (Heroicons)
- ✓ Responsive design dettagliato
- ✓ Accessibilità e performance
- ✓ Micro-interazioni e feedback utente

**Il template è pronto per l'implementazione tecnica senza necessità di scrivere codice in questa fase.**

Ogni sezione ha copy, styling e comportamenti definiti per massimizzare l'engagement e le conversioni del target alto-spendente (50-80 anni) di Golf Resort Rome.

**Prossimi step:** raccolta materiali fotografici professionali e implementazione frontend.