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
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
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
