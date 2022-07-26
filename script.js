const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);
generateEl.addEventListener("click", imagechange);
function imagechange(){
    document.getElementById('img-text').style.fontFamily="Poppins, sans-serif";
    document.getElementById('img-text').style.fontWeight="bold";
    document.getElementById('imgchange').src='password.jpg';
    document.getElementById('img-text').style.left='5px';
    document.getElementById('img-text').innerHTML="PASSWORD GENERATED !";
}

if(lenEl.addEventListener("change", checking) | 
upperEl.addEventListener("change", checking) |
lowerEl.addEventListener("change", checking) | 
numberEl.addEventListener("change", checking) |
symbolEl.addEventListener("change",checking) ){checking}
function checking(){
    var i=1;
    while(i){
        var source=document.getElementById('imgchange').src;
        if(source.value=='scan.jpg') {
            i=0;
            break;
        }
        else{
            const timeout=help();
            function help(){
                document.getElementById('imgchange').style.left='5px';
                document.getElementById('imgchange').src='scan.jpg';
                document.getElementById('img-text').style.fontFamily="Poppins, sans-serif";
                document.getElementById('img-text').style.fontWeight="bold";
                document.getElementById('img-text').style.left='5px';
                document.getElementById('img-text').innerHTML= "GENERATING PASSWORD !";
                
            }
        }
        i=0;
    }
}
var showText = function (target, message, index, interval,msg) {   
    if (index < message.length) {
        var msg=msg+message[index++];
        document.getElementById('img-text').innerHTML= msg;
      setTimeout(function () { showText(target, message, index, interval,msg); }, interval);
    }
}
function notify() {  
    document.getElementById('img-text').style.fontFamily="Poppins, sans-serif";
    document.getElementById('img-text').style.fontWeight="bold";
    document.getElementById('img-text').style.left="2px";
    document.getElementById('img-text').innerHTML="  PASSWORD   COPIED TO CLIPBOARD !";
  }
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    notify();
    
    
});