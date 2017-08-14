//<?php
// $dbhost = 'localhost:3306';  // mysql服务器主机地址
// $dbuser = 'root';            // mysql用户名
// $dbpass = 'root';            // mysql用户名密码
// $dbname = 'wechat';          // mysql数据库
// $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
// if($conn->connect_error )
// {
//     die('Could not connect: ' . mysqli_error());
// }
// $sql = "select*from newlastlist";
// $result = $conn->query($sql);
// $data = json_encode($result);
// return $data;
// echo json_encode($data);
// ?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$conn = new mysqli("localhost:3306", "root", "root", "wechat");
$result = $conn->query("select*from newlastlist");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"name":"' . $rs["name"] . '",';
  $outp .= '"img":"'  . $rs["img"]    . '",';
  $outp .= '"content":"'. $rs["content"]   . '"}';
}
$outp ='{"newlist_data":['.$outp.']}';
$conn->close();
echo($outp);
?>