<?php

function even_or_odd(int $n): string
{
    return $n % 2 == 0 ? "Even" : "Odd";
}

// Top answer sort by best practice 
// function even_or_odd(int $n): string
// {
//     return $n % 2 ? "Even" : "Odd";
// }
