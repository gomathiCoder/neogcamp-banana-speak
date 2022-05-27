var btnTranslate = document.querySelector("#btn-translate");
var txtEnglish = document.querySelector("#txt-english");
var txtBanana = document.querySelector("#txt-banana");

var serverURL = "https://lessonfourapi.gomathicoder.repl.co/translate/yoda.json";

function getTranslateURL(text){
    return serverURL + "?text=" + text;
}

function clickHandler(){
    var inputText = txtEnglish.value;

    // Calling server for translation
    fetch(getTranslateURL(inputText))
    .then(response => response.json())
    .then(json => txtBanana.innerText = json.contents.translated)
}

btnTranslate.addEventListener("click", clickHandler);