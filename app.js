var btnTranslate = document.querySelector("#btn-translate");
var txtEnglish = document.querySelector("#txt-english");
var txtBanana = document.querySelector("#txt-banana");

function clickEventHandler(){
    txtBanana.innerText = "English : " + txtEnglish.value;
}

btnTranslate.addEventListener("click", clickEventHandler);