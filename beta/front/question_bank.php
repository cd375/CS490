<?php include "conf.php";?>
<script src="question_bank.js" type="text/JavaScript"></script>
<div>
	<a href="instructor_front.php"><input type="button" value="Back"></a>
</div>
<div>
	<label>Questions</label>
	<select id="question_list" name="question_list" width="50px">
		<option></option>
	</select>
	<input type="button" value="View" onclick="viewQuestion();"></input>
	<input type="button" value="New" onclick="newQuestion();"></input>
	<input type="button" value="Add" onclick="addQuestion();"></input>
</div>
<div>
	<label>Qustion ID
	<input type="text" name="qID" id="qID"/>
	</label><br>
	<label>Qustion Name
	<input type="text" name="qName" id="qName"/>
	</label><br>
	<label>Question Description</label><br>
	<textarea name="qDescript" id="qDescript"></textarea><br>
	<label>Difficulty level</label>
	<input type="text" name="qLevel" id="qLevel">
</div>
 
<div id="ajaxDiv"></div>
