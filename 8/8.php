<?php

function getCount($str)
{
    return count(array_filter(str_split($str), fn ($n) => $n == "a" || $n == "e" || $n == "i" || $n == "o" || $n == "u"));
}

// Ton Answer sort by best practice
// function getCount($str)
// {
//     return preg_match_all('/[aeiou]/i', $str, $matches);
// }
