// let angles = []; 
// let length = 100;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   angleMode(DEGREES); 

//   for (let a = 0; a < windowWidth; a += length) {
//     let row = [];
//     for (let b = 0; b < windowHeight; b += length) {
//       let c = random([0, 1, 2, 3]);
//       row.push(90 * c);
//     }
//     angles.push(row);
//   }
// }

// function draw() {
//   background(71, 158, 151);

//   function grid(c1, c2, x, y, a, distance, angle) {
//     push();
//     fill(c1);
//     noStroke();
//     rect(x, y, a, a);
//     fill(c2);
//     translate(x + a / 2, y + a / 2);
//     rotate(angle);
//     quad(-a / 2, -a / 2, a / 2, -a / 2, a / 2 - distance, a / 2 - distance, -a / 2, a / 2);
//     fill(c1);
//     ellipse(-a / 2 + distance + (mouseX - windowWidth / 2) /windowWidth*distance, -a / 2 + distance + (mouseY - windowHeight / 2) /windowWidth*distance, distance/1.5);
//     pop();
//   }

//   for (let a = 0; a < windowWidth; a += length) {
//     for (let b = 0; b < windowHeight; b += length) {
//       let i = a / length;
//       let j = b / length;
//       let angle = angles[i][j]; 
//       grid('black', 'white', a, b, length, 30, angle);
//     }
//   }
// }


let x = 0;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 
  frameRate(30);
}

function draw() {
  background(71, 158, 151);
  function flower(color1,color2,x,y,length,angle){
    push();
    noStroke();
    fill(color1);

    translate(x, y);
    rotate(angle);
    for(a = 0;a < 360 ;a += 90){
      push();
      rotate(a);
      beginShape();
      vertex(0, 0);
      vertex(-length, 4*length);
      vertex(-3*length, 4*length);
      vertex(-3*length, 3*length);
      vertex(-4*length, 3*length);
      vertex(-4*length, length);
      vertex(0, 0);
      endShape();
      fill(color2)
      triangle(0,0,-5*length,0,-3*length,length)
      triangle(0,0,0,5*length,-length,3*length)
      stroke(color2)
      strokeWeight(0.75)
      line(0,0,-1.5*length+(-windowWidth/2)/windowWidth*2*length,1.5*length+(mouseY-windowHeight/2)/windowHeight*2*length)
      ellipse(-1.5*length+(-windowWidth/2)/windowWidth*2*length,1.5*length+(mouseY-windowHeight/2)/windowHeight*2*length, 3)
      stroke(color1)
      fill(color1)
      line(0,0,0,3*length)
      ellipse(0,3*length, 4)
      line(0,0,-3*length,0)
      ellipse(-3*length,0, 4)
      pop()
    }
    pop()

  }
  let deltaX = speed * deltaTime / 1000;
  x += deltaX;
  let length = 10
  for(let a = 0; a < windowWidth; a += 8*length){
    for(let b = 0; b < windowHeight; b += 4*length){
      flower('black', 'white', a, b, 10, 0);
   }
  }
  flower('black', 'white', windowWidth / 2, windowHeight / 2, 10, x);
}

