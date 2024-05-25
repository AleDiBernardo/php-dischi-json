<?php
require_once __DIR__ . "/partials/functions.php";

$list = get_data();

if (isset($_POST["like_index"])) {

    $like_index = $_POST["like_index"];

    $list = like($like_index, $list);

}

if (isset($_GET['like'])) {

    $list = array_filter($list, function($list){
        return $list["like"] === true;
    });
}

send_request($list);
