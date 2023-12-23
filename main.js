filter = "";
noseX = 0;
noseY = 0;


function a(){
    filter = "m";
}

function b(){
    filter = "l";
}

function c(){
    filter = "b";
}

function d(){
    filter = "n";
}


function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0, 400, 300);
    if(filter == "m"){
        image(mustache, noseX - 30, noseY + 5, 60, 40);
    }

    if(filter == "l"){
        image(lipstick, noseX - 30, noseY + 20, 60, 40);
    }

    if(filter == "b"){
        image(lipstick, noseX - 30, noseY + 20, 60, 40);
        image(mustache, noseX - 30, noseY + 5, 60, 40);
    }

    if(filter == "n"){
        
    }

}

function snap(){
    save("image.png");
}

function modelLoaded(){
    console.log("posenet is initialised.");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("Nose x = "+ results[0].pose.nose.x);
        console.log("Nose y = "+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}


