let button;

function setup() {
createButton("Click to Change Color");

}

function draw() {
  background(220);
}

function changeBG() {
  let val = random(255);
  background(val);
}
