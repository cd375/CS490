<?php include"conf.php";?>
<?php include "instructor_head.php";?>
<?php
	$id=$_GET['id'];
	echo "<script>var ID='$id'</script>";
?>
<script src="showcode.js"></script>
<h2>Submitted Code</h2>
<div class="container" id="showcode"></div>