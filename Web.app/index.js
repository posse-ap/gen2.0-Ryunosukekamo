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
    modal_overlay.style.display="none";



});
// ローディング画面から離れる時のバツボタン
document.getElementById('btn_close two').addEventListener("click", function () {

    modal.style.display = "none";
    modal_overlay.style.display = "none";
    document.getElementById('modal_loader').style.display = "none";
    document.getElementById('done_recod_post').classList.add("fadeout");

});

// レスポンシブ用のモーダルを閉じるバツボタン
document.getElementById('btn_close_for_responsive').addEventListener("click",function(){
    document.getElementById('modal_for_responsive').style.display="none";
    document.getElementById('modal_overlay').style.display="none";
});


// レスポンシブ用のロード画面から離れるとき

document.getElementById('btn_close three').addEventListener("click", function () {

    modal.style.display = "none";
    modal_overlay.style.display = "none";
    document.getElementById('reponsive_modal_loader').style.display = "none";
    document.getElementById('done_recod_post').classList.add("fadeout");

});


// ------------------------------------------------------------------------------------------------------------------
// overlayの表示
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
modal_record_post.addEventListener("click", function () {
    modal.style.display = "none";
    modal_loader.style.display = "block";
    // document.getElementById('modal_for_responsive').style.display="none";

});


