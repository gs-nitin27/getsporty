<?php


//if (strtolower($_SERVER['REQUEST_METHOD']) === 'options') {
         
    //     echo 'Allowed';
  //       exit;
//}

header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
         header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
         header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization');
         header('Access-Control-Allow-Credentials: true');

$con = mysql_connect('localhost','root','');
if($con)
{
     $selected = mysql_select_db('getsport_staging') or die("Could not select databasename");
}
else
{
echo "could not connect";
} 

?> 
