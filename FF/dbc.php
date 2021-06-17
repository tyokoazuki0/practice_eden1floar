<?php
   
    

    

   
    // var_dump($dbh);

    

?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
    <tr>
        <th>No</th>
        <th>名前</th>
        <th>タイム</th>
    </tr>
    <?php foreach($result as $column); ?>
    <tr>
         <td><?php echo $column['id'] ?></td>
         <td><?php echo $column['name'] ?></td>
         <td><?php echo $column['time'] ?></td>
    </tr>
    </table>
</body>
</html> -->


<?php 

    $post = $_POST;
    // var_dump($post);

    foreach($post as $key => $value){
        // echo $key.$value;
    }

    $dsn = 'mysql:host=localhost;dbname=ff14';
    $user = 'FF14_user';
    $pass = 'Joniesa0';

    try{
        $dbh = new PDO($dsn,$user,$pass,[
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        
    ]);
        // echo '接続成功';

        $sql = 'INSERT INTO user(id,name,correct,time)
                values(:id,:name,:correct,:time)';
        $stmt = $dbh->prepare($sql);
        $stmt->bindvalue(':id',4,PDO::PARAM_INT);
        $stmt->bindvalue(':name',$post['name'],PDO::PARAM_STR);
        $stmt->bindvalue(':correct',$post['hidden_correct'],PDO::PARAM_INT);
        $stmt->bindvalue(':time',$post['hidden_time'],PDO::PARAM_STR);
        $stmt->execute();

        $result = $stmt->fetchall(PDO::FETCH_ASSOC);
        // var_dump($result);
        $dbh = null;
    } catch(PDOException $e){
        echo '接続失敗'. $e->getMessage();
        exit();
    }

    require_once('runking.php');
?>

<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>名前：<?php echo $post['name'] ?></p>
    <p>正解数：<?php echo $post['hidden_correct']?></p>
    <p>時間：<?php echo $post['hidden_time']?></p>
</body>
</html>