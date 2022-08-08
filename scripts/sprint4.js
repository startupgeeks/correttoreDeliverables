'use strict';


function correggi() {

    document.getElementById("NOME").innerHTML = document.getElementsByClassName("name")[0].value.trim();

    if(document.querySelector('input[name="dimensioni_team"]:checked').value.localeCompare("singolare")) {
        
        greeting(true);
        
        addOutcome('AnalisiSmokeTest','ast', db.analisiSmokeTest,"Analisi Smoke Test ",true);
        addOutcome('BusinessPlan','bp', db.businessPlan,"Business Plan",true);
        addOutcome('FinancialPlan','fp', db.financialPlan,"Financial Plan",true);

        endMessage(true);
    }else{
        greeting(false);
        
        addOutcome('AnalisiSmokeTest','ast', db.analisiSmokeTest,"Analisi Smoke Test ",false);
        addOutcome('BusinessPlan','bp', db.businessPlan,"Business Plan",false);
        addOutcome('FinancialPlan','fp', db.financialPlan,"Financial Plan",false);

        endMessage(false);
    }

    //COPIA
    copyEvent('copy');

}

function greeting(isSingular) {

    if(isSingular){
        document.getElementById("intro_pt1").innerHTML = "spero che il tuo percorso stia proseguendo alla grande, siamo nel punto di svolta dello Startup Builder!";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i tuoi deliverables e qui di seguito lascio qualche appunto su come migliorare il tuo lavoro, utilizza questi spunti anche per confrontarti con il mentor che sono sicuro ti darà consigli utili per continuare al meglio!";
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = "Ho guardato i tuoi deliverables e qui di seguito lascio qualche appunto su come migliorare il tuo lavoro, segui questi consigli e continua a razzo!";
        }
    }else{
        //GREETING
        document.getElementById("intro_pt1").innerHTML = "spero che il vostro percorso stia proseguendo alla grande, siamo nel punto di svolta  dello Startup Builder!";
        
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
            document.getElementById("end").innerHTML = "Ben fatto! Ti invito però a compilare nuovamente *xxx* e rivedere gli altri output in base ai suggerimenti indicati. Cerca di seguire i consigli di questo feedback per concentrarti sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità del prossimo Sprint. In bocca al lupo per il quinto sprint!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Ti invito a provare a rivedere i deliverables di questo sprint tenendo a mente i suggerimenti del feedback. In bocca al lupo per il quinto sprint!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Hai fatto un ottimo lavoro durante questo sprint, molto preciso e dettagliato. In bocca al lupo per il quinto sprint!";
        }
    }else{
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = "Ben fatto! Vi invito però a compilare nuovamente *xxx* e rivedere gli altri output in base ai suggerimenti indicati. Cercate di seguire i consigli di questo feedback per concentrarvi sugli elementi principali del progetto in modo da mantenere il focus e gestire al meglio la complessità del prossimo Sprint. In bocca al lupo per il quinto sprint!";
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = "Vi invito a provare a rivedere i deliverables di questo sprint tenendo a mente i suggerimenti del feedback. In bocca al lupo per il quinto sprint!";
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = "Avete fatto un ottimo lavoro durante questo sprint, molto preciso e dettagliato. In bocca al lupo per il quinto sprint!";
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
    //NB: funziona solo con al più 9 checkboses segnati
    let x=0;
    let contatoreTitle=0;
    document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase() )).innerHTML = document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0].value; 
    
    for (let key in listSection) {
        //console.log(key.toUpperCase());
        x=x+1;
        //console.log(x);
        if(isSingolare){
            if(addTextIntoFeedback('.'.concat(nameSection).concat(x.toString()),idSection.toUpperCase().concat(x.toString()),listSection[key].outputSingolare)){
                contatoreTitle=contatoreTitle+1;
                
            }
         }
        else{
            if(addTextIntoFeedback('.'.concat(nameSection).concat(x.toString()),idSection.toUpperCase().concat(x.toString()),listSection[key].outputPlulare)){
                contatoreTitle=contatoreTitle+1;
                //console.log(idSection.toUpperCase().concat(x.toString()));
           }
        }
        
    }

    if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase())).innerHTML.length>0){
        document.getElementById("Title_".concat(idSection.toLowerCase())).innerHTML = title;
    }

}


function addTextIntoFeedback(sel,idFeedbackBefore,feedbackText){
    try{
     //console.log(sel)
     //console.log(document.querySelector(sel.concat(':checked')).value)
     if(document.querySelector(sel.concat(':checked')).value){
        
        /*console.log(sel);
        console.log(idFeedbackBefore);
        console.log(idFeedbackAfter);*/
        document.getElementById(idFeedbackBefore).innerHTML = feedbackText+"</br>";
        return true;
        }
        return false;
    }catch(e){
    }
}
