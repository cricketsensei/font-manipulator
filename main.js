difference = 0;
leftwristX = 0;
rightwristX = 0;
noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(550,550);
    canvas.position(800,120);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#0000FF');
    document.getElementById("sides").innerHTML = "Width and Height will be =" + difference + "px";
    textSize(difference);
    text('aarush', leftwristX, rightwristX);
    fill('#065535');
}

function modelLoaded(){
    console.log('PoseNet Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("left wrist x =" + leftwristX + "right wrist x =" + rightwristX + "difference =" + difference);
    }
}