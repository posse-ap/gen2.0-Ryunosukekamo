"usestrict";

let btn_record_post = document.getElementById('record_post');
let modal = document.getElementById('modal');
let modal_record_post = document.getElementById('modal_record_post');
let done = document.getElementById('done');
// let only_freamework = document.getElementById('only_freamework');
let loader_wrap = document.getElementById('loader_wrap');
let modal_overlay = document.getElementById('modal_overlay'); 
let clear_btn = document.getElementById('clear_btn');
// let clear = document.getElementsByClassName('clear_btn'); cursor pointerをjsにつけようと思ったが、つけれんかった。既にcssで書いているものは、jsで変更できない感じ？
let input_day_for_study= document.getElementById('input_day_for_study');//学習日欄
let calendar = document.getElementById('calendar');

btn_record_post.addEventListener("click", function () {
    modal.style.display = "block";
    modal_overlay.style.display = "block";

});


// バツボタンを押した時にモーダルを閉じる処理

clear_btn.addEventListener("click",function(){

    modal.style.display = "none";
    modal_overlay.style.display = "none";
    

    
});


// カレンダー

input_day_for_study.addEventListener("click",function(){
    
    modal.style.display = "none";
    calendar.style.display = "block";

    // let freamework = document.getElementById('freamework');
    // let new_div = document.createElement('div');
    
    // freamework.appendChild(new_div);
    // document.getElementById('modal').innerHTML = new_div
    
    // new_div.innerHTML = calendar
    
    // only_freamework.style.display = "block"; 

});





modal_record_post.addEventListener("click", function () {
    modal.style.display = "none";
    loader_wrap.style.display = "block";

});

