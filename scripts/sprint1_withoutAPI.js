'use strict';

//Use this tool https://www.textfixer.com/tools/remove-line-breaks.php and then modify from ' to \'
//Next, implementing with Node.js to use the file and not this enormous string
let textDB_singolare = '{"Sprint1": { "javelinBoard": { "jb1": { "input": "Customer non allineato alle Buyer Personas", "output": "Fai attenzione ai clienti che hai inserito nella Javelin Board, questi, infatti devono essere allineati alle Buyer Persona che hai compilato e rispecchiarle al 100%."}, "jb2": { "input": "Customer con troppe o poche parole", "output": "Il modo migliore per compilare la sezione Customer è indicare soltanto le parole chiave che rimandano alle Buyer Persona che hai individuato. In particolare, ti consiglio di inserire \’soggetto + verbo + avverbio\’, oppure semplicemente \’soggetto + aggettivo\’ in modo che sia chiara la categoria a cui ti stai riferendo anche a distanza di tempo rispetto a questa prima compilazione."}, "jb3": { "input": "Solo 1 target Customer", "output": "Per avere una validazione più completa e approfondita, sarebbe ottimale riuscire ad identificare 3 tipologie di clienti, questo ti consentirà di individuare i tuoi early adopters in seguito all\’analisi dei dati di validazione, e di targetizzare più efficientemente gli utenti durante lo smoke test che farai nello sprint 3."}, "jb4": { "input": "Problema troppo generico", "output": "I problemi individuati sono ancora troppo generici e saranno quindi poi difficili da validare e confermare. Ti consiglio di entrare maggiormente nel dettaglio, cercando di semplificare i concetti inserendoli all\’interno del tuo contesto di riferimento."}, "jb5": { "input": "Problema simile alle assunzioni", "output": "I problemi individuati non possono coincidere con le assunzioni di rischio. Invece di definire le Riskiest Assumption come l\’opposto del problema, dovresti identificare quella che sarebbe stata la conferma del problema. Ricorda che l\’assunzione di rischio è ciò che deve essere vero affinché il target individuato percepisca il problema descritto."}, "jb6": { "input": "Problema formulato come desiderio/obiettivo", "output": "Attenzione a come hai formulato il problema che vorresti risolvere: non deve, infatti, rappresentare l\’obiettivo del tuo cliente target, ma l\’esigenza. Per questo ti sconsiglio di scrivere \’vorrebbe\’ o \’vuole\’ e provare a rigirare il tutto facendo leva sulla necessità che questo obiettivo rappresenta."}, "jb7": { "input": "Più di un problema nella stessa casella", "output": "Ricorda che ogni test (*Dire quali nella sua JB*) può avere più di un\’assunzione di rischio, ma solo una coppia cliente-problema. Per risolvere puoi aumentare il numero di esperimenti a X, in questo modo avrai un framework più preciso per validare le coppie cliente-problema."}, "jb8": { "input": "Riskiest Assumption contenente più di un elemento che deve dimostrarsi vero", "output": "Le tue riskiest assumption devono rappresentare l\’azione o il comportamento che il cliente deve mettere in atto per far si che il problema definito sia confermato, per questo, fai attenzione a come vengono formulate: non possono contenere più di un\’azione o comportamento, ma devono essere semplici e identificare soltanto un\’azione o un comportamento. "}, "jb9": { "input": "Riskiest Assumption legate alla soluzione", "output": "Attenzione perchè per come hai definito le tue assunzioni, fanno troppo riferimento alla soluzione che hai in mente. In questa fase dovresti escludere ogni possibile soluzione a cui eri precedentemente arrivato, sarà infatti dalla validazione di esistenza e intensità del problema + identificazione di early adopters che partirai a costruire le soluzione. Ricorda che l\’assunzione di rischio è ciò che deve essere vero affinché il target individuato percepisca il problema descritto."}, "jb10": { "input": "Se manca B2B o B2C, ma nelle Buyer Persona ci sono entrambi", "output": "Ho visto che tra le tue Buyer Persona c\’è sia target B2B che target B2C, ma nella Javelin è stata riportata solo una delle due categorie. Ti consiglio di sviluppare una Javelin a parte anche per entrambe i target se pensi che la tua idea possa andare in entrambe le direzioni e vuoi capire quale sia più sentita."}, "jb11": { "input": "Se soluzione inserita nella JB", "output": "In questa fase dovresti escludere ogni possibile soluzione a cui eri precedentemente arrivato, sarà infatti dalla validazione di esistenza e intensità del problema + identificazione di early adopters che partirai a costruire le soluzione."}, "jb12": { "input": "Se manca interviste come metodo", "output": "Vedo che hai inserito solo il questionario come metodo per raccogliere opinioni e informazioni, tuttavia il nostro consiglio è quello di partire dai questionari per fissare poi interviste. Infatti, soltanto parlando in prima persona con i tuoi potenziali clienti riuscirai a capire di cosa hanno bisogno. So che si è sempre timorosi di esporsi così tanto, ma il valore che ne trarrai sarà molto grande. "}, "jb13": { "input": "Se criteri di successo sono sempre uguali", "output": "I criteri di successo indicano sempre la stessa percentuale. Ti consiglio di ponderare, ciascuna ipotesi e assunzione di rischio e valutare anche prioritizzando quale tra queste ha più peso sulla tua idea e quindi dovrà necessariamente avere un tasso di successo maggiore o minore rispetto alle altre. "}, "jb14": { "input": "Se manca riferimento all\’obiettivo totale da raggiungere", "output": "I criteri di successo della javelin B2B necessitano anche di un numero assoluto di compilazioni o risposte che vorresti ricevere. Il X% di 10 risposte è diverso dal X% di 100 risposte. Quante risposte positive ti farebbero dire che l\’assunzione rischiosa è validata?"}, "jb15": { "input": "Se manca criterio di successo", "output": "Dopo aver deciso quale metodo utilizzare per testare il tuo problema, dovresti anche indicare il relativo criterio di successo prima di iniziare a distribuire questioni e fare interviste. Infatti, l\’approccio scientifico che questo strumento vuole avere prevede che si decida a priori il tasso sopra il quale la nostra assunzione di rischio sarà validata o invalidata. Tipicamente si inseriscono percentuali di successo indicando anche il numero totale di questionari o interviste che si punta ad ottenere"}, "jb16": { "input": "Se manca indicazione metodo", "output": "Hai indicato i criteri di successo, ma non sono stati indicati i metodi con cui vorrai testare il tuo problema. Inserisci se vorrai procedere con dei questionari, delle interviste, o come ti consiglierei io, con entrambi. "}, "jb17": { "input": "Se obiettivo è poco ambizioso", "output": "Hai correttamente indicato i metodi e i criteri di successo, tuttavia pur essendo un mercato di nicchia, credo che tu possa ambire ad ottenere dei risultati migliori così!"}, "jb18": { "input": "Se manca questionario (per B2C)", "output": "Tra i metodi di validazione vedo che hai inserito soltanto le interviste. Ti consiglio di prevedere anche la somministrazione di questionari che potranno darti una visione più quantitativa del problema e richiederanno minore sforzo ai potenziali clienti, quindi un numero di risposte potenzialmente più elevato."} }, "buyerPersona": { "bp1": { "input": "Se i 3 profili creati sono generici", "output": "Le descrizioni dei 3 profili che hai scelto per le buyer personas sono molto generiche, prova ad aggiungere un livello aggiuntivo di complessità tenendo presente il problema di fondo e argomentando la storia della persona intorno a quel tema. Capire chi sono i potenziali clienti, come pensano, come si comportano, come si esprimono e quali sono le loro caratteristiche demografiche e psicografiche è fondamentale per impostare una proposta di valore coerente con i loro bisogni e veicolarla al meglio." }, "bp2": { "input": "Se meno di 3 buyer personas", "output": "Ti consiglio di sviluppare 3 Buyer Personas per ogni segmento del mercato che vorresti aggredire, in questo modo ti verrà più semplice capire quali sono i potenziali primi utilizzatori del tuo prodotto/servizio e targetizzarli più efficientemente con lo smoke test (argomento cardine del terzo Sprint)." }, "bp3": { "input": "Se uno o più profili sono troppo di nicchia", "output": "Le Buyer Personas dovrebbero essere stabilite con la massima attenzione, ma bisogna sempre tener conto che si tratta di modelli astratti che devono poi trovare riscontro nella realtà concreta, proprio attraverso i metodi di validazione che hai individuato. Lasciati quindi un po\’ di margine di libertà per impostare il tuo pubblico. Aggiungi informazioni creative e di contorno che non ristringano troppo il pubblico a cui vorresti rivolgerti." }, "bp4": { "input": "Se non hanno inserito persona in B2B", "output": "Ti suggerisco di identificare la persona con cui dovete interagire nel caso B2B per capire più concretamente i bisogni, desideri, timori, pains e gains dell\’individuo decisore della potenziale azienda cliente. Anche quando il cliente è un azienda, bisogna sempre passare dalle persone." }, "bp5": { "input": "se non mettono provenienza geografiche precisa", "output": "Ti suggerisco di riflettere anche sulla provenienza geografica e non esprimere un paese (e.g., Italia) in generale. Spesso un problema può essere percepito in modo diverso da chi vive al nord rispetto a chi vive al sud di un paese, oppure da un abitante di una città o ad un abitante di un paese" }, "bp6": { "input": "Se sono fatte bene e complete", "output": "Le Buyer Personas che hai identificato sono coerenti con quanto riportato nella Javelin, bravo! Tieni presente che le Buyer Personas sono sempre in continuo mutamento, soprattutto dopo aver raccolto i primi dati dalle interviste e dai questionari." } }, "accountingStrategy": { "as1": { "input": "Se non raggiungono 20 nomi", "output": "So che 20 contatti possono sembrare tanti, ma in questo momento ti consiglio di consederarli come il minimo da raggiungere. Infatti, più contatti e persone avrai individuato in questa fase, maggiore sarà la possibilità di ricevere una risposta e riuscire a trasformare un messaggio inviato su Linkedin o via mail, in una vera e propria intervista da analizzare. Partendo dalle Buyer Personas che hai implementato, prova ad esplorare maggiormente raggiungendo ad esempio imprese diverse o regioni/Stati diversi. " }, "as2": { "input": "Se mancano informazioni di contatto", "output": "Alcuni dei contatti che hai inserito nella lista mancano di informazioni importanti *INSERIRE ESEMPI DI INFORMAZIONI MANCANTI*. In questo momento potrebbe sembrarti ovvio, ma quando andrai ad aggiornare la lista a distanza di settimane, la lettura e comprensione di questa tabella sarà molto più semplice se tutte le informazioni saranno state inserite correttamente. " }, "as3": { "input": "Se la lista di persone non coincide con le buyer personas", "output": "Noto che all\’interno della lista sono state inserite delle persone che non coincidono con le tue Buyer Personas. Ti invito, quindi, ad aggiornarle tenendo in considerazione i ragionamenti che ti hanno portato ad aggiungere queste persone all\’interno del template." }, "as4": { "input": "se fatta bene", "output": "Ottimo lavoro per l\’account Strategy. Ti sarà fondamentale sia ora per le interviste che dovrai effettuare, sia più avanti in fase di vendita. Ricordati di tenerla sempre aggiornata." } }, "coldMessage": { "cm1": { "input": "Se troppo lungo", "output": "Attenzione alla lunghezza del testo: se troppo lungo il rischio è quello di diinuire la probabilità che la persona dall\’altra parte legga fino alla fine il tuo messaggio. L\’obiettivo in questo momento è essere chiari e concisi per proporre il successivo touchpoint. Prova a snellire il testo fino ad un massimo di 100/150 parole." }, "cm2": { "input": "Se manca la CTA", "output": "Nel messaggio è assente una call-to-action. Cioè, non hai inserito nessuna richiesta ulteriore di contatto. Per te è fondamentale non solo avergli scritto, ma anche aver dato a questa persona la possibilità di pianificare un passo successivo con te nel caso di interesse. Potrebbe essere l\’accettazione della richiesta di contatto o anche la prenotazione di una call o anche solo la risposta ad una domanda posta nel testo. " }, "cm3": { "input": "Se mancano proposte di date", "output": "Sarebbe utile prevedere già a questo livello un punto di contatto molto forte come una chiamata (telefonica o online). Prevedi quindi delle proposte di date o inserisci il link di Calendly (strumento spiegato nello sprint e molto semplice da impostare)." }, "cm4": { "input": "Se parla della soluzione", "output": "Non parlare della tua soluzione. L\’obiettivo di questa introduzione è mostrare interesse per la persona e/o il suo ruolo all\’interno dell\’organizzazione, non spiegare la soluzione che hai in mente. Ricorda sempre che in questa fase la validazione riguarda il problema e la definizione del target di riferimento. " }, "cm5": { "input": "Se fatta bene", "output": "Il cold message è fatto molto bene! Ricordati di personalizzarlo, se lo ritieni opportuno, in base all\’interlocutore con cui ti interfacci." } }, "questionarioIntervista": { "iq1": { "input": "Se inseriscono la soluzione nell\’intro", "output": "Il questionario ha l\’obiettivo di indagare e approfondire il fit problema-cliente, per cui ti sconsiglio di parlare della soluzione che hai in mente nell\’introduzione. Potresti rimanere molto più generico facendo riferimento al tema di tuo interesse e cercando di ingaggiare le persone a sentirsi rappresentate dalla situazione/contesto su cui dovranno rispondere. " }, "iq2": { "input": "Se manca introduzione", "output": "Inserire una breve introduzione rende più propenso la persona a procedere nel questionario e dà maggiore credibilità a quello che si sta per fare. Attenzione a non parlare della tua soluzione!" }, "iq3": { "input": "Se non ci sono domande che testano le assunzioni", "output": "Ho notato che alcune delle riskiest assumption descritte nella javelin board non trovano riscontro in nessuna delle domande del questionario. Ti consiglio di pensare ad una o più domande che indaghino il comportamento che hai inserito alla base delle tue ipotesi di problema per verificarne la presenza e poterle quindi validare o invalidare. Questo passaggio è fondamentale e strumentale al successivo sviluppo del tuo progetto. Se il tuo problema è *aggiungere problema* e la tua assunzione di rischio ad esempio è *aggiungere assunzione di rischio*, allora dovrai inserire delle domande che approfondiscono la questione e cercano di verificare che questo comportamento in particolare si verifichi." }, "iq4": { "input": "Se mancano dati demografici importanti", "output": "Ricordati che sarà grazie al questionario che potrai definire maggiormente le tue buyer personas o costruirne di nuove, per cui sarebbe importante inserire dati demografici che potrebbero essere di tuo interesse *inserirne alcuni tra questi: età, provenienza, posizione lavorativa, figli, celibe/nubile." }, "iq5": { "input": "Se troppe domande a risposta aperta", "output": "Ho notato che hai inserito molte domande a risposta aperta. Pur consentendo un forte approfondimento qualitativo, sappiamo che la percentuale di risposte che si ricevono a questo tipo di domande è drasticamente più bassa rispetto alle domande a risposta chiusa. Ti consiglio, quindi di modificare almeno alcune di queste domande aperte, magari quelle che potrebbero esprimere dei giudizi di valore (molto, poco, per niente) con delle scale di gradimento o provare ad inserire delle risposte possibili lasciando sempre la possibilità di aggiungere *altro* come risposta possibile. " }, "iq6": { "input": "Se nessuna domanda a risposta aperta", "output": "Ho notato che non hai inserito nessuna domanda a risposta aperta. Forse, potresti pensare di aggiungerne qualcuna legata alle domande più importanti per il tuo problema e su cui sarebbe utile conoscere la motivazione sottostante la risposta. Mi riferisco, ad esempio alle domande che esprimono un giudizio di valore di cui sarebbe interessante conoscere la motivazione legata al giudizio stesso." }, "iq7": { "input": "Se mancano domande relative al questionario", "output": "Mancano le domande per il questionario. Pur volendo rivolgerti ad una nicchia ti consiglio di impostare anche un questionario che potresti poi distrubuire su gruppi facebook, forum tematici o molti altri punti di aggregazione online. " }, "iq8": { "input": "Se mancano domande intervista, ma è stato citato come metodo di validazione", "output": "Mancano le domande per le interviste. Ti consiglio vivamente di provare ad immaginare quali domande potresti fare in una chiamata che durerà 15/20 minuti al massimo. In questo caso, prediligi domande aperte, non parlare della tua soluzione e lascia che sia il tuo interlocutore ad approfondire il dettaglio che gli o le sta più a cuore del tema che gli o le sottoporrai. " }, "iq9": { "input": "Se mancano domande intervista e non è citato come metodo di validazione", "output": "Il mio consiglio personale è quello di cercare in ogni caso di completare tra le 10 e le 15 interviste per riuscire a comprendere davvero i tuoi potenziali clienti. Infatti, sarà dal confronto diretto che potrai raccogliere il maggior numero possibile di informazioni, dettagli e valore aggiunto rispetto al problema che ti stai immaginando. Prepara un set di domande da poter utilizzare nelle chiamate. " }, "iq10": { "input": "Se manca un filo logico nell\’ordine in cui sono state scritte le domande", "output": "Le domande che hai inserito non sembrano seguire un filo logico che aiuta il rispondente nella compilazione. In questo caso il consiglio è di partire con le domande più generiche e di contorno e poi a mano a mano che si avanza aggiungere sempre ulteriori dettagli ed elementi specifici che vorresti indagare (sempre ricordando di non parlare della soluzione!)." }, "iq11": { "input": "Se hanno B2C e B2B e manca questionario per B2C", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere anche un questionario per il tuo target B2C, oltre che l\’intervista." }, "iq12": { "input": "Se hanno B2C e B2B e manca sia questionario che intervista per B2C", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere sia un questionario per il tuo target B2C, che l\’intervista." }, "iq13": { "input": "Se hanno B2C e B2B e manca intervista per B2C", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere anche un questionario per il tuo target B2B, oltre che l\’intervista." }, "iq14": { "input": "Se hanno B2C e B2B e manca sia questionario che intervista per B2B", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere sia un questionario per il tuo target B2B, che l\’intervista." }, "iq15": { "input": "Se hanno B2C e B2B e manca questionario per B2B", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere anche un\’intervista per il tuo target B2B, oltre che il questionario." }, "iq16": { "input": "Se hanno B2C e B2B e manca intervista per B2B", "output": "Il tuo prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che hai correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovresti prevedere anche un\’intervista per il tuo target B2C, oltre che il questionario." }, "iq17": { "input": "Se usano condizionale", "output": "Nell\’impostare le domande hai usato il condizionale, tuttavia ti sconsiglio di porle in questo modo perchè tu stai cercando di capire e approfondire comportamenti che la persona ha effettivamente messo in atto in passato e non se farebbe o non farebbe una cosa. Infatti, le persone sono portate a seguire dei bias cognitivi per cui di fronte alla domanda al condizionale tendono a dare la risposta più semplice o quella che si immaginano essere la risposta che stai cercando tu, mai (o quasi) quella che pensano davvero. Per questo motivo si indaga sempre facendo riferimento al passato e ad azioni già avvenute in modo che si capisca la predisposizione o meno di una persona ad agire in un determinato modo. " }, "iq18": { "input": "Se ci sono domande complesse che contengono più di un elemento da indagare", "output": "In questa domanda *riprendere domanda* fai attenzione perchè contiene più di un elemento da giudicare. Ti consiglio di scomporla o semplificarla per facilitare la risposta e le tue analisi" }, "iq19": { "input": "Se manca privacy", "output": "Aggiungi al termine del questionario la domanda per il trattamento dei dati e della privacy, puoi usare questa dicitura: \’Acconsento al trattamento dei dati generati dal seguente questionario - D.Lgs 196/2003 & GDPR (UE) 679/2016\’. Rendi questa domanda obbligatoria e lascia come unica opzione \’si\’." }, "iq20": { "input": "Se ci sono domande con scale di valore senza scala likert", "output": "Ti consiglio di trasformare tutte le domande che approfondiscono un giudizio di valore usando una scala likert che facilita la risposta impostando una scala da 0 a 10 o da 0 a 5 (per niente - completamente)" }, "iq21": { "input": "Se non chiedono il contatto email", "output": "Ti suggerisco di inserire la possibilità di lasciarti un contatto email per rimanere aggiornato o (ancora meglio) approfondire ulteriormente il tema con un\’intervista. Hai raggiunto una persona e non la farei scappare. Potrebbe anche essere il tuo primo cliente." }, "iq22": { "input": "se inseriscono \’hai mai\’ o \’recentemente hai\’", "output": "Quando fai una domanda al passato del tipo \’hai mai..\’ o \’recentemente hai\’, ti consiglio di integrare con un arco temporale (6 mesi, 1 anno, 3 anni, etc.). La risposta di una persona che ha sentito il problema 5 anni ha sicuramente un peso diverso da chi ha avvertito il problema negli ultimi 6 mesi." }, "iq23": { "input": "Se provenienza geografica con form testo", "output": "Dove richiedi la città/paese di provenienza ti consiglierei di inserire un elenco a discesa con tutte le province italiane. Ti aiuterà molto in fase di analisi, perchè i tuoi dati saranno più puliti e più facilmente analizzabili. Oppure inserisci una spiegazione sulla compilazione del form per minimizzare gli errori di formattazione degli utenti." } } }}';

