
// click Blog Button and go to the Blog Page
document.getElementById('btn-blog').addEventListener('click', function(){
  window.location.href ='blog.html';
})




// calculation the Area of Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){

const triangleInputField1 = document.getElementById('triangle-input-field1');
const triangleValue1String = triangleInputField1.value;
const triangleValue1 = parseFloat(triangleValue1String);
triangleInputField1.value = '';

const triangleInputField2 = document.getElementById('triangle-input-field2');
const triangleValue2String = triangleInputField2.value;
const triangleValue2 = parseFloat(triangleValue2String);
triangleInputField2.value = '';

if(triangleValue2 < 0 ){
  alert('Please input Two Positive Valid Number');
  return;
}

// use displayValue Function from common.js file
const areaOfTriangle = 0.5 * (displayValue(triangleValue1, triangleValue2));

if (isNaN(areaOfTriangle) || areaOfTriangle < 0 || areaOfTriangle == ""){
  alert('Please input Two Positive Valid Number');
  return;
}
// this function  from common.js file 
displayData(triangleValue1, triangleValue2, areaOfTriangle)

})



// Calculation the Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){

  const rectangleWidthField = document.getElementById('rectangle-width-field');
  const rectangleWidthValueString = rectangleWidthField.value;
  const rectangleWidthValue = parseFloat(rectangleWidthValueString);
  rectangleWidthField.value = '';

  const rectangleLengthField = document.getElementById('rectangle-length-field');
  const rectangleLengthValueString = rectangleLengthField.value;
  const rectangleLengthValue = parseFloat(rectangleLengthValueString)
  rectangleLengthField.value = '';
  
  if(rectangleLengthValue < 0 ){
    alert('Please input Two Positive Valid Number');
    return;
  }

// use displayValue Function from common.js file
  const areaOfRectangle = displayValue(rectangleWidthValue, rectangleLengthValue);

  if(isNaN(areaOfRectangle) || areaOfRectangle < 0 || areaOfRectangle == ''){
    alert ('Please input Two Positive Valid Number');
    return;
  }
  
  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers() + '. Rectangle' + ' ' + areaOfRectangle.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color:#1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})



// Calculation the Area of parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
  const areaOfParallelogram =  10 * 12 ;

  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers() +  '. Parallelogram ' + ' ' + areaOfParallelogram.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color:#1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})



// Calculation the Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
  const areaOfRhombus = 0.5 * 16 * 8 ;

  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers() +  '. Rhombus' + ' ' + areaOfRhombus.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color:#1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})




// Calculation the Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
  const areaOfPentagon = 0.5 * 6 * 10 ;

  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers() +  '. Pentagon' + ' ' + areaOfPentagon.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color:#1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})




// Calculation the  Area of  Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
  const areaOfEllipse = 3.1416 * 10 * 4 ;

  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers() +  '. Ellipse' + ' '+ ' ' + areaOfEllipse.toFixed(2)  + "<span>cm<sup>2</sup></span>" + ' ' +"<span style='color:white;background-color:#1E90FF; padding: 2px 2px; border-radius: 5px'>convert to m<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})
