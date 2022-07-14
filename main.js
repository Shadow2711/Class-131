image = "";
function preload(){
    image = loadImage("dog_cat.png");
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
}

function draw(){
    image(image , 0 , 0 , 640 , 420);
    fill("#30D5C8");
    text("dog" , 40 ,60);
    nofill();
    stroke("#30D5C8");
    rect(40 , 60 , 640 , 420);
}