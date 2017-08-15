<?php include "conf.php";?>

<script src="editExam.js" type="text/Javascript"></script>
<script src="selectExam.js" type="text/Javascript"></script>
<div>
	<a href="instructor_front.php"><input type="button" value="Back"></a>
</div>
<div name="editExamTable" id="editExamTable">
	<h3>Edit exam(Type question Numbers)</h3>
	<label>Exam No</label><br>
	<input type="text" id="examTableID" name="examTableID"/><br>
	<label>Exam Name</label><br>
	<input type="text" name="eName" id="eName"><br>
	<label>Please Enter question Numbers</label><br>
	<input type="text" id="questionNO" name="questionNO"/><br>
	<input type="button" value="Add ExamTable" onclick="addExamTable();">
</div>
<div name="selectExam" id="selectExam">
	<h3>Please Select Exam Tables</h3>
	<label>ExamTable list</label>
	<select name="examList" id="examList">
		<option></option>
	</select><br>
	<input type="button" value="View ExamTable" onclick="viewExamTable();"></input>
	<input type="button" value="Select ExamTable" onclick="selectExamTable();"></input>
	<input type="button" value="Start Exam" onclick="startExam();"></input>
	<div>
		<label>ExamTable NO:</label>
		<input type="text" id="examID" name="examID" /><br>
		<label>Exam Name</label>
		<input text id="examName" name="examName"/><br>
		<label>Question Numbers</label>
		<input id="examQuestions" name="examQuestions"/><br>
	</div>
</div>
<div>
	<h4>ExamTable Details</h4>
</div>
<div id="ajaxDiv">
</div>