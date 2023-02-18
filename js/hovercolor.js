// after hover will be random color for Triangle box
let triangleBackground = document.querySelector('.triangle-bg');

triangleBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})


// after hover will be random color for Rectangle box
let rectangleBackground = document.querySelector('.rectangle-bg');

rectangleBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})


// after hover will be random color for Parallelogram box
let parallelogramBackground = document.querySelector('.parallelogram-bg');

parallelogramBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})


// after hover will be random color for Rhombus box
let rhombusBackground = document.querySelector('.rhombus-bg');

rhombusBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})


// after hover will be random color for Pentagon box
let pentagonBackground = document.querySelector('.pentagon-bg');

pentagonBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})


// after hover will be random color for Ellipse box
let ellipseBackground = document.querySelector('.ellipse-bg');

ellipseBackground.addEventListener('mouseover', function() {
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  this.style.background = randomColor;
})

