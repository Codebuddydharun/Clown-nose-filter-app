function take_snapshot(){
    save("clown-nose.jpg");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded); 
    posenet.on('pose',gotposes);   
}
function preload(){
clownnose=loadImage("https://www.pngitem.com/pimgs/m/114-1147898_clown-nose-png-clip-art-clown-nose-transparent.png")
}

function draw(){
 image(video,0,0,300,300);   
 image(clownnose,nosex,nosey,30,30);
}

function modelloaded(){
    console.log("model loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);

}
}