//モーダル用のローディング画面の表示
document.getElementById('responsive_modal_record_post').addEventListener("click",function(){
    document.getElementById('modal_for_responsive').style.display="none";
    document.getElementById('reponsive_modal_loader').style.display="block";    


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


let study_CSS = document.getElementById('study_CSS');
let icon_check_five = document.getElementById('icon_check_five');

study_CSS.addEventListener("click", function () {
    icon_check_five.classList.toggle('check');
    study_CSS.classList.toggle('add');
});

let study_Js = document.getElementById('study_Js');
let icon_check_six = document.getElementById('icon_check_six');

study_Js.addEventListener("click", function () {
    icon_check_six.classList.toggle('check');
    study_Js.classList.toggle('add');
});

let study_PHP = document.getElementById('study_PHP');
let icon_check_seven = document.getElementById('icon_check_seven');

study_PHP.addEventListener("click", function () {
    icon_check_seven.classList.toggle('check');
    study_PHP.classList.toggle('add');
});

let study_Laravel = document.getElementById('study_Laravel');
let icon_check_eight = document.getElementById('icon_check_eight');

study_Laravel.addEventListener("click", function () {
    icon_check_eight.classList.toggle('check');
    study_Laravel.classList.toggle('add');
});

let study_SQL = document.getElementById('study_SQL');
let icon_check_nine = document.getElementById('icon_check_nine');

study_SQL.addEventListener("click", function () {
    icon_check_nine.classList.toggle('check');
    study_SQL.classList.toggle('add');
});

let study_SHELL = document.getElementById('study_SHELL');
let icon_check_ten = document.getElementById('icon_check_ten');

study_SHELL.addEventListener("click", function () {
    icon_check_ten.classList.toggle('check');
    study_SHELL.classList.toggle('add');
});

let study_others = document.getElementById('study_others');
let icon_check_eleven = document.getElementById('icon_check_eleven');

study_others.addEventListener("click", function () {
    icon_check_eleven.classList.toggle('check');
    study_others.classList.toggle('add');
});
// --------------------------------------------------------------------------------------------
// チェックしたときの処理（レスポンシブ用）
let reponsive_study_n = document.getElementById('reponsive_study_n');
let responsive_icon_check_one = document.getElementById('responsive_icon_check_one');

reponsive_study_n.addEventListener("click", function () {
    responsive_icon_check_one.classList.toggle('check');
    reponsive_study_n.classList.toggle('add');
});


let reponsive_study_d = document.getElementById('reponsive_study_d');
let reponsive_icon_check_two = document.getElementById('reponsive_icon_check_two');

reponsive_study_d.addEventListener("click", function () {
    reponsive_icon_check_two.classList.toggle('check');
    reponsive_study_d.classList.toggle('add');
});

let reponsive_study_p = document.getElementById('reponsive_study_p');
let reponsive_icon_check_three = document.getElementById('reponsive_icon_check_three');

reponsive_study_p.addEventListener("click", function () {
    reponsive_icon_check_three.classList.toggle('check');
    reponsive_study_p.classList.toggle('add');
});

let reponsive_study_HTML = document.getElementById('reponsive_study_HTML');
let reponsive_icon_check_four = document.getElementById('reponsive_icon_check_four');

reponsive_study_HTML.addEventListener("click", function () {
    reponsive_icon_check_four.classList.toggle('check');
    reponsive_study_HTML.classList.toggle('add');
});


let reponsive_study_CSS = document.getElementById('reponsive_study_CSS');
let reponsive_icon_check_five = document.getElementById('reponsive_icon_check_five');

reponsive_study_CSS.addEventListener("click", function () {
    reponsive_icon_check_five.classList.toggle('check');
    reponsive_study_CSS.classList.toggle('add');
});

let reponsive_study_Js = document.getElementById('reponsive_study_Js');
let reponsive_icon_check_six = document.getElementById('reponsive_icon_check_six');

reponsive_study_Js.addEventListener("click", function () {
    reponsive_icon_check_six.classList.toggle('check');
    reponsive_study_Js.classList.toggle('add');
});

let reponsive_study_PHP = document.getElementById('reponsive_study_PHP');
let reponsive_icon_check_seven = document.getElementById('reponsive_icon_check_seven');

reponsive_study_PHP.addEventListener("click", function () {
    reponsive_icon_check_seven.classList.toggle('check');
    reponsive_study_PHP.classList.toggle('add');
});

let reponsive_study_Laravel = document.getElementById('reponsive_study_Laravel');
let reponsive_icon_check_eight = document.getElementById('reponsive_icon_check_eight');

reponsive_study_Laravel.addEventListener("click", function () {
    reponsive_icon_check_eight.classList.toggle('check');
    reponsive_study_Laravel.classList.toggle('add');
});

let reponsive_study_SQL = document.getElementById('reponsive_study_SQL');
let reponsive_icon_check_nine = document.getElementById('reponsive_icon_check_nine');

reponsive_study_SQL.addEventListener("click", function () {
    reponsive_icon_check_nine.classList.toggle('check');
    reponsive_study_SQL.classList.toggle('add');
});

let reponsive_study_SHELL = document.getElementById('reponsive_study_SHELL');
let reponsive_icon_check_ten = document.getElementById('reponsive_icon_check_ten');

reponsive_study_SHELL.addEventListener("click", function () {
    reponsive_icon_check_ten.classList.toggle('check');
    reponsive_study_SHELL.classList.toggle('add');
});

let reponsive_study_others = document.getElementById('reponsive_study_others');
let reponsive_icon_check_eleven = document.getElementById('reponsive_icon_check_eleven');

reponsive_study_others.addEventListener("click", function () {
    reponsive_icon_check_eleven.classList.toggle('check');
    reponsive_study_others.classList.toggle('add');
});


// ------------------------------------------------------------------------------------------
// 記録・投稿完了画面

// document.getElementById('day_for_study').addEventListener("click",function(){
//     done_recod_post.style.display="block";
// })

// ------------------------------------------------------------------------------
// ツイートする際の処理

let Tweet = document.getElementById('Tweet');
let icon_check_twelve = document.getElementById('icon_check_twelve');
Tweet.addEventListener('click', function () {

    icon_check_twelve.classList.toggle('check');

});

let Tweet_in_reponsive = document.getElementById('Tweet_in_reponsive');
let reponsive_icon_check_twelve = document.getElementById('reponsive_icon_check_twelve');
Tweet_in_reponsive.addEventListener('click', function () {

    reponsive_icon_check_twelve.classList.toggle('check');

});


// ------------------------------------------------------------------------------------
// 3秒後にtwitter画面にとび、入力ホームの情報をtwitterに共有

$("#Tweet").on("click", function () {

    $("#modal_record_post").on("click", function () {
        var loader = $('.loader_wrap');
        var done_recod_post = $('#done_recod_post');
        var btn_close_two = $('#btn_close two');
        // var modal_loader = $('#modal_loader');

        setTimeout(function () {
            loader.fadeOut();
            done_recod_post.fadeIn();
            btn_close_two.fadeIn();
        }, 3000);
    });

    document.getElementById("modal_record_post").addEventListener('click', function (event) {
        event.preventDefault();
        var left = Math.round(window.screen.width / 2 - 275);
        var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
        window.open(
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_text").value),
            null,
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
    });

});


// ３秒後にtwitter画面にとび、入力ホームの情報をtwitterに共有（レスポンシブ用）

$("#Tweet_in_reponsive").on("click", function () {

    $("#responsive_modal_record_post").on("click", function () {
        var loader = $('.loader_wrap');
        // var loader = $('.loader_wrap');
        var done_recod_post = $('#done_recod_post');
        var btn_close_three = $('btn_close three');
        // var modal_loader = $('#modal_loader');

        setTimeout(function () {
            loader.fadeOut();
            done_recod_post.fadeIn();
            btn_close_three.fadeIn();
        }, 3000);
    });

    document.getElementById("responsive_modal_record_post").addEventListener('click', function (event) {
        event.preventDefault();
        var left = Math.round(window.screen.width / 2 - 275);
        var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
        window.open(
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_text").value),
            null,
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
    });

});


// ----------------------------------------------------------------------------------------------------------------------

// ３秒後にアイコンがでる。
// $('#Tweet').on("click", function () {
//     $('#modal_record_post')[0].addEventListener('click', function () {
//         setTimeout(function () {
//             loader.fadeOut();
//             done_recod_post.fadeIn();
//             btn_close.fadeIn();
//         }, 3000);

//     });
//     
// });


// -----------------------------------------------------------------------------------------------------
// twitter画面にとび、入力ホームの情報をtwitterに共有

// document.getElementById("modal_record_post").addEventListener('click', function (event) {
//     event.preventDefault();
//     var left = Math.round(window.screen.width / 2 - 275);
//     var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
//     window.open(
//         "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_text").value),
//         null,
//         "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
// });

// // -----------------------------------------------------------------------------------
// ドーナツ型の円グラフ

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
        width: 280,
        height: 300,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],
    };


    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_one'));
    chart.draw(data, options);
}


// function名＝drawChart...を変える必要がある。

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart_two);

