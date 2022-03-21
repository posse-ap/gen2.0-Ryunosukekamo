<?php
include "db-connect.php";
// echo phpinfo();
?>

<?php

$time0 = $dbh->prepare("SELECT sum(hours) from time where date=1 and month=1 and year=1");
$time1 = $dbh->prepare("SELECT sum(hours) from time where month=1 and year=1");
$time2 = $dbh->prepare("SELECT sum(hours) from time");
$time3 = $dbh->prepare("SELECT hours from time where date=28 and month=1 and year=1");
for ($i = 0; $i < 4; $i++) {
	${"time" . $i}->execute();
	${"data" . $i} = ${"time" . $i}->fetchAll();
}
$sum1 = $dbh->prepare("SELECT sum(HTML),sum(JavaScript),sum(CSS),sum(PHP),sum(ooo),sum(Laravel),sum(SHELL),sum(others) from All_data");
$sum2 = $dbh->prepare("SELECT sum(N_yobi),sum(dotinstall),sum(POSSE) from All_data");
for ($i = 1; $i < 3; $i++) {
	if ($i == 1) {
		// 各学習言語の合計値
		${"sum" . $i}->execute();
		${"each_total_language"} = ${"sum" . $i}->fetch(PDO::FETCH_NUM);
	} else {
		// 各学習コンテンツ時間の合計値
		${"sum" . $i}->execute();
		${"each_total_content"} = ${"sum" . $i}->fetch(PDO::FETCH_NUM);
	};
};

//各言語とその勉強時間が一致、紐づけられている必要がある＝だから、同じ配列の中にそれらを入れている。
// 連想配列だと、HTML=>6の場合、6を取得するのにkeyであるHTMLを使わず負えない。それだと、google.chartと相性が悪い。
// なぜなら、google chartは、上から順に表示されていく→大きい順にしたい時、数字が降順でないといけない。だから、配列のインデックスや数字のkeyを使いたい。つまり、HTMLだと取得できるけど、HTMLが常に大きいという訳ではないから（合計値という変化する値）keyは数字でないとけない。
// 特殊な点：数字が[0]で、言語[1]=後、でないと、rsortが上手く効かない。
// 最初は三つの配列を作ろうとしていた。(1)fetch 数字only (2)連想配列（紐づけ）→大きい順にソート → (3)多次元配列を作成、array(0),array(1),という順に連想配列のデータを入れ、呼び出す。
$languages_array = array(
	[0 => $each_total_language[0], 1 => 'HTML', 2 => '#3CCEFE'],
	[0 => $each_total_language[1], 1 => 'Javascript', 2 => '#1754EF'],
	[0 => $each_total_language[2], 1 => 'CSS', 2 => '#1754EF'],
	[0 => $each_total_language[3], 1 => 'PHP', 2 => '#20BDDE'],
	[0 => $each_total_language[4], 1 => 'SQL', 2 => '#6D46EC'],
	[0 => $each_total_language[5], 1 => 'Laravel', 2 => '#B29EF3'],
	[0 => $each_total_language[6], 1 => 'SHELL', 2 => '#4A17EF'],
	[0 => $each_total_language[7], 1 => 'others', 2 => '#3105C0'],
	// 0=>みたいに書かなくてよかった。結局先頭が、0で次が１になるから。
);

//学習言語の合計値を降順に。（配列のindexはそのまま） 
rsort($languages_array);

// 各学習コンテンツの合計値を連想配列の多次元配列
// 円グラフのN予備の疑似要素のcssを当てるにはアルファベットが必要なためnを追加した。また、インデックスがづれるため、ほかも追加。
$content_array = [
	[$each_total_content[0], 'N予備', 'n'],
	[$each_total_content[1], 'dotinstall', 'd'],
	[$each_total_content[2], 'POSSE', 'p'],
];

// 学習コンテンツの合計値を降順に。
rsort($content_array);

// ★日付の変更で大切なこと。
	// 日付の変更においての問題点：今日以外の日付はtype=dateで取得し、postで送り、（jsに直して）表示させている
		// 一方、今日に関してはPHPのdate()関数で今日の日付をもってきて、表示させている。だから、今日の日付だけ、データ（日付）を送るという作業がない。そのため、初期画面とリセットした時にデータが送られてないよと怒られる。
		// だから、elseで初期画面とリセット時の今日日の日付を設定した。日付変更後は、既にrequest_method==post状態にある。だから、
