// creating variables
var score =0
var bg, bgImg;
var stoneImg,stoneGrp,stone;
var diamond,diamondImg,diamondGrp,diamondSound;
var spikeImg,spikeGrp;
var misImg,misGrp;



function preload() {
  // load image and Animation
  bgImg = loadImage("images/bg.jpg");
  ironmanImg=loadImage('images/iron.png')
  diamondImg=loadImage('images/diamond.png')
  stoneImg=loadImage('images/stone.png')
  diamondImg=loadImage('images/diamond.png')
  diamondSound=loadSound('sounds/diamondSound.mp3')
  spikeImg=loadImage('images/spikes.png')
  misImg=loadImage('images/mis.jpg')

 
}



function setup() {
  // creating canvas and background
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg)
  bg.scale=2


  // create Sprite and add image of IronMan
  ironman=createSprite(200,500,25,25)
  ironman.addImage(ironmanImg)
  ironman.scale=0.2


  // create Sprite and add visibility of ground
  ground=createSprite(1000,600,100000000,10)
  ground.visible=false


  // creating group for same kind of stuffs
  stoneGrp=new Group()
  diamondGrp=new Group()
  spikeGrp=new Group()
  misGrp=new Group()
 

}



function draw() {
  // drawing Sprites
  drawSprites();


  // color of Text and Text
  fill('white')
  text('Total Score :'+score,475,25)


//  give commands for moving
  if(keyDown('up')){
    ironman.velocityY=-10;
  }
  if(keyDown('left')){
    ironman.x=ironman.x-5;
  }
  if(keyDown('right')){
    ironman.x=ironman.x+5;
  }
  if(keyDown('down')){
    ironman.velocityY=10
  }
  ironman.velocityY=ironman.velocityY+0.5;
  ironman.collide(ground)


  // giving velocity to background
  bg.velocityY= 4 ;
  if(bg.y>600){
    bg.y=300
  }


  // add function createStone()in draw function
  createStone()
  for(var num=0; num<stoneGrp.length;num++){
    var temp=stoneGrp.get(num)
    if(temp.isTouching(ironman)){
      ironman.collide(stoneGrp)
    }
  }


  // add function createDiamond() in draw function
  createDiamond()
  for(var u=0 ; u<(diamondGrp).length;u++){
    var a=(diamondGrp).get(u);
    if(a.isTouching(ironman)){
        diamondSound.play()
        score=score+5
        a.destroy()
        a=null
    }
  }


  // add function createSpike() in draw function
  createSpike()
  for(var q=0;q<(spikeGrp).length;q++){
    var w=(spikeGrp).get(q);
    if(w.isTouching(ironman)){
      score=score-5
      w.destroy()
      w=null
    }
  }


}


// make function to create Stone
function createStone(){
  if(frameCount%80===0){
    var stone=createSprite(0,0,50,50)
    stone.x=random(100,1200)
    stone.addImage(stoneImg)
    stone.scale=0.5
    stone.velocityY=5
    stoneGrp.add(stone)
    stone.lifetime=120
  }
}


// make function to create Diamond
function createDiamond(){
  if(frameCount%70===0){
    var diamond=createSprite(0,0,50,50)
    diamond.x=random(100,1200)
    diamond.addImage(diamondImg)
    diamond.scale=0.5
    diamond.velocityY=6
    diamond.lifetime=120
    diamondGrp.add(diamond)
  }
 
}


// make function to create Spike
function createSpike(){
  if(frameCount%60===0){
    var spike=createSprite(0,0,50,50)
    spike.x=random(100,1200)
    spike.addImage(spikeImg)
    spike.scale=0.6
    spike.velocityY=8
    spike.lifetime=120
    spikeGrp.add(spike)
  }
}


// function createMissile(){
  // if(frameCount%150===0){
    // var mis=createSprite(0,0,50,50)
    // mis.x=random(100,1200)
    // mis.addImage(misImg)
    // mis.scale=0.1
    // mis.velocityY=random(20,30)
    // mis.lifetime=120
    // misGrp.add(mis)

  // }
// }