'use strict';

//Use this tool https://www.textfixer.com/tools/remove-line-breaks.php and then modify from ' to \'

let textDB = '{ "marketingMix": { "mm1": { "input": "Se perfetto", "outputSingolare": "Hai compreso le funzionalità di questo framework e lo hai utilizzato nel modo corretto. Questo framework ti aiuterà moltissimo in occasione della stesura del Business Plan descrittivo nel prossimo sprint.", "outputPlulare": "Avete compreso le funzionalità di questo framework e lo avete utilizzato nel modo corretto. Questo framework vi aiuterà moltissimo in occasione della stesura del Business Plan descrittivo nel prossimo sprint." }, "mm2": { "input": "Bene ma migliorable", "outputSingolare": "Hai compreso le funzionalità di questo framework e lo hai utilizzato nel modo corretto. Ti lascio di seguito un appunto per raffinare ancora al meglio questo deliverable", "outputPlulare": "Avete compreso le funzionalità di questo framework e lo avete utilizzato nel modo corretto. Vi lascio di seguito un appunto per raffinare ancora al meglio questo deliverable." }, "mm3": { "input": "Product approssimativo", "outputSingolare": "Nella sezione product dovresti esplicitare chiaramente tutte le caratteristiche del tuo prodotto/servizio. Dovresti dettagliare come tutti gli utenti interagiranno con il tuo prodotto e dettagliare al meglio ogni processo e funzionalità. Un maggior focus su questa sezione ti semplificherà moltissimo il lavoro di stesura del business plan", "outputPlulare": "Nella sezione product dovreste esplicitare chiaramente tutte le caratteristiche del vostro prodotto/servizio. Dovreste dettagliare come tutti gli utenti interagiranno con il tuo prodotto e dettagliare al meglio ogni processo e funzionalità. Un maggior focus su questa sezione ti semplificherà moltissimo il lavoro di stesura del business plan" }, "mm4": { "input": "Price approssimativo", "outputSingolare": "Nella sezione price dovresti dettagliare al meglio i modelli di business che hai esplicitato nel lean canvas. Prova a specificare al meglio i ragionamenti che ti hanno portato a definire i tuoi prezzi. Che ragionamenti ti hanno portato a fare esattamente questa scelta?", "outputPlulare": "Nella sezione price dovreste dettagliare al meglio i modelli di business che avete esplicitato nel lean canvas. Provate a specificare al meglio i ragionamenti che vi hanno portato a definire i vostri prezzi. Che ragionamenti vi hanno portato a fare esattamente questa scelta?" }, "mm5": { "input": "Indicano due price in tempi di sviluppo diversi", "outputSingolare": "Andrebbe anche inserita una nota relativa al momento di passaggio dalla fase A alla fase B: la transizione avverrà dopo un tot di tempo oppure dopo aver raggiunto un certo numero di di utenti ?", "outputPlulare": "Andrebbe anche inserita una nota relativa al momento di passaggio dalla fase A alla fase B: la transizione avverrà dopo un tot di tempo oppure dopo aver raggiunto un certo numero di di utenti ?" }, "mm6": { "input": "Promotion approssimativa", "outputSingolare": "Ti consiglio di andare più nello specifico. Parti dai canali considerati nel lean canvas dividendo eventuali distinzioni tra online ed offline ed argomentando se i diversi canali hanno target customers differenti.", "outputPlulare": "Vi consiglio di andare più nello specifico. Partite dai canali considerati nel lean canvas dividendo eventuali distinzioni tra online ed offline ed argomentando se i diversi canali hanno target customers differenti." }, "mm7": { "input": "Manca tone of voice e intensità", "outputSingolare": "Questo aspetto sarà chiave per ottenere una massa critica per il tuo progetto, dunque oltre ai canali ti consiglio di cominciare anche a definire il tone of voice e l\’intensità di utilizzo di ciascun canale individuato.", "outputPlulare": "Questo aspetto sarà chiave per ottenere una massa critica per il vostro progetto, dunque oltre ai canali vi consiglio di cominciare anche a definire il tone of voice e l\’intensità di utilizzo di ciascun canale individuato." }, "mm8": { "input": "Place fuori focus", "outputSingolare": "Nella sezione Place hai indicato XXXX , in realtà la sezione place serve per indicare come avverrà la commercializzazione e la distribuzione del tuo prodotto/servizio.", "outputPlulare": "Nella sezione Place avete indicato XXXX , in realtà la sezione place serve per indicare come avverrà la commercializzazione e la distribuzione del vostro prodotto/servizio." }, "mm9": { "input": "Place approssimativo", "outputSingolare": "Hai correttamente indicato come avverrà la distribuzione. Ti consiglierei però di indicare le motivazioni che ti hanno portato alla tua scelta", "outputPlulare": "Avete correttamente indicato come avverrà la distribuzione. Vi consiglierei però di indicare le motivazioni che vi hanno portato alla scelta" }, "mm10": { "input": "Place senza area geografica", "outputSingolare": "Ti consiglio di specificare l\’area geografica (e.g., Italia, Nord Italia, Europa, Lazio, etc.) di tuointeresse nella parte place.", "outputPlulare": "Vi consiglio di specificare l\’area geografica (e.g., Italia, Nord Italia, Europa, Lazio, etc.) di vostro interesse nella parte place." } }, "uniqueValueProposition": { "uvp1": { "input": "Perfetta", "outputSingolare": "Ottimo lavoro per la UVP. Mi riesce a trasmettere esattamente le caratteristiche del progetto! Benissimo!", "outputPlulare": "Ottimo lavoro per la UVP. Mi riesce a trasmettere esattamente le caratteristiche del progetto! Benissimo!" }, "uvp2": { "input": "Breve e chiara", "outputSingolare": "Ti ricordo che la UVP deve essere breve e chiara. Essa deve permettere a chi non conosce la tua startup di capire di che cosa si occupa in toto senza equivocità. Cerca di stringere la UVP in quanto può essere eccessivamente lunga ( la tua UVP ha X caratteri, una buona UVP sta in media tra i 70-140 caratteri).", "outputPlulare": "Vi ricordo che la UVP deve essere breve e chiara. Essa deve permettere a chi non conosce la vostra startup di capire di che cosa si occupa in toto senza equivocità. Cercate di stringere la UVP in quanto può essere eccessivamente lunga ( la vostra UVP ha X caratteri, una buona UVP sta in media tra i 70-140 caratteri)." }, "uvp3": { "input": "Non definisce benefici/pains/caratteristiche", "outputSingolare": "La UVP dovrebbe chiarire i benefici che il tuo prodotto/servizio offre, i problemi che è in grado di risolvere e le caratteristiche differenziali rispetto ai competitor.", "outputPlulare": "La UVP dovrebbe chiarire i benefici che il vostro prodotto/servizio offre, i problemi che è in grado di risolvere e le caratteristiche differenziali rispetto ai competitor." }, "uvp4": { "input": "Simile a slogan", "outputSingolare": "La UVP non dovrebbe assomigliare ad uno slogan, ti suggerisco di concentrarti sulla chiarezza del messaggio rispetto al market appeal che può creare a potenziali clienti. ", "outputPlulare": "La UVP non dovrebbe assomigliare ad uno slogan, vi suggerisco di concentrarvi sulla chiarezza del messaggio rispetto al market appeal che può creare a potenziali clienti. " }, "uvp5": { "input": "Utilizzano i colori in modo erroneo", "outputSingolare": "Tutti i colori con cui decidi di clusterizzare i bisogni del tuo target dovrebbero trovare corrispondenza sia nella UVP che nel payoff.", "outputPlulare": "Tutti i colori con cui decidete di clusterizzare i bisogni del vostro target dovrebbero trovare corrispondenza sia nella UVP che nel payoff." }, "uvp6": { "input": "Utilizzano due periodi divisi da virgola", "outputSingolare": "La divisione in due periodi divisi dalla virgola non è consigliabile per la UVP. Less is More, ti consiglierei di provare a mantenere tutto in un unico periodo.", "outputPlulare": "La divisione in due periodi divisi dalla virgola non è consigliabile per la UVP. Less is More, vi consiglierei di provare a mantenere tutto in un unico periodo." } }, "landingPage": { "lp1": { "input": "CTA non personalizzata", "outputSingolare": "Ti suggerisco di inserire un bottone di CTA personalizzato con parole che si adattano meglio al tuo progetto, ad esempio ***DA *Registrati* A ***.", "outputPlulare": "Vi suggerisco di inserire un bottone di CTA personalizzato con parole che si adattano meglio al vostro progetto, ad esempio ***DA *Registrati* A ***." }, "lp2": { "input": "Sezione dei vantaggi e soluzione con numero PARI elementi", "outputSingolare": "Nella sezione relativa ai vantaggi e quella relativa alla soluzione ricordati di impostarla con un numero dispari di elementi (3 o 5) al fine di facilitare la comprensione per il visitatore della pagina.", "outputPlulare": "Nella sezione relativa ai vantaggi e quella relativa alla soluzione ricordatevi di impostarla con un numero dispari di elementi (3 o 5) al fine di facilitare la comprensione per il visitatore della pagina." }, "lp3": { "input": "Favicon e nome scheda NO personalizzati", "outputSingolare": "Il titolo e l\’icona della scheda sono quelli di default, ti consiglio di personalizzarli.", "outputPlulare": "Il titolo e l\’icona della scheda sono quelli di default, vi consiglio di personalizzarli." }, "lp4": { "input": "No HTTPS", "outputSingolare": "Ti consiglio di implementare httpS per creare una connessione sicura ed eliminare il “Non sicuro” del browser. Alcuni utenti potrebbero uscire dalla vostra pagina immediatamente in assenza di questo elemento.", "outputPlulare": "Vi consiglio di implementare httpS così da creare una connessione sicura ed eliminare il “Non sicuro” del browser. Alcuni utenti potrebbero uscire dalla vostra pagina immediatamente in assenza di questo elemento." }, "lp5": { "input": "No dichiarazione privacy/trattamento dati", "outputSingolare": "Ti ricordo di inserire sempre la dichiarazione sulla privacy e il trattamento dei dati per essere conformi al Regolamento europeo per la protezione dei dati (GDPR).", "outputPlulare": "Vi ricordo di inserire sempre la dichiarazione sulla privacy e il trattamento dei dati per essere conformi al Regolamento europeo per la protezione dei dati (GDPR)." }, "lp6": { "input": "Colori da rivedere", "outputSingolare": "Ti raccomando di utilizzare un formato e colori che siano ben visibili, di facile lettura e coerenti con il tuo prodotto/servizio.", "outputPlulare": "Vi raccomando di utilizzare un formato e colori che siano ben visibili, di facile lettura e coerenti con il vostro prodotto/servizio." }, "lp7": { "input": "Paragrafi con muri di testo", "outputSingolare": "Alcune sezioni hanno troppo testo e potrebbero portare gli utenti a non continuare la lettura. Ti suggerisco di ridurre il testo, suddividerlo in paragrafi più piccoli e/o evidenziare le parole chiave in grassetto per rendere la comprensione e la lettura più spedita da parte degli utenti.", "outputPlulare": "Alcune sezioni hanno troppo testo e potrebbero portare gli utenti a non continuare la lettura. Vi suggerisco di ridurre il testo, suddividerlo in paragrafi più piccoli e/o evidenziare le parole chiave in grassetto per rendere la comprensione e la lettura più spedita da parte degli utenti." }, "lp8": { "input": "NO controllo input nel form", "outputSingolare": "Ti suggerisco di inserire un controllo dei dati inseriti dagli utenti per essere sicuri che lasciano effettivamente le proprie credenziali.", "outputPlulare": "Vi suggerisco di inserire un controllo dei dati inseriti dagli utenti per essere sicuri che lasciano effettivamente le proprie credenziali." }, "lp9": { "input": "No mobile friendly", "outputSingolare": "Ti consiglio di rivedere la versione mobile, è fondamentale ottimizzare il percorso dell\’utente da smartphone, prima che da desktop. Infatti, è probabile che la maggior parte dei visitatori visiterà la pagina web tramite dispositivi mobili.", "outputPlulare": "Vi consiglio di rivedere la versione mobile, è fondamentale ottimizzare il percorso dell\’utente da smartphone, prima che da desktop. Infatti, è probabile che la maggior parte dei visitatori visiterà la pagina web da dispositivi mobili." }, "lp10": { "input": "Ottimo lavoro :D", "outputSingolare": "In conclusione, hai fatto un ottimo lavoro, la landing page è chiara e permette di capire la tua offerta di valore. Ci auspichiamo otterrai risposte positive dal mercato tramite lo smoke test.", "outputPlulare": "In conclusione, avete fatto un ottimo lavoro, la landing page è chiara, permette di capire la vostra offerta di valore e inspira la fiducia degli utenti. Ci auspichiamo otterrete risposte positive dal mercato tramite lo smoke test." }, "lp11": { "input": "Lavoro mediocre :(", "outputSingolare": "In conclusione, la landing page non è chiara, non si comprende la tua offerta di valore e potrebbe non suscitare la fiducia degli utenti. Ti suggerisco di rivederla prima di iniziare lo smoke test.", "outputPlulare": "In conclusione, la landing page non è chiara, non si comprende la vostra offerta di valore e potrebbe non suscitare la fiducia degli utenti. Vi suggerisco di rivederla prima di iniziare lo smoke test." } }, "funnelMarketing": { "fm1": { "input": "Creatività non inclusive o rischio non autorizzazione FB", "outputSingolare": "Ti suggerisco di usare immagini inclusive per il target identificato, evitando immagini con riferimenti sessuali, politici ed evitando che siano coperte da copyright. Infatti facebook è molto preciso in questo e rischi che la tua campagna sia non autorizzata o bloccata.", "outputPlulare": "Vi suggerisco di usare immagini inclusive per il target identificato, evitando immagini con riferimenti sessuali, politici ed evitando che siano coperte da copyright. Infatti facebook è molto preciso in questo e rischiate che la vostra campagna sia non autorizzata o bloccata." }, "fm2": { "input": "Meno di 3 copy e creatività", "outputSingolare": "Ti suggerisco di impostare almeno 3 copy e creatività che siano accattivanti. L\’algoritmo di facebook combinerà copy e immagini/video per ottenere la combinazione più efficace.", "outputPlulare": "Vi suggerisco di impostare almeno 3 copy e creatività che siano accattivanti. L\’algoritmo di facebook combinerà copy e immagini/video per ottenere la combinazione più efficace." }, "fm3": { "input": "Intervallo di tempo minore di 7 giorni", "outputSingolare": "Ti raccomando di svolgere lo smoke test in un intervallo di tempo di almeno una settimana, per dare il tempo all\’aLgoritmo di facebook di imparare e avere un periodo di tempo per ottenere dei risultati attendibili.", "outputPlulare": "Vi raccomando di svolgere lo smoke test in un intervallo di tempo di almeno una settimana, per dare il tempo all\’aLgoritmo di facebook di imparare e avere un periodo di tempo per ottenere dei risultati attendibili." }, "fm4": { "input": "Non definito Budget", "outputSingolare": "Ti suggerisco caldamente di stabilire in anticipo un budget per evitare cattive sorprese.", "outputPlulare": "Vi suggerisco caldamente di stabilire in anticipo un budget per evitare cattive sorprese." }, "fm5": { "input": "No indicazioni del target (età, location e interessi)", "outputSingolare": "Ti ricordo per la campagna adv di identificare il pubblico target in termini di età, geolocalizzazione e interessi attinenti all\’audience dei tuoi esperimenti. Al tempo stesso, PUOI valutare di inserire un ad set meno specifico, spesso l\’algoritmo di facebook funziona ottimamente quando il marketer pone meno limiti del target.", "outputPlulare": "Vi ricordo per la campagna adv di identificare il pubblico target in termini di età, geolocalizzazione e interessi attinenti all\’audience dei tuoi esperimenti. Al tempo stesso, potete valutare di inserire un ad set meno specifico, spesso l\’algoritmo di facebook funziona ottimamente quando il marketer pone meno limiti del target" }, "fm6": { "input": "Audience troppo piccolo (ordine di grandezza migliaia)", "outputSingolare": "L\’audience identificato è troppo piccolo, consigliamo di avere un audience dell\’ordine di grandezza dei milioni e non delle migliaia. Ti consiglio di settare i parametri diversamente per ottenere un audience adeguato.", "outputPlulare": "L\’audience identificato è troppo piccolo, consigliamo di avere un audience dell\’ordine di grandezza dei milioni e non delle migliaia. Vi consiglio di settare i parametri diversamente per ottenere un audience adeguato." } }, "salesDeck": { "sd1": { "input": "TODO", "outputSingolare": "TODO", "outputPlulare": "TODO" }, "sd2": { "input": "TODO", "outputSingolare": "TODO", "outputPlulare": "TODO" } }, "leanCanvas2": { "lc1": { "input": "Se lean canvas fatto bene", "outputSingolare": "Hai creato un ottimo lean canvas. Ti sarà da base per il lean canvas che realizzerai nello sprint 3. Utilizza gli spunti di questo documento per ragionare in modo approfondito sul marketing mix del prossimo sprint.", "outputPlulare": "Avete creato un ottimo lean canvas. Vi sarà da base per il lean canvas che realizzerete nello sprint 3. Utilizzate gli spunti di questo documento per ragionare in modo approfondito sul marketing mix del prossimo sprint." }, "lc2": { "input": "Lean canvas fatto male", "outputSingolare": "Rivedi il lean canvas alla luce delle considerazioni fatte. Ti sarà da base per il lean canvas che realizzerai nello sprint 3. Utilizza gli spunti di questo documento per ragionare in modo approfondito sul marketing mix del prossimo sprint.", "outputPlulare": "Rivedete il lean canvas alla luce delle considerazioni fatte. Vi sarà da base per il lean canvas che realizzerai nello sprint 3. Utilizzate gli spunti di questo documento per ragionare in modo approfondito sul marketing mix del prossimo sprint." }, "lc3": { "input": "Key metrics mediocri", "outputSingolare": "Uno spunto di miglioramento riguarda la parte delle key metrics. Queste devono essere indicatori dei risultati che state raggiungendo e su cui setterai i tuoi obiettivi. Per esempio *FARE DEGLI ESEMPI*: fatturato, prodotti venduti, traffico sul sito, costo di acquisizione di un lead..etc. Prova ad inserirne qualcuna in più. Puoi anche far riferimento al funnel dei pirati AARRR (Acquisition, Activation, Retention, Revenue, Referral).", "outputPlulare": "Uno spunto di miglioramento riguarda la parte delle key metrics. Queste devono essere indicatori dei risultati che state raggiungendo e su cui setterete i vostri obiettivi. Per esempio *FARE DEGLI ESEMPI*: fatturato, prodotti venduti, traffico sul sito, costo di acquisizione di un lead..etc. Provate ad inserirne qualcuna in più. Potete anche far riferimento al funnel dei pirati AARRR (Acquisition, Activation, Retention, Revenue, Referral)." }, "lc4": { "input": "UVP mediocre", "outputSingolare": "La UVP va riformulata, per renderla più coinvolgente. Trovi del materiale di approfondimento nel terzo Sprint. Chi sei, cosa fai e che problema risolvi in una frase. Se una parola nella UVP sembra sostituibile allora non è quella giusta. Questa frase andrà inserita nella landing page, è fondamentale assicurarsi che sia adatta al target di riferimento.", "outputPlulare": "La UVP va riformulata, per renderla più coinvolgente. Trovate del materiale di approfondimento nel terzo Sprint. Chi siete, cosa fate e che problema risolvi in una frase. Se una parola nella UVP sembra sostituibile allora non è quella giusta. Questa frase andrà inserita nella landing page, è fondamentale assicurarsi che sia adatta al target di riferimento." }, "lc5": { "input": "Unfair Advantage mediocre", "outputSingolare": "L\’ Unfair advantage non riguarda caratteristiche intrinseche nel progetto ma piuttosto dei vantaggi che porterai come team o con le tecnologie che utilizzi (brevetti, piattaforma proprietaria, competenze etc.). Dovresti definire il vantaggio competitivo che sia di difficile imitazione da parte dei competitor.", "outputPlulare": "L\’ Unfair advantage non riguarda caratteristiche intrinseche nel progetto ma piuttosto dei vantaggi che porterete come team o con le tecnologie che utilizzate (brevetti, piattaforma proprietaria, competenze etc.). Dovreste definire il vantaggio competitivo che sia di difficile imitazione da parte dei competitor." }, "lc6": { "input": "Canali mediocre", "outputSingolare": "Ti suggerisco di approfondire maggiormente la sezione relativa ai canali. *FARE ATTENZIONE* Fai una netta distinzione tra canali online ed offline. Puoi considerare così anche fiere di settore ed eventuali partenership con aziende strutturate presenti nel settore.", "outputPlulare": "Vi suggerisco di approfondire maggiormente la sezione relativa ai canali. *FARE ATTENZIONE* Fate una netta distinzione tra canali online ed offline. Potete considerare così anche fiere di settore ed eventuali partenership con aziende strutturate presenti nel settore." }, "lc7": { "input": "Sezione costi non approfondita", "outputSingolare": "La sezione dei costi da te sviluppata non risulta sufficiente. Devi provare a considerare tutte le voci di costo dirette ed indirette con cui ti interfaccerai con il tuo progetto. Puoi per esempio ragionare su costi come il costo delle persone (HR), costo legale, commercialista, mantenimento it ecc *FARE ATTENZIONE AD ESEMPI*", "outputPlulare": "La sezione dei costi da voi sviluppata non risulta sufficiente. Dovete provare a considerare tutte le voci di costo dirette ed indirette con cui vi interfaccerete con il progetto. Potete per esempio ragionare su costi come il costo delle persone (HR), costo legale, commercialista, mantenimento it ecc *FARE ATTENZIONE AD ESEMPI*" }, "lc8": { "input": "Ricavi senza modello di Business", "outputSingolare": "Nella sezione dei ricavi ti consiglierei di identificare almeno uno dei 12 modelli proposti nei contenuti. Quelli proposti sono i modelli più utilizzati ed in questo modo riesci a farci capire come sarà strutturato il flusso dei tuoi ricavi e come monetizzere il progetto. Ricorda che può essere normale avere un modello di business in una fase iniziale del progetto e modificarlo al raggiungimento di una certa base di users.", "outputPlulare": "Nella sezione dei ricavi vi consiglierei di identificare almeno uno dei 12 modelli proposti nei contenuti. Quelli proposti sono i modelli più utilizzati ed in questo modo riuscite a farci capire come sarà strutturato il flusso dei vostri ricavi e come monetizzere il progetto. Ricordate che può essere normale avere un modello di business in una fase iniziale del progetto e modificarlo al raggiungimento di una certa base di users." }, "lc9": { "input": "Manca high-level concept", "outputSingolare": "Ti suggerisco di aggiugnere l\’high-level concept per dare una suggestiona della tua proposta di valore in 3 parole. *AD ESEMPIO..*", "outputPlulare": "Vi suggerisco di aggiugnere l\’high-level concept per dare una suggestiona della vostra proposta di valore in 3 parole. *AD ESEMPIO..*" }, "lc10": { "input": "Mancano gli early adopter", "outputSingolare": "Ti suggerisco di identificare i tuoi early adopters, essi saranno di fondamentale importanza per pianificare la strategia iniziale.", "outputPlulare": "Vi suggerisco di identificare i vostri early adopters, essi saranno di fondamentale importanza per pianificare la strategia iniziale." } } }';

const db = JSON.parse(textDB);
