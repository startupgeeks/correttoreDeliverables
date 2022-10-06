'use strict';

function correggi() {

    
    document.getElementById("NOME").innerHTML = document.getElementsByClassName("name")[0].value.trim();

    if(document.querySelector('input[name="dimensioni_team"]:checked').value.localeCompare("singolare")) {
        
        greeting(true);
        
        addOutcome('JavelinBoard','jb', db.javelinBoard,"Javelin Board",true);
        addOutcome('BuyerPersona','bp', db.buyerPersona,"Buyer Personas",true);
        addOutcome('AccountStrategy','as', db.accountStrategy,"Account Strategy",true);
        addOutcome('QuestionarioIntervista','iq', db.questionarioIntervista,"Questionario e Intervista",true);
        addOutcome('ColdMessage','cm', db.coldMessage,"Cold Message",true);

        endMessage(true);
    }else{
        greeting(false);
        
        console.log(db.questionarioIntervista)
        addOutcome('JavelinBoard','jb', db.javelinBoard,"Javelin Board",false);
        addOutcome('BuyerPersona','bp', db.buyerPersona,"Buyer Personas",false);
        addOutcome('AccountStrategy','as', db.accountStrategy,"Account Strategy",false);
        addOutcome('QuestionarioIntervista','iq', db.questionarioIntervista,"Questionario e Intervista",false);
        addOutcome('ColdMessage','cm', db.coldMessage,"Cold Message",false);


        endMessage(false);
    }

    //COPIA
    copyEvent('copy');

}

function greeting(isSingular) {

    if(isSingular){
        //document.getElementById("intro_pt1").innerHTML = "spero che il tuo percorso stia proseguendo alla grande, siamo nella fase centrale dello Startup Builder!";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = db.other.introSiMentor.outputSingolare;
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = db.other.introNoMentor.outputSingolare;
        }
    }else{
        //GREETING
        //document.getElementById("intro_pt1").innerHTML = "spero che il vostro percorso stia proseguendo alla grande, siamo nella fase centrale dello Startup Builder!";
        
        if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("si")){
            document.getElementById("intro_pt2").innerHTML = db.other.introSiMentor.outputPlulare;
        } else if(document.querySelector('input[name="mentor"]:checked').value.localeCompare("no")){
            document.getElementById("intro_pt2").innerHTML = db.other.introNoMentor.outputPlulare;
        }
    }
}


function endMessage(isSingular) {
    //console.log("ARRIVA QUI")
    let valueRadioButtonValutation = document.querySelector('input[name="valutazione"]:checked').value;
    if(isSingular){
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = db.other.endMedium.outputSingolare;
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = db.other.endBad.outputSingolare;
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = db.other.endGood.outputSingolare;
        }else if(valueRadioButtonValutation.localeCompare("superGood")==0){
            document.getElementById("end").innerHTML = db.other.endSuperGood.outputSingolare;
        }else if(valueRadioButtonValutation.localeCompare("superBad")==0){
            document.getElementById("end").innerHTML = db.other.endSuperBad.outputSingolare;
        }
    }else{
        if(valueRadioButtonValutation.localeCompare("medium")==0){
            document.getElementById("end").innerHTML = db.other.endMedium.outputPlulare;
        } else if(valueRadioButtonValutation.localeCompare("bad")==0){
            document.getElementById("end").innerHTML = db.other.endBad.outputPlulare;
        } else if(valueRadioButtonValutation.localeCompare("good")==0){
            document.getElementById("end").innerHTML = db.other.endGood.outputPlulare;
        } else if(valueRadioButtonValutation.localeCompare("superGood")==0){
            document.getElementById("end").innerHTML = db.other.endSuperGood.outputPlulare;
        }else if(valueRadioButtonValutation.localeCompare("superBad")==0){
            document.getElementById("end").innerHTML = db.other.endSuperBad.outputPlulare;
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
    if(document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0]!=undefined || document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0]!=null){
        document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase() )).innerHTML = document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0].value; 
    }

    
    
    for (let key in listSection) {
        //console.log(listSection);
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
                console.log('.'.concat(nameSection).concat(x.toString()));
           }
        }
        
    }
    if(document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0]!=undefined || document.getElementsByClassName("Commento_personalizzato_".concat(idSection.toLowerCase()))[0]!=null){
        if(contatoreTitle>0 || document.getElementById("Commento_personalizzato_".concat(idSection.toLowerCase())).innerHTML.length>0){
            document.getElementById("Title_".concat(idSection.toLowerCase())).innerHTML = title;
        }
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
