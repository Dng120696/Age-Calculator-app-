'use strict';

const form = document.getElementById('form');
const input = document.querySelectorAll('input');


const inputDay = document.querySelector('.input-day');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');

const totalDay = document.querySelector('.total-days');
const totalMonth = document.querySelector('.total-months');
const totalYear = document.querySelector('.total-years');






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


const date = new Date();
let getYear = date.getFullYear();//2023
let getMonth = date.getMonth() + 1;//4
let getDay = date.getDate();//9


const months = [31,28,30,31,30,31,30,31,30,31,30,31];//12 length

const handleSumbit = (e) => {
  e.preventDefault();
  if (validate()) {//if true
    if (inputDay.value > getDay) {//12 > 9 = true
      getDay = getDay + months[getMonth - 1];//40
      getMonth = getMonth - 1;//3

    }
    if (inputMonth.value > getMonth) {//2 > 4 = false
      getMonth = getMonth + 12; //15
      getYear = getYear - 1;//2023 - 1 = 2022

     
    
    }

    const day = getDay - inputDay.value;//40 - 12 = 28
    const month = getMonth - inputMonth.value;// 3 - 2 = 1
    const year = getYear - inputYear.value; //2023 - 1996 = 27

    totalDay.innerHTML = day; //28
    totalMonth.innerHTML = month;//3
    totalYear.innerHTML = year;// 26

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