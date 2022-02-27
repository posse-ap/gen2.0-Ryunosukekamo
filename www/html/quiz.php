<link rel="stylesheet" href="index.css">
<?php
include "db-connect.php";

// <?php
// phpとdatabaseを繋げてる！

//'id'は、urlのidのことで、$GETに?もある。 
$id = $_GET['id'];

$result0 = $dbh->prepare("SELECT name from big_questions where id = ?");
$result1 = $dbh->prepare("SELECT image from questions where big_question_id = ?");
$result2 = $dbh->prepare("SELECT name from mix where big_question_id = ?");
$result3 = $dbh->prepare("SELECT distinct question_id from mix where big_question_id = ?");
$result4 = $dbh->prepare("SELECT name from mix where valid=1 AND big_question_id = ?");
for ($i = 0; $i < 5; $i++) {
    // $id ===  ?
    // execute→?のところにidを入れる
    //queryでも大丈夫だが、今回はオプションが多く、(if文などを使えば）セキュリティー面でも役に立つprepareを活用。
    ${"result" . $i}->execute([$id]);
    // fetchAllで配列のかたまりをとってくる。多次元配列ではない。
    ${"data" . $i} = ${"result" . $i}->fetchAll();
};


// echo $data4[2][0];

// dbh-名前。データベースのユーザー名などが書かれているもの使う
// fetchAll→

// questionsていう空の配列を作成。多次元配列の準備
$questions = array();
foreach ($data1 as $val) {
    // questionsという配列に全てのimage（mysqlのテーブルから）を追加している.
    // 
    array_push($questions, $val['image']);
};

$choices = array();
foreach ($data2 as $val) {
    array_push($choices, $val['name']);
};

for ($i = 1; $i < count($questions) + 1; $i++) { ?>
    <section class="parent">
        <h2> <?php echo $i; ?> この地名はなんて読む？</h2>
        <img src="./images/<?php echo $data1[$i - 1]['image']; ?>" alt="">
        <ul>
            <!-- if文で数字の調整をしている。 -->
            <?php if ($id == 1) { ?>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-0" class="button_style1"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-1" class="button_style2"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3 + 1]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 1; ?>-2" class="buttton_style3"><?php echo $choices[($data3[$i - 1]['question_id'] - 1) * 3 + 2]; ?></li>
            <?php } elseif ($id == 2) { ?>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-0" class="button_style1"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-1" class="button_style2"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3 + 1]; ?></li>
                <li id="<?php echo $data3[$i - 1]['question_id'] - 3; ?>-2" class="buttton_style3"><?php echo $choices[($data3[$i - 1]['question_id'] - 3) * 3 + 2]; ?></li>
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

    // console.log(document.getElementById('0-0').innerHTML);
</script>
