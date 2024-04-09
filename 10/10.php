<?php

function square_digits($num)
{
    return (int) implode("", array_map(fn ($n) => $n ** 2, str_split((string) $num)));
}

// Top Answer sort by best practice
// function square_digits($num)
// {
//     return implode(array_map(function ($n) {
//         return $n * $n;
//     }, str_split($num))) + 0;
// }
