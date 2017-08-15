<?php
	include "db.php";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$name=$response['name'];
	$sql="select * from exam where `name` = '$name'";
	$query = $db->query($sql);
	$result=$query->fetch();
	$q_string=$result['questions'];
	$temp=[];
	$temp=split(" ",$q_string);
	$data=[];
	foreach($temp as $t){
		$sql="select * from question where `id` = '$t'";
		$query = $db->query($sql);
		$result=$query->fetch();
		$data[]=array('id'=>$result['id'],'name'=>$result['name'],'description'=>$result['description'],'level'=>$result['level']);
	}
	
	echo json_encode($data);
?>