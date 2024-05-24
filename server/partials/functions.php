<?php
function get_data()
{
    $disc_list = file_get_contents("dischi.json");
    return json_decode($disc_list, true);
}

function like($index, $list)
{
    $list[$index]["like"] = !$list[$index]["like"];
    file_put_contents("dischi.json", json_encode($list, JSON_PRETTY_PRINT));
    return $list;
}

function send_request($data)
{
    $response_data = [
        "response" => $data,
    ];

    $json_list = json_encode($response_data);

    header("Content-Type: application/json");

    echo $json_list;
}
