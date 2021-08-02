"use strict";
 
let result1= document.getElementById("result1")
let button1 = document.getElementById("button1");

button1.onclick = function() {
    this.classList.toggle("blue");
    button1.classList.add('white');  
    result1.insertAdjacentHTML('afterend','<li id="result2">正解! <p class= display>正解は「たかなわ」です！</p></li>');
    let result2 = document.getElementById("result2");
    result2.classList.add('underline'); 
    result2.classList.add('appearance');
    let display = document.getElementsByClassName("display")
    display.classList.add('appearance1');



  }
    


  



