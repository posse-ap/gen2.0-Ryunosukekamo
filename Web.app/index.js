"usestrict";

let btn_record_post = document.getElementById('record_post');
let modal = document.getElementById('modal');
let modal_record_post = document.getElementById('modal_record_post');
let done = document.getElementById('done');
let loader_wrap = document.getElementById('loader_wrap');
let modal_overlay = document.getElementById('modal_overlay');
let btn_close = document.getElementById('btn_close');
let input_day_for_study = document.getElementById('input_day_for_study');//学習日欄


// ----------------------------------------------------------------------------------------------------------------------
// バツボタンを押した時にモーダルを閉じる処理

btn_close.addEventListener("click", function () {

    modal.style.display = "none";
    modal_overlay.style.display = "none";



});

document.getElementById('btn_close two').addEventListener("click", function () {

    document.getElementById('done_recod_post').style.display = "none";
    modal.style.display="none";
    modal_overlay.style.display = "none";



});


// ------------------------------------------------------------------------------------------------------------------
// overlayの表示
btn_record_post.addEventListener("click", function () {
    let modal = document.getElementById('modal');
    let modal_overlay = document.getElementById('modal_overlay');
    modal.style.display = "block";
    modal_overlay.style.display = "block";

});

// ---------------------------------------------------------------------------------------------------------------
//ローディング画面の表示 
modal_record_post.addEventListener("click", function () {
    modal.style.display = "none";
    loader_wrap.style.display = "block";

});

// ------------------------------------------------------------------------------------------------------------
// チェックした時の処理

let study_n = document.getElementById('study_n');
let icon_check_one =document.getElementById('icon_check_one');

study_n.addEventListener("click", function(){
    icon_check_one.classList.toggle('check');
    study_n.classList.toggle('add');
});


let study_d = document.getElementById('study_d');
let icon_check_two =document.getElementById('icon_check_two');

study_d.addEventListener("click", function(){
    icon_check_two.classList.toggle('check');
    study_d.classList.toggle('add');
});

let study_p = document.getElementById('study_p');
let icon_check_three =document.getElementById('icon_check_three');

study_p.addEventListener("click", function(){
    icon_check_three.classList.toggle('check');
    study_p.classList.toggle('add');
});

let study_HTML = document.getElementById('study_HTML');
let icon_check_four =document.getElementById('icon_check_four');

study_HTML.addEventListener("click", function(){
    icon_check_four.classList.toggle('check');
    study_HTML.classList.toggle('add');
});


let study_CSS = document.getElementById('study_CSS');
let icon_check_five =document.getElementById('icon_check_five');

study_CSS.addEventListener("click", function(){
    icon_check_five.classList.toggle('check');
    study_CSS.classList.toggle('add');
});

let study_Js = document.getElementById('study_Js');
let icon_check_six =document.getElementById('icon_check_six');

study_Js.addEventListener("click", function(){
    icon_check_six.classList.toggle('check');
    study_Js.classList.toggle('add');
});

let study_PHP = document.getElementById('study_PHP');
let icon_check_seven =document.getElementById('icon_check_seven');

study_PHP.addEventListener("click", function(){
    icon_check_seven.classList.toggle('check');
    study_PHP.classList.toggle('add');
});

let study_Laravel = document.getElementById('study_Laravel');
let icon_check_eight =document.getElementById('icon_check_eight');

study_Laravel.addEventListener("click", function(){
    icon_check_eight.classList.toggle('check');
    study_Laravel.classList.toggle('add');
});

let study_SQL = document.getElementById('study_SQL');
let icon_check_nine =document.getElementById('icon_check_nine');

study_SQL.addEventListener("click", function(){
    icon_check_nine.classList.toggle('check');
    study_SQL.classList.toggle('add');
});

let study_SHELL = document.getElementById('study_SHELL');
let icon_check_ten =document.getElementById('icon_check_ten');

study_SHELL.addEventListener("click", function(){
    icon_check_ten.classList.toggle('check');
    study_SHELL.classList.toggle('add');
});

let study_others = document.getElementById('study_others');
let icon_check_eleven =document.getElementById('icon_check_eleven');

study_others.addEventListener("click", function(){
    icon_check_eleven.classList.toggle('check');
    study_others.classList.toggle('add');
});


// ------------------------------------------------------------------------------------------
// 記録・投稿完了画面

document.getElementById('day_for_study').addEventListener("click",function(){
    done_recod_post.style.display="block";
})

