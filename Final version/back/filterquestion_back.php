<?php
	include "db.php";
//	echo "back";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$category=$response['category'];
	$level=$response['level'];
	if(trim($category)==trim("all") && trim($level)==trim("all")){
		$sql="select * from question";
	}
	elseif(trim($category)==trim("all")){
		$sql="select * from question where `level` = '$level'";
	}
	elseif(trim($level)==trim("all")){
		$sql="select * from question where `category` = '$category'";
	}
	else{
		$sql="select * from question where `category` = '$category' and `level`='$level'";
	}
	$query = $db->query($sql);
	$result=$query->fetchAll();
	$data=[];
	foreach ($result as $row){
		$data[]=array('id'=>$row['id']);
					/*  'name'=> $row['name'],
					  'description'=>$row['description'],
					  'category'=>$row['category'],
					  'code'=>$row['code'],
					  'template'=>$row['template'],
					  'input1'=>$row['input1'],
					  'output1'=>$row['output1'],
					  'input2'=>$row['input2'],
					  'output2'=>$row['output2'],
					  'input3'=>$row['input3'],
					  'output3'=>$row['output3'],
					  'input4'=>$row['input4'],
					  'output4'=>$row['output4'],
					  'level'=>$row['level']);*/
	}
	echo json_encode($data);
?>

 