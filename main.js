song1 = "music.mp3";
song2 = "music2.mp3";
leftWristX = 0;
leftwristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreleftWrist = 0;
song1_status = "";
song2_status = "";
function preload()
{
  song1 = loadSound("music.mp3");
  song2 = loadSound('music2.mp3');
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
image(video, 0, 0, 600, 500);
song1_status = song1.isPlaying();
song2_status = song2.isPlaying();
fill("#FF0000");
stroke("#FF0000");
if(scoreleftWrist > 0.2)
{
  circle(leftWristX,leftWristY, 20);
  song1.stop();
  if(song2_status == false)
{
  song2.play();
  document.getElementById("song").innerHTML = "Playing Peter Pan Song";
}
}
}
function modelLoaded()
{
  console.log("Posenet is initialized");
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    scoreleftWrist = results[0].pose.keypoints[9].score;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.lefttWrist.y;
  }
}
function play()
{
  sound.play();
  song.setVolume(1);
  song.rate(1);
}