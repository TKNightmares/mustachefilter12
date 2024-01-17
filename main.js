x_coord = 0
y_coord = 0 

function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    canvas = createCanvas(850, 650);
    canvas.position(285, 160);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); // To get the poseNet function initialized into the web app
    poseNet.on('pose', gotPoses); // To access and execute poseNet. That is why it is poseNet.on()
}

function modelLoaded(){
    console.log('Posenet is Initialized.'); // To notify that poseNet is accessable.
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        x_coord = results[0].pose.nose.x
        y_coord = results[0].pose.nose.y
        console.log("nose X = " + x_coord); // This specifically reads for the nose x and y coordinates that will be given in the console.
        console.log("nose Y = " + y_coord);
    }
}

function draw(){
    image(video, 0, 0, 850, 650); // This is made to actually setup and place the webcam on the web app's canvas. 
    // Without this, you will not see the webcam on web app at all.
    image(mustache, x_coord +160, y_coord +120, 250, 280);
}                   // The +160 is using the coords and adjusting it. Refer to area and grid reference and understand that coordinates align with the top left of an area. This area is the whole coordinate. 

function take_snapshot(){
    save('myFilterImage.png')
}