// ★送信データ（日付）を受け取り、mysqlテーブルからデータを取り出す
// $_POSTは、htmlより前になきゃならない。そのため、ここで定義。

// ★日付の変更
// POSTかGETなのかを判別及び、$_post['formタグのname属性名']と違い具体的なデータがあるかどうかでなく、データがあるかどうかを判断している。
if($_SERVER["REQUEST_METHOD"]=="POST"){
	// 今日の日付の表示
	$today = date('Y/0n/d');
	$today = json_encode($today);

	// カレンダーで変更した日付のデータを - で区切って配列にする。
	$B = explode("-",$_POST['comment']);
	// 各変数に配列のデータを代入 
	$year=(int)$B[0];
	$month=(int)$B[1];
	$date=$B[2];
	$R=[$year,$month,$date];
	$R=implode("/",$B);
	$R=json_encode($R);
	// その日の合計時間の表示
	$C=$dbh->prepare("SELECT sum(hours) from All_data where year = $year and month = $month and date =$date ");
	$C->execute();
	$C=$C->fetch();
}
// 初期画面、リセットした後、２回目からの今日の日付の表示
else{
	// 今日の日付をdate()関数でもってくる。
	$today = date('Y/0n/d');
	// 適切な変数に代入
	$year=date('Y');
	$month=date('0n');
	$date=date('d');
	// 一つの変数に格納
	$R=[$year,$month,$date];
	// 配列の要素を連結し、oo/oo/oo/という文字列に変化
	$R=implode("/",$R);
	// print_r($R);
	// JSで使えるようにする。
	$R=json_encode($R);	
	// 今日の合計時間
	$C=$dbh->prepare("SELECT sum(hours) from All_data where year = $year and month = $month and date =$date ");
	$C->execute();
	$C=$C->fetch();
	$today = json_encode($today);
	// echo $today;
}

// データを受け取る処理//上記でPOSTを浸かってるためここで、使うと上の日付のデータがないと怒られる。だから、get
// ちなみに、今回はelse1を使わないから（データがない時のパターン）、iseet name属性で指定。
// データをtableに送る上で絶対になくちゃならないのは（最低条件）、日付とその日の勉強時間。N予備に何時間とかいらない。
// しかし、モーダルの構造上、合計時間をいれて勝手に振り分けてくれない。各項目の時間を入れる時は一回づつ。
if(isset($_GET['calendar'],$_GET['study_time'])){
	for($language_data=1;$language_data<9;$language_data++){

		for($content_data=1;$content_data<4;$content_data++){
	
			if(isset($_GET[$content_data],$_GET[$language_data])){
					// 日付を - で分けて配列にする
					$V=explode('-',$_GET['calendar']);
					// 今日の勉強時間の合計
					$today_data=$_GET['study_time'];
					
					switch($language_data){
						case 1:
							$language_data='HTML';
							break;
						case 2:
							$language_data='JavaScript';
							break;
							
						case 3:
							$language_data='CSS';
							break;
							
						case 4:
							$language_data='PHP';
							break;
							
						case 5:
							$language_data='ooo';
							break;
							
						case 6:
							$language_data='Laravel';
							break;
							
						case 7:
							$language_data='SHELL';
							break;
							
						case 8:
							$language_data='others';
							break;
							
					};
					switch($content_data){
						case 1:
							$content_data='N_yobi';
							break;
						case 2:
							$content_data='dotinstall';
							break;
							
						case 3:
							$content_data='POSSE';
							break;
							

					};
					$X=$dbh->prepare("INSERT into All_data (date,month,year,hours,$language_data,$content_data)VALUES(:date,:month,:year,:hours,:$language_data,:$content_data)");
					$X->bindValue(':year',$V[0]);
					$X->bindValue(':month',$V[1]);
					$X->bindValue(':date',$V[2]);
					$X->bindValue(':hours',$today_data);
					$X->bindValue(':'. $language_data,$today_data);
					$X->bindValue(':'. $content_data,$today_data);
					$X->execute();					
				
				
			};
			
		};
	};

}




?>



