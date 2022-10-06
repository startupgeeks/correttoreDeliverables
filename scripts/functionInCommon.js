/*fetch('../File%20JSON/Sprint3_db.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
*/


function addCheckboxes(nameReactComponent, idInputName,nameDiv,numberOfCheckboxes) {
    let gal = document.getElementById(nameDiv);
                for (let i = 1; i <= numberOfCheckboxes ; i++) {
                    gal.innerHTML += '<div class="checkbox_container" data-namecomponent="'+nameReactComponent+''+i+'" style="float:left;"></div> <span style="padding-left: 1%;float:rigth;" id="Input_'+idInputName+i+'""></span></label><br><br>';
                  };
  }


  function addOutcomes(idInputName,nameDiv,numberOfOutcomes) {
    let gal = document.getElementById(nameDiv);
                for (let i = 1; i <= numberOfOutcomes ; i++) {
                    gal.innerHTML += '<p id="'+idInputName+i+'"></p>';
                  };
  }

function reload(){
    if (confirm("In questo modo perderai il feedback, sei sicuro?")) {
      window.location.reload();
    } 
  }

  
    
  function sortOnKeys(dict) {

    let tempDict = {};
    for(const [key, value] of Object.entries(dict)){
      if(key.charAt(key.length - 2)>= '0' && key.charAt(key.length - 2)<= '9'){
        //nulla SE è UN NUMERO Maggiore DI 10 il primo giro
      }else{
        tempDict[key]=value;
      }
  
    }
  
    for(const [key, value] of Object.entries(dict)){
      if(key.charAt(key.length - 2)>= '0' && key.charAt(key.length - 2)<= '9'){
        tempDict[key]=value;
      }else{
        //nulla SE è UN NUMERO Minore DI 10 il secondo giro
      }
  
    }

    return tempDict; 
}