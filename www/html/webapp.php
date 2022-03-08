<?php
include "db-connect.php";
?>

<?php

$time0=$dbh->prepare("SELECT sum(hours) from time where date=1 and month=1 and year=1");
$time1=$dbh->prepare("SELECT sum(hours) from time where month=1 and year=1");
$time2=$dbh->prepare("SELECT sum(hours) from time");
$time3=$dbh->prepare("SELECT hours from time where date=28 and month=1 and year=1");
$sum1 = $dbh->prepare("SELECT sum(HTML),sum(JavaScript),sum(CSS),sum(PHP),sum(ooo),sum(Laravel),sum(SHELL),sum(others) from time_language");
for($i=0; $i<4; $i++){
	${"time". $i}->execute();
	${"data".$i}=${"time". $i}->fetchAll();

}

for($i=1; $i<2; $i++){
	${"sum" .$i}->execute();
	${"each_total_language"}=${"sum" .$i}->fetch();
}



print_r('<pre>');
print_r($each_total_language);
print_r('</pre>');



?>


<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.5.1.min.js"
		integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="index.css">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
	<link rel="stylesheet" href="index_style.css">
	<title>Web.app</title>

</head>

<html>

<body>
	<!-- ヘッダー -->
	<header>

		<div id="Logo" class="Logo">

			<img src="https://posse.anti-pattern.co.jp/img/posseLogo.png" alt="" class="logo_image">

			<p>4th week</p>


		</div>


		<div id="record_post" class="record_post">
			<p>記録・投稿</p>
		</div>


	</header>


	<!-- モーダル -->

	<div id="modal" class="modal">

		<!-- バツボタン -->
		<span id="btn_close" class="btn_close"></span>

		<div id="modal_content" class="modal_content">


			<div id="modal_contents_left_side" class="modal_contents_left_side">



				<div id="day_for_study" class="day_for_study">
					<span>学習日</span>
					<input type="date" id="calendar" class="calendar">
				</div>


				<div id="contents_study" class="contents_study">
					<span>学習コンテンツ（複数選択可）</span>
					<div>
						<span id="study_n" class="study_n"><i id="icon_check_one" class="fas fa-check-circle"></i>
							N予備校</span>

						<span id="study_d" class="study_d"><i id="icon_check_two"
								class="fas fa-check-circle"></i>ドットインストール</span>
						<br>

					    <span id="study_p" class="study_p"><i id="icon_check_three"
									class="fas fa-check-circle"></i>POSSE課題</span>
					</div>

					

				</div>

				<div id="languages_study" class="languages_study">
					<span>学習言語（複数選択可）</span>
					<div>
						<span id="study_HTML"><i id="icon_check_four" class="fas fa-check-circle"></i>HTML</span>
						<span id="study_CSS"><i id="icon_check_five" class="fas fa-check-circle"></i>CSS</span>
						<span id="study_Js"><i id="icon_check_six" class="fas fa-check-circle"></i>JavaScript</span><br>
						<span id="study_PHP"><i id="icon_check_seven" class="fas fa-check-circle"></i>PHP</span>
						<span id="study_Laravel"><i id="icon_check_eight" class="fas fa-check-circle"></i>Laravel</span>
						<span id="study_SQL"><i id="icon_check_nine" class="fas fa-check-circle"></i>SQL</span>
						<span id="study_SHELL"><i id="icon_check_ten" class="fas fa-check-circle"></i>SHELL</span><br>
						<span id="study_others"><i id="icon_check_eleven"
								class="fas fa-check-circle"></i>情報処理システム基礎知識（その他）</span><br>

					</div>

				</div>

			</div>

			<div id="modal_contents_right_side" class="modal_contents_right_side">
				<div id="study_time" class="study_time">
					<span>学習時間</span>
					<input type="text" class="input_study_time">

				</div>

				<div id="twitter" class="twitter"><br>
					<span>Twitter用コメント</span>
					<input type="text" id="twitter_text">
				</div>

				<!-- <p id="Tweet" class="Tweet"><i id='icon_check_twelve' class="fas fa-check-circle"></i>Twitterにシェアする</p> -->
				<div id="Tweet" class="Tweet"><i id='icon_check_twelve' class="fas fa-check-circle"><span>Twitterにシェアする</span></i></div>
			</div>


		</div>

		<div id="modal_record_post" class="modal_record_post">
			<span>記録・投稿</span>
		</div>

	</div> <!-- モーダルここまで -->


	<!-- レスポンシブ用のモーダル  -->
	<div id="modal_for_responsive" class="modal_for_responsive">

		<!-- バツボタン -->
		<div><span id="btn_close_for_responsive" class="btn_close"></span></div>

		<div id="modal_content" class="modal_content">


			<div id="modal_above" class="modal_above">



				<div id="day_for_study" class="day_for_study">
					<span>学習日</span>
					<input type="date" id="calendar" class="calendar">
				</div>


				<div id="contents_study" class="contents_study">
					<span>学習コンテンツ（複数選択可）</span>
					<div>
						<span id="reponsive_study_n" class="reponsive_study_n"><i id="responsive_icon_check_one" class="fas fa-check-circle"></i>
							N予備校</span>

						<span id="reponsive_study_d" class="responsive_study_d"><i id="reponsive_icon_check_two"
								class="fas fa-check-circle"></i>ドットインストール</span><br>

						<span id="reponsive_study_p" class="reponsive_study_p"><i id="reponsive_icon_check_three"
								class="fas fa-check-circle"></i>POSSE課題</span>

					</div>

				</div>

				<div id="languages_study" class="languages_study">
					<span>学習言語（複数選択可）</span>
					<div>
						<span id="reponsive_study_HTML"><i id="reponsive_icon_check_four" class="fas fa-check-circle"></i>HTML</span>
						<span id="reponsive_study_CSS"><i id="reponsive_icon_check_five" class="fas fa-check-circle"></i>CSS</span>
						<span id="reponsive_study_Js"><i id="reponsive_icon_check_six" class="fas fa-check-circle"></i>JavaScript</span><br>
						<span id="reponsive_study_PHP"><i id="reponsive_icon_check_seven" class="fas fa-check-circle"></i>PHP</span>
						<span id="reponsive_study_Laravel"><i id="reponsive_icon_check_eight" class="fas fa-check-circle"></i>Laravel</span>
						<span id="reponsive_study_SQL"><i id="reponsive_icon_check_nine" class="fas fa-check-circle"></i>SQL</span>
						<span id="reponsive_study_SHELL"><i id="reponsive_icon_check_ten" class="fas fa-check-circle"></i>SHELL</span><br>
						<span id="reponsive_study_others"><i id="reponsive_icon_check_eleven"
								class="fas fa-check-circle"></i>情報処理システム基礎知識（その他）</span><br>

					</div>

				</div>

			</div>

			<div id="modal_below" class="modal_below">
				<div id="study_time" class="study_time">
					<span>学習時間</span>
					<input type="text" class="input_study_time">

				</div>

				<div id="twitter" class="twitter">
					<span>Twitter用コメント</span>
					<input type="text" id="twitter_text">
				</div>

				<!-- <div id="Tweet_in_reponsive" class="Tweet_in_reponsive"><i id='reponsive_icon_check_twelve' class="fas fa-check-circle"></i>Twitterにシェアする</div> -->
				<div id="Tweet_in_reponsive" class="Tweet_in_reponsive"><i id='reponsive_icon_check_twelve' class="fas fa-check-circle"><span>Twitterにシェアする</span></i></div>

			</div>

			<div id="responsive_modal_record_post" class="responsive_modal_record_post">
				<span>記録・投稿</span>
			</div>


		</div>

		

	</div>

	<!-- overlay-->
	<div id="modal_overlay" class="modal_overlay"></div>



	<!-- <div id="main" class="main"></div> -->


	<!-- <div id="freamework" class="freamework"></div> -->


	<!-- カレンダー作成 -->
	<!-- <div id="calendar" class="calendar"> -->
		<!-- xxxx年xx月を表示 -->
		<!-- <span id="header"></span> -->

		<!-- ボタンクリックで月移動 -->
		<!-- <div id="next-prev-button">
			<span id="prev" onclick="prev()"></span>
			<span id="next" onclick="next()"></span>
		</div> -->

		<!-- カレンダー -->
		<!-- <div id="calendar_contents"></div> -->
	</div>

	<!-- カレンダー ここまで -->

	<!-- ロード画面 -->

	<div id="modal_loader" class="modal_loader">
		<span id="btn_close two" class="btn_close"></span>

		<div id="loader_wrap" class="loader_wrap">
			<div class="loader">Loading...</div>
		</div>
		
		<div id="done_recod_post" class="done_recod_post">
			<span class="awesome">AWESOME!</span><br>
			<i id="green_check" class="fas fa-check-circle"></i><br>
			<span class="text_record_post">記録・投稿<br>完了しました</span>
		</div>

	</div> <!-- ロード画面ここまで -->

	<!-- モダール用のロード画面 -->

	<div id="reponsive_modal_loader" class="responsive_modal_loader">
		<span id="btn_close_three" class="btn_close"></span>

		<div id="loader_wrap" class="loader_wrap">
			<div class="loader">Loading...</div>
		</div>

		<div id="done_recod_post_two" class="done_recod_post_two">
			<span class="awesome_two">AWESOME!</span><br>
			<i id="green_check_two" class="fas fa-check-circle"></i><br>
			<span class="text_record_post">記録・投稿<br>完了しました</span>
		</div>

	</div>


	<!-- モダール用のロード画面　ここまで -->
	

	<!-- 記録・投稿完了画面 -->