<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
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

		<form action="webapp.php" method="GET" id="modal_content" class="modal_content">


			<div id="modal_contents_left_side" class="modal_contents_left_side">



				<div id="day_for_study" class="day_for_study">
					<span>学習日</span>
					<input type="date" id="calendar" class="calendar" name="calendar">
				</div>


				<div id="contents_study" class="contents_study">
					<span>学習コンテンツ（複数選択可）</span>
					<div>
						<!-- <span id="study_n" class="study_n"><i id="icon_check_one" class="fas fa-check-circle"></i>N予備校</span>
						<span id="study_d" class="study_d"><i id="icon_check_two" class="fas fa-check-circle"></i>ドットインストール</span>
						<br>
						<span id="study_p" class="study_p"><i id="icon_check_three" class="fas fa-check-circle"></i>POSSE課題</span> -->

						<input type="checkbox" id="study_n" class="study_n" name="1">N予備校</input>

						<input type="checkbox" id="study_d" class="study_d" name="2">ドットインストール</input>
						<br>

						<input type="checkbox" id="study_p" class="study_p" name="3">POSSE課題</input>
					</div>



				</div>

				<div id="languages_study" class="languages_study">
					<span>学習言語（複数選択可）</span>
					<div>
						<!-- <span id="study_HTML"><i id="icon_check_four" class="fas fa-check-circle"></i>HTML</span>
						<span id="study_CSS"><i id="icon_check_five" class="fas fa-check-circle"></i>CSS</span>
						<span id="study_Js"><i id="icon_check_six" class="fas fa-check-circle"></i>JavaScript</span><br>
						<span id="study_PHP"><i id="icon_check_seven" class="fas fa-check-circle"></i>PHP</span>
						<span id="study_Laravel"><i id="icon_check_eight" class="fas fa-check-circle"></i>Laravel</span>
						<span id="study_SQL"><i id="icon_check_nine" class="fas fa-check-circle"></i>SQL</span>
						<span id="study_SHELL"><i id="icon_check_ten" class="fas fa-check-circle"></i>SHELL</span><br>
						<span id="study_others"><i id="icon_check_eleven" class="fas fa-check-circle"></i>情報処理システム基礎知識（その他）</span><br> -->
						<input type="checkbox" id="study_HTML" name="1">HTML</input>
						<input type="checkbox" id="study_Js" name="2">JavaScript</input><br>
						<input type="checkbox" id="study_CSS" name="3">CSS</input>
						<input type="checkbox" id="study_PHP" name="4">PHP</input>
						<input type="checkbox" id="study_Laravel" name="5">Laravel</input>
						<input type="checkbox" id="study_SQL" name="6">SQL</input>
						<input type="checkbox" id="study_SHELL" name="7">SHELL</input><br>
						<input type="checkbox" id="study_others" name="8">情報処理システム基礎知識（その他）</input><br>

					</div>

				</div>

			</div>

			<div id="modal_contents_right_side" class="modal_contents_right_side">
				<div id="study_time" class="study_time">
					<span>学習時間</span>
					<input type="text" class="input_study_time" name="study_time">

				</div>

				<div id="twitter" class="twitter"><br>
					<span>Twitter用コメント</span>
					<input type="text" id="twitter_text">
				</div>

				<!-- <p id="Tweet" class="Tweet"><i id='icon_check_twelve' class="fas fa-check-circle"></i>Twitterにシェアする</p> -->
				<div id="Tweet" class="Tweet"><i id='icon_check_twelve' class="fas fa-check-circle"><span>Twitterにシェアする</span></i></div>
			</div>
			<div id="modal_record_post" class="modal_record_post">
				<input type="submit" class="modal_submit" value="記録・投稿" name="modal_name">

			</div>

		</form>

		<!-- <div id="modal_record_post" class="modal_record_post">
			<span>記録・投稿</span>
		</div> -->
		<!-- <form action="POST" id="modal_record_post" class="modal_record_post"> -->
		<!-- </form> -->
			
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

						<span id="reponsive_study_d" class="responsive_study_d"><i id="reponsive_icon_check_two" class="fas fa-check-circle"></i>ドットインストール</span><br>

						<span id="reponsive_study_p" class="reponsive_study_p"><i id="reponsive_icon_check_three" class="fas fa-check-circle"></i>POSSE課題</span>

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
						<span id="reponsive_study_others"><i id="reponsive_icon_check_eleven" class="fas fa-check-circle"></i>情報処理システム基礎知識（その他）</span><br>

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

			<form action="POST" id="responsive_modal_record_post" class="responsive_modal_record_post">
				<input type="submit" class="modal_submit_responsive" value="記録・投稿">
			</form>


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
						<div><span class="Today_actual_hour"><?php echo $C[0] ?></span> <span class="Today_hour">hour</span></div>
					</li>

					<li id="Month" class="Month"><span class="month">Month</span>
						<div><span class="Actual_Month"><?php echo $data1[0][0] ?></span> <span class="Monthly_hour">hour</span></div>
					</li>

					<li id="Total" class="Month"><span class="total">Total</span>
						<div><span class="Actual_Today_hours"><?php echo $data2[0][0]; ?></span> <span class="Total_hours">hour</span>
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

				<div id="doughnut_chart_PHP_language" class="doughnut_chart_one"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<!-- liの文字はもともとspanで囲われてる -->
				<div class="contents_of_Language_studied">

					<ul class="one">
						<li class="li_<?php echo $languages_array[0][1] ?>"><span><?php echo $languages_array[0][1] ?><span></li>
						<li class="li_<?php echo $languages_array[1][1] ?>"><span><?php echo $languages_array[1][1] ?></span></li>
						<li class="li_<?php echo $languages_array[2][1] ?>"><span><?php echo $languages_array[2][1] ?></span></li>

					</ul>

					<ul class="two">
						<li class="li_<?php echo $languages_array[3][1] ?>"><span><?php echo $languages_array[3][1] ?></span></li>
						<li class="li_<?php echo $languages_array[4][1] ?>"><span><?php echo $languages_array[4][1] ?></span></li>
						<li class="li_<?php echo $languages_array[5][1] ?>"><span><?php echo $languages_array[5][1] ?></span></li>
					</ul>

					<ul class="three">
						<li class="li_<?php echo $languages_array[6][1] ?>"><span><?php echo $languages_array[6][1] ?></span></li>
						<li class="li_<?php echo $languages_array[7][1] ?>"><span><?php echo $languages_array[7][1] ?></span></li>
					</ul>

				</div>



			</div>


			<div id="Contents_studied" class="Contents_studied">
				<p>学習コンテンツ</p>

				<div id="doughnut_chart_contents" class="doughnut_chart_two"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<div id="contents_studied" class="contents_studied">
					<ul>
						<li class="<?php echo $content_array[0][2] ?>"><span><?php echo $content_array[0][1] ?></span></li>
						<li class="<?php echo $content_array[1][2] ?>"><span><?php echo $content_array[1][1] ?></span></li>
						<li class="<?php echo $content_array[2][2] ?>"><span><?php echo $content_array[2][1] ?></span></li>
					</ul>
				</div>
			</div>

			<!-- レスポンシブ用 -->

			<div id="Contents_studied_responsive" class="Contents_studied_responsive">
				<p><span>学習コンテンツ</span></p>

				<div id="doughnut_chart_PHP_contents_responsive" class="doughnut_chart_three"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<div id="contents_studied" class="contents_studied">
					<ul>
						<li class="<?php echo $content_array[0][2] ?>"><span><?php echo $content_array[0][1] ?></span></li>
						<li class="<?php echo $content_array[1][2] ?>"><span><?php echo $content_array[1][1] ?></span></li>
						<li class="<?php echo $content_array[2][2] ?>"><span><?php echo $content_array[2][1] ?></span></li>
					</ul>
				</div>
			</div>

			<div id="Language_studied_responsive" class="Language_studied_responsive">

				<p><span>学習言語</span></p>

				<div id="doughnut_chart_PHP_language_responsive" class="doughnut_chart_four"></div>
				<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

				<!-- liの文字はもともとspanで囲われてる -->
				<div class="contents_of_Language_studied">

					<ul class="one">
						<li class="li_<?php echo $languages_array[0][1] ?>"><span><?php echo $languages_array[0][1] ?><span></li>
						<li class="li_<?php echo $languages_array[1][1] ?>"><span><?php echo $languages_array[1][1] ?></span></li>
						<li class="li_<?php echo $languages_array[2][1] ?>"><span><?php echo $languages_array[2][1] ?></span></li>

					</ul>

					<ul class="two">
						<li class="li_<?php echo $languages_array[3][1] ?>"><span><?php echo $languages_array[3][1] ?></span></li>
						<li class="li_<?php echo $languages_array[4][1] ?>"><span><?php echo $languages_array[4][1] ?></span></li>
						<li class="li_<?php echo $languages_array[5][1] ?>"><span><?php echo $languages_array[5][1] ?></span></li>
					</ul>

					<ul class="three">
						<li class="li_<?php echo $languages_array[6][1] ?>"><span><?php echo $languages_array[6][1] ?></span></li>
						<li class="li_<?php echo $languages_array[7][1] ?>"><span><?php echo $languages_array[7][1] ?></span></li>
					</ul>

				</div>



			</div>



		</div>



	</div>






	<!-- </div> -->
	<!-- divを使うとその行全てがdivになる。 -->
	<!-- <p class="Date"><span>＜　2020年 10月　＞</span></p> -->
	<div class="Date">
		<span id="grater_than" class="angle_brackets" onclick="btn(this)">＜　</span>

		<span id="year_month_date"></span>

		<span id="less_than" class="angle_brackets" onclick="btn(this)">　＞</span>


	</div>
	
	<form id="date_change_form" action="webapp.php" method="POST">
	<input type="date" hidden name="comment" id="date_change" class="date_change">
	<input type="submit" hidden id="submit"  value="送信">
	<input type="reset" hidden id="reset" value="リセット">
	</form>



	<div id="btn_for_responsive" class="btn_for_responsive">
		<p>記録・投稿</p>
	</div>



	<script src="index.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js"></script>

