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