function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}

function strength(){
  let result = []
  let max = Math.max(teamScore,timingScore,marketScore,businessModelScore,scalabilityScore,uniquenessScore,feasibilityScore,tractionScore);
  if(max==teamScore){
    result.push("Team")
  }
  if(max==timingScore){
    result.push("Timing")
  }
  if(max==marketScore){
    result.push("Market")
  }
  if(max==businessModelScore){
    result.push("Business Model")
  }
  if(max==scalabilityScore){
    result.push("Scalability")
  }
  if(max==uniquenessScore){
    result.push("Uniqueness")
  }
  if(max==feasibilityScore){
    result.push("Feasibility")
  }
  if(max==tractionScore){
    result.push("Traction")
  }
  console.log(result)

  if (result.length>3){
    return [result[0],result[1],result[2]]
  }
  return result;
}

function weakness(){
  let result = []
  let max = Math.min(teamScore,timingScore,marketScore,businessModelScore,scalabilityScore,uniquenessScore,feasibilityScore,tractionScore);
  if(max==teamScore){
    result.push("Team")
  }
  if(max==timingScore){
    result.push("Timing")
  }
  if(max==marketScore){
    result.push("Market")
  }
  if(max==businessModelScore){
    result.push("Business Model")
  }
  if(max==scalabilityScore){
    result.push("Scalability")
  }
  if(max==uniquenessScore){
    result.push("Uniqueness")
  }
  if(max==feasibilityScore){
    result.push("Feasibility")
  }
  if(max==tractionScore){
    result.push("Traction")
  }
  if (result.length>3){
    return [result[0],result[1],result[2]]
  }
  return result;
}


teamScore= parseInt(sessionStorage.getItem("teamScore"))
timingScore= parseInt(sessionStorage.getItem("timingScore"))
marketScore= parseInt(sessionStorage.getItem("marketScore"))
businessModelScore= parseInt(sessionStorage.getItem("businessModelScore"))
scalabilityScore= parseInt(sessionStorage.getItem("scalabilityScore"))
uniquenessScore= parseInt(sessionStorage.getItem("uniquenessScore"))
feasibilityScore= parseInt(sessionStorage.getItem("feasibilityScore"))
tractionScore= parseInt(sessionStorage.getItem("tractionScore"))

console.log("team",typeof sessionStorage.getItem("teamScore"))
console.log("timing",sessionStorage.getItem("timingScore"))
console.log("market",sessionStorage.getItem("marketScore"))
console.log("businessModelScore",sessionStorage.getItem("businessModelScore"))
console.log("scalabilityScore",sessionStorage.getItem("scalabilityScore"))
console.log("uniquenessScore",sessionStorage.getItem("uniquenessScore"))
console.log("feasibilityScore",sessionStorage.getItem("feasibilityScore"))
console.log("tractionScore",sessionStorage.getItem("tractionScore"))



const data = {
  labels: [
    'Team',
    'Timing',
    'Market',
    'Business Model',
    'Scalability',
    'Uniqueness',
    'Feasibility',
    'Traction'
  ],
  datasets: [{
    label: 'Your score',
    data: [marketScore, timingScore,marketScore, businessModelScore, scalabilityScore, uniquenessScore, feasibilityScore, tractionScore],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }/*,{
    label: 'Average',
    data: [5, 5,5, 5, 5, 5, 5, 5],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }*/]
};  



const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
            min: 0,
            max: 10,
        },
    },

    },
    
  };