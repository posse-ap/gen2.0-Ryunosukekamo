"use strict";
 
let result1 = document.getElementById('result1')

document.getElementById("button1").onclick = function() {
    this.classList.toggle("blue");
    document.getElementById("text").style.color = "white";
    result1.insertAdjacentHTML('afterend','<li id="result2">正解!</li>');
    
   
  }
    


  





