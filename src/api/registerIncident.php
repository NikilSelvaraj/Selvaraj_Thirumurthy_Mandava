<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $firstName = $request->fname;
    $lastName = $request->lname;
    $email = $request->email;
    $phoneNumber = $request->phoneNumber;
    $register = $request->register;
    $query=$request->query;
    $sql = "INSERT INTO Register_Incident(First_Name,Last_Name,Email,Phonenumber,register,query)
    VALUES('$firstName','$lastName','$email','$phoneNumber','$register','$query')";
    $result = mysqli_query($db, $sql);
    if($result) {
        http_response_code(200);
    } else {
        http_response_code(422);
    }
}
?>