</body>

</html>
<!-- ----------------------------------------------------------------------------- -->
<!--  円グラフの下の・（ドット）の色指定 -->
<script>
	let today = JSON.parse('<?php echo $today; ?>');
	// document.getElementById('year_month_date').innerHTML=today;
	
	//★上の日付を変える処理。
	// onclick(this)を使いたかった故、わざわざif文を使って分岐させた。
	function btn(element) {
		if (element == document.getElementById('less_than')) {
			// type hiddenからdateに
			document.getElementById('date_change').removeAttribute('hidden');	
			document.getElementById('submit').removeAttribute("hidden");	
			document.getElementById('reset').removeAttribute("hidden");


		}if (element == document.getElementById('grater_than')) {
			// 上記と同じく
			
		}
	}
	// ★日付の変更後の、日付の表示（続き）
	// Rという変数をjdで使えるようにする
	let R =JSON.parse('<?php echo $R ?>');
	console.log(R);
	console.log('OK');

	// Rという変数がある時＝データを送信した時＝nice idea!!
	document.getElementById('reset').type="reset";
	document.getElementById('year_month_date').innerHTML=R;

	
	// リセットした時、日付が送られていないから、日付が表示されない。これを解決する際の処理
	// 意図的にデータがないから、nullでなくundefinedで。undefinedはflaseを返すから、 !（falseを返す）でもいける。
	// if(R===undefined || !R){
	// 	document.getElementById('year_month_date').innerHTML = today;
	// }

	// 送信情報を初期化,消去//リロードボタンじゃだめ。リンクをもう一度押すとできる。
	document.getElementById('reset').onclick=function(){
		window.location.href = 'http://localhost:8080/webapp.php';
		
	}


