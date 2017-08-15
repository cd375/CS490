<?php
	include "db.php";
	$str_json = file_get_contents('php://input'); 
	$response = json_decode($str_json, true); // decoding received JSON to array
	$mode=1;
	foreach($response as $r){
		$studentId=$r['studentId'];
		$ans=$r['answer'];
		$qid=$r['id'];
		$sql="select * from question where `id`='$qid'";
		$query=$db->query($sql);
		$res=$query->fetch();
		$main=$res['code'];
		$main=rtrim($main);
		$main=rtrim($main,"}");
		$code=$main."\n\t".$ans."\n}";
		for($i=1;$i<5;$i++){
			//write input file
			$input=$res['input'.$i];
			if($mode==1){
				exec("cp -rf ./backup/in.txt .");
				exec("cp -rf ./backup/Main.java .");
				file_put_contents("Main.java",$code,FILE_APPEND);
				file_put_contents("in.txt",$input,FILE_APPEND);
			}
			else{
				file_put_contents("in.txt",$input);
				//execute java file
				file_put_contents("Main.java",$code);
			}
			exec("javac Main.java");
			if(file_exists("Main.class")){
				$output=exec("java Main <in.txt");
				unlink("Main.class");
			}
			else{
				$output='';
			}
			$s='output'.$i;
			$sql="update `answer` set `code`='$ans' ,`$s`='$output' where `stdId`='$studentId' and `quesId`='$qid'";
			$query = $db->query($sql);
		}
		if($query) echo "submit success";
		else echo "fail";
	}
	//mark that student has submitted once
	$sql="select * from exam where `status` = '2'";
	$query = $db->query($sql);
	$result=$query->fetch();
	$exam=$result['id'];
	$exam=$exam.trim(" ");
	$exam=$exam."end";
	$sql="update `users` set `current_exam`='$exam' where `id` = '$studentId'";
	$query = $db->query($sql);
?>
