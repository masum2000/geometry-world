// this function is use for number increase in Area Calculation Field
let serialNumber = 0;
function addSerialNumbers() {
    serialNumber ++;
    return serialNumber;  
  }

// this function is use in calculate.js file
  function displayData(triangleValue1,triangleValue2,areaOfTriangle){

    const areaCalculation = document.getElementById('area-calculation')
    
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers()  + '. Triangle' + ' ' + areaOfTriangle.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color: #1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
    
    }

  // this function use two time in calculate.js file  
function displayValue(a, b){
    const sum = (a*b);
    return sum;
  }


  // This function is use  many time in hoverColor.js file
function randomBackground(geometry){
    geometry.addEventListener('mouseover', function() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.background = randomColor;
  })
}

 