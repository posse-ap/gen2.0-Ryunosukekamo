"use strict";
 
// let result1= document.getElementById("result1");
// let button1 = document.getElementById("button1");

// button1.onclick = function() {
//     this.classList.toggle("blue");
//     button1.classList.add('white');  
    // result1.insertAdjacentHTML('afterend','<ul id="result2">正解!<p></p></ul>');
    // let result2 = document.getElementById("result2");
    // result2.classList.add('underline'); 
    // result2.classList.add('appearance');
    // }


   
    let button1 = document.getElementById("button1");
    let button2 = document.getElementById("button2");
    let button3 = document.getElementById("button3");
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");

    button1.onclick = function() {
        document.getElementById("button1").style.backgroundColor = "#287DFF";//「たかなわ」をクリックすると、「たかなわ」の背景色が青に変化する
        result1.style.display ="block"; //「たかなわ」をクリックすると、result1が表示される
        button1.style.color = "#FFFFFF";//「たかなわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button2.style.pointerEvents= "none";//「たかなわ」をクリックすると、「こうわ」が押せなくなる
        button3.style.pointerEvents= "none";//「たかなわ」をクリックすると、「たかわ」が押せなくなる
           }

    button2.onclick = function(){
        document.getElementById("button2").style.backgroundColor = "#FF5128";//「こうわ」をクリックすると、「こうわ」の背景色が赤に変化する
        result2.style.display ="block";//「こうわ」をクリックすると、result2が表示される
        button1.style.color = "#FFFFFF";//「こうわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button2.style.color = "#FFFFFF";//「こうわ」をクリックすると、「こうわ」の文字の色が白に変化する
        button1.style.backgroundColor = "#287DFF";//「こうわ」をクリックすると、「たかなわ」の背景色が青に変化する
        button1.style.pointerEvents= "none";//「こうわ」をクリックすると、「たかなわ」が押せなくなる
        button3.style.pointerEvents= "none";//「こうわ」をクリックすると、「たかわ」が押せなくなる
            }
     
    button3.onclick = function(){
        document.getElementById("button3").style.backgroundColor = "#FF5128";//「たかわ」をクリックすると、「たかわ」の背景色が赤に変化する
        result2.style.display ="block";//「たかわ」をクリックすると、result2が表示される
        button1.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかなわ」の文字の色が白に変化する
        button3.style.color = "#FFFFFF";//「たかわ」をクリックすると、「たかわ」の文字の色が白に変化する
        button1.style.backgroundColor = "#287DFF";//「たかわ」をクリックすると、「たかなわ」の背景色が青に変化する
        button1.style.pointerEvents= "none";//「たかわ」をクリックすると、「たかなわ」が押せなくなる
        button2.style.pointerEvents= "none";//「たかわ」をクリックすると、「こうわ」が押せなくなる
    
    }

  



