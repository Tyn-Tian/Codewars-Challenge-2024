# Codewars Challenge 2024 n/365

## Description

A challenge that i will undertake in 2024 to strengthen my JavaScript language and also hone my programming logic.

## Question and others

### 1. Even or Odd

Create a function that takes an integer as an argument and return **"Even"** for even numbers or **"Odd"** for odd numbers.

- Difficulty: _8 kyu_
- Tags:
  - Mathematics
  - Fundamentals
- Link: [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

### 2. Multiply

This code does not execute properly. Try to figure out why.

- Difficulty: _8 kyu_
- Tags:
  - Debugging
  - Fundamentals
- Link: [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

### 3. Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

**Examples**

```javascript
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
```

**Notes**

- The number can be negative already, in which case no change is required.
- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

---

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
- Link: [Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

### 4. Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example **[1,-4,7,12]** => **1 + 7 + 12 = 20**

Note: if there is nothing to sum, the sum is default to 0.

- Difficulty: _8 kyu_
- Tags:
  - Arrays
  - Fundamentals
- Link: [Sum of positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

### 5. Reversed Strings

Completed the solution so that it reverses the string passed into it.

```javascript
'world' => 'dlrow'
'word' => 'drow'
```

- Difficulty: _8 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

### 6. Convert boolean values to strings 'Yes' or 'No'

Complete the method that takes a boolean value and return a **"Yes"** string for **true**, or a **"No"** string for **false**.

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
- Link: [Convert boolean values to string 'Yes' or 'No'](https://www.codewars.com/kata/53369039d7ab3ac506000467)

### 7. Convert a Number to a String!

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

**Examples (input --> output)**

```javascript
123  --> "123"
999  --> "999"
-100 --> "-100"
```

- Difficulty: _8 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Convert a String to a Number!](https://www.codewars.com/kata/5265326f5fda8eb1160004c8)

### 8. Vowel Count

Return the number (count) of vowels in the given string.
We will consider **a**,**e**,**i**,**o**,**u** as vowels for this Kata (but not **y**).
The input will only consist of lower case letters and/or spaces.

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

### 9. Disemvowel Trolls

Troll are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example the string "This website is for losers LOL!" would become "ths wbst s fr lsrs LL!".
Note: for this kata **y** isn't considered a vowel.

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Regular Expressions
  - Fundamentals
- Link: [Disemvowel Trolls](https://www.codewars.com/kata/52fba66badcd10859f00097e)

### 10. Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

**Note**: The function accepts an integer and return an integer.

Happy Coding!

- Difficulty: _7 kyu_
- Tags:
  - Mathematics
  - Fundamentals
- Link: [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

### 11. Highest and Lowest

In this little assignment you are given a string of spacec separated numbers, and have to return the highest and lowest number.

**Examples**

```javascript
higAndLow("1 2 3 4 5"); // return "5 1"
higAndLow("1 2 -3 4 5"); // return "5 -3"
higAndLow("1 9 3 4 -5"); // return "9 -5"
```

**Notes**

- All numebers are valid **Int32**, no need to validate them.
- There will always be at least one number in the input string.
- Output string must be two numbers separated by a single space, and highest number is first.

---

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
  - Strings
- Link: [Highest and Lowest](https://www.codewars.com/kata/554b4ac871d6813a03000035)

### 12. Descending Order

You task is to make a function that can take non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

**Examples:**
Input: **42145** Output: **54421**
Input: **145263** Output: **654321**
Input: **123456789** Output: **987654321**

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
- Link: [Descending Order](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

### 13. Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

**Examples:**

```javascript
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
```

**Input**

A word (string) of length **0 < str < 1000** (In javascript you may get slighly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

**Output**

The middle character(s) of the word represented as a string.

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
  - Strings
- Link: [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

### 14. Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 **below** the number passed in.

Additionally, if the number is negative, return 0.

**Note:** If the number is a multiple of both 3 and 5, only count it once.

- Difficulty: _6 kyu_
- Tags:
  - Mathematics
  - Algorithms
- Link: [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

### 15. Stop gninipS My sdroW!

Write a function that takes in a string of one or more words, and return the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces, Spaces will be included only when more than word is present.

Examples:

```javascript
"Hey fellow warriors"  --> "Hey wollef sroirraw"
"This is a test        --> "This is a test"
"This is another test" --> "This is rehtona test"
```

- Difficulty: _6 kyu_
- Tags:
  - Strings
  - Algorithms
- Link: [Stop gninipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

### 16. Find the odd int

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

**Examples**
**[7]** should return **7**, because it occurs 1 time (which is odd)
**[0]** should return **0**, because it occurs 1 time (which is odd)
**[1,1,2]** should return **2**, because it occurs 1 time (which is odd)
**[0,1,0,1,0]** should return **0**, because it occurs 3 time (which is odd)
**[1,2,2,3,3,3,4,3,3,3,2,2,1]** should return **4**, because it occurs 1 time (which is odd)

- Difficulty: _6 kyu_
- Tags:
  - Fundamentals
- Link: [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

### 17. Who likes it?

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```javascript
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in **"and 2 others"** simply increases.

- Difficulty: _6 kyu_
- Tags
  - Strings
  - Fundamentals
- Link: [Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

### 18. Sum of Digits / Digital Root

Digital root is the recursive sum of all the digits in a number.

Given **n**, take the sum of the digits of **n**. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

**Examples**

```javascript
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

- Difficutly: _6 kyu_
- Tags:
  - Mathematics
  - Algorithms
- Link: [Sum of Digits / Digital Root](https://codewars.com/kata/541c8630095125aba6000c00)

### 19. Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list **a**, which are present in list **b** keeping their order.

```javascript
arrayDiff([1, 2], [1]) == [2];
```

If a value is present in **b**, all of its occurrences must be removed from the other:

```javascript
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
```

- Difficulty: _6 kyu_
- Tags:
  - Arrays
  - Fundamentals
  - Algorithms
- Link: [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009)

### 20. Create Phone Number

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

**Example**

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

- Difficulty: _6 kyu_
- Tags:
  - Arrays
  - Strings
  - Regular Expressions
  - Algorithms
- Link: [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

### 21. Find The Parity Outlier

Your are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integeres except for a single integer **N**. Write a method that takes the array as an argument and returns this "outlier" **N**.

**Examples**

```javascript
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```

- Difficulty: _6 kyu_
- Tags:
  - Algorithms
- Link: [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

### 22. Counting Duplicates

**Count the number of Diplicates**

Write a function that will return the count of **distinct case-insensitive** alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

**Example**
"abcde" -> 0 **# no characters repeats more than once**
"aabbcde" -> 2 **# 'a' and 'b'**
"aabBcde" -> 2 **# 'a' occurs twice and 'b' twice (`b` and `B`)**
"indivisibility" -> 1 **# 'i' occurs six times**
"Indivisibilities" -> 2 **# 'i' occurs seven times** and 's' occurs twice
"aA11" -> 2 **# 'a' and '1'**
"ABBA" -> 2 **# 'A' and 'B' each occur twice**

- Difficulty: _6 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Count the number of Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

### 23. Duplicate Encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is **"("** if that character appears only once in the original string, or **")"** if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Example**

```javascript
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

**Notes**

Assertion messages may be unclear about what they display in some languages. If you read **"...It Should encode XXX"**, the **"XXX"** is the expected result, not the input!

- Difficulty: _6 kyu_
- Tags:
  - Strings
  - Arrays
  - Fundamentals
- Link: [Duplicate Encode](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

### 24. List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

**Example**

```javascript
filter_list([1, 2, "a", "b"]) == [1, 2];
filter_list([1, "a", "b", 0, 15]) == [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]) == [1, 2, 123];
```

- Difficulty: _7 kyu_
- Tags:
  - Lists
  - Filtering
  - Data Structures
  - Fundamentals
- Link: [ListFiltering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

### 25. Mumbling

This time no story, no theory. The examples below show you how to write function **accum** :

**Examples:**

```javascript
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from **a..z** and **A..Z**.

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
  - Strings
  - Puzzles
- Link: [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

### 26. You're a square!

**A square of squares**

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

**Task**

Given an integral number, determine if it's a square number:

_"In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself."_

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

**Examples**

```javascript
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
  - Mathematics
- Link: [You're a square!](https://www.codewars.com/kata/54c27a33fb7da0db0100040e)

### 27. Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

**Example: (Input-->Ouput)**

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

```javascript
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
```

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Isogram](https://www.codewars.com/kata/54ba84be607a92aa900000f1)

### 28. Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```javascript
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
- Link: [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

### 29. Shortest Word

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

- Difficulty: _7 kyu_
- Tags:
  - Fundamentals
- Link: [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

### 30. Replace With Alphabet Position

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

**"a" = 1**, **"b" = 2**, etc.

**Example**

```javascript
alphabetPosition("The sunset sets at twelve o' clock.");
```

Should return **"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"** ( as a string )

- Difficulty: _6 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da)

### 31. Presistent Bugger.

Write a function, **persistence**, that takes in a positive parameter **num** and returns its multiplicative persistence, which is the number of times you must multiply the digits in **num** until you reach a single digit.

For example **(Input-->Output)**:

```javascript
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
```

- Difficulty: _6 kyu_
- Tags:
  - Fundamentals
- Link: [Presistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

### 32. Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function **maskify**, which changes all but the last four characters into **'#'**.

\*\*Examples (input-->output):

```javascript
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
```

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Algorithms
- Link: [Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)

### 33. Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like **[19, 5, 42, 2, 77]**, the output should be **7**.

**[10, 343445353, 3453445, 3453545353453]** should return **3453455**.

- Difficulty: _7 kyu_
- Tags:
  - Arrays
  - Fundamentals
- Link: [Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

### 34. String ends with?

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```javascript
solution("abc", "bc"); // returns true
solution("abc", "d"); // returns false
```

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

### 35. Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

_Example_: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

- Difficulty: _6 kyu_
- Tags:
  - Bits
  - Algorithms
- Link: [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

### 36. Opposite number

Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

Examples:

```javascript
1: -1
14: -14
-34: 34
```

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
- Link: [opposite number](https://www.codewars.com/kata/56dec885c54a926dcd001095)

### 37. Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

- Difficulty: _8 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Remove First and Last Character](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

### 38. Take a Ten Minutes Walk

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

_"Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!)."_

- Difficulty: _6 kyu_
- Tags:
  - Arrays
  - Fundamentals
- Link: [Take a Ten Minutes Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

### 39. Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for **[1, 2, 2]** it should return **9** because 1^2 + 2^2 + 2^2 = 9.

- Difficulty: _8 kyu_
- Tags:
  - Arrays
  - Lists
  - Fundamentals
- Link: [Square(n) Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

### 40. String repeat

Write a function that accepts an integer **n** and a string **s** as parameters, and returns a string of **s** repeated exactly **n** times.

**Examples (input->output)**

```javascript
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
  - Strings
- Link: [String repeat](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)

### 41. Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (**input --> output**)

```javascript
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
```

- Difficulty: _7 kyu_
- Tags:
  - Strings
  - Fundamentals
- Link: [Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

### 42. Grasshopper - Summation

**Summation**

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (**Input -> Output**):

```javascript
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
```

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
  - Mathematics
- Link: [Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030)

### 43. Remove String Spaces

Write a function that removes the spaces from the string, then return the resultant string.

Examples:

```javascript
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
```

- Difficulty: _8 kyu_
- Tags:
  - Fundamentals
  - Strings
- Link: [Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

### 44. Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

- Given **[34, 15, 88, 2]** your solution will return **2**
- Given **[34, -345, -1, 100]** your solution will return **-345**

You can assume, for the purpose of this kata, that the supplied array will not be empty.

- Difficulty: _8 kyu_
- Tags: 
  - Fundamentals
- Link: [Find the smallest integer in the array](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

### 45. Counting sheep...

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

```javascript
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
```

The correct answer would be **17**.

Hint: Don't forget to check for bad values like **null/undefined**

- Difficulty: _8 kyu_
- Tags:
  - Arrays
  - Fundamentals
- Link: [Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)