<link rel="stylesheet" href="index.css">
<?php
include "db-connect.php";
// phpとdatabaseを繋げてる！

//'id'は、urlのidのこと。idの値を取得。→１か２のこと。
$id = $_GET['id'];
// big_questionsにnameなんてない。
$result0 = $dbh->prepare("SELECT name from big_questions where id = ?");
$result1 = $dbh->prepare("SELECT image from questions where big_question_id = ?");
$result2 = $dbh->prepare("SELECT name from mix where big_question_id = ?");
$result3 = $dbh->prepare("SELECT distinct question_id from mix where big_question_id = ?");
$result4 = $dbh->prepare("SELECT name from mix where valid=1 AND big_question_id = ?");
for ($i = 0; $i < 5; $i++) {
    // $id ===  ?
    // execute→?のところにidを入れる
    //executeは、実行する際に用いられる。queryは、勝手に実行されるからいらない。
    ${"result" . $i}->execute([$id]);
    // fetchAllで配列のかたまりをとってくる。多次元配列ではない。
    ${"data" . $i} = ${"result" . $i}->fetchAll();
};

//fetchAllの配列はどうなっているのか？
// print_r('<pre>');
// print_r($data1);
// print_r('</pre>');
// echo $data1[0][0];
// echo $data1[1][0];

// questionsていう空の配列を作成。
$questions = array();
foreach ($data1 as $val) {
    // questionsという配列に全てのimage（mysqlのテーブルから）を追加している.
    array_push($questions, $val['image']);
};

//data1とquestionsの配列を比較→正直どちらも数字あるからわざわざquestions配列いらなかったかも。
// print_r('<pre>');
// print_r($questions);
// print_r('</pre>');

$choices = array();
foreach ($data2 as $val) {
    array_push($choices, $val['name']);
};

// print_r('<pre>');
// print_r($choices);
// print_r('</pre>');

// シャッフル用の配列を作成
$shuffle_array = [0,1,2];

// 画像の数分ループさせることで、id=1のパターンとid=2のパターンを両立させることができる。
// id=1の場合、画像は高輪と亀戸の二つのためループが２回行われ、問題数も２個だけつくられる。
// 大切な前提として、そもそもid=1と2はそれぞれ違うページのことを指す。id=1とid=2は、全然違うページで、その内容を上のselect文でmysqlテーブルからデータをもってきている。
for ($i = 1; $i < count($questions) + 1; $i++) { 
    // シャッフル関数を発火
    shuffle($shuffle_array);?>

    <section class="parent">
        <h2> <?php echo $i; ?> この地名はなんて読む？</h2>
        <!-- 画像の処理は、questionsでもできる。$questions[0] or [1]、imageは書かなくていい-->
        <img src="./images/<?php echo $data1[$i - 1]['image']; ?>" alt="">
        <ul>
            <!-- if文で数字の調整をしている。 -->
            <!-- 疑問に思うかもしれない。上のselect文でid=1もしくは2というように、どちらか一つしかないはず。それを利用したのが$questionsしかし、なんぜif文でid=1の時と２の時をかいているのか？ -->
            <!-- 答えは、question_idの数が違う。id=1の時は、1か２。id=2の時は3。そうなると、chocies[0],[1][2]で選択肢を取り出したいのにできない。ちなみに、id=1とid=2でchocies[0]..の中身も変わる。 -->
            <!-- これでjsを使うと1-0,1-1,1-2パターンがfor文でないと作れない-->
            <!-- ちなみに、choicesは、配列、うえにある。Choicesとは違う -->
            <!-- data3の配列を見れば分かるが、[0] questions_id = 1 [1] questions_id=2 -->
            <!-- $chocies以降で最後足し算して[0].[1],[2]を作っている。それでchocies[0]...となる。 -->
            <?php if ($id == 1) { ?>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-0" class="button_style1"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3+$shuffle_array[0]]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-1" class="button_style2"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3 + $shuffle_array[1]]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-2" class="buttton_style3"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3 + $shuffle_array[2]]; ?></li>
            <?php } elseif ($id == 2) { ?>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-0" class="button_style1"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3+$shuffle_array[0]]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-1" class="button_style2"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3 +$shuffle_array[1]]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-2" class="buttton_style3"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3 +$shuffle_array[2]]; ?></li>
            <?php } ?>
        </ul>
        <!-- <div id="result1">
    <span class="correct">正解！</span>
    <span class="display">正解は「たかなわ」です！</span>
    </div> -->
        <!-- <div>
    <span class="wrong">不正解！</span>
    <span class="display2">正解は「たかなわ」です！ </span>
    </div> -->
    </section>
<?php }; ?>

<script>
    <?php for ($j = 0; $j < count($questions); $j++) { ?>

        <?php for ($i = 0; $i < 3; $i++) {?>
            document.getElementById("<?php echo $j . '-' . $i; ?>").addEventListener('click', function() {
                if ('<?php echo $data4[$j]['name']?>' == document.getElementById("<?php echo $j . '-' . $i; ?>").innerHTML){
                    console.log('OK');
                }
            })

        <?php }?>

    <?php } ?>
 


</script>
