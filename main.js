prediction_1="";
prediction_2="";


Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });

}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YVvdv7zy1/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="the first prediction is"+prediction_1;
    speak_data_2="the second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}


function gotResult(error,results){
if (error){
    console.error(error)
}else{
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(results[0].label=="Thumbsup"){
        document.getElementById("update_emoji").innerHTML="&#128077;";
        document.getElementById("lin").innerHTML="God Luck";
    }
    if(results[0].label=="Victory"){
        document.getElementById("update_emoji").innerHTML="&#9996;";
        document.getElementById("lin").innerHTML="We won";
    }

    if(results[0].label=="Superb"){
        document.getElementById("update_emoji").innerHTML="&#128076;";
        document.getElementById("lin").innerHTML="Superb";
    }
    if(results[0].label=="Clap"){
        document.getElementById("update_emoji").innerHTML="&#128079;";
        document.getElementById("lin").innerHTML="Let's clap";
    }
    if(results[0].label=="YoYo"){
        document.getElementById("update_emoji").innerHTML="&#129304;";
        document.getElementById("lin").innerHTML="I am going to rock this day";
    }
    if(results[0].label=="Stone"){
        document.getElementById("update_emoji").innerHTML="&#9994;";
        document.getElementById("lin").innerHTML="Booyah";
    }
    if(results[0].label=="Butterfly"){
        document.getElementById("update_emoji").innerHTML="&#128080;";
        document.getElementById("lin").innerHTML="What a beautiful day";
    }

    if(results[1].label=="Thumbsup"){
        document.getElementById("update_emoji2").innerHTML="&#128077;";
        document.getElementById("line").innerHTML="Best of luck";
    }

    if(results[1].label=="Superb"){
        document.getElementById("update_emoji2").innerHTML="&#128076;";
        document.getElementById("line").innerHTML="Its realy good";
    }

    if(results[1].label=="Victory"){
        document.getElementById("update_emoji2").innerHTML="&#9996;";
        document.getElementById("line").innerHTML="Yehh!We Won";
    }
    if(results[1].label=="Clap"){
        document.getElementById("update_emoji2").innerHTML="&#128079;";
        document.getElementById("line").innerHTML="Let's clap";
    }
    if(results[1].label=="YoYo"){
        document.getElementById("update_emoji2").innerHTML="&#129304;";
        document.getElementById("line").innerHTML="I am going to rock this day";
    }
    if(results[1].label=="Stone"){
        document.getElementById("update_emoji2").innerHTML="&#9994;";
        document.getElementById("line").innerHTML="Booyah";
    }

    if(results[1].label=="Butterfly"){
        document.getElementById("update_emoji2").innerHTML="&#128080;";
        document.getElementById("line").innerHTML="What a Beautiful Day";
    }
}
}
