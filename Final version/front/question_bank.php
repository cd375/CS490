<?php include "conf.php";?>
<?php include "instructor_head.php";?>
<script src="question_bank.js" type="text/JavaScript"></script>
<link href="css/onlineexam.css" rel="stylesheet">
<body>
<center>
	<h2>Make New Questions or Modify Existing Questions</h2>
	<div>
		<label>Questions</label>
		<select id="question_list" name="question_list" width="50px" onchange="viewQuestion();">
			<option></option>
		</select>
	</div>
	<div>
	<div>
		<input type="hidden" name="qID" id="qID">
		<label>Question Name
		<input type="text" name="qName" id="qName" placeholder="Question Name"/>
		</label><br>
		<label>Question Description</label><br>
		<textarea name="qDescript" id="qDescript" placeholder="Question Description"></textarea><br>
		<label>Main Code</label><br>
		<textarea name="qCode" id="qCode" placeholder="Main Code"></textarea><br><br>
		<label>Template Code</label><br>
		<textarea name="template" id="template" placeholder="Template Code"></textarea><br><br>
		<div>	
			<table>
				<thead style="background:#d9edf7;">
					<tr>
						<th>Test Cases</th>
						<th>Answers</th>
					</tr>
				<thead>
				<tbody>
					<tr>
						<td><input type="text" placeholder="TestCase1" id="input1"></td>	
						<td><input type="text" placeholder="Answer1" id="output1"></td>
					</tr>
					<tr>
						<td><input type="text" placeholder="TestCase2" id="input2"></td>
						<td><input type="text" placeholder="Answer2" id="output2"></td>
					</tr>
					<tr>
						<td><input type="text" placeholder="TestCase3" id="input3"></td>
						<td><input type="text" placeholder="Answer3" id="output3"></td>
					</tr>
					<tr>
						<td><input type="text" placeholder="TestCase4" id="input4"></td>
						<td><input type="text" placeholder="Answer4" id="output4"></td>
					</tr>
				</tbody>
			</table>
		</div><br>
	</div>
		<div>
			<label>Category
				<select name="qCategory" id="qCategory">
					<option></option>
					<option value="for">For</option>
					<option value="while">While</option>
					<option value="method">Method</option>
				</select>
			</label><br>
			<label>Difficulty level
				<select name="qLevel" id="qLevel">
					<option></option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</label>
		</div>
	</div>
	<div>
		<h2>
			<input type="button" class="btn btn-lg btn-primary" value="New" onclick="newQuestion();"></input>
			<input type="button" class="btn btn-lg btn-success" value="Add" onclick="addQuestion();"></input>
		</h2>
	</div>
</center>
<div id="ajaxDiv"></div>
<div id="alert"></div>
</body>
