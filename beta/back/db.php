<?php
//database connection

 
	define ('DB_HOST','sql2.njit.edu');
	define ('DB_USER','drk25');
	define ('DB_PASS','tertiary5');
 
define ('DB_NAME','drk25');

$dsn = "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8";
$db = new PDO($dsn, DB_USER, DB_PASS);
?>