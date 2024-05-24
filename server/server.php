<?php
require_once __DIR__ . "/partials/functions.php";

$list = get_data();
// $like_index;

if (isset($_POST["like_index"])) {

    echo "if";
    echo " " . $_POST["like_index"];

    $like_index = $_POST["like_index"];

    $list = like($like_index, $list);

}
send_request($list);
