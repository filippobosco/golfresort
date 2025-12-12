# Configurazione Google Sheets per i Contatti

Segui questi passaggi per configurare Google Sheets e ricevere i contatti del form.

## Passo 1: Crea il foglio Google Sheets

1. Vai su [Google Sheets](https://sheets.google.com) e crea un nuovo foglio
2. Rinominalo (es. "Golf Resort Rome - Contatti")
3. Nella prima riga, inserisci queste intestazioni nelle colonne:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Nome Completo | Email | Telefono | Tipo Cliente | Pacchetto | Date Preferite | Messaggio |

## Passo 2: Crea lo script Google Apps Script

1. Nel foglio, vai su **Estensioni → Apps Script**
2. Cancella tutto il codice esistente e incolla questo:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Map package values to readable names
    var packageNames = {
      'charme': 'Charme, Relax & Golf Week',
      'be-first': 'Be The First',
      'book-early': 'Book Early',
      'tutti': 'Tutti i pacchetti'
    };
    
    // Map customer type values
    var customerTypes = {
      'privato': 'Privato',
      'azienda': 'Azienda'
    };
    
    // Format timestamp for Italian timezone
    var timestamp = new Date(data.timestamp);
    var formattedDate = Utilities.formatDate(timestamp, 'Europe/Rome', 'dd/MM/yyyy HH:mm:ss');
    
    // Append the data to the sheet
    sheet.appendRow([
      formattedDate,
      data.fullName,
      data.email,
      data.phone,
      customerTypes[data.customerType] || data.customerType,
      packageNames[data.packageInterest] || data.packageInterest,
      data.preferredDates || '',
      data.message || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '+39 333 1234567',
        customerType: 'privato',
        packageInterest: 'charme',
        preferredDates: 'Marzo 2026',
        message: 'Questo è un test'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

3. Clicca su **Salva** (icona disco o Ctrl+S)
4. Dai un nome al progetto (es. "Golf Resort Contacts")

## Passo 3: Pubblica lo script come Web App

1. Clicca su **Deploy → New deployment**
2. Clicca sull'icona ingranaggio accanto a "Select type" e scegli **Web app**
3. Configura così:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (il tuo account)
   - **Who has access**: Anyone
4. Clicca **Deploy**
5. Se richiesto, autorizza l'app:
   - Clicca "Review permissions"
   - Seleziona il tuo account Google
   - Clicca "Advanced" → "Go to Golf Resort Contacts (unsafe)"
   - Clicca "Allow"
6. **COPIA L'URL** che appare (sarà tipo: `https://script.google.com/macros/s/AKfycb.../exec`)

## Passo 4: Configura l'ambiente Next.js

1. Crea il file `.env.local` nella root del progetto (se non esiste)
2. Aggiungi questa riga con l'URL copiato:

```
GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/TUO_SCRIPT_ID/exec
```

3. Riavvia il server di sviluppo (`npm run dev`)

## Passo 5: Testa il form

1. Vai sul sito e compila il form di contatto
2. Controlla il foglio Google Sheets - dovresti vedere la nuova riga!

## Risoluzione problemi

### I contatti non arrivano
- Verifica che l'URL in `.env.local` sia corretto
- Controlla la console del browser per errori
- Controlla i log dello script in Apps Script (Esecuzioni)

### Errore di autorizzazione
- Assicurati che "Who has access" sia impostato su "Anyone"
- Riautorizza l'app se necessario

### Modifiche allo script
Se modifichi lo script, devi creare un **nuovo deployment**:
1. Deploy → Manage deployments
2. Clicca sull'icona matita del deployment attivo
3. Cambia "Version" in "New version"
4. Clicca "Deploy"

---

## Notifiche Email (Opzionale)

Se vuoi ricevere un'email ogni volta che arriva un contatto, aggiungi questa funzione allo script:

```javascript
function sendEmailNotification(data) {
  var email = 'tua@email.com'; // Cambia con la tua email
  var subject = '🏌️ Nuovo contatto Golf Resort: ' + data.fullName;
  var body = `
Nuovo contatto ricevuto!

Nome: ${data.fullName}
Email: ${data.email}
Telefono: ${data.phone}
Tipo: ${data.customerType === 'privato' ? 'Privato' : 'Azienda'}
Pacchetto: ${data.packageInterest}
Date preferite: ${data.preferredDates || 'Non specificate'}

Messaggio:
${data.message || 'Nessun messaggio'}

---
Vai al foglio contatti per maggiori dettagli.
  `;
  
  MailApp.sendEmail(email, subject, body);
}
```

E aggiungi questa riga nel `doPost`, prima del `return`:

```javascript
sendEmailNotification(data);
```
