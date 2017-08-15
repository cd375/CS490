<?php
	include "db.php";
//	echo "back";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	 
	$id=$response['id'];
	if(isset($response['name'])) $name = $response['name'];
	if(isset($response['level'])) $level = $response['level'];
	if(isset($response['description'])) $description = $response['description'];
	
	$sql="insert into `question` (`id`, `name`,`description`,`level`) VALUES ('$id', '$name','$description','$level')";
	$query = $db->query($sql);
	if($query)	echo "Add question is done successfuly";
	else echo "Notice: add question is failed";
?>
