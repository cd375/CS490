<?php include "conf.php";?>

<?php
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	print_r($response);
	/*$id=$response['id'];
	$name="none";$level="none";
	if(isset($response['description'])) $description = $response['description'];
	if(isset($response['answer'])) $answer = $response['answer'];
	if(isset($response['questionname'])) $questionname = $response['questionname'];
	//$res_proejct=question_project($id,$name,$description,$level);	
	echo "test";

	function question_project($id,$description,$answer,$questionname){
	$data = array('id'=>$id,'questionname'=>$questionname,'description'=>$description,'answer' => $answer);
	$url = $GLOBALS['BACK_PATH']."questionadd_back.php";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
	$response = curl_exec($ch);
	curl_close ($ch);
	return $response;
	}*/
	?>
