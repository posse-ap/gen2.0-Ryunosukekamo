<?php 
include "db-connect.php";

// エラーメッセージ
$err=[];

// バリデーション
if(!$username=filter_input(INPUT_POST,'username')){
    $err[]='ユーザ名を記入してください';
}
if(!$email=filter_input(INPUT_POST,'email')){
    $err[]='メールアドレスを記入してください';
}
$password=filter_input(INPUT_POST,'password');
// 正規表現.8文字以上100文字以下、または、パスワードの値が英数字だったらOK。これでも弱いから、自分で調べる。例えば、大文字を混ぜるようにするとか。
if(!preg_match("/\A[a-z\d]{8,100}+\z/i",$password)){
    $err[]='パスワードは、英数字８文字以上１００文字以下にして下さい。';
}

// パスワードと確認用パスワードの比較
$password_conf=filter_input(INPUT_POST,'password_conf');
if(!$password==$password_conf){
        $err[]='確認用パスワードと異なっています';
}


// ユーザを登録する処理
if(count($err)===0){
    $sql = $dbh->prepare('INSERT into users(username,email,password)VALUES(:username,:email,:password)');
    $sql->bindValue(':username',$_POST['username']);
    $sql->bindValue(':email',$_POST['email']);
    $sql->bindValue(':password',$_POST['password']);
    $sql->execute();
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

    <a href="./siginup_form.php">戻る</a>
</body>
</html>