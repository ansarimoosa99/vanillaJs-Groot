var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var URL ="https://api.funtranslations.com/translate/groot.json"


function getTranslationURL(text){
    return  URL +"?" +"text=" +text;
}

function errorHandler(error){
    console.log("Error Occured !",error);
    alert("Something wrog with server, Try again after sometime")
}

function clickHandler(){
    var inputText = txtInput.value  //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json  =>{
        var translatedOutput = (json.contents.translated);
        outputDiv.innerText = translatedOutput;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",  clickHandler);




// console.log("hello mumbai");
// // alert("This script works wowowow!");
// var stName = prompt("Give me your username?");
// alert("Your name is "+stName);
//outputDiv.innerText = "wow";  //to print on div

//PROCESSING
// btnTranslate.addEventListener("click", function clickHandler(){
//     console.log("clicked");
//     console.log(txtInput.value);
//     //OUTPUT
//     outputDiv.innerText = "Transalted!! " + txtInput.value;
// })
