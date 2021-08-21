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



 //ループ

let contents = document.getElementById('contents'); //contentsのidを取得

//jsでは、img srcは''を使っているため、文字列でしかない。しかし、結局はHTMLに戻すから、それでOK.
//ちなみに、なぜ、''を使って文字列にしているのかというと、img srcが使えないから。前述したが、この無理やり文字列に変えるという手法ができるのも、最終的にはHTMLに戻すから。＊HTMLではimg srcが普通にできる。

let img1 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">';
let img2 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png" alt="かめいど">';
let img3 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png" alt="こうじまち">';
let img4 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png" alt="おなりもん">';
let img5 = '<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png" alt="とどろき">;';
let img6 ='<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png" alt="しゃくじい">';
let img7 ='<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png" alt="ぞうしき">';
let img8 ='<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png" alt="おかちまち">';
let img9 ='<img src="https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png" alt="ししぼね">';
let img10 ='<img src="https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png" alt="こぐれ">';
let images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10];

let QuestionNames1= ["たかなわ","かめいど","かゆまち","おかどもん","たたら","しゃくじい","ざっしょく","おかちまち","しこね","こしゃく"];

let QuestionNames2= ["こうわ","かめと","おかとまち","おなりもん","たたりき","せきこうい","ざっしき","ごしろちょう","ろっこつ","こぐれ"];

let QuestionNames3= ["たかわ","かめど","こうじまち","ごせいもん","とどろき","いじい","ぞうしき","みとちょう","ししぼね","こばく"];

let main = '';//mainに１０問全て共通の部分だけを代入する
for (let i = 0; i < 10; i++){
main +='<div class="parent">'
     +'<h2 class="name">'+ [i+1] +'.この地名はなんて読む?</h2>'//<h2></h2>は分けてはならない。『[i+1] +'.この地名はなんて読む?』はh2タグの中になければならないから。
     +images[i]  // 1. ちなみに、image[0]とすると、高輪という写真だけ（一番目）が表示される。今回は、この技術を応用した。
     +'<ul>'
     //メモ
     //2.  JSでは、代入先は文字列でないため、そのまま（''）などをつけなくて書ける。
     //3.  しかし、代入先が今回のように文字列の中に書かなければならない際は、文字列と区別するために  +[代入先]+  とする。
     // 1.2.3の知識を使うと下記のようになり、問題ごとに、違う選択肢を表示させることができる。
     +'<li id="button1" class="button_style1" onclick="Takanawa()">'+[QuestionNames1[i]]+'</li>'
     +'<li id="button2" class="button_style2" onclick="Kouwa()">'+[QuestionNames2[i]]+'</li>'
     +'<li id="button3" class="buttton_style3" onclick="Takawa()">'+[QuestionNames3[i]]+'</li>'
     +'<div id="result1" class="result1">'
     +'<span class="correct">正解！</span>'
     +'<p>'
     +'<span class="display">正解は「たかなわ」です！</span>'
     +'</p>'
     +'</div>'
     +'<div id="result2" class="result2">'
     +'<span class="wrong">不正解！</span>'
     +'<p>'
     +'<span class="display2">正解は「たかなわ」です！ </span>'
     +'</p>'
     +'</div>'
     +'</ul>'
     +'</div>'

     contents.innerHTML = main;
};

































    
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

  



// // let main = '';//mainに１０問全て共通の部分だけを代入する // let i = 0の0は１回目の処理とも問題番号１とも捉えられる。
// let i = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < 10; i++){
// // main +='<div class="parent">'
//      +'<h2 class="name"> document.write(i).この地名はなんて読む?</h2>'
//     //  +'<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">'
//     //  +'<ul>'
//     //  +'<li id="button1" class="button_style1" onclick="Takanawa()">たかなわ</li>'
//     //  +'<li id="button2" class="button_style2" onclick="Kouwa()">こうわ</li>'
//     //  +'<li id="button3" class="buttton_style3" onclick="Takawa()">たかわ</li>'
//     //  +'<div id="result1" class="result1">'
//     //  +'<span class="correct">正解！</span>'
//     //  +'<p><span class="display">正解は「たかなわ」です！</span>'
//     //  +'<p>'
//     //  +'</div>'
//     //  +'<div id="result2" class="result2">'
//     //  +'<span class="wrong">不正解！</span>'
//     //  +'<p><span class="display2">正解は「たかなわ」です！ </span></p>'
//     //  +'</div>'
//     //  +'</ul>'
//     //  +'</div>'

// contents.innerHtml = main;
// };


//    let main = '';//mainに10問全て共通の部分だけを代入する // let i = 0の0は１回目の処理とも問題番号１とも捉えられる。
// for (let i = 0; i < 10; i++){
//     main += '<div class="parent">'
//          +'<h2 class="name">.この地名はなんて読む?</h2>'
//          +'<img src="https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png" alt="たかなわ">'
//          +'<ul>'
//          +'<li id="button1" class="button_style1" onclick="Takanawa()">たかなわ</li>'
//          +'<li id="button2" class="button_style2" onclick="Kouwa()">こうわ</li>'
//          +'<li id="button3" class="buttton_style3" onclick="Takawa()">たかわ</li>'
//          +'<div id="result1" class="result1">'
//          +'<span class="correct">正解！</span>'
//          +'<p><span class="display">正解は「たかなわ」です！</span>'
//          +'</div>'
//          +'<div id="result2" class="result2">'
//          +'<span class="wrong">不正解！</span>'
//          +'<p><span class="display2">正解は「たかなわ」です！ </span></p>'
//          +'</div>'
//          +'</ul>'
//          +'</div>'
    
//         h2.textContent = i;
    
//     contents.innerHtml = main;
//     };