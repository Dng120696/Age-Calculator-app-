'use strict';

const form = document.getElementById('form');
const input = document.querySelectorAll('input');


const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');

const totalDay = document.querySelector('.total-days');
const totalMonth = document.querySelector('.total-months');
const totalYear = document.querySelector('.total-years');


const errorMessage = (inputs,val1,val2) =>{
  if(inputs.value < val1 || inputs.value > val2) {

    inputs.parentElement.classList.add('invalid-error');
    if(inputs.parentElement.contains('invalid-error')){
      return 0;
    }
    
  }else{
    inputs.parentElement.classList.remove('invalid-error');
  }
}


function validate() {

  let validator = true;

  for(const inputs of input) {

    if (!inputs.value) {
      inputs.parentElement.classList.add('error');
          if (inputs.id === 'number1' || inputs.id === 'number2' || inputs.id === 'number3'){
            if(!inputs.value) {
              inputs.parentElement.classList.remove('invalid-error');    
            } 
          }     
          validator = false;
        }
          else {
                if (inputs.id === 'number1'){
                 errorMessage(inputs,1,31);
                }
                if (inputs.id === 'number2'){
                  errorMessage(inputs,1,12)
                }         
                if (inputs.id === 'number3'){
                  errorMessage(inputs,1,getYear)
                }  
                inputs.parentElement.classList.remove('error');
                  validator = true;             
              }           
            }    
  return validator;
};

const date = new Date();
let getYear = date.getFullYear();//2023
let getMonth = date.getMonth() + 1;//4
let getDay = date.getDate();//9

const months = [31,28,30,31,30,31,30,31,30,31,30,31];

const handleSumbit = (e) => {
  e.preventDefault();
  if (validate()) {//if true
    if (inputDay.value > getDay) {//12 > 9 = true
      getDay = getDay + months[getMonth - 1]; // 9 + 31 = 40
      getMonth = getMonth - 1;//3
    }
    if (inputMonth.value > getMonth) {// 12 > 3 = true
      getMonth = getMonth + 12; //3+12 = 15
      getYear = getYear - 1;//2023 - 1 = 2022   
    }

    const day = getDay - inputDay.value;//40 - 12 = 28
    const month = getMonth - inputMonth.value;// 15 - 12 = 3
    const year = getYear - inputYear.value; //2022 - 1996 = 26

    totalDay.innerHTML = day; //28
    totalMonth.innerHTML = month;//3
    totalYear.innerHTML = year;// 26

  }
}

form.addEventListener("submit", handleSumbit);

const arr =[inputDay,inputMonth,inputYear];

for(const arrs of arr){
 arrs.addEventListener('focus',() =>{
  
    arrs.parentElement.classList.remove('error');
    arrs.parentElement.classList.remove('valid-error');
    
  });
}