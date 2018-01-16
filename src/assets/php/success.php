<?php
include('config1.php');
include('success_submit.php');

$status=$_POST["status"];
$firstname=$_POST["firstname"];
$amount=$_POST["amount"];
$txnid=$_POST["txnid"];
$posted_hash=$_POST["hash"];
$key=$_POST["key"];
$productinfo=$_POST["productinfo"];
$email=$_POST["email"];
$salt="e5iIg1jwi8";




If (isset($_POST["additionalCharges"])) {
       $additionalCharges=$_POST["additionalCharges"];
        $retHashSeq = $additionalCharges.'|'.$salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;
        
                  }
	else {	  

        $retHashSeq = $salt.'|'.$status.'|||||||||||'.$email.'|'.$firstname.'|'.$productinfo.'|'.$amount.'|'.$txnid.'|'.$key;

         }
		 $hash = hash("sha512", $retHashSeq);
		 
       if ($hash != $posted_hash) {
	       echo "Invalid Transaction. Please try again";
	}
	else { 
                 $req = new payment();
               
                 $item = new stdClass();
                 $item->status = $_POST["status"];
                 $item->name = $_POST["firstname"];
                 $item->amount = $_POST["amount"];
                 $item->txnid = $_POST["txnid"];
                 $item->hash = $_POST["hash"];
                 $item->key = $_POST["key"];
                 $item->jobid = $_POST["productinfo"];
                 $item->email = $_POST["email"];
                 $item->salt = "e5iIg1jwi8";
                
                 $res = $req->payment($item);         
         

                echo "<h3>Thank You. Your order status is ". $status .".</h3>";
                echo "<h4>Your Transaction ID for this transaction is ".$txnid.".</h4>";
                echo "<h4>We have received a payment of Rs. " . $amount . ". Your order will soon be shipped.</h4>";      
      
      ?>
<script>          
        setTimeout(function() {
              window.location = 'http://localhost:4200/#/jobdashboard';
        }, 10000);       
</script> 





                <!-- echo $productinfo;
          echo "<h3>Thank You. Your order status is ". $status .".</h3>";
          echo "<h4>Your Transaction ID for this transaction is ".$txnid.".</h4>";
          echo "<h4>We have received a payment of Rs. " . $amount . ". Your order will soon be shipped.</h4>";
          --> 
          <?php 
	}         
?>	