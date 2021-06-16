<?php

    // echo 'ランキング';

    $dsn = 'mysql:host=localhost;dbname=ff14';
    $user = 'FF14_user';
    $pass = 'Joniesa0';

    try{
        $dbh = new PDO($dsn,$user,$pass,[
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        
    ]);
        // echo '接続成功';

        $sql = 'SELECT * FROM user ORDER BY correct desc';
        $stmt = $dbh->query($sql); 
        $result = $stmt->fetchall(PDO::FETCH_ASSOC);
        // var_dump($result);
        $dbh = null;
    } catch(PDOException $e){
        echo '接続失敗'. $e->getMessage();
        exit();
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>順位</th>
            <th>名前</th>
            <th>正解数</th>
        </tr>

        <tr>
            <th>1</th>
            <th><?php echo $result[0]['name'] ?></th>
            <th><?php echo $result[0]['correct'] ?></th>        
        </tr>

        <tr>
            <th>2</th>
            <th><?php echo $result[1]['name'] ?></th>
            <th><?php echo $result[1]['correct'] ?></th>        
        </tr>

        <tr>
            <th>3</th>
            <th><?php echo $result[2]['name'] ?></th>
            <th><?php echo $result[2]['correct'] ?></th>        
        </tr>

        <tr>
            <th>4</th>
            <th><?php echo $result[3]['name'] ?></th>
            <th><?php echo $result[3]['correct'] ?></th>        
        </tr>

        <tr>
            <th>5</th>
            <th><?php echo $result[4]['name'] ?></th>
            <th><?php echo $result[4]['correct'] ?></th>        
        </tr>

    </table>

    <form action="index.html">
        <input type="submit" value='戻る'>
    </form>
    
</body>
</html>