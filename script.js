'use strict';

const form = document.getElementById('form');
const input = document.querySelectorAll('input');


const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');

const totalDay = document.querySelector('.total-days');
const totalMonth = document.querySelector('.total-months');
const totalYear = document.querySelector('.total-years');





const date = new Date();
let getYear = date.getFullYear();
let getMonth = date.getMonth() + 1;
let getDay = date.getDate();


const months = [31,28,30,31,30,31,30,31,30,31,30,31];


function validate() {

  let validator = true;

  for(let i = 0; i < input.length;i++) {

    if (!input[i].value) {
      input[i].parentElement.classList.add('error');
          if (input[i].id === 'number1' || input[i].id === 'number2' || input[i].id === 'number3'){
            if(!input[i].value) {
              input[i].parentElement.classList.remove('invalid-error');
             
            } 
          
          
          }
      
          validator = false;
        }
          else {
       
                if (input[i].id === 'number1'){
                  if(input[i].value < 1 || input[i].value > 31) {

                    input[i].parentElement.classList.add('invalid-error');
                    if(input[i].parentElement.contains('invalid-error')){
                      return 0;
                    }
                    
                  }else{
                    input[i].parentElement.classList.remove('invalid-error');
                  
                  }
                }
                if (input[i].id === 'number2'){
                  if(input[i].value < 1 || input[i].value > 12) {
             
                    input[i].parentElement.classList.add('invalid-error');
            
                    if(input[i].parentElement.contains('invalid-error')){
                      return 0;
                    }
                  }else{
                    input[i].parentElement.classList.remove('invalid-error');
                  
                  }
                }
                
                if (input[i].id === 'number3'){
                  if(input[i].value < 1 || input[i].value > getYear) {
                    input[i].parentElement.classList.add('invalid-error');
                    if(input[i].parentElement.contains('invalid-error')){
                      return 0;
                    }
                  }else{
                    input[i].parentElement.classList.remove('invalid-error');
                  
                  }
                }
                
              
                input[i].parentElement.classList.remove('error');
                  validator = true;
                
               
              }
             
            }
       
  return validator;
};

const handleSumbit = (e) => {
  e.preventDefault();
  if (validate()) {
    if (inputDay.value > getDay) {
      getDay = getDay + months[getMonth - 1];
      getMonth = getMonth - 1;//3

    }
    if (inputMonth.value > getMonth) {
      getMonth = getMonth + 12;
      getYear = getYear - 1;
     
    
    }

    const day = getDay - inputDay.value;
    const month = getMonth - inputMonth.value;
    const year = getYear - inputYear.value;

    totalDay.innerHTML = day;
    totalMonth.innerHTML = month;
    totalYear.innerHTML = year;
    // return 0;
  }
}

form.addEventListener("submit", handleSumbit);

const arr =[inputDay,inputMonth,inputYear];

for(let k = 0; k < arr.length;k++){
 arr[k].addEventListener('focus',() =>{
  
    arr[k].parentElement.classList.remove('error');
    arr[k].parentElement.classList.remove('valid-error');
    
  });
}