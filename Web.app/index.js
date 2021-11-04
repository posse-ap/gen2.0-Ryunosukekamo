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

// input_day_for_study.addEventListener("click", function () {

//     modal.style.display = "none";
//     calendar.style.display = "block";

//     // let freamework = document.getElementById('freamework');
//     // let new_div = document.createElement('div');

//     // freamework.appendChild(new_div);
//     // document.getElementById('modal').innerHTML = new_div

//     // new_div.innerHTML = calendar

//     // only_freamework.style.display = "block"; 

// });



let study_n = document.getElementById('study_n');
let study_d = document.getElementById('study_d');
let icon_check_one = document.getElementById('icon_check_one');
let icon_check_two = document.getElementById('icon_check_two');
// const F = getComputedStyle(document.querySelector("#icon_check_one"),"::before").content;
let A = study_n.getElementsByClassName('fas fa-check-circle');



icon_check_one.addEventListener("click", function () {
    // $("icon_check_one").css('color','')
    // icon_check_one.classList.remove('study_n');
    // icon_check_one.classList.toggle('change_icon');

    A.style.display="none";
    document.getElementById('change_icon').style.display="block";

    // icon_check_one.classList.add('change_icon');
    // icon_check_one.classList.toggle('change_icon');
    // study_n.classList.toggle('add_new_property');




});



// $("icon_check_one, .fa-check-circle").on("click", function() {
//     $(this).toggleClass('fa-check-circle2');
//     // study_n.classList.remove('check_same_property');
//     // study_n.classList.toggle('add_new_property');

// });

// $("icon_check_two, .fa-check-circle").on("click", function() {
//     $(this).toggleClass('fa-check-circle2');
//     // study_d.classList.remove('check_same_property');
//     // study_d.classList.toggle('add_new_property');

// });






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
