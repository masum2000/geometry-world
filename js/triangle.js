// click Blog Button and go to the Blog Page
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href ='blog.html';
})

// calculation the Area of Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
  const triangleInputField1 = document.getElementById('triangle-input-field1');
  const triangleValue1 = triangleInputField1.value;
  triangleInputField1.value = '';

  const triangleInputField2 = document.getElementById('triangle-input-field2');
  const triangleValue2 = triangleInputField2.value;
  triangleInputField2.value = '';
  
//   if(triangleValue1 && triangleValue2 === ' ' || triangleValue1 && triangleValue2 < 0){
//     console.log("Enter Valid a Number")
//   }
//   else{
//     console.log('this is correct')
//   }
  

  const areaOfTriangle = 0.5 * triangleValue1 * triangleValue2;
  
  
  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerText = 'Triangle' + ' ' + areaOfTriangle  + 'cm';
  areaCalculation.appendChild(ol);
})


// Calculation the Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleWidthField = document.getElementById('rectangle-width-field');
    const rectangleWidthValue = rectangleWidthField.value;
    rectangleWidthField.value = '';
  
    const rectangleLengthField = document.getElementById('rectangle-length-field');
    const rectangleLengthValue = rectangleLengthField.value;
    rectangleLengthField.value = '';
  
    const areaOfRectangle = rectangleWidthValue * rectangleLengthValue;
    
  
    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerText = 'Rectangle' + ' ' + areaOfRectangle  + 'cm';
    areaCalculation.appendChild(ol);
  })



// Calculation the Area of parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const areaOfParallelogram =  10 * 12 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerText = 'Parallelogram ' + ' ' + areaOfParallelogram  + 'cm';
    areaCalculation.appendChild(ol);
})


// Calculation the Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const areaOfRhombus = 0.5 * 16 * 8 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerText = 'Rhombus' + ' ' + areaOfRhombus  + 'cm';
    areaCalculation.appendChild(ol);
})



// Calculation the Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const areaOfPentagon = 0.5 * 6 * 10 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerText = 'Pentagon' + ' ' + areaOfPentagon  + 'cm';
    areaCalculation.appendChild(ol);
})




// Calculation the  Area of  Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const areaOfEllipse = 3.1416 * 10 * 4 ;

    const areaCalculation = document.getElementById('area-calculation')
    const ol = document.createElement('ol');
    ol.innerText = 'Ellipse' + ' '+ ' ' + areaOfEllipse  + 'cm';
    areaCalculation.appendChild(ol);
})
