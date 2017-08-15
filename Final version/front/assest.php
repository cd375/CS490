<?php include "conf.php"?>
<?php include "instructor_head.php";?>
<script src="assest_inst.js"></script>
<style>
	textarea{
		width:300px;
		border:none;
	}
</style>
<body>
	<div id="user"></div>
	<center><h3>Assess Exam</h3></center>
	<div align="right">
		<input type="button" value="Release" class="btn btn-info" onclick="release();"/>
	</div>
	<div id="ajaxDiv"></div>
	<div class="container" id="alert"></div>
</body>
</html>