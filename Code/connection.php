<?php
//$dbServerName = "108.179.194.18";
$dbServerName = "localhost";
$dbUsername = "solidpsr_usrweb";
$dbPassword = "zG2(x9gG}glL";
$dbName = "solidpsr_webpage";


$conn = new mysqli($dbServerName, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
