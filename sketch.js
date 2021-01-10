var canvas ,surface1,surface2,surface3,surface4,surface5;
var music,box,o1,o2,invisible1,invisible2,invisible3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    surface1 = createSprite(660,500,130,20);
    surface1.shapeColor="red";

    surface2 = createSprite(100,500,130,20);
    surface2.shapeColor="green";

    surface3 = createSprite(238,500,130,20);
    surface3.shapeColor="yellow";

    surface4 = createSprite(376,500,130,20);
    surface4.shapeColor="brown";
    
    surface5 = createSprite(520,500,130,20);
    surface5.shapeColor="blue";
    
    box = createSprite(random(20,750),270,30,30);
    box.shapeColor="white";
    box.velocityX = 5;
    box.velocityY = 5;

    invisible1 = createSprite(25,378,20,900);

    invisible2 = createSprite(756,500,20,980);
    
    invisible3 = createSprite(340,21,900,20);
    
}

function draw() {
    background("pink");
   
    invisible1.visible=false;
    invisible2.visible=false;
    invisible3.visible=false;
   
    box.bounceOff(invisible1);  
    box.bounceOff(invisible2);  
    box.bounceOff(invisible3); 


    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
      box.shapeColor="red";
      music.play();
     
    } 
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
      box.shapeColor="green";
      music.play();
    
    } 
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
      box.shapeColor="yellow";
      music.play();
     
    } 
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
      box.shapeColor="brown";
      music.stop();
      box.velocityX=0;
      box.velocityY=0;
    
    } 
    if(surface5.isTouching(box)&& box.bounceOff(surface5)){
      box.shapeColor="blue";
      music.play();
     
    } 
    
    //text (mouseX + ',' + mouseY,10,45);
   
   
    
    drawSprites();
    
    
}


