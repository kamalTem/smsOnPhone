<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>email tracking</title>
    <link href="css/style.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/js.js"></script> 

    <?php include __DIR__."/php/svoenumber.php";?>
  </head>
    <body>
    
    <form action="" method="post">
    Number: <input type="text" name="number"><br>
    <span class="error">* <?php echo $numberErr;?></span>
    <input type="submit">
    
    </body>
</html>