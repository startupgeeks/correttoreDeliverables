'use strict';

//console.log(db);

//const db = getDB("https://x8ki-letl-twmt.n7.xano.io/api:WlorS6IK/sprint_4");

let db;

async function getDB(url) {
    let response = await fetch(url);
    
    //PRENDO SOLO LE CATEGORIE
    let categories = await getCategories("https://x8ki-letl-twmt.n7.xano.io/api:WlorS6IK/sprint_2_only_categories"); 

    if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
        let json = await response.json();

        db = {};
        categories.forEach(function (item) {
            db[item]={};
          });
        console.log(db)
        let deliverableName="";
        let codiceUnivoco="";
        for (let i in json){
            deliverableName= json[i]["DeliverablesName"];
            codiceUnivoco = json[i]["Codice_univoco"]; //e.g., ast1, bp1, bp2
            if(deliverableName!=null && deliverableName!=""&&codiceUnivoco!=null && codiceUnivoco!=""){
                let dictTemp = {input: json[i]["Input"],outputPlulare:json[i]["outputPlulare"],outputSingolare:json[i]["outputSingolare"]};
                /*console.log(deliverableName)
                console.log(codiceUnivoco)
                console.log(dictTemp)
                console.log(db[deliverableName])
                console.log(db[deliverableName][codiceUnivoco])*/
                db[deliverableName][codiceUnivoco]=dictTemp;
            }
          
        }
        //console.log("ECCO QUI IL DIZIONARIO")
        //console.log(db);
        //return db;
    } else {
        alert("HTTP-Error: " + response.status);
        //return {};
    }

}


async function getCategories(url) {
  let response = await fetch(url);


  if (response.ok) { // if HTTP-status is 200-299

      let json = await response.json();
      let listCategories = [];
      for (let i in json){
          //console.log(json[i]["name"]);
          listCategories.push(json[i]["name"])
          //CREARE DB sul modello di quello fatto 
      }
      return listCategories;
  } else {
     alert("HTTP-Error: " + response.status);
     return [];
  }
}