<!-- 
	<div id="done_recod_post" class="done_recod_post">
		<span class="awesome">AWESOME!</span><br>
		<i id="green_check" class="fas fa-check-circle"></i><br>
		<span class="text_record_post">記録・投稿<br>完了しました</span>
	</div> -->



	<!-- 記録・投稿完了画面 ここまで-->

	<!-- 記録・投稿完了画面 （レスポンシブ用）-->


	<!-- <div id="done_recod_post" class="done_recod_post">
		<span class="awesome">AWESOME!</span><br>
		<i id="green_check" class="fas fa-check-circle"></i><br>
		<span class="text_record_post">記録・投稿<br>完了しました</span>
	</div> -->

	<!-- 記録・投稿完了画面 （レスポンシブ用）ここまで-->



	<!-- 完了 -->

	<div id="done" class="done">


	</div>

	<!-- 完了 ここまで -->



	<!-- コンテンツ -->

	<div class="Content">
		<div class="Split_left">
			<div id="Time" class="Time">
				<ul>

					<li id="Today" class="Today"> <span class="today">Today</span>
						<div><span class="Today_actual_hour"><?php echo $data0[0][0];?></span> <span class="Today_hour">hour</span></div>
					</li>

					<li id="Month" class="Month"><span class="month">Month</span>
						<div><span class="Actual_Month"><?php echo $data1[0][0]?></span> <span class="Monthly_hour">hour</span></div>
					</li>

					<li id="Total" class="Month"><span class="total">Total</span>
						<div><span class="Actual_Today_hours"><?php echo $data2[0][0];?></span> <span class="Total_hours">hour</span>
						</div>
					</li>


				</ul>

			</div>

			<!-- <div> -->
			<div id="Histo_gram" class="Histo_gram">
				<canvas id="myBarChart_for_php"></canvas>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

			</div>
			<!-- </div> -->

		</div>



		<div id="Study" class="Study">
			<div id="Language_studied" class="Language_studied">

				<p>学習言語</p>

				<div id="doughnut_chart_PHP" class="doughnut_chart_one"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<!-- liの文字はもともとspanで囲われてる -->
				<div class="contents_of_Language_studied">

					<ul class="one">
						<li class="li_Js"><span>JavaScript<span></li>
						<li class="li_CSS"> <span>CSS</span></li>
						<li class="li_PHP"><span>PHP</span></li>

					</ul>

					<ul class="two">
						<li class="li_HTML"><span>HTML</span></li>
						<li class="li_Laravel"><span>Laravel</span></li>
						<li class="li_SQL"><span>SQL</span></li>
					</ul>

					<ul class="three">
						<li class="li_SHELL"><span>SHELL</span></li>
						<li class="li_others"><span>情報システム基礎知識（その他）</span></li>
					</ul>

				</div>



			</div>


			<div id="Contents_studied" class="Contents_studied">
				<p>学習コンテンツ</p>

				<div id="doughnut_chart_two" class="doughnut_chart_two"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<div id="contents_studied" class="contents_studied">
					<ul>
						<li class="d"><span>ドットインストール</span></li>
						<li class="n"> <span>N予備校</span></li>
						<li class="p"><span>POSSE課題</span></li>
					</ul>
				</div>
			</div>

            <!-- レスポンシブ用 -->
			
			<div id="Contents_studied_responsive" class="Contents_studied_responsive">
				<p><span>学習コンテンツ</span></p>

				<div id="doughnut_chart_three" class="doughnut_chart_three"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<div id="contents_studied" class="contents_studied">
					<ul>
						<li class="d"><span>ドットインストール</span></li>
						<li class="n"><span>N予備校</span></li>
						<li class="p"><span>課題</span></li>
					</ul>
				</div>
			</div>

			<div id="Language_studied_responsive" class="Language_studied_responsive">

				<p><span>学習言語</span></p>

				<div id="doughnut_chart_four" class="doughnut_chart_four"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<!-- liの文字はもともとspanで囲われてる -->
				<div class="contents_of_Language_studied">

					<ul class="one">
						<li class="li_Js"><span>JavaScript<span></li>
						<li class="li_CSS"><span>CSS</span></li>
						<li class="li_PHP"><span>PHP</span></li>

					</ul>

					<ul class="two">
						<li class="li_HTML"><span>HTML</span></li>
						<li class="li_Laravel"><span>Laravel</span></li>
						<li class="li_SQL"><span>SQL</span></li>
					</ul>

					<ul class="three">
						<li class="li_SHELL"><span>SHELL</span></li>
						<li class="li_others"><span>情報システム基礎知識（その他）</span></li>
					</ul>

				</div>



			</div>



		</div>



	</div>






	<!-- </div> -->
	<!-- divを使うとその行全てがdivになる。 -->
	<!-- <p class="Date"><span>＜　2020年 10月　＞</span></p> -->
	<div class="Date"><span class="angle_brackets">＜<span>2020年 10月</span>＞</span></div>

	<div id="btn_for_responsive" class="btn_for_responsive">
		<p>記録・投稿</p>
	</div>



	<script src="index.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

</body>

</html>

<!-- ---------------------------------------------------------------------
chart.ja -->
<script>
	var ctx = document.getElementById("myBarChart_for_php");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        //凡例のラベル
        labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '28', '30'],
        datasets: [
            {
                label: '訪問者数', //データ項目のラベル
                data: [
					<?php echo $data0[0][0]?>,
					3, 
					4, 
					5, 
					6, 
					7, 
					8, 
					8, 
					8, 
					7, 
					6, 
					4,
					<?php echo $data3[0][0]?>,
					0,

				], //グラフのデータ
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


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart_PHP);

function drawChart_PHP() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['HTML', <?php echo $each_total_language[0]?>],
        ['JavaScript', <?php echo $each_total_language[1]?>],
        ['CSS', <?php echo $each_total_language[2]?>],
        ['PHP', <?php echo $each_total_language[3]?>],
        ['SQL', <?php echo $each_total_language[4]?>],
        ['Laravel', <?php echo $each_total_language[5]?>],
        ['SHELL', <?php echo $each_total_language[6]?>],
        ['情報システム基礎知識 （その他）', <?php echo $each_total_language[7]?>],



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


    var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_PHP'));
    chart.draw(data, options);
}

// $sum_all[0];


</script>
