// 1.  Check Even or Odd  [5 Marks] 
// Write a function isEvenOrOdd(n: number): string that returns "Even" or "Odd". 
// Example:  isEvenOrOdd(4)  →  "Even"   |   isEvenOrOdd(7)  →  "Odd" 

// function isEvenOrOdd(n) {
//     if (n % 2 === 0) {
//         return "Even";
//     }
//     else
//         return "Odd";
// }
// console.log(isEvenOrOdd(4));
// console.log(isEvenOrOdd(7));

// 2.  Reverse a String  [5 Marks] 
// Write a function reverseString(str: string): string that reverses the given string. 
// Example:  reverseString("playwright")  →  "thgirwyalp" 

// function reverseString(str: string): string{
//     let rev: string[] = [];
//         for(let i = str.length-1; i >= 0; i--){
//             rev.push(str[i]);
//         }
//             return rev.join('');
//     }
// console.log(reverseString("playwright"));

// 3.  Count Vowels  [5 Marks] 
// Write a function countVowels(str: string): number that counts vowels (a, e, i, o, u) in a string. 
// Example:  countVowels("automation")  →  6 

//  function countVowels(str: string): number
// {
//     let count = 0;
//     for(let c of str)
//  {
//        if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' ||
//           c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U')
//     {
//         count++
//     }
//  }
//     return count;
// }
//  console.log(countVowels("automation"));