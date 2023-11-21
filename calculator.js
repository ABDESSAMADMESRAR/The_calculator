
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}





































const numSing =[...document.querySelectorAll(".numbre , .sign")];
const clearButton =document.querySelector('.clear');
const calculatorButton =document.querySelector(".equals");
const input =document.querySelector("#input");
let result = "";


