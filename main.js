function setup(){
    canvas = createCanvas(550,550);
    canvas.position(800,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#0000FF');
}

function modelLoaded(){
    console.log('PoseNet Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}