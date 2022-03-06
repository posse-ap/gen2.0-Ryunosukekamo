"use strict";

let btn_record_post = document.getElementById('record_post');
let modal = document.getElementById('modal');
let modal_record_post = document.getElementById('modal_record_post');
let done = document.getElementById('done');
let modal_loader = document.getElementById('modal_loader');
let modal_overlay = document.getElementById('modal_overlay');
let btn_close = document.getElementById('btn_close');
let calendar = document.getElementById('input_day_for_study');//学習日欄


// ----------------------------------------------------------------------------------------------------------------------
// バツボタンを押した時にモーダルを閉じる処理

btn_close.addEventListener("click", function () {
    let modal_overlay = document.getElementById('modal_overlay');
    modal.style.display = "none";
    modal_overlay.style.display = "none";



});
// ローディング画面から離れる時のバツボタン
document.getElementById('btn_close two').addEventListener("click", function () {

    // modal.style.display = "none";
    modal_overlay.style.display = "none";
    document.getElementById('modal_loader').style.display = "none";
    // document.getElementById('done_recod_post').style.display='none';
});

// $("#btn_close two").on("click", function () {
//     var modal = $('.modal_loader');
//     var done_recod_post = $('#done_recod_post');
//     var btn_close_two = $('#btn_close two');


//         modal.fadeOut();
//         done_recod_post.fadeOut();
//         btn_close_two.fadeOut();

// });

// レスポンシブ用のモーダルを閉じるバツボタン
document.getElementById('btn_close_for_responsive').addEventListener("click", function () {
    document.getElementById('modal_for_responsive').style.display = "none";
    document.getElementById('modal_overlay').style.display = "none";
});


// レスポンシブ用のロード画面から離れるとき

document.getElementById('btn_close_three').addEventListener("click", function () {

    // modal.style.display = "none";
    modal_overlay.style.display = "none";
    document.getElementById('reponsive_modal_loader').style.display = "none";
    // document.getElementById('done_recod_post').classList.add("fadeout");

});


// ------------------------------------------------------------------------------------------------------------------
// overlayとモーダルの表示
btn_record_post.addEventListener("click", function () {
    let modal = document.getElementById('modal');
    let modal_overlay = document.getElementById('modal_overlay');
    modal.style.display = "block";
    modal_overlay.style.display = "block";

});

// レスポンシブ用のモーダルで、ボタンを押した時の処理
let btn_for_responsive = document.getElementById('btn_for_responsive');
btn_for_responsive.addEventListener("click", function () {
    let modal_for_responsive = document.getElementById('modal_for_responsive');
    let modal_overlay = document.getElementById('modal_overlay');
    modal_for_responsive.style.display = "block";
    modal_overlay.style.display = "block";

});


// ---------------------------------------------------------------------------------------------------------------
//ローディング画面の表示 
// modal_record_post.addEventListener("click", function () {
//     modal.style.display = "none";
//     modal_loader.style.display = "block";
//     // document.getElementById('modal_for_responsive').style.display="none";

// });


//モーダル用のローディング画面の表示
document.getElementById('responsive_modal_record_post').addEventListener("click", function () {
    document.getElementById('modal_for_responsive').style.display = "none";
    document.getElementById('reponsive_modal_loader').style.display = "block";


})

// ------------------------------------------------------------------------------------------------------------
// チェックした時の処理

let study_n = document.getElementById('study_n');
let icon_check_one = document.getElementById('icon_check_one');

study_n.addEventListener("click", function () {
    icon_check_one.classList.toggle('check');
    study_n.classList.toggle('add');
});


let study_d = document.getElementById('study_d');
let icon_check_two = document.getElementById('icon_check_two');

study_d.addEventListener("click", function () {
    icon_check_two.classList.toggle('check');
    study_d.classList.toggle('add');
});

let study_p = document.getElementById('study_p');
let icon_check_three = document.getElementById('icon_check_three');

study_p.addEventListener("click", function () {
    icon_check_three.classList.toggle('check');
    study_p.classList.toggle('add');
});

let study_HTML = document.getElementById('study_HTML');
let icon_check_four = document.getElementById('icon_check_four');

study_HTML.addEventListener("click", function () {
    icon_check_four.classList.toggle('check');
    study_HTML.classList.toggle('add');
});