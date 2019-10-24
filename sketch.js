let button;


function setup() {
noCanvas();

button = select('#butt');
button.mousePressed(buttonPressed);

}

function draw() {


}

function buttonPressed(){
let body;
body = select('body')
body.style('background-image', "url('images/butterfly.jpg')")


}
