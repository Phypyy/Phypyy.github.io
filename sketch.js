let video;
let poseNet
let noseX = 0, noseY = 0;
let eyeX = 0, eyeY =0;
let eyelX = 0, eyelY =0;
var img;

function preload(){
  img = loadImage('image/cat.png');
}

function setup(){
	createCanvas(620, 460);
  	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelReady);
	poseNet.on('pose', gotPoses);

}
function gotPoses(poses){
  //console.log(poses);
  if (poses.length > 0){
      let nX = poses[0].pose.keypoints[0].position.x;
      let nY = poses[0].pose.keypoints[0].position.y;
      let eX = poses[0].pose.keypoints[1].position.x;
      let eY = poses[0].pose.keypoints[1].position.y;
      let elX = poses[0].pose.keypoints[2].position.x;
      let elY = poses[0].pose.keypoints[2].position.y;
    noseX = lerp(noseX, nX, 0.7);
    noseY = lerp(noseY, nY, 0.7);
    eyeX = lerp(eyeX, eX, 0.7);
    eyeY = lerp(eyeY, eY, 0.7);
    eyelX = lerp(eyelX, elX, 0.7);
    eyelY = lerp(eyelY, elY, 0.7);

  }  
}

function modelReady(){
  console.log('model ready');
}


function draw() {

  image(video, 0, 0);
  image(img, noseX-100, noseY-100, 200, 200);
  
  // fill(255, 0, 0);
  // ellipse(noseX, noseY, 30);


  
  
  fill(255);
  ellipse(eyeX, eyeY, 70);
  fill(255);
  ellipse(eyelX, eyelY, 70);
  fill(0);
  ellipse(eyeX+10, eyeY, 20);
  fill(0);
  ellipse(eyelX+10, eyelY, 20);

  stroke(0);
  strokeWeight(8);
  line((eyeX-55),(eyeY-55),(eyeX+55),(eyeY+55));

  
}
