function setup(){
 canvas= createCanvas(400,400);
 canvas.position(570,150);

};

var img="";

function preload(){
    img=loadImage("dog_cat.jpg");
};

function draw(){
   image(img,0,0,500,500);
   fill("green");
   text("Dog",45,75);
   noFill();
   stroke("red");
   rect(30,50,250,350)
};

