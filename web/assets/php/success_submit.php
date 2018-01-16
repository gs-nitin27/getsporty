<?php 
Class payment
{
    public function payment($paymentdata)
    {

        $date = date("Y-m-d");
        $date1 = explode('-', $date);
        $monthNum  = $date1[1];
        $dateObj   = DateTime::createFromFormat('!m', $monthNum);
        $monthName = $dateObj->format('F');
        
        $year = date("y");
        $invoiceid = "GSJ/1/".$paymentdata->jobid."/".$date1[2].$date1[1].$year;
 
    $query = mysql_query("INSERT INTO `gs_billing`(`userid`,`invoice_id`,`user_item`,`module`,`amount`,`date`,`billing_status`,`transaction_id`,`date_created`,`date_updated`) VALUES('302','$invoiceid','$paymentdata->jobid','job','$paymentdata->amount',CURDATE(),'1','$paymentdata->transaction_id',CURDATE(),CURDATE()) ");
    if($query)
    {
        return 1;
    } 
    else
    {
        return 0;
    }
    }

}
?>

<!-- Array ( 
    [mihpayid] => 403993715517131452 
    [mode] => CC 
    [status] => success 
    [unmappedstatus] => captured 
    [key] => rjQUPktU 
    [txnid] => e0add3eb19b35909e881 
    [amount] => 700.0 
    [addedon] => 2018-01-15 18:14:51 
    [productinfo] => 182 
    [firstname] => Nitin Agarwal 
    [lastname] => 
    [address1] => 
    [address2] => 
    [city] => 
    [state] => 
    [country] => 
    [zipcode] => 
    [email] => dhsnitin@gmail.com 
    [phone] => 9876543210 
    [udf1] =>
    [udf2] =>
    [udf3] => 
    [udf4] => 
    [udf5] => 
    [udf6] => 
    [udf7] => 
    [udf8] => 
    [udf9] => 
    [udf10] => 
    [hash] => 711d902845d88321bd3bf14160e32a2c6ab872e1d9ed5f2b56dd9e8cfc1204f146c41f533c6a6d0e93415526c8c0fe7af1e3e4db8de09b055d2fc2eab3bc2d59 
    [field1] => 339648 
    [field2] => 903825 
    [field3] => 20180115 
    [field4] => MC 
    [field5] => 309527196071 
    [field6] => 00 
    [field7] => 0 
    [field8] => 3DS 
    [field9] => Verification of Secure Hash Failed: E700 -- Approved -- Transaction Successful -- Unable to be determined--E000 [PG_TYPE] => AXISPG 
    [encryptedPaymentId] => DF8A05559D15420DAB7DC11706F7E1EA 
    [bank_ref_num] => 339648 
    [bankcode] => CC 
    [error] => E000 
    [error_Message] => No Error 
    [name_on_card] => payu 
    [cardnum] => 512345XXXXXX2346 
    [cardhash] => This field is no longer supported in postback params. 
    [amount_split] => {"PAYU":"700.0"} 
    [payuMoneyId] => 1111554202 
    [discount] => 0.00 
    [net_amount_debit] => 700 
    
    ) -->