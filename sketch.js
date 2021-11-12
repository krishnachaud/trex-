var ground
var groundimage
var invisibleground
var trex ,trex_running;
var ran =Math.round(random(10,60))
var cloud , cloudImage
var marks = [35,38,42,45,43,34,46,41,48,32];

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
groundimage=loadImage("ground2.png")
cloudImage=loadImage("cloud.png")
obstacle1=loadImage("obstacle1.png")
obstacle2=loadImage("obstacle2.png")
obstacle3=loadImage("obstacle3.png")
obstacle4=loadImage("obstacle4.png")
obstacle5=loadImage("obstacle5.png")
obstacle6=loadImage("obstacle6.png")
}


function setup(){
  createCanvas(600,200)
  /*for(var i=0 ;i<marks.length;i++){
    if(marks[i]>=45){
      console.log(marks[i])
    }
  }*/
  console.log(ran)
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,400,20)
 ground.addImage("groundImage",groundimage)

 ground.velocityX=-2
 invisibleground=createSprite(200,190,400,10)
 invisibleground.visible=false
 console.log("hello"+"word")
score=0
}

function draw(){
  background("white")
  text("score: "+score,500,50)
  score=score+Math.round(frameCount/60)
  var Edges=createEdgeSprites()
  
  if(ground.x<0){
    ground.x=500
  }
  if(keyDown("space")&& trex.y>=150){
    trex.velocityY=-7
  }
  trex.velocityY=trex.velocityY+0.3
trex.collide(invisibleground)
spawnClouds()
spwanObstacles()
drawSprites()
}
function spawnClouds(){
  if(frameCount%60===0){

  
  cloud=createSprite(600,100,40,10)
  cloud.addImage(cloudImage)
  cloud.scale=0.4
  cloud.y=Math.round(random(10,90))
  cloud.velocityX=-3
  
  cloud.depth=trex.depth
  trex.depth=trex.depth+1
  cloud.lifetime=200
  }
}
function spwanObstacles(){
if(frameCount%60===0){
  obstacle=createSprite(600,165,10,40)
  obstacle.velocityX=-6
  var rand=Math.round(random(1,6))
  switch(rand){
    case 1:
      obstacle.addImage(obstacle1)
      break
      case 2:
        obstacle.addImage(obstacle2)
        break
        case 3:
          obstacle.addImage(obstacle3)
          break
          case 4:
            obstacle.addImage(obstacle4)
            break
            case 5:
              obstacle.addImage(obstacle5)
              break
              case 6:
                obstacle.addImage(obstacle6)
                break
                default:break
  }
  obstacle.scale=0.5
  obstacle.lifetime=100
}

}