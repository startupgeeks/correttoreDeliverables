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

  