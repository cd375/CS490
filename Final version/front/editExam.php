<?php include "conf.php";?>
<?php include "instructor_head.php";?>

<script src="editExam.js" type="text/Javascript"></script>
<body>
	<div id="user">
	</div>
	<div name="editExamTable" id="editExamTable">
		<center>
			<h3>Make exam</h3>
			<label>Enter title of exam</label>
			<input type="text" name="eName" id="eName"><br>
			<div>
				<label>Category
					<select name="qCategory" id="qCategory" onchange="filterQuestion();">
						<option value="all">All</option>
						<option value="for">For</option>
						<option value="while">While</option>
						<option value="method">Method</option>
					</select>
				</label>
				<label>Difficulty level
					<select name="qLevel" id="qLevel" onchange="filterQuestion();">
						<option value="all">All</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</label>
			</div>
		</center><br>
		<div class="row">
			<div class="col-md-7">
				<div class="panel panel-info">
					<div class="panel-heading">
						<h4><center>Question Bank</center></h4>
					</div>
					<div id="questions"></div>
				</div>
			</div>
			<div class="col-md-1">
				<input type="button" class="btn btn-lg btn-primary" value=">>" style="position: fixed;bottom:50%;" onclick="addquestion();">
				<input type="button" class="btn btn-lg btn-primary" value="<<" style="position: fixed;bottom:30%;" onclick="removeq();">
			</div>
			<div class="col-md-4">
				<div class="panel panel-warning">
					<div class="panel-heading">
						<h4><center>Test</center></h4>
					</div>
					<div id="test"></div>
				</div>
			</div>
		</div>
		
		
	</div>
	<div class="button">
			<center>
				<input type="button" class="btn btn-lg btn-primary" value="Cancel" onclick="cancel();">
				<input type="button" value="Done" class="btn btn-lg btn-success" onclick="examAdd();">
			</center>
	</div>
	<div id="alert"></div>
</body>
