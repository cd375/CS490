<?php
	include "db.php";
//	echo "back";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	 
	$id=$response['id'];
	$name = $response['name'];
	if(isset($response['questions'])) $questions = $response['questions'];
	
	$sql="insert into `exam` (`id`, `name`, `questions`) VALUES ('$id', '$name', '$questions')";
	$query = $db->query($sql);
	if($query)	echo "Add Exam Table is done successfuly";
	else echo "Add Exam Table is failed";
?>
