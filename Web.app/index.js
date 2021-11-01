"usestrict";

let btn_record_post = document.getElementById('record_post');
let modal = document.getElementById('modal');
let modal_record_post = document.getElementById('modal_record_post');
let done = document.getElementById('done');
// let only_freamework = document.getElementById('only_freamework');
let loader_wrap = document.getElementById('loader_wrap');
let modal_overlay = document.getElementById('modal_overlay');
let btn_close = document.getElementById('btn_close');
// let clear = document.getElementsByClassName('clear_btn'); cursor pointerをjsにつけようと思ったが、つけれんかった。既にcssで書いているものは、jsで変更できない感じ？
let input_day_for_study = document.getElementById('input_day_for_study');//学習日欄
let calendar = document.getElementById('calendar');

btn_record_post.addEventListener("click", function () {
    modal.style.display = "block";
    modal_overlay.style.display = "block";

});


// バツボタンを押した時にモーダルを閉じる処理

btn_close.addEventListener("click", function () {

    modal.style.display = "none";
    modal_overlay.style.display = "none";



});


// カレンダー

input_day_for_study.addEventListener("click", function () {

    modal.style.display = "none";
    calendar.style.display = "block";

    // let freamework = document.getElementById('freamework');
    // let new_div = document.createElement('div');

    // freamework.appendChild(new_div);
    // document.getElementById('modal').innerHTML = new_div

    // new_div.innerHTML = calendar

    // only_freamework.style.display = "block"; 

});



let A = document.getElementById('A');
let E = document.getElementById('E');
let C = document.getElementById('C');
let D = document.getElementsByClassName('fas fa-check-circle');
const F = getComputedStyle(document.querySelector("#E"),"::before").content;

// function ryuがあるため、他の✓の色がつかなくなった。ryuはspanタグについてるから・
// function ryu() {
   


   
 

// };



$("#E, .fa-check-circle").on("click", function() {
    $(this).toggleClass('fa-check-circle2');
    A.classList.remove('O');
    A.classList.toggle('AB');

});







modal_record_post.addEventListener("click", function () {
    modal.style.display = "none";
    loader_wrap.style.display = "block";

});












// ------------------------------------------------------------------

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['JavaScript', 50.6],
        ['HTML', 10],
        ['SHEL', 10],
        ['情報システム基礎知識 （その他）', 10],
        ['CSS', 10],
        ['Laravel', 10],
        ['PHP', 10],
        ['SQL', 10],



    ]);

    var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}
