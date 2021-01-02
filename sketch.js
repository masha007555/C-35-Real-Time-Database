
var hypnoticBall,database;
var position;

function setup(){
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    var hypnoticBallPosition= database.ref("ball/position");
    hypnoticBallPosition.on("value", readPosition,showError)
}

function draw(){
    background("white");

    if (position !==undefined) {
            if(keyDown(LEFT_ARROW)){
                writePosition(-1,0);
            }
            else if(keyDown(RIGHT_ARROW)){
                writePosition(1,0);
            }
            else if(keyDown(UP_ARROW)){
                writePosition(0,-1);
            }
            else if(keyDown(DOWN_ARROW)){
                writePosition(0,+1);
            }
     
            drawSprites();
    }
}

function writePosition(x,y){
database.ref("ball/position").set({

'x': position.x + x,
'y': position.y + y

})

}

function readPosition(data) {
position = data.val();
console.log(position.y);
hypnoticBall.x = position.x;
hypnoticBall.y = position.y;


}


function changePosition(x,y){
    
    hypnoticBall.x = hypnoticBall.x + x;
    hypnoticBall.y = hypnoticBall.y + y;
}

function showError(){

    console.log("error in writing the database");
}












// var hypnoticBall;
// var database;
// var position;

// function setup(){
    
//     database = firebase.database();
//     createCanvas(500,500);
//     hypnoticBall = createSprite(250,250,10,10);
//     hypnoticBall.shapeColor = "red";

//     var hypnoticBallPosition = database.ref("ball/position");

//     hypnoticBallPosition.on("value", readPosition, showError);
// }

// function draw(){
//     background("white");

//     if (position !== undefined){

//         if(keyDown(LEFT_ARROW)){
//             writePosition(-1,0);
//         }
//         else if(keyDown(RIGHT_ARROW)){
//             writePosition(1,0);
//         }
//         else if(keyDown(UP_ARROW)){
//             writePosition(0,-1);
//         }
//         else if(keyDown(DOWN_ARROW)){
//             writePosition(0,+1);
//         }
    
//         drawSprites();
//     }
//     else {
//         console.log("some error");
//     }
// }

// function changePosition(x,y){
//     hynoticBall.x = hynoticBall.x + x;
//     hynoticBall.y = hynoticBall.y + y;
// }

// function readPosition(data){
//     position = data.val();
//     console.log(position.y);
//     hynoticBall.x = position.x;
//     hynoticBall.y = position.y;
// }

// function showError(){
//     console.log("Error in writing the database");
// }

// function writePosition(x,y){
//     database.ref("ball/position".set({

//         'x':position.x+x,
//         'y':position.y+y
//     }));
// }