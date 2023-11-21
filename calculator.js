








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





































// const numSing =[...document.querySelectorAll(".numbre , .sign")];
// const clearButton =document.querySelector('.clear');
// const calculatorButton =document.querySelector(".equals");
// const input =document.querySelector("#input");
// let result = "";


// clearButton.addEventListener("click",clearButto)
// calculatorButton.addEventListener("click",calculatorButton)
// function clearButto(){
//   result = "";
//   input.value = "0";
// }
// numSing.forEach((numSings)=> {
//   numSing.addEventListener("click",numSing)

// });
// function numSing (event){
// const value =event.target.value;
// if(value===0 &&  value === 0 ){
//   return
// }
// if(result.length===0 ){
//   input.value=""
// }
// const operator =["+","-","/","*"]
// if( operator.includes(result[result.length-1])&&  operator.includes(value)){
//   input.value=input.value.repace(/.$/,value)
//   result.value=input.value.repace(/.$/,value)
// return
// }
// result+=value;
// input.value+=value;

// }
// function calculatorButton(){
//   try{
//     input.value=eval(result)
//   }
//   catch(e){
// input.value="Error"
// setTimeout(() => {
//   if(confirm("rvnjbnjnbjtnbjkvntjnvjh"));
//   clearButto();
  
// }, 0);
//   }
// }