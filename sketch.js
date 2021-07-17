const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
     if(backgroundImg){
         background(backgroundImg)
     }
     fill("yellow")
     textSize(50)
     text("Time:  "+hour,60,60)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImage(){
      
    // write code to fetch time from API
     var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
     var responsejson= await response.json()
     var datetime=responsejson.datetime;
    // write code slice the datetime
      hour= datetime. slice(11,16)
console.log(hour)
    // add conditions to change the background images from sunrise to sunset
    if(hour>04 && hour<06){
        bg="sunrise1.png";
    }
    else if(hour>06 && hour<08){
        bg="sunrise2.png";
    }
    else if(hour>23 && hour<0){
        bg="sunset10.png"
    }
    else if(hour>0 && hour<03){
        bg="sunset11.png"
    }
    else{
        bg="sunset12.png"
    }
    

    //load the image in backgroundImg variable here
     backgroundImg=loadImage(bg)
}