// ------------------------------------------------------------------------------

let Tweet = document.getElementById('Tweet');
let icon_check_twelve = document.getElementById('icon_check_twelve');
Tweet.addEventListener('click',function(){

    icon_check_twelve.classList.toggle('check');
    
});

// // ------------------------------------------------------------------
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
        height: 400,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE','#3CCEFE','#B29EF3','#6D46EC','#4A17EF','#3105C0'],
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
        height: 400,
        pieSliceTextStyle: {
            color: 'white',
        },
        legend: 'none',
        colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6']  //　色設定

    };

    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_two'));
    chart.draw(data, options);
}




// ------------------------------------------------------------------------------
// google.charts.load(
//     'current',
//      {'packages':['bar']}
// )
// .then(drawChart_three);

// // グラフの設定・描画を行う関数
// function drawChart_three() {
//     // グラフのデータを設定するインスタンスを作成
//     var data = new google.visualization.DataTable();
//     data.addColumn('string');
//     data.addColumn('number', '田中');
//     data.addColumn('number', '山根');

//     data.addRows([
//         ["2020-01", 14, 28],
//         ["2020-02", 16, 20],
//         ["2020-03", 31, 15]
//     ]);

//     // グラフのオプションを設定
//     var options = {
//         title: '縦棒グラフの例',
//         width:400,
//         height:300,
//         hAxis: {
//             title: '年-月',
//         },
//         vAxis: {
//             title: '売上',
//             format:'#万円',
//         },

//         color:'#3ACCFD',
//         legend: 'none',
//     };

//     // グラフを描画するためのインスタンスを作成
//     var chart = new google.charts.Bar(document.getElementById('Histo_gram'));
//     // グラフにデータ・オプションをセットして描画
//     chart.draw(data, google.charts.Bar.convertOptions(options));
// }

// google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(drawBasic);

// function drawBasic() {

//       var data = new google.visualization.DataTable();
//       data.addColumn('timeofday', 'Time of Day');
//       data.addColumn('number', 'Motivation Level');

//       data.addRows([
//         [{v: [8, 0, 0], f: '8 am'}, 1],
//         [{v: [9, 0, 0], f: '9 am'}, 2],
//         [{v: [10, 0, 0], f:'10 am'}, 3],
//         [{v: [11, 0, 0], f: '11 am'}, 4],
//         [{v: [12, 0, 0], f: '12 pm'}, 5],
//         [{v: [13, 0, 0], f: '1 pm'}, 6],
//         [{v: [14, 0, 0], f: '2 pm'}, 7],
//         [{v: [15, 0, 0], f: '3 pm'}, 8],
//         [{v: [16, 0, 0], f: '4 pm'}, 9],
//         [{v: [17, 0, 0], f: '5 pm'}, 10],
//       ]);

//       var options = {
//         title: 'Motivation Level Throughout the Day',
//         hAxis: {
//           title: 'Time of Day',
//           format: 'h:mm a',
//           viewWindow: {
//             min: [7, 30, 0],
//             max: [17, 30, 0]
//           },
//           width:400,
//           height:400,
//         },
//         vAxis: {
//           title: 'Rating (scale of 1-10)'
//         },
//         color:'white',
//         // legend: 'none',
//       };

//       var chart = new google.visualization.ColumnChart(
//         document.getElementById('Histo_gram'));

//       chart.draw(data, options);
//     }

  
  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
     //凡例のラベル
      labels: ['2', '4', '6', '8', '10','12','14','16','18','20','22','24','28','30'],
      datasets: [
        {
          label: '訪問者数', //データ項目のラベル
          data: [1,3,4,6,8], //グラフのデータ
          backgroundColor: "#3ACCFD",
          borderCapStyle: 'round',
        // lineCap:'round'
        // lineCap='round'
        }
        
      ]
    },
    options: {
       legend:{display:false,},
      title: {
        display: true,
        //グラフタイトル
        // text: 'Aサイト分析'
      },
      scales: {
        xAxes:[{
            gridLines:[display=false],
        }],
        yAxes: [{
                 
        gridLines:[display=false],
          ticks: {
            suggestedMax: 8, //最大値
            suggestedMin: 0, //最小値
            stepSize: 2, //縦ラベルの数値単位
            userCallback: function(tick) {
                return tick.toString() + 'h';
            }
            
            }
        }]
      },
    }
  });
