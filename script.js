function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KDujbgnhC/model.json', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.log(error);
    }

    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

    img1 = dog.jpg
    img2 = cat.jpg
    img3 = bird.jpg
    img4 = pig.jpg
    img5 = cow.jpg
    if (results[0].label == "Dog"){
        document.getElementById("abc").src = img1;
    } else if (results[0].label == "Cat"){
        document.getElementById("abc").src = img2;
    } else if (results[0].label == "Bird"){
        document.getElementById("abc").src = img3;
    } else if (results[0].label == "Pig"){
        document.getElementById("abc").src = img4;
    } else if (results[0].label == "Cow"){
        document.getElementById("abc").src = img5;
    }
}