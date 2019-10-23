let button;


function setup() {


  button = createButton("click to change color");
  button.mousePressed(buttonIsPressed);
}

function draw() {

  if (buttonIsPressed) {
    if (button === LEFT) {
      ellipse(50, 50, 50, 50);
    }
    if (button === RIGHT) {
      rect(25, 25, 50, 50);
    }
    if (button === CENTER) {
      triangle(23, 75, 50, 20, 78, 75);
    }
  }

}

function buttonIsPressed(){



}
