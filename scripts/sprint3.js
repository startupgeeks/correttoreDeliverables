'use strict';

function correggi() {

    
    document.getElementById("NOME").innerHTML = document.getElementsByClassName("name")[0].value.trim();

    if(document.querySelector('input[name="dimensioni_team"]:checked').value.localeCompare("singolare")) {
        
        greeting(true);
        
        addOutcome('MarketingMix','mm', db.marketingMix,"Framework delle 4P ",true);
        addOutcome('UniqueValueProposition','uvp', db.uniqueValueProposition,"Unique Value Proposition",true);
        addOutcome('LandingPage','lp', db.landingPage,"Landing Page",true);
        addOutcome('FunnelMarketing','fm', db.funnelMarketing,"Modalità adv",true);
        addOutcome('SalesDeck','sd', db.salesDeck,"Sales Deck",true);
        addOutcome('LeanCanvas','lc', db.leanCanvas,"Lean Canvas 2.0",true);

        endMessage(true);
    }else{
        greeting(false);
        
        addOutcome('MarketingMix','mm', db.marketingMix,"Framework delle 4P ",false);
        addOutcome('UniqueValueProposition','uvp', db.uniqueValueProposition,"Unique Value Proposition",false);
        addOutcome('LandingPage','lp', db.landingPage,"Landing Page",false);
        addOutcome('FunnelMarketing','fm', db.funnelMarketing,"Modalità adv",false);
        addOutcome('SalesDeck','sd', db.salesDeck,"Sales Deck",false);
        addOutcome('LeanCanvas','lc', db.leanCanvas,"Lean Canvas 2.0",false);

        endMessage(false);
    }

    //COPIA
    copyEvent('copy');

}

function greeting(isSingular) {

    if(isSingular){
        document.getElementById("intro_pt1").innerHTML = "spero che il tuo percorso stia proseguendo alla grande, siamo nella fase centrale dello Startup Builder!";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i tuoi deliverables e qui di seguito lascio qualche appunto su come migliorare il tuo lavoro, utilizza questi spunti anche per confrontarti con il mentor che sono sicuro ti darà consigli utili per continuare al meglio!";
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i tuoi deliverables e qui di seguito lascio qualche appunto su come migliorare il tuo lavoro, segui questi consigli e continua a razzo!";
        }
    }else{
        //GREETING
        document.getElementById("intro_pt1").innerHTML = "spero che il vostro percorso stia proseguendo alla grande, siamo nella fase centrale dello Startup Builder!";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i vostri deliverables e qui di seguito lascio qualche appunto su come migliorare il vostro lavoro, utilizzate questi spunti anche per confrontarvi con il mentor che sono sicuro vi darà consigli utili per continuare al meglio!";
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i vostri deliverables e qui di seguito lascio qualche appunto su come migliorare il vostro lavoro, utilizzate questi spunti e continuate così!";
        }
    }
}


function endMessage(isSingular) {
    
    let valueRadioButtonValutation = document.querySelector('input[name="valutazione"]:checked').value;
    if(isSingular){
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = "Ben fatto! Ti invito però a rivedere nuovamente i documenti in base ai suggerimenti indicati. Lo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Ti consiglio di rivedere tutti i documenti caricati in questo sprintLo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Hai davvero eccelso in questo sprint! Lo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        }
    }else{
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = "Ben fatto! Vi invito però a rivedere nuovamente i documenti in base ai suggerimenti indicati. Lo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Vi consiglio di rivedere tutti i documenti caricati in questo sprint. Lo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Avete davvero eccelso in questo sprint! Lo smoke test sarà fondamentale per ottenere le prime metriche e capire se fosse necessario un pivot. In bocca al lupo per il prossimo sprint!";
        }
    }
}

function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    //navigator.clipboard.writeText(str) //Questo copia [object HTMLDivElement]
    document.execCommand("Copy") //DEPRECIATED but https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
}

function addOutcome(nameSection,idSection, listSection,title,isSingolare){
    let x=0;
    let contatoreTitle=0;

    document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase() )).innerHTML = document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0].value; 
    
    
    for (let key in listSection) {
        //console.log(listSection);
        x=x+1;
        console.log(x);
        if(isSingolare){
            if(addTextIntoFeedback('.'.concat(nameSection).concat(x.toString()),idSection.toUpperCase().concat(x.toString()),listSection[key].outputSingolare)){
                contatoreTitle=contatoreTitle+1;
                
            }
         }
        else{
            if(addTextIntoFeedback('.'.concat(nameSection).concat(x.toString()),idSection.toUpperCase().concat(x.toString()),listSection[key].outputPlulare)){
                contatoreTitle=contatoreTitle+1;
                console.log('.'.concat(nameSection).concat(x.toString()));
           }
        }
        
    }

    if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase())).innerHTML.length>0){
        document.getElementById("Title_".concat(idSection.toLowerCase())).innerHTML = title;
    }

}


function addTextIntoFeedback(sel,idFeedbackBefore,idFeedbackAfter){
    try{
        
     if(document.querySelector(sel.concat(':checked')).value){
        //console.log(sel);
        document.getElementById(idFeedbackBefore).innerHTML = idFeedbackAfter+"</br>";
        return true;
        }
        return false;
    }catch(e){
    }
}
