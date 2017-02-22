//A collaborative work between: Sean, Eric Vargas, and Hassan
var cars = [];
var sign = new Array("Go!", "")// creating an array to print a message "GO
v"ar carspeed = 4

// creating a literal object that sets a random shape fill. 
var rgb = {
  r: 255,
  g: 255,
  b: 255
}
// setup function that declare canvas and contruct function 
function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 20; i++) {
    cars[i] = new Car();
  }
carspeed = random(40)
textSize(32);
fill(255)
console.log(sign);
}

function draw() {
  background(0);
  for (var i = 0; i < cars.length; i++) {// for every element i move() and display() function are called.
    cars[i].move();
    cars[i].display();
    
    rgb.r = random(255);// random colors for the cars.
    rgb.g = random(255);
    rgb.b = random(255);
    
    if (cars[i].x > 650) {// Once the x hit the edge, cars reverses in speed.
    cars[i].x = -50 ;
    }
    if (cars[i].x < -51) {
      cars[i].x = 649
    }
      if (cars[i].x > width || cars[i].x < 0) {
    carspeed = carspeed * -1;
  }
  }
}

function Car() {
  this.x = 0;
  this.y = random(40, height - 40);

  this.display = function() {
    stroke(255);
    fill(rgb.r, rgb.g, rgb.b)
    rect(this.x, this.y, 24, 24);
    
  }

  this.move = function() {
    this.x = this.x + carspeed;
  }
}
