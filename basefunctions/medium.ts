// 6.  Palindrome Check  [7 Marks] 
// Write a function isPalindrome(str: string): boolean that returns true if the string reads the same forwards and backwards. 
// Example:  isPalindrome("madam")  →  true   |   isPalindrome("hello")  →  false

// function isPalindrome(str: string): boolean{
//     let palindrome: string = "";
//     for(let i=str.length-1; i>=0; i--){
//         palindrome += str[i]
//         }
//     if(str === palindrome){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 7.  Remove Duplicates  [7 Marks] 
// Write a function removeDuplicates(arr: number[]): number[] that returns the array without duplicate values. 
// Example:  removeDuplicates([1, 2, 2, 3, 3])  →  [1, 2, 3] 
// function removeDuplicates(arr: number[]): number[]{
//     let res: number[]=[];
//     for(let i of arr){
//         if(!res.includes(arr[i])){
//             res.push(arr[i])
//         }
//     }
//         return res;
// }
// console.log(removeDuplicates([1,2,2,3,3]))

// 10.  Second Largest Number  [7 Marks] 
// Write a function secondLargest(nums: number[]): number that returns the second largest unique number. 
// Example:  secondLargest([10, 20, 5])  →  10 
function secondLargest(nums: number[]): number{
    let secnum = -Infinity;
    let larnum = -Infinity;
    for (let num of nums) {
        if (num > larnum) {
            secnum = larnum;
            larnum = num;
        } else if (num > secnum && num !== larnum) {
            secnum = num;
        }
    }
    return secnum;
}
console.log(secondLargest([10,20,5]));


// 9.  Character Frequency  [7 Marks] 
// Write a function charFrequency(str: string): object that returns how many times each character appears. 
// Example:  charFrequency("aab")  →  { a: 2, b: 1 } 

function charFrequency(str: string): object {
    let count: any = {};
    for (let i of str) {
        count[i] = (count[i] || 0) + 1;
    }
    return count;
}
console.log(charFrequency("aab"));


// 11.  Sum Using Rest Parameters  [7 Marks] 
// Write a function sumAll(...nums: number[]): number that accepts any number of arguments and returns their sum. 
// Example:  sumAll(1, 2, 3, 4)  →  10   |   sumAll(5, 10)  →  15 

    function sumAll(...nums: number[]): number {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 10));      