<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
if($_SERVER['REQUEST_METHOD'] == "OPTIONS"){
    exit();
}
$con = mysql_connect('localhost','getsport_staging','7UNMH?n#VtGy');
if($con)
{
     $selected = mysql_select_db('getsport_staging') or die("Could not select databasename");
}
else
{
echo "could not connect";
} 

?>