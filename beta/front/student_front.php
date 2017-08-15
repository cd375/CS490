<?php include "conf.php";?>
<head>
	<meta charset="utf-8">
	<link href="student_front.css" rel="stylesheet">
	<script src="student_front.js" type="text/JavaScript"></script>
</head>
<body>
<h2><center>Student Page</center></h2>
<div>

	<h3><center>Please Select ExamTable and Participate Exam<center></h3>
	
<form action='studentExampage.php' method='POST'>
	<label>Select ExamTable</label>
	<select id="examTable" name="examTable">
		<option></option>
	<select>
	<input type="submit" value="startExam"></input>
</form>	

</div>
 
<div id="ajaxDiv"></div>
