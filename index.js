let text = "Is it too expensive to travel alone?";

let i = 0;
let speed = 100;
function type(){
   if ( i < text.length){
       document.querySelector(".parOne").textContent += text.charAt(i);
        i++;
       setTimeout(type, speed);
    }
    if( i === text.length){
       typeTwo()
        
   }
}
type();

let textTwo = "Not a problem anymore!";
let a = 0;
function typeTwo(){
   if ( a < text.length){
     document.querySelector(".parTwo").textContent += textTwo.charAt(a);
       a++;
      setTimeout(typeTwo, speed);
    }
}
const btn = document.querySelector(".calculate");
btn.addEventListener("click", calculateAmount);

function calculateAmount (e){
e.preventDefault();

const rent = document.querySelector("#rent").value;
const gas = document.querySelector("#gas").value;
const food = document.querySelector("#food").value;
const people = document.querySelector("#people").value;
const extra = document.querySelector("#extraSpending").value;

if(rent === ""||gas === ""||food === ""||people === "", people <1){
   Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Enter your data!',
    })
}
let amountPerPerson = rent /people + gas /people + food / people ;
console.log(amountPerPerson);

let extraPerPerson = extra / people;
console.log(extraPerPerson)

let totalAmount = amountPerPerson + extraPerPerson;
console.log(totalAmount);

amountPerPerson = amountPerPerson.toFixed(2);
extraPerPerson = extraPerPerson.toFixed(2);
totalAmount = totalAmount.toFixed(2);

document.querySelector("#trip").textContent = amountPerPerson;
document.querySelector("#extraActivity").textContent = extraPerPerson;
document.querySelector("#total").textContent = totalAmount;

}

const buttonExtra = document.querySelector("#extra")
buttonExtra.addEventListener("click", showActivity);

function showActivity(e){
   extraSpending.style.display = "block";
   e.preventDefault();
}

