//  First Non-Repeating Character  [5 Marks] 
// Write a function firstUnique(str: string): string that returns the first character that does not repeat. 
// Example:  firstUnique("aabbc")  →  "c"   |   firstUnique("abcd")  →  "a" 
// function firstUnique(str: string): string{
//     let res:string=''
//     for(let i of str){
//         if(!res.includes(i) = res.includes(i)){
//             res.push(i);
//         }
//          return res;
//     }
// }
// console.log(firstUnique("aabbc"));
function firstUnique(str) {
    var count = {};
    // Step 1: Count frequency
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var ch = str_1[_i];
        count[ch] = (count[ch] || 0) + 1;
    }
    // Step 2: Find first unique
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var ch = str_2[_a];
        if (count[ch] === 1) {
            return ch;
        }
    }
    return ""; // if no unique character
}
console.log(firstUnique("aabbc")); // c
console.log(firstUnique("abcd")); // a
// 15.  Group Words by Length  [5 Marks] 
// Write a function groupByLength(words: string[]): object that groups words by their character length. 
// Example:  groupByLength(["hi", "cat", "dog", "go"])  →  { 2: ["hi", "go"], 3: ["cat", "dog"] } 
