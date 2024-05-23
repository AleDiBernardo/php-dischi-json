<?php

$disc_list = file_get_contents("dischi.json");

$list = json_decode($disc_list,true);

$response_data = [
    "response" => $list
];

$json_list = json_encode($response_data);

header("Content-Type: application/json");

echo $json_list;

?>