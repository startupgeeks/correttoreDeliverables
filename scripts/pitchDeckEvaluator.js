//TEAM
let sliderTeam = document.getElementById("teamSlider");
let outputTeam = document.getElementById("teamOutput");
outputTeam.innerHTML = sliderTeam.value;
sessionStorage.setItem("teamScore", 5);

sliderTeam.oninput = function() {
  outputTeam.innerHTML = this.value;
  sessionStorage.setItem("teamScore", outputTeam.innerHTML);
}

//TIMING
let sliderTiming = document.getElementById("timingSlider");
let outputTiming= document.getElementById("timingOutput");
outputTiming.innerHTML = sliderTiming.value;
sessionStorage.setItem("timingScore", 5);

sliderTiming.oninput = function() {
  outputTiming.innerHTML = this.value;
  sessionStorage.setItem("timingScore", outputTiming.innerHTML);
}


//MARKET
let sliderMarket = document.getElementById("marketSlider");
let outputMarket= document.getElementById("marketOutput");
outputMarket.innerHTML = sliderMarket.value;

sessionStorage.setItem("marketScore", 5);

sliderMarket.oninput = function() {
  outputMarket.innerHTML = this.value;
  sessionStorage.setItem("marketScore", outputMarket.innerHTML);
}


//BUSINESS MODEL
let sliderBusinessModel = document.getElementById("businessModelSlider");
let outputBusinessModel= document.getElementById("businessModelOutput");
outputBusinessModel.innerHTML = sliderBusinessModel.value;

sessionStorage.setItem("businessModelScore", 5);

sliderBusinessModel.oninput = function() {
  outputBusinessModel.innerHTML = this.value;
  sessionStorage.setItem("businessModelScore", outputBusinessModel.innerHTML);
}


//SCALABILITY 
let sliderScalability = document.getElementById("scalabilitySlider");
let outputScalability= document.getElementById("scalabilityOutput");
outputScalability.innerHTML = sliderScalability.value;

sessionStorage.setItem("scalabilityScore", 5);

sliderScalability.oninput = function() {
  outputScalability.innerHTML = this.value;
  sessionStorage.setItem("scalabilityScore", outputScalability.innerHTML);
}



//UNIQUENESS 
let sliderUniqueness = document.getElementById("uniquenessSlider");
let outputUniqueness = document.getElementById("uniquenessOutput");
outputUniqueness.innerHTML = sliderUniqueness .value;

sessionStorage.setItem("uniquenessScore", 5);
sliderUniqueness .oninput = function() {
  outputUniqueness.innerHTML = this.value;
  sessionStorage.setItem("uniquenessScore", outputUniqueness.innerHTML );
}


//FEASIBILITY 
let sliderFeasibility = document.getElementById("feasibilitySlider");
let outputFeasibility = document.getElementById("feasibilityOutput");
outputFeasibility.innerHTML = sliderFeasibility.value;

sessionStorage.setItem("feasibilityScore", 5 );
sliderFeasibility.oninput = function() {
  outputFeasibility.innerHTML = this.value;
  sessionStorage.setItem("feasibilityScore", outputFeasibility.innerHTML );
}

//TRACTION 
let sliderTraction = document.getElementById("tractionSlider");
let outputTraction = document.getElementById("tractionOutput");
outputTraction.innerHTML = sliderTraction.value;

sessionStorage.setItem("tractionScore", 5);
sliderTraction.oninput = function() {
  outputTraction.innerHTML = this.value;
  sessionStorage.setItem("tractionScore",   outputTraction.innerHTML );
}
