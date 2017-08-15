<?php include "conf.php";?>

<html>
	<head>
		<meta charset="utf-8">
		<link href="student_front.css" rel="stylesheet">
	</head>
	<body>
		<h2><center>Student Exam Page</center></h2>
<script>
	var EX=<?php $s="none";	if(isset($_POST['examTable'])) $s=$_POST['examTable'];echo "'$s'";?>;
</script>
 
<script src="studentExampage.js" type="text/JavaScript"></script>
		
		<div>
			<input type="button" onclick="ajaxSubmitAnswer();" value="Submit"></input>
		</div>
	</body>
	
	<div id="ajaxDiv">
	</div>
</html>
