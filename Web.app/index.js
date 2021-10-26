"usestrict";

let btn_record_post = document.getElementById('record_post');
// let modal = document.getElementById('modal');
// let modal_overlay = document.getElementById('modal_overlay');


btn_record_post.addEventListener("click", function () {
    let modal = document.getElementById('modal');
    let modal_overlay = document.getElementById('modal_overlay');

    modal.style.display = "block";
    modal_overlay.style.display = "block";

});