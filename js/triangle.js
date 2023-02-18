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
  const triangleValue2 = triangleInputField2.value;
  triangleInputField2.value = '';
  
  
  const areaOfTriangle = 0.5 * triangleValue1 * triangleValue2;
  

  if(isNaN(areaOfTriangle) || areaOfTriangle < 0 || areaOfTriangle == ''){
    alert = 'Please Enter Positive Number';
    return;
  }
//   if(areaOfTriangle < 0){
//     alert = 'Please Enter Positive Number';
//     return;
//   }

  
  
  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerHTML = addSerialNumbers()  + '. Triangle' + ' ' + areaOfTriangle.toFixed(2)  + "<span>cm<sup>2</sup></span>";
  areaCalculation.appendChild(ol);
})


// Calculation the Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidthField = document.getElementById('rectangle-width-field');
    const rectangleWidthValueString = rectangleWidthField.value;
    const rectangleWidthValue = parseFloat(rectangleWidthValueString);
    rectangleWidthField.value = '';
  
    const rectangleLengthField = document.getElementById('rectangle-length-field');
    const rectangleLengthValue = rectangleLengthField.value;
    rectangleLengthField.value = '';
  
    const areaOfRectangle = rectangleWidthValue * rectangleLengthValue;

    if(isNaN(areaOfRectangle) || areaOfRectangle < 0 || areaOfRectangle == ''){
      alert = 'Please Enter Positive Number';
      return;
    }
    
  
    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers() + '. Rectangle' + ' ' + areaOfRectangle.toFixed(2)  + "<span>cm<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
  })



// Calculation the Area of parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const areaOfParallelogram =  10 * 12 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers() +  '. Parallelogram ' + ' ' + areaOfParallelogram.toFixed(2)  + "<span>cm<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
})


// Calculation the Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const areaOfRhombus = 0.5 * 16 * 8 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers() +  '. Rhombus' + ' ' + areaOfRhombus.toFixed(2)  + "<span>cm<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
})



// Calculation the Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const areaOfPentagon = 0.5 * 6 * 10 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers() +  '. Pentagon' + ' ' + areaOfPentagon.toFixed(2)  + "<span>cm<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
})




// Calculation the  Area of  Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const areaOfEllipse = 3.1416 * 10 * 4 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerHTML = addSerialNumbers() +  '. Ellipse' + ' '+ ' ' + areaOfEllipse.toFixed(2)  + "<span>cm<sup>2</sup></span>";
    areaCalculation.appendChild(ol);
})