let textDB_plurale = '{"Sprint1": { "javelinBoard": { "jb1": { "input": "Customer non allineato alle Buyer Personas", "output": "Fate attenzione ai clienti che avete inserito nella Javelin Board, questi, infatti devono essere allineati alle Buyer Persona che avete compilato e rispecchiarle al 100%."}, "jb2": { "input": "Customer con troppe o poche parole", "output": "Il modo migliore per compilare la sezione Customer è indicare soltanto le parole chiave che rimandano alle Buyer Persona che avete individuato. In particolare, vi consiglio di inserire \’soggetto + verbo + avverbio\’, oppure semplicemente \’soggetto + aggettivo\’ in modo che sia chiara la categoria a cui vi state riferendo anche a distanza di tempo rispetto a questa prima compilazione."}, "jb3": { "input": "Solo 1 target Customer", "output": "Per avere una validazione più completa e approfondita, sarebbe ottimale riuscire ad identificare 3 tipologie di clienti, questo vi consentirà di individuare i tuoi early adopters in seguito all\’analisi dei dati di validazione, e di targetizzare più efficientemente gli utenti durante lo smoke test che farai nello sprint 3."}, "jb4": { "input": "Problema troppo generico", "output": "I problemi individuati sono ancora troppo generici e saranno quindi poi difficili da validare e confermare. Vi consiglio di entrare maggiormente nel dettaglio, cercando di semplificare i concetti inserendoli all\’interno del tuo contesto di riferimento."}, "jb5": { "input": "Problema simile alle assunzioni", "output": "I problemi individuati non possono coincidere con le assunzioni di rischio. Invece di definire le Riskiest Assumption come l\’opposto del problema, dovreste identificare quella che sarebbe stata la conferma del problema. Ricordate che l\’assunzione di rischio è ciò che deve essere vero affinché il target individuato percepisca il problema descritto."}, "jb6": { "input": "Problema formulato come desiderio/obiettivo", "output": "Attenzione a come avete formulato il problema che vorreste risolvere: non deve, infatti, rappresentare l\’obiettivo del vostro cliente target, ma l\’esigenza. Per questo vi sconsiglio di scrivere \’vorrebbe\’ o \’vuole\’ e provare a rigirare il tutto facendo leva sulla necessità che questo obiettivo rappresenta."}, "jb7": { "input": "Più di un problema nella stessa casella", "output": "Ricordate che ogni test (*Dire quali nella sua JB*) può avere più di un\’assunzione di rischio, ma solo una coppia cliente-problema. Per risolvere potete aumentare il numero di esperimenti a X, in questo modo avrete un framework più preciso per validare le coppie cliente-problema."}, "jb8": { "input": "Riskiest Assumption contenente più di un elemento che deve dimostrarsi vero", "output": "Le vostre riskiest assumption devono rappresentare l\’azione o il comportamento che il cliente deve mettere in atto per far si che il problema definito sia confermato, per questo, fate attenzione a come vengono formulate: non possono contenere più di un\’azione o comportamento, ma devono essere semplici e identificare soltanto un\’azione o un comportamento. "}, "jb9": { "input": "Riskiest Assumption legate alla soluzione", "output": "Attenzione perchè per come avete definito le vostre assunzioni, fanno troppo riferimento alla soluzione che avete in mente. In questa fase dovreste escludere ogni possibile soluzione a cui eravate precedentemente arrivato, sarà infatti dalla validazione di esistenza e intensità del problema + identificazione di early adopters che partirete a costruire le soluzione. Ricordate che l\’assunzione di rischio è ciò che deve essere vero affinché il target individuato percepisca il problema descritto."}, "jb10": { "input": "Se manca B2B o B2C, ma nelle Buyer Persona ci sono entrambi", "output": "Ho visto che tra le vostre Buyer Persona c\’è sia target B2B che target B2C, ma nella Javelin è stata riportata solo una delle due categorie. Vi consiglio di sviluppare una Javelin a parte anche per entrambe i target se pensate che la vostra idea possa andare in entrambe le direzioni e volete capire quale sia più sentita."}, "jb11": { "input": "Se soluzione inserita nella JB", "output": "In questa fase dovresti escludere ogni possibile soluzione a cui eravate precedentemente arrivati, sarà infatti dalla validazione di esistenza e intensità del problema + identificazione di early adopters che partirete a costruire le soluzione."}, "jb12": { "input": "Se manca interviste come metodo", "output": "Vedo che avete inserito solo il questionario come metodo per raccogliere opinioni e informazioni, tuttavia il nostro consiglio è quello di partire dai questionari per fissare poi interviste. Infatti, soltanto parlando in prima persona con i tuoi potenziali clienti riuscirete a capire di cosa hanno bisogno. So che si è sempre timorosi di esporsi così tanto, ma il valore che ne trarrete sarà molto grande. "}, "jb13": { "input": "Se criteri di successo sono sempre uguali", "output": "I criteri di successo indicano sempre la stessa percentuale. Vi consiglio di ponderare, ciascuna ipotesi e assunzione di rischio e valutare anche prioritizzando quale tra queste ha più peso sulla tua idea e quindi dovrà necessariamente avere un tasso di successo maggiore o minore rispetto alle altre. "}, "jb14": { "input": "Se manca riferimento all\’obiettivo totale da raggiungere", "output": "I criteri di successo della javelin B2B necessitano anche di un numero assoluto di compilazioni o risposte che vorresti ricevere. Il X% di 10 risposte è diverso dal X% di 100 risposte. Quante risposte positive vi farebbero dire che l\’assunzione rischiosa è validata?"}, "jb15": { "input": "Se manca criterio di successo", "output": "Dopo aver deciso quale metodo utilizzare per testare il vostro problema, dovreste anche indicare il relativo criterio di successo prima di iniziare a distribuire questioni e fare interviste. Infatti, l\’approccio scientifico che questo strumento vuole avere prevede che si decida a priori il tasso sopra il quale la nostra assunzione di rischio sarà validata o invalidata. Tipicamente si inseriscono percentuali di successo indicando anche il numero totale di questionari o interviste che si punta ad ottenere"}, "jb16": { "input": "Se manca indicazione metodo", "output": "Avete indicato i criteri di successo, ma non sono stati indicati i metodi con cui vorrete testare il tuo problema. Inserite se vorrete procedere con dei questionari, delle interviste, o come vi consiglierei io, con entrambi. "}, "jb17": { "input": "Se obiettivo è poco ambizioso", "output": "Avete correttamente indicato i metodi e i criteri di successo, tuttavia pur essendo un mercato di nicchia, credo che voi possiate ambire ad ottenere dei risultati migliori così!"}, "jb18": { "input": "Se manca questionario (per B2C)", "output": "Tra i metodi di validazione vedo che avete inserito soltanto le interviste. Vi consiglio di prevedere anche la somministrazione di questionari che potranno darvi una visione più quantitativa del problema e richiederanno minore sforzo ai potenziali clienti, quindi un numero di risposte potenzialmente più elevato."} }, "buyerPersona": { "bp1": { "input": "Se i 3 profili creati sono generici", "output": "Le descrizioni dei 3 profili che avete scelto per le buyer personas sono molto generiche, prova ad aggiungere un livello aggiuntivo di complessità tenendo presente il problema di fondo e argomentando la storia della persona intorno a quel tema. Capire chi sono i potenziali clienti, come pensano, come si comportano, come si esprimono e quali sono le loro caratteristiche demografiche e psicografiche è fondamentale per impostare una proposta di valore coerente con i loro bisogni e veicolarla al meglio. In questo caso *scope della startup*, ad esempio: *esempio di dettagli aggiuntivo per una o più BP*" }, "bp2": { "input": "Se meno di 3 buyer personas", "output": "Vi consiglio di sviluppare 3 Buyer Personas per ogni segmento del mercato che vorresti aggredire, in questo modo vi verrà più semplice capire quali sono i potenziali primi utilizzatori del vostro prodotto/servizio e targetizzarli più efficientemente con lo smoke test (argomento cardine del terzo Sprint)." }, "bp3": { "input": "Se uno o più profili sono troppo di nicchia", "output": "Le Buyer Personas dovrebbero essere stabilite con la massima attenzione, ma bisogna sempre tener conto che si tratta di modelli astratti che devono poi trovare riscontro nella realtà concreta, proprio attraverso i metodi di validazione che hai individuato. Lasciatevi quindi un po\’ di margine di libertà per impostare il tuo pubblico. Aggiungete informazioni creative e di contorno che non ristringano troppo il pubblico a cui vorreste rivolgervi." }, "bp4": { "input": "Se non hanno inserito persona in B2B", "output": "Vi suggerisco di identificare la persona con cui dovete interagire nel caso B2B per capire più concretamente i bisogni, desideri, timori, pains e gains dell\’individuo decisore della potenziale azienda cliente. Anche quando il cliente è un azienda, bisogna sempre passare dalle persone." }, "bp5": { "input": "se non mettono provenienza geografiche precisa", "output": "Vi suggerisco di riflettere anche sulla provenienza geografica e non esprimere un paese (e.g., Italia) in generale. Spesso un problema può essere percepito in modo diverso da chi vive al nord rispetto a chi vive al sud di un paese, oppure da un abitante di una città o ad un abitante di un paese" }, "bp6": { "input": "Se sono fatte bene e complete", "output": "Le Buyer Personas che avete identificato sono coerenti con quanto riportato nella Javelin, bravi! Tenete presente che le Buyer Personas sono sempre in continuo mutamento, soprattutto dopo aver raccolto i primi dati dalle interviste e dai questionari." } }, "accountingStrategy": { "as1": { "input": "Se non raggiungono 20 nomi", "output": "So che 20 contatti possono sembrare tanti, ma in questo momento vi consiglio di consederarli come il minimo da raggiungere. Infatti, più contatti e persone avrete individuato in questa fase, maggiore sarà la possibilità di ricevere una risposta e riuscire a trasformare un messaggio inviato su Linkedin o via mail, in una vera e propria intervista da analizzare. Partendo dalle Buyer Personas che avete implementato, provate ad esplorare maggiormente raggiungendo ad esempio imprese diverse o regioni/Stati diversi. " }, "as2": { "input": "Se mancano informazioni di contatto", "output": "Alcuni dei contatti che avete inserito nella lista mancano di informazioni importanti *INSERIRE ESEMPI DI INFORMAZIONI MANCANTI*. In questo momento potrebbe sembrarvi ovvio, ma quando andrate ad aggiornare la lista a distanza di settimane, la lettura e comprensione di questa tabella sarà molto più semplice se tutte le informazioni saranno state inserite correttamente. " }, "as3": { "input": "Se la lista di persone non coincide con le buyer personas", "output": "Noto che all\’interno della lista sono state inserite delle persone che non coincidono con le tue Buyer Personas. Vi invito, quindi, ad aggiornarle tenendo in considerazione i ragionamenti che vi hanno portato ad aggiungere queste persone all\’interno del template." }, "as4": { "input": "se fatta bene", "output": "Ottimo lavoro per l\’account Strategy. Vi sarà fondamentale sia ora per le interviste che dovrai effettuare, sia più avanti in fase di vendita. Ricordatevi di tenerla sempre aggiornata." } }, "coldMessage": { "cm1": { "input": "Se troppo lungo", "output": "Attenzione alla lunghezza del testo: se troppo lungo il rischio è quello di diinuire la probabilità che la persona dall\’altra parte legga fino alla fine il tuo messaggio. L\’obiettivo in questo momento è essere chiari e concisi per proporre il successivo touchpoint. Provate a snellire il testo fino ad un massimo di 100/150 parole. " }, "cm2": { "input": "Se manca la CTA", "output": "Nel messaggio è assente una call-to-action. Cioè, non avete inserito nessuna richiesta ulteriore di contatto. Per voi è fondamentale non solo avergli scritto, ma anche aver dato a questa persona la possibilità di pianificare un passo successivo nel caso di interesse. Potrebbe essere l\’accettazione della richiesta di contatto o anche la prenotazione di una call o anche solo la risposta ad una domanda posta nel testo. " }, "cm3": { "input": "Se mancano proposte di date", "output": "Sarebbe utile prevedere già a questo livello un punto di contatto molto forte come una chiamata (telefonica o online). Prevedete quindi delle proposte di date o inserite il link di Calendly (strumento spiegato nello sprint e molto semplice da impostare)." }, "cm4": { "input": "Se parla della soluzione", "output": "Non parlare della vostra soluzione. L\’obiettivo di questa introduzione è mostrare interesse per la persona e/o il suo ruolo all\’interno dell\’organizzazione, non spiegare la soluzione che avete in mente. Ricordate sempre che in questa fase la validazione riguarda il problema e la definizione del target di riferimento." }, "cm5": { "input": "Se fatta bene", "output": "Il cold message è fatto molto bene! Ricordati di personalizzarlo, se lo ritenete opportuno, in base all\’interlocutore con cui vi interfacciate." } }, "questionarioIntervista": { "iq1": { "input": "Se inseriscono la soluzione nell\’intro", "output": "Il questionario ha l\’obiettivo di indagare e approfondire il fit problema-cliente, per cui vi sconsiglio di parlare della soluzione che avete in mente nell\’introduzione. Potreste rimanere molto più generici facendo riferimento al tema di vostro interesse e cercando di ingaggiare le persone a sentirsi rappresentate dalla situazione/contesto su cui dovranno rispondere. " }, "iq2": { "input": "Se manca introduzione", "output": "Inserire una breve introduzione rende più propenso la persona a procedere nel questionario e dà maggiore credibilità a quello che si sta per fare. Attenzione a non parlare della tua soluzione!" }, "iq3": { "input": "Se non ci sono domande che testano le assunzioni", "output": "Ho notato che alcune delle riskiest assumption descritte nella javelin board non trovano riscontro in nessuna delle domande del questionario. Vi consiglio di pensare ad una o più domande che indaghino il comportamento che avete inserito alla base delle vostre ipotesi di problema per verificarne la presenza e poterle quindi validare o invalidare. Questo passaggio è fondamentale e strumentale al successivo sviluppo del vostro progetto. Se il vostro problema è *aggiungere problema* e la vostra assunzione di rischio ad esempio è *aggiungere assunzione di rischio*, allora dovrete inserire delle domande che approfondiscono la questione e cercano di verificare che questo comportamento in particolare si verifichi." }, "iq4": { "input": "Se mancano dati demografici importanti", "output": "Ricordatevi che sarà grazie al questionario che potrete definire maggiormente le vostre buyer personas o costruirne di nuove, per cui sarebbe importante inserire dati demografici che potrebbero essere di vostro interesse *inserirne alcuni tra questi: età, provenienza, posizione lavorativa, figli, celibe/nubile*" }, "iq5": { "input": "Se troppe domande a risposta aperta", "output": "Ho notato che avete inserito molte domande a risposta aperta. Pur consentendo un forte approfondimento qualitativo, sappiamo che la percentuale di risposte che si ricevono a questo tipo di domande è drasticamente più bassa rispetto alle domande a risposta chiusa. Vi consiglio, quindi di modificare almeno alcune di queste domande aperte, magari quelle che potrebbero esprimere dei giudizi di valore (molto, poco, per niente) con delle scale di gradimento o provare ad inserire delle risposte possibili lasciando sempre la possibilità di aggiungere *altro* come risposta possibile. " }, "iq6": { "input": "Se nessuna domanda a risposta aperta", "output": "Ho notato che non avete inserito nessuna domanda a risposta aperta. Forse, potreste pensare di aggiungerne qualcuna legata alle domande più importanti per il vostro problema e su cui sarebbe utile conoscere la motivazione sottostante la risposta. Mi riferisco, ad esempio alle domande che esprimono un giudizio di valore di cui sarebbe interessante conoscere la motivazione legata al giudizio stesso. " }, "iq7": { "input": "Se mancano domande relative al questionario", "output": "Mancano le domande per il questionario. Pur volendo rivolgerti ad una nicchia vi consiglio di impostare anche un questionario che potreste poi distrubuire su gruppi facebook, forum tematici o molti altri punti di aggregazione online. " }, "iq8": { "input": "Se mancano domande intervista, ma è stato citato come metodo di validazione", "output": "Mancano le domande per le interviste. Vi consiglio vivamente di provare ad immaginare quali domande potresti fare in una chiamata che durerà 15/20 minuti al massimo. In questo caso, prediligete domande aperte, non parlare della vostra soluzione e lascia che sia il vostro interlocutore ad approfondire il dettaglio che gli o le sta più a cuore del tema che gli o le sottoporrete. " }, "iq9": { "input": "Se mancano domande intervista e non è citato come metodo di validazione", "output": "Il mio consiglio personale è quello di cercare in ogni caso di completare tra le 10 e le 15 interviste per riuscire a comprendere davvero i vpstri potenziali clienti. Infatti, sarà dal confronto diretto che potrete raccogliere il maggior numero possibile di informazioni, dettagli e valore aggiunto rispetto al problema che vi state immaginando. Preparate un set di domande da poter utilizzare nelle chiamate. " }, "iq10": { "input": "Se manca un filo logico nell\’ordine in cui sono state scritte le domande", "output": "Le domande che avete inserito non sembrano seguire un filo logico che aiuta il rispondente nella compilazione. In questo caso il consiglio è di partire con le domande più generiche e di contorno e poi a mano a mano che si avanza aggiungere sempre ulteriori dettagli ed elementi specifici che vorreste indagare (sempre ricordando di non parlare della soluzione!)" }, "iq11": { "input": "Se hanno B2C e B2B e manca questionario per B2C", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere anche un questionario per il tuo target B2C, oltre che l\’intervista." }, "iq12": { "input": "Se hanno B2C e B2B e manca sia questionario che intervista per B2C", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere sia un questionario per il tuo target B2C, che l\’intervista." }, "iq13": { "input": "Se hanno B2C e B2B e manca intervista per B2C", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere anche un questionario per il tuo target B2B, oltre che l\’intervista." }, "iq14": { "input": "Se hanno B2C e B2B e manca sia questionario che intervista per B2B", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere sia un questionario per il tuo target B2B, che l\’intervista." }, "iq15": { "input": "Se hanno B2C e B2B e manca questionario per B2B", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere anche un\’intervista per il tuo target B2B, oltre che il questionario." }, "iq16": { "input": "Se hanno B2C e B2B e manca intervista per B2B", "output": "Il vostro prodotto/servizio ha diversi interlocutori sia B2C che B2B che devono essere presi in considerazione e che avete correttamente inserito nella tua javelin. Tuttavia, mancano i corrispettivi metodi di validazione per entrambe le categorie. Dovreste prevedere anche un\’intervista per il tuo target B2C, oltre che il questionario." }, "iq17": { "input": "Se usano condizionale", "output": "Nell\’impostare le domande avete usato il condizionale, tuttavia vi sconsiglio di porle in questo modo perchè voi state cercando di capire e approfondire comportamenti che la persona ha effettivamente messo in atto in passato e non se farebbe o non farebbe una cosa. Infatti, le persone sono portate a seguire dei bias cognitivi per cui di fronte alla domanda al condizionale tendono a dare la risposta più semplice o quella che si immaginano essere la risposta che stai cercando tu, mai (o quasi) quella che pensano davvero. Per questo motivo si indaga sempre facendo riferimento al passato e ad azioni già avvenute in modo che si capisca la predisposizione o meno di una persona ad agire in un determinato modo. " }, "iq18": { "input": "Se ci sono domande complesse che contengono più di un elemento da indagare", "output": "In questa domanda *riprendere domanda* fate attenzione perchè contiene più di un elemento da giudicare. Vi consiglio di scomporla o semplificarla per facilitare la risposta e le vostre analisi." }, "iq19": { "input": "Se manca privacy", "output": "Aggiungete al termine del questionario la domanda per il trattamento dei dati e della privacy, puoi usare questa dicitura: \’Acconsento al trattamento dei dati generati dal seguente questionario - D.Lgs 196/2003 & GDPR (UE) 679/2016\’. Rendete questa domanda obbligatoria e lasciate come unica opzione \’si\’." }, "iq20": { "input": "Se ci sono domande con scale di valore senza scala likert", "output": "Vi consiglio di trasformare tutte le domande che approfondiscono un giudizio di valore usando una scala likert che facilita la risposta impostando una scala da 0 a 10 o da 0 a 5 (per niente - completamente)." }, "iq21": { "input": "Se non chiedono il contatto email", "output": "Vi suggerisco di inserire la possibilità di lasciarvi un contatto email per rimanere aggiornato o (ancora meglio) approfondire ulteriormente il tema con un\’intervista. Avete raggiunto una persona e non la farei scappare. Potrebbe anche essere il vostro primo cliente." }, "iq22": { "input": "se inseriscono \’hai mai\’ o \’recentemente hai\’", "output": "Quando fate una domanda al passato del tipo \’hai mai..\’ o \’recentemente hai\’, vi consiglio di integrare con un arco temporale (6 mesi, 1 anno, 3 anni, etc.). La risposta di una persona che ha sentito il problema 5 anni ha sicuramente un peso diverso da chi ha avvertito il problema negli ultimi 6 mesi." }, "iq23": { "input": "Se provenienza geografica con form testo", "output": "Dove richiedete la città/paese di provenienza vi consiglierei di inserire un elenco a discesa con tutte le province italiane. Vi aiuterà molto in fase di analisi, perchè i vostri dati saranno più puliti e più facilmente analizzabili. Oppure inserite una spiegazione sulla compilazione del form per minimizzare gli errori di formattazzione degli utenti." } } }}';


