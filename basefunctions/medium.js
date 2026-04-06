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
function secondLargest(nums) {
    var secnum = -Infinity;
    var larnum = -Infinity;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num > larnum) {
            secnum = larnum;
            larnum = num;
        }
        else if (num > secnum && num !== larnum) {
            secnum = num;
        }
    }
    return secnum;
}
console.log(secondLargest([10, 20, 5]));
