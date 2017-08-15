<?php
	include "db.php";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	 
	$name="none";
	if(isset($response['name'])) $name = $response['name'];
	
	$sql="select * from exam where `name` = '$name'";
	$query = $db->query($sql);
	$result=$query->fetch();
	$examId=$result['id'];$examName=$result['name'];$q_string=$result['questions'];
	$questions=[];
	$questions=split(" ",$q_string);
	$data=[];
	foreach($questions as $q){
		$sql="select * from question where `id` = '$q'";
		$query = $db->query($sql);
		$result=$query->fetch();
		$data[]=array("examId"=>$examId,
					  "examName"=>$examName,
					  "questions"=>$q_string,
					  "qId"=>$result['id'],
					  "qName"=>$result['name'],
					  "qLevel"=>$result['level'],
					  "qDescription"=>$result['description']);
		
	}
	echo json_encode($data);
?>

 