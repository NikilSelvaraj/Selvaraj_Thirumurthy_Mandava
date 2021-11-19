<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;
    $table = 'Customer';
    $sql = "SELECT First_Name, Last_Name, User_Type, ID, Email FROM $table
    WHERE Email = '$email' AND Password = '$password'";
    $result = mysqli_query($db, $sql);
    if($result){
        $rows = array();
        while($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }
        echo json_encode($rows);
    }
    else{
        $table = 'Personel';
        $result = mysqli_query($db, $sql);
        if($result) {
            $rows = array();
            while($r = mysqli_fetch_assoc($result)) {
                $rows[] = $r;
            }

            echo json_encode($rows);

        }
        http_response_code(422); 
    }
         
}
?> 