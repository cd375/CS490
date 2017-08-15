<?php
//Dhawal Khatiwala
//cs 490 Alpha version
	include "db.php";

	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	 
	$name="none";$pass="none";

	if(isset($response['name'])) $name = $response['name'];
	if(isset($response['pass'])) $pass = $response['pass'];

	//query
	$sql="select * from users where  `username` like '$name' and `password` like '$pass'";
	$query = $db->query($sql);
	$result=$query->fetchAll();
	if($result) echo "Project Accept";
	else echo "Project Reject";	
?>
 