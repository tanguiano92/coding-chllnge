let button;

function setup() {
  createCanvas(400, 400);

  createCanvas(100, 100);
   background(0);
   button = createButton('click me');
   button.position(19, 19);
   button.mousePressed(changeBG);

}

function draw() {
  background(220);
}

function changeBG() {
  let val = random(255);
  background(val);
}
