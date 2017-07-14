
<?php
include('config1.php');
include('services/angularapi.php');
include('services/getListingService.php');


   

if($_REQUEST['act'] == 'contentangular')
{
	$req    =   new angularapi();
	$res= $req->getContentInfo();
    echo json_encode($res); 
}

else if($_REQUEST['act'] == 'angulartest')
{
	     $username       =  $_REQUEST['email'];
		   $password       =  md5($_REQUEST['password']); 
      // print_r($_REQUEST);die;  
         $req    =   new angularapi();
         $res = $req->angulartest($username, $password);
         if($res)
         {
         $data = array("data" =>$res);		 
          echo json_encode($res);
          }
          else
          {
          $data = array("data" =>0);        
          echo json_encode($res);
          }

}


else if($_REQUEST['act'] == 'contentangularlex')
{
  $userid      =  $_REQUEST['userid'];
	$req    =   new angularapi();
	$res= $req->getContent($userid);
    echo json_encode($res); 
}

else if($_REQUEST['act'] == 'createcontent')
{        


        $data =  json_decode(file_get_contents("php://input"));
        $item                     =  new stdClass();
        $item->id           =  '0';
        $item->userid       =  '11';
        $item->title        =  $data->title;
        $item->content      =  $data->content;
        $item->url          =  $data->url;
        $item->publish      =  "0";

        $req    =   new angularapi();
        $res = $req->createcontent($item);		 
        echo json_encode($res);
}

else if($_REQUEST['act'] == "sportlisting")
{
$req = new GetListingService();
$res = $req->getsportlisting();
echo json_encode($res);
}



else if($_REQUEST['act'] == 'createevent')
{        
        $data =  json_decode(file_get_contents("php://input"));
        $item                     =  new stdClass();



        $item->id                        = 0;
        $item->userid                    = $data->userid;
        $item->name                      = $data->name;
        $item->description               = $data->description;
        $item->type                      = $data->entry_type;
        $item->sport                     = $data->sport;
        $item->address1                  = $data->address;
        $item->city                      = $data->city;
        $item->state                     = $data->state;
        $item->event_links               = $data->event_link;
        $item->start_date                = $data->start_date;
        $item->end_date                  = $data->end_date;
        $item->email_app_collection      = $data->organizer_email;
        $item->mobile                    = $data->mobile;
        $item->eligibility1              = $data->eligibility;
        $item->tandc1                    = $data->terms_cond;
        $item->ticket_detail             = $data->ticket;
        $item->image                     = $data->image;

        $req    =   new angularapi();
        $res = $req->createevent($item);     
        echo json_encode($res);
}

else if($_REQUEST['act'] == 'upload')
{   

$data =  file_get_contents("php://input");
$imageData = base64_decode($data);
$source = imagecreatefromstring($imageData);
$angle = 0;
$imageName = 'res_'.time().'.jpeg';
$rotate = imagerotate($source, $angle, 0); 
$imageSave = imagejpeg($rotate,$imageName,100);

$newpath = "/image/";
move_uploaded_file($imageSave,$newpath.$imageSave);

echo json_encode($imageName);

}

else if($_REQUEST['act'] == 'test')
{
  $data = file_get_contents("php://input");
  print_r($data);

}

else if($_REQUEST['act'] == 'profiledata')
{
  $userid      =  $_REQUEST['userid'];
  $req    =   new angularapi();
  $res= $req->profiledata($userid);
    echo json_encode($res); 
}

else if($_REQUEST['act'] == 'getUserProfile')
{
$userid         =  @$_REQUEST['userid'];
$prof_id        =  @$_REQUEST['prof_id'];
$req            =  new angularapi();
$user_res       = $req->userdata($userid);

if($user_res==0)
{
  $user = array('status' => 0, 'data'=> $user_res, 'msg'=>'User is Not Register');
  echo json_encode($user);
  die();
}

else
  {
       $req            = new angularapi();
       $res            = $req->listuserdata($userid);
       //print_r($res) ;die();
               if($res == 0)
               {
                    if($prof_id==1) 
                    {
                      $data = file_get_contents('json/Athletes.json');
                    }
                   else if ($prof_id==2) 
                    {
                      $data = file_get_contents('json/coach_profile.json');
                    }
                   else if ($prof_id == 13) 
                    {
                      $data = file_get_contents('json/other_profile.json');
                    }
                    else
                    {
                      $data = file_get_contents('json/other_profile.json');
                    }
               }
                else
                {
                  
                  $data = $res['user_detail'];

                }
                  $data = json_decode($data); 
                  $count = 0;
                  $count1 = 0; 
                  if (is_array($data) || is_object($data))
                  {
                  foreach ($data as  $value) 
                  {
                    if (is_array($value) || is_object($value))
                     {
                  
                        foreach ($value as  $value1)
                         {
                         if (is_array($value1) || is_object($value1))
                         {
                              foreach ($value1 as $value2) 
                              {
                                  
                                    if (is_array($value2) || is_object($value2))
                                     {

                                      foreach ($value2 as  $value3) 
                                      {
                                            if($value3 != '')
                                            {
                                                ++$count;
                                            }
                                            else
                                            {
                                                ++$count1;
                                            }
                                      }                          
                              }
                            
                        }
                  }
}
}
}
}
                     $comp = ($count/($count+$count1+1))*100;
                     $comp1=round($comp,2);
                     //$prof_status=$comp1.''.'%';
                    }
      
            $data->user = $user_res; 
            if (is_array($data->user) || is_object($data->user))
            {
                foreach ($data->user as $value) 
                {
                  if($value != '')
                  {
                     ++$count;
                   }
                   else
                   {
                   ++$count1;
                    }
                 }    
                    $comp = ($count/($count+$count1+1))*100;
                     $comp2=round($comp,2);
                    // $user_status=$comp1.''.'%';
            }

$Total_profile = ($comp1+$comp2)/200*100;     // Total user and profile Status calculate
$prof_status=$Total_profile;
$data->profile = (int)$Total_profile;
$res  = json_encode($data);//json_encode($data); 
$user = array('status' => 1, 'data'=> json_decode($res), 'msg'=>'Success');
echo json_encode($user);

}

?>