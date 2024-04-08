<?php

function positive_sum($arr)
{
    $total = 0;

    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] > 0) {
            $total += $arr[$i];
        }
    }

    return $total;
}

// Top answer sort by best practice
// function positive_sum($a)
// {
//     return array_sum(array_filter($a, function ($n) {
//         return $n > 0;
//     }));
// }
