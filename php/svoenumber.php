
<?php



//иньекции
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
$numberErr = "";
$number = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $_POST['number'] = test_input($_POST["number"]);

 if (empty($_POST["number"])) {
    $numbErr = "number is required";
  } else {
    $number = test_input($_POST["number"]);
  }
}
if($number != ""){
	$body = file_get_contents("https://sms.ru/sms/send?api_id=758A313D-CF53-B4DF-E3AA-915D185F96F2&to=79198223342&msg=".urlencode($number)."&json=1"); # Если приходят крякозябры, то уберите iconv и оставьте только urlencode("Привет!")
$json = json_decode($body);
print_r($json); // Для дебага
// Для разбора $json можно использовать кусок кода из предыдущего примера.
}


echo $number;

