let angles = []; 
let length = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); 

  for (let a = 0; a < windowWidth; a += length) {
    let row = [];
    for (let b = 0; b < windowHeight; b += length) {
      let c = random([0, 1, 2, 3]);
      row.push(90 * c);
    }
    angles.push(row);
  }
}

function draw() {
  background(71, 158, 151);

  function grid(c1, c2, x, y, a, distance, angle) {
    push();
    fill(c1);
    noStroke();
    rect(x, y, a, a);
    fill(c2);
    translate(x + a / 2, y + a / 2);
    rotate(angle);
    quad(-a / 2, -a / 2, a / 2, -a / 2, a / 2 - distance, a / 2 - distance, -a / 2, a / 2);
    fill(c1);
    ellipse(-a / 2 + distance + (mouseX - windowWidth / 2) /windowWidth*distance, -a / 2 + distance + (mouseY - windowHeight / 2) /windowWidth*distance, distance);
    pop();
  }

  for (let a = 0; a < windowWidth; a += length) {
    for (let b = 0; b < windowHeight; b += length) {
      let i = a / length;
      let j = b / length;
      let angle = angles[i][j]; 
      grid('black', 'white', a, b, length, 30, angle);
    }
  }
}
