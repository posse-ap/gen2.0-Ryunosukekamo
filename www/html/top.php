<?php 
include "db-connect.php";

session_start();

// エラーメッセージ
$err=[];

// バリデーション
if(!$email=filter_input(INPUT_POST,'email')){
    // $変数['key']='value'→連想配列を生成できる。key:value.
    $err['email']='メールアドレスを記入してください';
}
if(!$password=filter_input(INPUT_POST,'password')){
    $err['password']='パスワードを記入してください';

}
    
// エラーがあったら戻す
if(count($err)>0){
    $_SESSION=$err;
    header('Location:login.php');
    // 処理をとめる
    return;
}

// ログイン成功時の処理
if(count($err)==0){
    // ユーザーemailを変数に代入
    $email=filter_input(INPUT_POST,'email');
    // テーブルにあるemailと比較する。なぜか、$emailに'';
    // https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1247269492
    $sql=$dbh->prepare("SELECT *from users where email='$email'");
    //  自分用メモ、このexecuteの引数に$emailを入れることでwhere email=?にできる。
    $sql->execute();
    //  fetchで結果を返す
    $user=$sql->fetch(PDO::FETCH_NUM);
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ユーザ登録完了画面</title>
</head>
<body>
    <?php if(count($err)>0):?>
        <?php foreach($err as $e):?>
            <p><?php echo $e ?></p>
        <?php endforeach ?>
    <?php else:?>
        <p><?php print_r($user); ?></p>
        <p>ユーザ登録が完了しました。</p>
    <?php endif?>

    <a href="./login.php">戻る</a>
</body>
</html>