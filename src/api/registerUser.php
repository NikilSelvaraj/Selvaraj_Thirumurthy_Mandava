<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $email = $request->email;
    $password = $request->password;
    $password_hash = password_hash($password,
    PASSWORD_DEFAULT, array('cost' => 9));
    $userType = $request->userType;
    $id = (int)((rand() * rand())/rand());
    $sql = "INSERT INTO Customer (First_Name,Last_Name,Email,Password,User_Type,ID) VALUES ('$firstName','$lastName','$email','$password_hash','$userType',$id)";
    $result = mysqli_query($db, $sql);
    if($result){
        http_response_code(201);
    }
    else{
         http_response_code(422); 
    }
         
}
?> 