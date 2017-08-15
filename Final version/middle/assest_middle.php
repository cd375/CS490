<?php include "conf.php";?>
<?php
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$studentId=$_COOKIE['userid'];
	$data=[];
	foreach($response as $r){
		$data[]=array('studentId'=>$studentId,
					'answer'=>$r['ans'],
					'id'=>$r['id']);
//		question_project($data);
	}
	$res_proejct=question_project($data);	
	echo $res_proejct;
//	echo count($response);
function question_project($data){
//	$data = array('studentId'=>$studentId,'answers'=>$response);
	$url = $GLOBALS['BACK_PATH']."assest_back.php";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
	$response = curl_exec($ch);
	curl_close ($ch);
	return $response;
}
?>