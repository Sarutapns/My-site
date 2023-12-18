const counter = document.querySelector(".container");
const addnum = document.querySelector('.btn-inc');
const renum = document.querySelector('.btn-dec');
const clr = document.querySelector('.btn-clr');
const numb = document.querySelector('.number'); 

function getNumber() {
    let number = parseInt(numb.textContent);
    return number;
}

function increase() {
    let number = getNumber();
    number++;
    numb.innerText = number;
}

function decrease() {
    let number = getNumber();
    if (number > 0) {
        number--;
        numb.innerText = number;
    }
    else{
        alert('จำนวนตำ่สุดคือ:0')
    }
}

function clearCounter() {
    numb.innerText = '0'; 
}

addnum.addEventListener('click', increase);
renum.addEventListener('click', decrease);
clr.addEventListener('click', clearCounter);