const dbSingolare = JSON.parse(textDB_singolare);
const dbPlurale = JSON.parse(textDB_plurale);
//console.log(dbPlurale);

//Non obbligatorio usare questo listener
document.addEventListener("DOMContentLoaded", async function(event) {


    //JAVELIN BOARD
    let j = 0;
    for (let key in dbSingolare.Sprint1.javelinBoard) {
        j=j+1;
        document.getElementById("Input_JB".concat(j.toString())).innerHTML = dbSingolare.Sprint1.javelinBoard[key].input;
    }
   
    //BUYER PERSONAS
    document.getElementById("Input_BP1").innerHTML = dbSingolare.Sprint1.buyerPersona.bp1.input;
    document.getElementById("Input_BP2").innerHTML = dbSingolare.Sprint1.buyerPersona.bp2.input;
    document.getElementById("Input_BP3").innerHTML = dbSingolare.Sprint1.buyerPersona.bp3.input;
    document.getElementById("Input_BP4").innerHTML = dbSingolare.Sprint1.buyerPersona.bp4.input;
    document.getElementById("Input_BP5").innerHTML = dbSingolare.Sprint1.buyerPersona.bp5.input;
    document.getElementById("Input_BP6").innerHTML = dbSingolare.Sprint1.buyerPersona.bp6.input;

    //ACCOUNTING STRATEGY
    document.getElementById("Input_AS1").innerHTML = dbPlurale.Sprint1.accountingStrategy.as1.input;
    document.getElementById("Input_AS2").innerHTML = dbPlurale.Sprint1.accountingStrategy.as2.input;
    document.getElementById("Input_AS3").innerHTML = dbPlurale.Sprint1.accountingStrategy.as3.input;
    document.getElementById("Input_AS4").innerHTML = dbPlurale.Sprint1.accountingStrategy.as4.input;

    //QUESTIONARIO INTERVISTA
    let i = 0;
    for (let key in dbSingolare.Sprint1.questionarioIntervista) {
        i=i+1;
        document.getElementById("Input_IQ".concat(i.toString())).innerHTML = dbSingolare.Sprint1.questionarioIntervista[key].input;
    }

     //COLD MESSAGE
     document.getElementById("Input_CM1").innerHTML = dbPlurale.Sprint1.coldMessage.cm1.input;
     document.getElementById("Input_CM2").innerHTML = dbPlurale.Sprint1.coldMessage.cm2.input;
     document.getElementById("Input_CM3").innerHTML = dbPlurale.Sprint1.coldMessage.cm3.input;
     document.getElementById("Input_CM4").innerHTML = dbPlurale.Sprint1.coldMessage.cm4.input;
     document.getElementById("Input_CM5").innerHTML = dbPlurale.Sprint1.coldMessage.cm5.input;
 
   
});


