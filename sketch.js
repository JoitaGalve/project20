
var garden, gardenImage;
var cat, catImg, catImg2, catImg3;
var mouse, mouseImg, mouseImg2, mouseImg3;
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png")
    catImg = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImg3 = loadAnimation("images/cat4.png")
    mouseImg = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(800,600);
    garden = createSprite(400, 300, 10, 10)
    garden.addImage(gardenImage)
    //create tom and jerry sprites here
    cat = createSprite(650, 480, 10, 10)
    cat.addAnimation("sitting", catImg)
    cat.scale = 0.1

    mouse = createSprite(150, 500, 10, 10)
    mouse.addAnimation("standing", mouseImg)
    mouse.scale = 0.1

    

}

function draw() {

    background("grey");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2) {
        cat.addAnimation("catLastImg", catImg3)
        cat.changeAnimation("catLastImg")
        mouse.addAnimation("mouseLastImg", mouseImg3)
        mouse.changeAnimation("mouseLastImg")
      cat.velocityX = 0
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW) {
        cat.velocityX = -5
        cat.addAnimation("catRunning", catImg2)
        cat.changeAnimation("catRunning")
        cat.scale = 0.2
        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing")

    }

  


}