function drawChart_two() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['ドットインストール', 10],
        ['N予備', 10],
        ['Posse 課題', 10],

    ]);

    var options = {
        pieHole: 0.5,
        width: 280,
        height: 300,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6']  //　色設定

    };

    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_two'));
    chart.draw(data, options);
}

// 下部でwidthなどをかえると、div dir=itrが変化するのだが、ちょうどよいサイズにすると、margin的にはみ出てしまい、20pxでサイドをそろえることができない。

// レスポンシブ用のドーナツ型グラフ
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart_three);

function drawChart_three() {

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
        width: '100%',
        // height: 200,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],
    };


    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_four'));
    chart.draw(data, options);
}


// function名＝drawChart...を変える必要がある。

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart_four);

function drawChart_four() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['ドットインストール', 10],
        ['N予備', 10],
        ['Posse 課題', 10],

    ]);

    var options = {
        pieHole: 0.5,
        width: '100%',
        // height: 200,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6']  //　色設定

    };

    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_three'));
    chart.draw(data, options);
}



// ------------------------------------------------------------------------------
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //凡例のラベル
        labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '28', '30'],
        datasets: [
            {
                label: '訪問者数', //データ項目のラベル
                data: [1, 3, 4, 6, 8], //グラフのデータ
                backgroundColor: "#3ACCFD",
                borderColor:"#3ACCFD",
                borderWidth:1,
                borderRadius:20,
                // borderSkipped:false,
            }

        ]
    },
    options: {
        legend: { display: false, },
        title: {
            display: true,
            //グラフタイトル
            // text: 'Aサイト分析'
        },
        scales: {
            xAxes: [{
                // gridLines: [display = false],
                gridLines: {
                    display: false
                  }
            }],
            yAxes: [{

                // gridLines: [display = false],
                gridLines: {
                    display: false
                  },
                
                ticks: {
                    suggestedMax: 8, //最大値
                    suggestedMin: 0, //最小値
                    stepSize: 2, //縦ラベルの数値単位
                    userCallback: function (tick) {
                        return tick.toString() + 'h';
                    }

                }
            }]
        },
    }
});

