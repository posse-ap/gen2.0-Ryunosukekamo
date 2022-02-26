<?php
include "db-connect.php";
// phpとdatabaseを繋げてる！
$id=$_GET['id'];

// dbh-名前。データベースのユーザー名などが書かれているもの使う
$sql0 = "select name from big_questions where id = '". $id ."'";
$result0 = $dbh-> query($sql0);
foreach($result0 as $val) {
    echo $val['name'];
};

$sql1 = "select image from questions where big_question_id = '". $id ."'";
$result1 = $dbh-> query($sql1);
$data1=$result1->fetchAll();
$questions = array();
foreach($data1 as $val) {
    array_push($questions,$val['image']);

};

$sql2 = "select name from Choices where question_id = '". $id ."'";
$result2 = $dbh-> query($sql2);
$data2=$result2->fetchAll();
$choices = array();
foreach($data2 as $val) {
    array_push($choices,$val['name']);
    echo $val['name'];

};

// echo $choices[0];
// echo $choices[1];
// echo $choices[2];

for($i=1; $i<count($questions)+1; $i++){ ?>
    
    <section class="parent">
    <h2> <?php echo $i ;?> この地名はなんて読む？</h2>
    <img src="./images/<?php echo $data1[$i-1]['image'];?>" alt="">
    <ul>
    <li><?php echo $choices[$i-1];?></li>
    <li><?php echo $choices[$i];?></li>
    <li><?php echo $choices[$i+1];?></li>
    </ul>
    <div id="result1">
    <span class="correct">正解！</span>
    <span class="display">正解は「たかなわ」です！</span>
    </div>
    <div>
    <span class="wrong">不正解！</span>
    <span class="display2">正解は「たかなわ」です！ </span>
    </div>
    </section>
<?php };

