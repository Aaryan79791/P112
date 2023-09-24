prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/e6V1jd9yq/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speech_data_1 + speech_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label
        speak();
        if(results[0].label == "Rock On")
        {
        document.getElementById("update_emoji").innerHTML = "&#129304";
        }
        if(results[0].label == "Peace")
        {
        document.getElementById("update_emoji").innerHTML = "&#9996";
        }
        if(results[0].label == "Good Job")
        {
        document.getElementById("update_emoji").innerHTML = "&#128077";
        }
        if(results[0].label == "Bang Bang")
        {
        document.getElementById("update_emoji").innerHTML = "&#128073";
        }
        if(results[0].label == "Power")
        {
        document.getElementById("update_emoji").innerHTML = "&#9994";
        }
        if(results[0].label == "Amazing")
        {
        document.getElementById("update_emoji").innerHTML = "&#128076";
        }
        if(results[0].label == "High Five")
        {
        document.getElementById("update_emoji").innerHTML = "&#128400";
        }

        if(results[1].label == "Rock On")
        {
        document.getElementById("update_emoji2").innerHTML = "&#129304";
        }
        if(results[1].label == "Peace")
        {
        document.getElementById("update_emoji2").innerHTML = "&#9996";
        }
        if(results[1].label == "Good Job")
        {
        document.getElementById("update_emoji2").innerHTML = "&#128077";
        }
        if(results[1].label == "Bang Bang")
        {
        document.getElementById("update_emoji2").innerHTML = "&#128073";
        }
        if(results[1].label == "Power")
        {
        document.getElementById("update_emoji2").innerHTML = "&#9994";
        }
        if(results[1].label == "Amazing")
        {
        document.getElementById("update_emoji2").innerHTML = "&#128076";
        }
        if(results[1].label == "High Five")
        {
        document.getElementById("update_emoji2").innerHTML = "&#128400";
        }
    }
}