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
        <p>ユーザ登録が完了しました。</p>
    <?php endif?>

    <a href="./login.php">戻る</a>
</body>
</html>