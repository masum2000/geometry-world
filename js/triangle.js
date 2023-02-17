document.getElementById('btn-triangle').addEventListener('click', function(){
  const triangleInputField1 = document.getElementById('tri-input-field1');
  const triangleValue1 = triangleInputField1.value;
  console.log(triangleValue1)

  const triangleInputField2 = document.getElementById('tri-input-field2');
  const triangleValue2 = triangleInputField2.value;
  console.log(triangleValue2)

  const areaOfTriangle = 0.5 * triangleValue1 * triangleValue2;
  console.log(areaOfTriangle)

  const areaCalculation = document.getElementById('area-calculation')
  const ol = document.createElement('ol');
  ol.innerText = 'Triangle'  + areaOfTriangle  + 'cm';
  areaCalculation.appendChild(ol);
})



