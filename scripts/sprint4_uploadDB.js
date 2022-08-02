'use strict';

//Use this tool https://www.textfixer.com/tools/remove-line-breaks.php and then modify from ' to \'

let textDB = '{ "analisiSmokeTest": { "ast1": { "input": "Intro", "outputSingolare": "Ottimo per i risultati che sei riuscito a raccogliere fino ad ora, ricorda che il processo di validazione non termina con lo smoke test. Continua a raccogliere osservazioni e dati dal mercato. Confronta i risultati che hai ottenuto per apportare eventuali modifiche a business model, di ritornare sulle Buyer Persona e trovare il perfetto product-market fit.", "outputPlulare": "Ottimo per i risultati che siete riusciti a raccogliere fino ad ora, ricordate che il processo di validazione non termina con lo smoke test. Continuate a raccogliere osservazioni e confrontate i risultati che avete ottenuto per apportare eventuali modifiche a business model, ritornare sulle Buyer Persona e trovare il perfetto product-market fit." }, "ast2": { "input": "Se buon CPA e numero Lead", "outputSingolare": "Il numero di lead ottenute, anche a fronte del costo di acquisizione e della percentuale di conversione, sono dei grandi risultati da cui iniziare a impostare le future strategie comunicative. C\’è interesse per la soluzione che stai presentando, ora bisogna lavorare per portarlo alla realtà.", "outputPlulare": "Il numero di lead ottenute, anche a fronte del costo di acquisizione e della percentuale di conversione, sono dei grandi risultati da cui iniziare a impostare le future strategie comunicative. C\’è interesse per la soluzione che state presentando, ora bisogna lavorare per portarlo alla realtà." }, "ast3": { "input": "Se i risultati non sono buoni", "outputSingolare": "Il risultato ottenuto per le conversioni delle lead non è invitante ma sono sicuro che sistemando e facendo a/b testing con le creatività e il copy degli adv e la landing page riuscirai a migliorare questa metrica.", "outputPlulare": "Il risultato ottenuto per le conversioni delle lead non è invitante ma sono sicuro che sistemando e facendo a/b testing con le creatività e il copy degli adv e la landing page riuscirete a migliorare questa metrica." }, "ast4": { "input": "Se hanno fatto delle riflessioni finali", "outputSingolare": "L\’approccio utilizzato per le riflessioni è ottimo ed esattamente ciò che serve per migliorare le proprie metriche, trovare altri canali d\’acquisto (a volte più efficaci) e costruire previsioni finanziarie che sono sensibili sulla base di quanto effettivamente riscontrato.", "outputPlulare": "L\’approccio utilizzato per le riflessioni è ottimo ed esattamente ciò che serve per migliorare le proprie metriche, trovare altri canali d\’acquisto (a volte più efficaci) e costruire previsioni finanziarie che sono sensibili sulla base di quanto effettivamente riscontrato." }, "ast5": { "input": "Se NON hanno inserito riflessioni finali", "outputSingolare": "Vi consiglio, oltre ad aver riportato i dati, di inserire un paragrafetto in cui fate delle considerazioni rispetto ai dati ottenuti. Per esempio quale ad set (i.e., gruppo di inserzioni) ha performato meglio, su cosa bisogna cambiare sulle prossime campagne, quale target vi ha dato una maggior impressione.", "outputPlulare": "Vi consiglio, oltre ad aver riportato i dati, di inserire un paragrafetto in cui fate delle considerazioni rispetto ai dati ottenuti. Per esempio quale ad set (i.e., gruppo di inserzioni) ha performato meglio, su cosa bisogna cambiare sulle prossime campagne, quale target vi ha dato una maggior impressione." }, "ast6": { "input": "Se smoke test assente :(", "outputSingolare": "Purtroppo non hai caricato nessun report al momento. Ti consiglio di continuare lo smoke test e analizzare i dati appena disponibili.", "outputPlulare": "Purtroppo non avete caricato nessun report al momento. Vi consiglio di continuare lo smoke test e analizzare i dati appena disponibili." } }, "businessPlan": { "bp1": { "input": "Complimenti iniziali (a chi così così)", "outputSingolare": "Complimenti per aver costruito la prima versione del tuo business plan.", "outputPlulare": "Complimenti per aver costruito la prima versione del vostro business plan." }, "bp2": { "input": "Complimenti iniziali (a chi ottimo)", "outputSingolare": "Ottimo lavoro! Il Business Plan che hai costruito scorre come un vero documento professionale e, con alcune migliorie, sarà pronto per essere presentato davanti a potenziali investitori.", "outputPlulare": "Ottimo lavoro! Il Business Plan che avete costruito scorre come un vero documento professionale e, con alcune migliorie, sarà pronto per essere presentato davanti a potenziali investitori." }, "bp3": { "input": "Se non mettono contatti in cover page", "outputSingolare": "Ti consiglio di inserire oltre al nome e logo della startup i tuoi contatti nella cover page. Un investitore che legge il tuo Business Plan deve sapere come e chi contattare in caso di interesse.", "outputPlulare": "Vi consiglio di inserire oltre al nome e logo della startup un contatto personale (email) nella cover page. Un investitore che legge il vostro Business Plan deve sapere come e chi contattare in caso di interesse." }, "bp4": { "input": "Executive Summary fatto male", "outputSingolare": "Ti raccomando di fornire il quadro generale sul tuo business all\’interno dell\’Executive Summary, senza dilungarti in particolari. Questo documento è indirizzato ad un pubblico professionale di investitori quindi bisogna fare particolare attenzione alla forma e alla comprensibilità di quello che si mette per iscritto, l\’Executive summary non è chiaro, *DIRE PERCHE\’ NON CHIARO*", "outputPlulare": "Vi raccomando di fornire il quadro generale sul vostro business all\’interno dell\’Executive Summary, senza dilungarvi in particolari. Questo documento è indirizzato ad un pubblico professionale di investitori quindi bisogna fare particolare attenzione alla forma e alla comprensibilità di quello che si mette per iscritto, l\’Executive summary non è chiaro, *DIRE PERCHE\’ NON CHIARO*" }, "bp5": { "input": "Se non usa forma Impersonale", "outputSingolare": "Ti consiglio di essere impersonale durante tutto il business plan, ad esempio da “*PARTE IN CUI USA PRIMA PERSONA*” a “*RIMODIFICATO IN FORMA IMPERSONALE*”", "outputPlulare": "Vi consiglio di essere impersonali durante tutto il business plan, ad esempio da “*PARTE IN CUI USA PRIMA PERSONA*” a “*RIMODIFICATO IN FORMA IMPERSONALE*”" }, "bp6": { "input": "Se non citano fonti", "outputSingolare": "Ti consiglio di aggiungere sempre le fonti quando presenti così che anche chi legge possa verificare l\’autenticità dei dati, questo sia per le fonti primarie (questionari creati da te e ricerche personali) che per quelle secondarie", "outputPlulare": "Vi consiglio di aggiungere sempre le fonti quando presentate così che anche chi legge possa verificare l\’autenticità dei dati, questo sia per le fonti primarie (questionari raccolti da voi e ricerche personali) che per quelle secondarie" }, "bp7": { "input": "Se manca SWOT", "outputSingolare": "Ti consiglio di inserire la tabella relativa all\’analisi SWOT ed esplicitare come intendi sfruttare i punti di forza per cogliere le opportunità e difenderti dalle minacce e come intendi sopperire ai punti di debolezza.", "outputPlulare": "Vi consiglio di inserire la tabella relativa all\’analisi SWOT ed esplicitare come intendete sfruttare i punti di forza per cogliere le opportunità e difendervi dalle minacce e come intendete sopperire ai punti di debolezza." }, "bp8": { "input": "Se hanno la SWOT ma senza spiegazione aggiuntiva", "outputSingolare": "Sull\’analisi SWOT, ti suggerisco di evidenziare le strategie possibili per sfruttare i punti di forza massimizzando le opportunità e mitigando le minacce. Allo stesso tempo ti suggerisco di esplicitare come intendi sopperire ai punti di debolezza.", "outputPlulare": "Sull\’analisi SWOT, vi suggerisco di evidenziare le strategie possibili per sfruttare i punti di forza massimizzando le opportunità e mitigando le minacce. Allo stesso tempo vi suggerisco di esplicitare come intendete sopperire ai punti di debolezza." }, "bp9": { "input": "Se prodotto tech senza buona spiegazione nel product", "outputSingolare": "Nella descrizione del prodotto e della tecnologia, ti suggerisco di specificare maggiori informazioni tecniche (e.g., tipo di database come relazionale o mongoDB, servizio in cloud usato come AWS o Azure, linguaggi di programmazione e framework usati, etc.). Puoi chiedere informazioni tecniche più dettagliate alla software house/freelancers o il CTO che si occuperanno di creare la piattaforma web. ", "outputPlulare": "Nella descrizione del prodotto e della tecnologia, vi suggerisco di specificare maggiori informazioni tecniche (e.g., tipo di database come relazionale o mongoDB, servizio in cloud usato come AWS o Azure, linguaggi di programmazione e framework usati, etc.). Puoi chiedere informazioni tecniche più dettagliate alla software house/freelancers o il CTO che si occuperanno di creare la piattaforma web." }, "bp10": { "input": "(Singolare) Non hanno messo key hires (Plurale) Non hanno messo ruoli CEO etc", "outputSingolare": "Nella parte team, ti suggerisco anche di cominciare a pensare a quali figure professionali introdurre all\’interno del team e quali operazioni esternalizzare.", "outputPlulare": " Vi suggerisco di inserire anche la vostra divisione in ruoli all\’interno del progetto (e.g., CEO, CTO, CMO, etc.) nella parte team." }, "bp11": { "input": "Se GTM non chiara/assente", "outputSingolare": "Chiarisci la strategia con cui aggredirai il mercato, il piano di marketing includendo informazioni su prezzo, canali di acquisizione, strategia di comunicazione e inserisci i dati di traction ottenuti dallo smoke test.", "outputPlulare": "Chiarite la strategia con cui aggredirete il mercato, il piano di marketing includendo informazioni su prezzo, canali di acquisizione, strategia di comunicazione e inserite i dati di traction ottenuti dallo smoke test." }, "bp12": { "input": "Manca grafico Roadmap", "outputSingolare": "Inserisci un grafico con le diverse milestones da raggiungere relative a tutti gli aspetti aziendali (espansione del team, ricerca di finanziamenti, implementazione delle funzionalità del prodotto/servizio, ecc).", "outputPlulare": "Inserite un grafico con le diverse milestones da raggiungere relative a tutti gli aspetti aziendali (espansione del team, ricerca di finanziamenti, implementazione delle funzionalità del prodotto/servizio, ecc)." }, "bp13": { "input": "C\’è grafico roadmap ma non la descrizione", "outputSingolare": "Ti suggerisco di descrivere la roadmap oltre che mantenere l\’infografica.", "outputPlulare": "Vi suggerisco di descrivere la roadmap oltre che mantenere l\’infografica." }, "bp14": { "input": "Se complessivamente accettabile", "outputSingolare": "Quanto fatto va bene, potresti però ampliare le sezioni *QUALI SEZIONI E CONSIGLI GENERALI*", "outputPlulare": "Quanto fatto va bene, potreste però ampliare le sezioni *QUALI SEZIONI E CONSIGLI GENERALI*" }, "bp15": { "input": "Se BP fatto bene e ambizioso", "outputSingolare": "Hai impostato degli obiettivi molto ambiziosi ma ragionevolmente supportati da dati e assumption. Il lavoro fatto negli sprint precedenti è tornato utile in questo momento e sei riusciti a completare un\’ottima prima versione di questo documento.", "outputPlulare": "Avete impostato degli obiettivi molto ambiziosi ma ragionevolmente supportati da dati e assumption. Il lavoro fatto negli sprint precedenti è tornato utile in questo momento e siete riusciti a completare un\’ottima prima versione di questo documento." } }, "financialPlan": { "fp1": { "input": "Se fatto benissimo", "outputSingolare": "Il tuo financial plan è eccellente: un\’analisi precisa e dettagliata. Gli indicatori e le stime hanno valori verosimili. Per raggiungere la perfezione ti suggerisco di svolgere un\’analisi di sensitività per verificare la robustezza delle conclusioni. Se i risultati fossero ancora solidi con ipotesi/scenari diversi, ciò rafforzerebbe la tua credibilità. ", "outputPlulare": "Il vostro financial plan è eccellente: un\’analisi precisa e dettagliata. Gli indicatori e le stime hanno valori verosimili. Per raggiungere la perfezione vi suggerisco di svolgere un\’analisi di sensitività per verificare la robustezza delle conclusioni. Se i risultati fossero ancora solidi con ipotesi/scenari diversi, ciò rafforzerebbe la vostra credibilità. " }, "fp2": { "input": "Se i numeri sono spaccati allo 00", "outputSingolare": "Complimenti per aver completato la prima versione del tuo financial plan. Appuntati però di far sembrare i numeri meno “falsi”. Ovviamente al tuo stadio si tratta di calcoli basati su assumptions per il futuro, tuttavia i numeri precisi allo 0, es/ *AREA COSTI* *XO,000, X00,000, XX0,000* sembrano poco realistici e frutti di calcoli approssimativi.", "outputPlulare": "Complimenti per aver completato la prima versione del vosttro financial plan. Appuntatevi però di far sembrare i numeri meno “falsi”. Ovviamente al vostro stadio si tratta di calcoli basati su assumptions per il futuro, tuttavia i numeri precisi allo 0, es/ *AREA COSTI* *XO,000, X00,000, XX0,000* sembrano poco realistici e frutti di calcoli approssimativi." }, "fp3": { "input": "Se non hanno messo le formule", "outputSingolare": "Attenzione, non avendo inserito le formule e le assumption di base mi è molto difficile giudicare la qualità del documento.", "outputPlulare": "Attenzione, non avendo inserito le formule e le assumption di base mi è difficile giudicare la qualità del documento." }, "fp4": { "input": "Se stipendi in cifra netta e non lorda", "outputSingolare": "Fai attenzione ad inserire gli stipendi dei dipendenti in cifra lorda e non netta.", "outputPlulare": "Fate attenzione ad inserire gli stipendi dei dipendenti in cifra lorda e non netta." }, "fp5": { "input": "Se valuation buona ma discrepanza tra qualitativo e quantitativo", "outputSingolare": "Anche la valutazione credo sia attendibile, fai attenzione alla discrepanza che si è generata tra le prime due metodologie ed il metodo VC per impostare una base di negoziazione sugli investimenti che necessiterai", "outputPlulare": "Anche la valutazione credo sia attendibile, fate attenzione alla discrepanza che si è generata tra le prime due metodologie ed il metodo VC per impostare una base di negoziazione sugli investimenti che necessiterete" }, "fp6": { "input": "Se pianificano investimento massivo senza metriche o $$$", "outputSingolare": "Valuta bene la necessità di un investimento così importante al primo anno quando ancora non esistono metriche di fatturato o partnership (ad ora). È fondamentale per i founder mantenere il controllo della propria compagnia e secondo il metodo Scorecard dovresti cedere il XX% al primo anno di attività, per cui probabilmente con uno/due possibili round di investimenti potresti perdere il 51% e le chiavi societarie. Valuta bene.", "outputPlulare": "Valutate bene la necessità di un investimento così importante al primo anno quando ancora non esistono metriche di fatturato o partnership (ad ora). È fondamentale per i founder mantenere il controllo della propria compagnia e secondo il metodo Scorecard dovreste cedere il XX% al primo anno di attività, per cui probabilmente con uno/due possibili round di investimenti potreste perdere il 51% e le chiavi societarie. Valutate bene." }, "fp7": { "input": "Se COGS non sono % revenue (attenzione che se aggiungono linee di business potrebbero non sempre tornare negli anni e quindi non è errore", "outputSingolare": "Ricorda che I COGS dovrebbero essere calcolati come una percentuale rispetto alle revenue. Fra i COGS rientrano i costi variabili di produzione, quindi all\’aumentare della quantità prodotta aumenteranno anche i COGS", "outputPlulare": "Ricordate che I COGS dovrebbero essere calcolati come una percentuale rispetto alle revenue. Fra i COGS rientrano i costi variabili di produzione, quindi all\’aumentare della quantità prodotta aumenteranno anche i COGS" }, "fp8": { "input": "Se OPEX proporzionali linearmente a revenue", "outputSingolare": "Gli OPEX sono i costi di gestione non sono direttamente proporzionali alla crescita dei ricavi, ma sono i costi che sostengono la crescita della startup, dunque ricorda di valutarli attentamente!", "outputPlulare": "Gli OPEX sono i costi di gestione non sono direttamente proporzionali alla crescita dei ricavi, ma sono i costi che sostengono la crescita della startup, dunque ricordate di valutarli attentamente!" }, "fp9": { "input": "Se spese di sviluppo in IT e non CAPEX", "outputSingolare": "Le spese di sviluppo app, piattaforma, software proprietario vanno inserite all\’interno dei CAPEX non nei costi IT.", "outputPlulare": "Le spese di sviluppo app, piattaforma, software proprietario vanno inserite all\’interno dei CAPEX non nei costi IT." }, "fp10": { "input": "Se spesa HR superiore al 50% del totale ", "outputSingolare": "Attenzione alla quota relativa alle spese di HR che avete inserito. Capisco che le risorse umane saranno un importante asset aziendale, allo stesso tempo indicare al primo anno una quota superiore al 50% potrebbe non essere apprezzato da potenziali investitori.", "outputPlulare": "Attenzione alla quota relativa alle spese di HR che avete inserito. Capisco che le risorse umane saranno il vostro asset aziendale, allo stesso tempo indicare al primo anno una quota superiore al 50% potrebbe non essere apprezzato da potenziali investitori." }, "fp11": { "input": "Se spese di sviluppo in IT", "outputSingolare": "Le spese di sviluppo app, piattaforma, software proprietario vanno inserite all\’interno dei CAPEX non nei costi IT.", "outputPlulare": "Le spese di sviluppo app, piattaforma, software proprietario vanno inserite all\’interno dei CAPEX non nei costi IT." }, "fp12": { "input": "Se cumulated cash flow troppo basso (<5k€)", "outputSingolare": "Ti suggerisco di fare una riflessione sul cumulated cash flow ipotizzato nel anno ***X*** di ***Y*** perchè potrebbe essere un buffer non sufficiente in caso di imprevisti, costi sottostimati o ricavi sovrastimati.", "outputPlulare": "Vi suggerisco di fare una riflessione sul cumulated cash flow ipotizzato nel anno ***X*** di ***Y*** perchè potrebbe essere un buffer non sufficiente in caso di imprevisti, costi sottostimati o ricavi sovrastimati." }, "fp13": { "input": "Se cumulated cash flow negativo", "outputSingolare": "Attenzione: il cumulated cash flow non deve mai essere negativo perché equivale a fallire. Dovresti aumentare l\’investimento iniziale o ridurre i costi per evitare uno scenario con cassa in rosso.", "outputPlulare": "Attenzione: il cumulated cash flow non deve mai essere negativo perché equivale a fallire. Dovreste aumentare l\’investimento iniziale o ridurre i costi per evitare uno scenario con cassa in rosso." }, "fp14": { "input": "Acquisition of assets in CAPEX senza segno meno", "outputSingolare": "Attenzione: l\’acquisizione degli asset nella categoria CAPEX nel cash flow statement è senza il segno meno.", "outputPlulare": "Attenzione: l\’acquisizione degli asset nella categoria CAPEX nel cash flow statement è senza il segno meno." }, "fp15": { "input": "Se spesa marketing sempre uguale, ma aumentano clienti e fatturato", "outputSingolare": "Stimi una crescita costante negli anni del numero di clienti, a cui però dovrebbe coincidere anche un aumento della spesa di marketing e comunicazione, altrimenti come faranno i clienti a sapere che offrite questi prodotti/servizi? Ti consiglio di rivedere la spesa allocata al marketing nel periodo analizzato.", "outputPlulare": "Stimate una crescita costante negli anni del numero di clienti, a cui però dovrebbe coincidere anche un aumento della spesa di marketing e comunicazione, altrimenti come faranno i vostri a clienti a sapere che voi offrite questi prodotti/servizi? Vi consiglio di rivedere la spesa allocata al marketing nel periodo analizzato." }, "fp16": { "input": "Se lavoro buono, spunto aggiuntivo di analisi sensibilità (ATTENZIONE a non averlo già usato)", "outputSingolare": "Ad ogni modo ottimo lavoro, per migliorare ti suggerisco di svolgere un\’analisi di sensitività per verificare la robustezza delle conclusioni. Se i risultati fossero ancora solidi con ipotesi/scenari diversi, ciò rafforzerebbe la tua credibilità.", "outputPlulare": "Ad ogni modo ottimo lavoro, per migliorare vi suggerisco di svolgere un\’analisi di sensitività per verificare la robustezza delle conclusioni. Se i risultati fossero ancora solidi con ipotesi/scenari diversi, ciò rafforzerebbe la vostra credibilità." } } }';

const db = JSON.parse(textDB);

//console.log(db);

getapi("https://x8ki-letl-twmt.n7.xano.io/api:WlorS6IK/sprint_4")

async function getapi(url) {
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        for (let i in json){
            console.log(i)
            //CREARE DB sul modello di quello fatto 
        }
    } else {
    alert("HTTP-Error: " + response.status);
    }


}

/*
fetch('https://x8ki-letl-twmt.n7.xano.io/api:WlorS6IK/sprint_4')
  .then(response => {
    //handle response            
    console.log(response.json());
    for (let r of response.json()){
        console.log(r)
    }
    
  })
  .then((data) => console.log(data))
  .catch(error => {
    console.log(error)
  });*/