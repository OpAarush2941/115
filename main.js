function preload(){}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded());
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,300)
}

function takeSnapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x="+results[0].pose.nose.x);
        console.log("y="+results[0].pose.nose.y);
        console.log("var_time");
    }
}