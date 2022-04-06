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

function study(kamo){
    document.getElementById(kamo.name).classList.toggle('check');
}
// ------------------------------------------------------------------------------------------
// 記録・投稿完了画面

// document.getElementById('day_for_study').addEventListener("click",function(){
//     done_recod_post.style.display="block";
// })

// ------------------------------------------------------------------------------
// ツイートする際の前の✓の表示について

// let Tweet = document.getElementById('Tweet');
let icon_check_twelve = document.getElementById('icon_check_twelve');
icon_check_twelve.addEventListener('click', function () {

    icon_check_twelve.classList.toggle('check');

});

let Tweet_in_reponsive = document.getElementById('Tweet_in_reponsive');
let reponsive_icon_check_twelve = document.getElementById('reponsive_icon_check_twelve');
Tweet_in_reponsive.addEventListener('click', function () {

    reponsive_icon_check_twelve.classList.toggle('check');

});


// ------------------------------------------------------------------------------------
// 3秒後にtwitter画面にとび、入力ホームの情報をtwitterに共有


$("#tweet_checkbox").on("click", function () {

    $("#modal_record_post").on("click", function () {
        var modal_loader = $('.modal_loader');
        var modal = $('.modal');
        var done_recod_post = $('.done_recod_post');

        // モーダルの非表示とローダ時のモーダルの表示
        modal.css('display', 'none');
        modal_loader.css('display', 'block');

        // くるくる回るやつ
        var loader = $('.loader_wrap');
        loader.toggle();

        // 記録投稿完了
        done_recod_post.css('display', 'none');

        // modal_loaderというローダーのためのモーダルが出た時点でloderもdone_rec..も表示されているから、display noneで。
        setTimeout(function () {
            loader.toggle();
            done_recod_post.toggle();
            var left = Math.round(window.screen.width / 2 - 275);
            var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
            window.open(
                "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_text").value),
                null,
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
        }, 3000);

    });
});

// 原理
// CSSでloader_wrapと記録投稿と完了を非表示にしておく。→jsでボタンが押されたら、ローダーをtoggleで表示させる。→settimeoutの箇所でまた、toggleを使い表示されているローダーを非表示に。
//settimeoutの箇所は、3秒後の処理をかくものである。つまり、ボタンをおしてから３秒後の処理のこと。換言すると、ボタンを押す＝ローダー回る、ローダーが回り始めてから３秒後を意味する。
//→記録と投稿完了をtoggleで表示させる。また、twitterのやつもいれる。
//重要！！！！ なぜ、settimeout前に、記録投稿完了をわざわざ非常時にするのか？ これは、２回目以降、１回目で表示させたものが3秒前に残ってしまっているから。時系列で話す。
//最初ない→１回目の表示→モーダル消える＝非表示→２回目表示される！！→この時にtoggleを浸かってはいけない。安易に使うと、２回目以降の３秒前＝ロード画面中に表示されてしまう。だから、3秒前は直接.css('display','none')

// ３秒後にtwitter画面にとび、入力ホームの情報をtwitterに共有（レスポンシブ用）

$("#Tweet_in_reponsive").on("click", function () {

    $("#responsive_modal_record_post").on("click", function () {
        var loader = $('.loader_wrap');
        var done_recod_post_two = $('.done_recod_post_two');
        var modal_for_responsive = $('.modal_for_responsive');
        var responsive_modal_loader = $('.responsive_modal_loader');

        modal_for_responsive.css('display', 'none');
        // responsive_modal_loader.toggle();
        responsive_modal_loader.css('display', 'block');
        loader.toggle();

        done_recod_post_two.css('display', 'none');

        setTimeout(function () {
            loader.toggle();
            done_recod_post_two.toggle();
            var left = Math.round(window.screen.width / 2 - 275);
            var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
            window.open(
                "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("twitter_text").value),
                null,
                "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
        }, 3000);
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
        ['SHELL', 10],
        ['情報システム基礎知識 （その他）', 10],
        ['CSS', 10],
        ['Laravel', 10],
        ['PHP', 10],
        ['SQL', 10],



    ]);

    var options = {
        pieHole: 0.5,
        // width: 280,
        // height: 300,
        width: '100%',
        height: '190',
        chartArea: { width: '100%', height: '100%', top: 0 },

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
        // width: 280,
        // height: 300,
        width: '100%',
        height: '190',
        chartArea: { width: '100%', height: '100%', top: 0 },
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
        // width: '100%',
        // // height: 200,

        width: '100%',
        height: '115',
        chartArea: { width: '100%', height: '100%', top: 0 },
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
        // width: '100%',
        // // height: 200,
        width: '100%',
        height: '115',
        chartArea: { width: '100%', height: '100%', top: 0 },
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
                data: [1, 3, 4, 6, 3], //グラフのデータ
                backgroundColor: "#3ACCFD",
                borderColor: "#3ACCFD",
                borderWidth: 1,
                borderRadius: 20,
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