<?php include "conf.php";?>
<?php
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$id=$response['id'];
	$name="none";$level="none";
	if(isset($response['name'])) $name = $response['name'];
	if(isset($response['level'])) $level = $response['level'];
	if(isset($response['description'])) $description = $response['description'];
	$res_proejct=question_project($id,$name,$description,$level);	
	echo $res_proejct;

function question_project($id,$name,$description,$level){
	$data = array('id'=>$id,'name'=>$name,'description'=>$description,'level' => $level);
	$url = $GLOBALS['BACK_PATH']."questionadd_back.php";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
	$response = curl_exec($ch);
	curl_close ($ch);
	return $response;
}

?>