function correggi() {

    pulisciOutcome();
    //Add name in Greetings
    document.getElementById("NOME").innerHTML = document.getElementsByClassName("name")[0].value.trim();
    
    let contatoreTitle = 0;

    /*
        SINGOLARE
    */
    if(document.querySelector('input[name="dimensioni_team"]:checked').value.localeCompare("singolare")) {
        
        //GREETING
        document.getElementById("intro_pt1").innerHTML = "complimenti per aver completato il primo sprint. Come avrai notato i contenuti di questi primi deliverable sono alla base del tuo progetto, dunque è importante prestarci molta attenzione e tenerli sempre presenti durante le prossime tappe.";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = "Ho dato un’occhiata ai tuoi lavori, qui di seguito ti lascio qualche appunto su cui riflettere per affinare la tua idea e confrontarti con il tuo mentor.";
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = "Ho dato un’occhiata ai tuoi lavori, qui di seguito ti lascio qualche appunto su cui riflettere per affinare la tua idea e migliorarla.";
        }

        //JAVELIN BOARD
        let x=0;
        contatoreTitle=0;
        for (let key in dbSingolare.Sprint1.javelinBoard) {
            x=x+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
            if(addTextIntoFeedback('.JavelinBoard'.concat(x.toString()),"JB".concat(x.toString()),dbSingolare.Sprint1.javelinBoard[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a JB
        document.getElementById("Commento_personalizzato_jb").innerHTML = document.getElementsByClassName("Commento_personalizzato_jb")[0].value;
        //Add title JB
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_jb").innerHTML.length>0){
            document.getElementById("Title_jb").innerHTML = "Javelin Board";
        }


        //BUYER PERSONAS
        contatoreTitle=0;
        x=0;
        for (let key in dbSingolare.Sprint1.buyerPersona) {
            x=x+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
            if(addTextIntoFeedback('.BuyerPersonas'.concat(x.toString()),"BP".concat(x.toString()),dbSingolare.Sprint1.buyerPersona[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a BP
        document.getElementById("Commento_personalizzato_bp").innerHTML = document.getElementsByClassName("Commento_personalizzato_bp")[0].value;
        //Add title BP
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_bp").innerHTML.length>0){
            document.getElementById("Title_bp").innerHTML = "Buyer Personas";
        }


        //ACCOUNT STRATEGY
        let o=0;
        contatoreTitle=0;
        for (let key in dbSingolare.Sprint1.accountingStrategy) {
            o=o+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
           if(addTextIntoFeedback('.AccountStrategy'.concat(o.toString()),"AS".concat(o.toString()),dbSingolare.Sprint1.accountingStrategy[key].output)){
            contatoreTitle=contatoreTitle+1;
           }
        }
        document.getElementById("Commento_personalizzato_as").innerHTML = document.getElementsByClassName("Commento_personalizzato_as")[0].value;
        //Add title Account Strategy
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_as").innerHTML.length>0){
            document.getElementById("Title_as").innerHTML = "Account Strategy";
        }



        //INTERVISTE E/O QUESTIONARI
        let y=0;
        contatoreTitle=0;
        for (let key in dbSingolare.Sprint1.questionarioIntervista) {
            y=y+1;
            if(addTextIntoFeedback('.InterviewQuestionnaire'.concat(y.toString()),"IQ".concat(y.toString()),dbSingolare.Sprint1.questionarioIntervista[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a intervista e/o questionari
        document.getElementById("Commento_personalizzato_iq").innerHTML = document.getElementsByClassName("Commento_personalizzato_iq")[0].value        
        //Add title IQ
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_iq").innerHTML.length>0){
            document.getElementById("Title_iq").innerHTML = "Questionario e intervista di validazione";
        }


         //COLD MESSAGE
         y=0;
         contatoreTitle=0;
         for (let key in dbSingolare.Sprint1.coldMessage) {
             y=y+1;
             if(addTextIntoFeedback('.ColdMessage'.concat(y.toString()),"CM".concat(y.toString()),dbSingolare.Sprint1.coldMessage[key].output)){
                 contatoreTitle=contatoreTitle+1;
             }
         }
         //Add commento personalizzato a cold message
         document.getElementById("Commento_personalizzato_cm").innerHTML = document.getElementsByClassName("Commento_personalizzato_cm")[0].value        
         //Add title CM
         if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_cm").innerHTML.length>0){
             document.getElementById("Title_cm").innerHTML = "Messaggio a freddo";
         }

        //CONCLUSIONE
        let valueRadioButtonValutation = document.querySelector('input[name="valutazione"]:checked').value;
        //TODO: use value from DB
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = "Ben fatto! Ti invito però a compilare nuovamente *xxx* e rivedere gli altri documenti in base ai suggerimenti indicati. Cerca di seguire i consigli di questo feedback per concentrarti sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi Sprint. In bocca al lupo con le interviste e i questionari!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Concludendo, ti invito a provare a fare di nuovo tutti i deliverables di questo sprint tenendo a mente i suggerimenti ricevuti e, nei prossimi sprint, di prenderti il tempo necessario per fare un lavoro completo. Questo ti permetterà, poi, di fare grandi passi in avanti per il tuo progetto! Riparti dalle fondamenta della validazione e concentrati sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi sprint. In bocca al lupo con le interviste e i questionari!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Hai fatto un ottimo lavoro durante questo sprint, molto preciso e dettagliato. Ora concentrati sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi Sprint. Quello delle prossime due settimane sarà uno degli sprint chiave per capire a pieno il potenziale del progetto a cui stai lavorando. In bocca al lupo con le interviste e i questionari!";
        }

    
    }else if (document.querySelector('input[name="dimensioni_team"]:checked').value.localeCompare("plurale")) {
         /*
            PLURALE
        */

        //GREETINGS;
        document.getElementById("intro_pt1").innerHTML = "complimenti per aver completato il primo sprint. Come avrete notato i contenuti di questi primi deliverable sono alla base del vostro progetto, dunque è importante prestarci molta attenzione e tenerli sempre presenti durante le prossime tappe.";
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = "Ho dato un’occhiata ai vostri lavori, qui di seguito vi lascio qualche appunto su cui riflettere per affinare la vostra idea e confrontarti con il vostro mentor.";
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = "Ho dato un’occhiata ai vostri lavori, qui di seguito ti lascio qualche appunto su cui riflettere per affinare la vostra idea e migliorarla.";
        }

        //JAVELIN BOARD
        let x=0;
        contatoreTitle=0;
        for (let key in dbPlurale.Sprint1.javelinBoard) {
            x=x+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
            if(addTextIntoFeedback('.JavelinBoard'.concat(x.toString()),"JB".concat(x.toString()),dbPlurale.Sprint1.javelinBoard[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a JB
        document.getElementById("Commento_personalizzato_jb").innerHTML = document.getElementsByClassName("Commento_personalizzato_jb")[0].value;
        //Add title JB
         if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_jb").innerHTML.length>0){
            document.getElementById("Title_jb").innerHTML = "Javelin Board";
        }


        //ACCOUNT STRATEGY
        x=0;
        contatoreTitle=0;
        for (let key in dbPlurale.Sprint1.accountingStrategy) {
            x=x+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
           if(addTextIntoFeedback('.AccountStrategy'.concat(x.toString()),"AS".concat(x.toString()),dbPlurale.Sprint1.accountingStrategy[key].output)){
            contatoreTitle=contatoreTitle+1;
           }
        }
        document.getElementById("Commento_personalizzato_as").innerHTML = document.getElementsByClassName("Commento_personalizzato_as")[0].value;
        //Add title Account Strategy
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_as").innerHTML.length>0){
            document.getElementById("Title_as").innerHTML = "Account Strategy";
        }

        //BUYER PERSONAS
        //Add feedback
        x=0;
        contatoreTitle=0;
        for (let key in dbPlurale.Sprint1.buyerPersona) {
            x=x+1;
            //document.getElementById("JB".concat(x.toString())).innerHTML = "";
            if(addTextIntoFeedback('.BuyerPersonas'.concat(x.toString()),"BP".concat(x.toString()),dbPlurale.Sprint1.buyerPersona[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a BP
        document.getElementById("Commento_personalizzato_bp").innerHTML = document.getElementsByClassName("Commento_personalizzato_bp")[0].value;
        //Add title BP
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_bp").innerHTML.length>0){
            document.getElementById("Title_bp").innerHTML = "Buyer Personas";
        }

        //INTERVISTE E/O QUESTIONARI
        let y=0;
        contatoreTitle=0;
        for (let key in dbPlurale.Sprint1.questionarioIntervista) {
            y=y+1;
            if(addTextIntoFeedback('.InterviewQuestionnaire'.concat(y.toString()),"IQ".concat(y.toString()),dbPlurale.Sprint1.questionarioIntervista[key].output)){
                contatoreTitle=contatoreTitle+1;
            }
        }
        //Add commento personalizzato a intervista e/o questionari
        document.getElementById("Commento_personalizzato_iq").innerHTML = document.getElementsByClassName("Commento_personalizzato_iq")[0].value;
        //Add title IQ
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_iq").innerHTML.length>0){
            document.getElementById("Title_iq").innerHTML = "Questionario e intervista di validazione";
        }

         //COLD MESSAGE
         y=0;
         contatoreTitle=0;
         for (let key in dbPlurale.Sprint1.coldMessage) {
             y=y+1;
             if(addTextIntoFeedback('.ColdMessage'.concat(y.toString()),"CM".concat(y.toString()),dbPlurale.Sprint1.coldMessage[key].output)){
                 contatoreTitle=contatoreTitle+1;
             }
         }
         //Add commento personalizzato a cold message
         document.getElementById("Commento_personalizzato_cm").innerHTML = document.getElementsByClassName("Commento_personalizzato_cm")[0].value        
         //Add title CM
         if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_cm").innerHTML.length>0){
             document.getElementById("Title_cm").innerHTML = "Messaggio a freddo";
         }


        let valueRadioButtonValutation = document.querySelector('input[name="valutazione"]:checked').value;
        //TODO: use value from DB
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = "Ben fatto! Vi invito però a compilare nuovamente *xxx* e rivedere gli altri documenti in base ai suggerimenti indicati. Cercate di seguire i consigli di questo feedback per concentrarvi sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi Sprint. In bocca al lupo con le interviste e i questionari!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Concludendo, vi invito a provare a fare di nuovo tutti i deliverables di questo sprint tenendo a mente i suggerimenti ricevuti e, nei prossimi sprint, di prendervi il tempo necessario per fare un lavoro completo. Questo vi permetterà, poi, di fare grandi passi in avanti con il vostro progetto! Ripartite dalle fondamenta della validazione e concentratevi sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi sprint. In bocca al lupo con le interviste e i questionari!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Avete fatto un ottimo lavoro durante questo sprint, molto preciso e dettagliato. Ora concentratevi sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità dei prossimi Sprint. Quello delle prossime due settimane sarà uno degli sprint chiave per capire a pieno il potenziale del progetto a cui state lavorando. In bocca al lupo con le interviste e i questionari!";
        }
    }

    //COPIA
    copyEvent('copy');
}

function addTextIntoFeedback(sel,idFeedbackBefore,idFeedbackAfter){
    try{
     if(document.querySelector(sel.concat(':checked')).value){
        document.getElementById(idFeedbackBefore).innerHTML = idFeedbackAfter+"</br>";
        return true;
        }
        return false;
    }catch(e){
    }
}


function copyEvent(id) {
        var str = document.getElementById(id);
        window.getSelection().selectAllChildren(str);
        //navigator.clipboard.writeText(str) //Questo copia [object HTMLDivElement]
        document.execCommand("Copy") //DEPRECIATED but https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
}

function pulisciOutcome(){
    //GREETINGS
    document.getElementById("intro_pt1").innerHTML = "";
    document.getElementById("intro_pt2").innerHTML = "";
    
    //JAVELIN BOARD
    document.getElementById("Title_jb").innerHTML="";
    let x=0;
    for (let key in dbSingolare.Sprint1.javelinBoard) {
        x=x+1;
        document.getElementById("JB".concat(x.toString())).innerHTML = "";
    }
    document.getElementById("Commento_personalizzato_jb").innerHTML="";

    //BUYER PERSONAS
    document.getElementById("Title_bp").innerHTML="";
    x=0;
    for (let key in dbSingolare.Sprint1.buyerPersona) {
        x=x+1;
        document.getElementById("BP".concat(x.toString())).innerHTML = "";
    }
    document.getElementById("Commento_personalizzato_bp").innerHTML="";

    //INTERVISTE E/O QUESTIONARI
    document.getElementById("Title_iq").innerHTML="";
    let y=0;    
    document.getElementById("Commento_personalizzato_iq").innerHTML="";
    for (let key in dbSingolare.Sprint1.questionarioIntervista) {
        y=y+1;
        document.getElementById("IQ".concat(y.toString())).innerHTML = "";
    }
    document.getElementById("Commento_personalizzato_iq").innerHTML="";

    //COLD MESSAGE
    y=0;
    document.getElementById("Title_cm").innerHTML="";
    for (let key in dbSingolare.Sprint1.coldMessage) {
        y=y+1;
        document.getElementById("CM".concat(y.toString())).innerHTML = "";
    }
    document.getElementById("Commento_personalizzato_cm").innerHTML="";

    //ACCOUNTING STRATEGY
    y=0;
    document.getElementById("Title_as").innerHTML="";
    for (let key in dbSingolare.Sprint1.accountingStrategy) {
        y=y+1;
        document.getElementById("AS".concat(y.toString())).innerHTML = "";
    }
    document.getElementById("Commento_personalizzato_as").innerHTML="";
    
    document.getElementById("end").innerHTML=""; //Conclusione
}