</script>

<!-- ---------------------------------------------------------------------
// chart.ja -->
<script>
	var ctx = document.getElementById("myBarChart_for_php");
	var myBarChart = new Chart(ctx, {
		type: 'bar',
		data: {
			//凡例のラベル
			labels: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '28', '30'],
			datasets: [{
					label: '訪問者数', //データ項目のラベル
					data: [
						<?php echo $data0[0][0] ?>,
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
						<?php echo $data3[0][0] ?>,
						2,

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
			legend: {
				display: false,
			},
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
						userCallback: function(tick) {
							return tick.toString() + 'h';
						}

					}
				}]
			},
		}
	});


	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart_PHP_language);

	function drawChart_PHP_language() {
		// 値と題が一致していることが前提→連想配列で数値と題を一致させる。
		var data = google.visualization.arrayToDataTable([
			['Effort', 'Amount given'],
			['<?php echo $languages_array[0][1] ?>', <?php echo $languages_array[0][0] ?>],
			['<?php echo $languages_array[1][1] ?>', <?php echo $languages_array[1][0] ?>],
			['<?php echo $languages_array[2][1] ?>', <?php echo $languages_array[2][0] ?>],
			['<?php echo $languages_array[3][1] ?>', <?php echo $languages_array[3][0] ?>],
			['<?php echo $languages_array[4][1] ?>', <?php echo $languages_array[4][0] ?>],
			['<?php echo $languages_array[5][1] ?>', <?php echo $languages_array[5][0] ?>],
			['<?php echo $languages_array[6][1] ?>', <?php echo $languages_array[6][0] ?>],
			['<?php echo $languages_array[7][1] ?>', <?php echo $languages_array[7][0] ?>],

		]);



		var options = {
			pieHole: 0.5,
			// ここのwidthとheightで上手く大きさを調整しているー＞意外と重要
			width: '100%',
			height: '190',
			chartArea: {
				width: '100%',
				height: '100%',
				top: 0
			},

			pieSliceTextStyle: {
				color: 'white',
			},
			legend: 'none',
			colors: ['<?php echo $languages_array[0][2] ?>', '<?php echo $languages_array[1][2] ?>', '<?php echo $languages_array[2][2] ?>', '<?php echo $languages_array[3][2] ?>', '<?php echo $languages_array[4][2] ?>', '<?php echo $languages_array[5][2] ?>', '<?php echo $languages_array[6][2] ?>', '<?php echo $languages_array[7][2] ?>'],



		};


		var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_PHP_language'));
		chart.draw(data, options);
	}

	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart_PHP_contents);

	function drawChart_PHP_contents() {

		var data = google.visualization.arrayToDataTable([
			['Effort', 'Amount given'],
			['<?php echo $content_array[0][1] ?>', <?php echo $content_array[0][0] ?>],
			['<?php echo $content_array[1][1] ?>', <?php echo $content_array[1][0] ?>],
			['<?php echo $content_array[2][1] ?>', <?php echo $content_array[2][0] ?>],

		]);

		// echo $each_total_content[0]

		var options = {
			pieHole: 0.5,
			width: '100%',
			height: '190',
			chartArea: {
				width: '100%',
				height: '100%',
				top: 0
			},
			pieSliceTextStyle: {
				color: 'white',
			},
			legend: 'none',
			colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6'] //　色設定

		};

		var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_contents'));
		chart.draw(data, options);

	}

	// レスポンシブ用
	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart_PHP_language_responsive);

	function drawChart_PHP_language_responsive() {

		var data = google.visualization.arrayToDataTable([
			['Effort', 'Amount given'],
			['<?php echo $languages_array[0][1] ?>', <?php echo $languages_array[0][0] ?>],
			['<?php echo $languages_array[1][1] ?>', <?php echo $languages_array[1][0] ?>],
			['<?php echo $languages_array[2][1] ?>', <?php echo $languages_array[2][0] ?>],
			['<?php echo $languages_array[3][1] ?>', <?php echo $languages_array[3][0] ?>],
			['<?php echo $languages_array[4][1] ?>', <?php echo $languages_array[4][0] ?>],
			['<?php echo $languages_array[5][1] ?>', <?php echo $languages_array[5][0] ?>],
			['<?php echo $languages_array[6][1] ?>', <?php echo $languages_array[6][0] ?>],
			['<?php echo $languages_array[7][1] ?>', <?php echo $languages_array[7][0] ?>],

		]);

		var options = {
			pieHole: 0.5,
			// width: '100%',
			// // height: 200,

			width: '100%',
			height: '115',
			chartArea: {
				width: '100%',
				height: '100%',
				top: 0
			},
			pieSliceTextStyle: {
				color: 'white',
			},
			legend: 'none',
			colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#3CCEFE', '#B29EF3', '#6D46EC', '#4A17EF', '#3105C0'],
		};


		var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_PHP_language_responsive'));
		chart.draw(data, options);
	}


	// function名＝drawChart...を変える必要がある。

	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart_PHP_contents_responsive);

	function drawChart_PHP_contents_responsive() {

		var data = google.visualization.arrayToDataTable([
			['Effort', 'Amount given'],
			['<?php echo $content_array[0][1] ?>', <?php echo $content_array[0][0] ?>],
			['<?php echo $content_array[1][1] ?>', <?php echo $content_array[1][0] ?>],
			['<?php echo $content_array[2][1] ?>', <?php echo $content_array[2][0] ?>],
		]);

		var options = {
			pieHole: 0.5,
			// width: '100%',
			// // height: 200,
			width: '100%',
			height: '115',
			chartArea: {
				width: '100%',
				height: '100%',
				top: 0
			},
			pieSliceTextStyle: {
				color: 'white',
			},
			legend: 'none',
			colors: ['#0345EC', '#0F71BD', '#1CBCDE', '#f3b49f', '#f6c7b6'] //　色設定

		};

		var chart = new google.visualization.PieChart(document.getElementById('doughnut_chart_PHP_contents_responsive'));
		chart.draw(data, options);
	}
</script>