<?php 
// 
session_start();

// セッションを消す
$_SESSION=array();
session_destroy();
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ログイン画面</title>
</head>
<body>
    <h2>ログインフォーム</h2>
        <form action="top.php" method="POST">
            <p>
                <label for="email">メールアドレス：</label>
                <input type="email" name="email">
                <!-- 違う書き方もある。*endifを使うやり方。詳しくは動画または、register.phpを参照するように -->
                <?php if(isset($_SESSION['email'])){?>
                    <p><?php echo $_SESSION['email'];?></p>
                <?php }?>
                <p>
                    <label for="password">パスワード：</label>
                    <input type="password" name="password">
                    <?php if(isset($_SESSION['password'])){?>
                        <p><?php echo $_SESSION['password'];?></p>
                    <?php }?>
                </p>
            <p>
                <input type="submit" value="ログイン">
            </p>
        </form>
        <a href="./siginup_form.php">新規登録はこちら</a>
</body>
</html>

