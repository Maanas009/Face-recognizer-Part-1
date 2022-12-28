// https://teachablemachine.withgoogle.com/models/y-DzyaQgw/


classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y-DzyaQgw/model.json", modelReady);

function modelReady(){
  console.log("success")
}

Webcam.set({
  width: 320,
  height: 240,
  image_format: 'jpeg',
  jpeg_quality: 90
});
Webcam.attach( '#camera' );
      
  
function take_snapshot(){
  Webcam.snap( function(data_uri) {
    // display results in page
    document.getElementById('results').innerHTML = 
     '<img src="'+data_uri+'"/>';
} );
}

function check(){
  
}