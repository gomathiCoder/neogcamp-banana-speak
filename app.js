var btnTranslate = document.querySelector("#btn-translate");
var txtEnglish = document.querySelector("#txt-english");
var txtBanana = document.querySelector("#txt-banana");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("Error occured ", error);
    alert("Something wrong with server!! \nTry again after some time.")
}

function clickHandler(){
    var inputText = txtEnglish.value;

    // Calling server for translation
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => txtBanana.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);