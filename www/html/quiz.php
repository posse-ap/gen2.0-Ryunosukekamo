<?php
include "db-connect.php";
// phpとdatabaseを繋げてる！

// if(isset($_GET['id'])) { $id = $_GET['id']; }; 
// echo $_GET['id']; 

// 対象テーブルを選択しSELECT文を変数tableへ格納
// $table = "SELECT * FROM big_questions";

// // queryを実行し、結果を変数に格納、 結果は配列で受け取っている。
// $sql = $dbh->query($table);

// // foreach文で配列の中身を一行ずつ出力
// foreach ($sql as $row) {
 
//     // データベースのフィールド名で出力
//     echo $row['id'].'：'.$row['name'].'人';
   
//     // 改行を入れる
//     echo '<br>';
//   }

if($_GET['id']==1){
    $table = "SELECT name FROM big_questions where id = 1";
    $sql = $dbh->query($table);
    // foreach文で配列の中身を一行ずつ出力
  foreach ($sql as $row) {
   
  
      // データベースのフィールド名で出力
      echo $row['name'];
     
     
    }
}
if($_GET['id'] == 2){

  $table = "SELECT name FROM big_questions where id = 2";
  $sql = $dbh->query($table);
  // foreach文で配列の中身を一行ずつ出力
  foreach ($sql as $row) {
 
    // データベースのフィールド名で出力
    echo $row['name'];
   
   
  };

  };
  
