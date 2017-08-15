<?php
	include "db.php";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$sql="select * from question";
	$query = $db->query($sql);
	$result=$query->fetchAll();

	$data=[];
	foreach ($result as $row){
		$data[]=array('name'=> $row['name'],'description'=>$row['description'],'level'=>$row['level']);
	}
	echo json_encode($data);
?>

 