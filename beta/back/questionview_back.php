<?php
	include "db.php";
//	echo "back";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	 
	$name="none";
	if(isset($response['name'])) $name = $response['name'];
	
	$sql="select * from question where `name` = '$name'";
	$query = $db->query($sql);
	$result=$query->fetchAll();
	$data=[];
	foreach ($result as $row){
		$data[]=array('id'=>$row['id'],'name'=> $row['name'],'description'=>$row['description'],'level'=>$row['level']);
	}
	echo json_encode($data);
?>

 