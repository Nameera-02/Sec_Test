//  First Non-Repeating Character  [5 Marks] 
// Write a function firstUnique(str: string): string that returns the first character that does not repeat. 
// Example:  firstUnique("aabbc")  →  "c"   |   firstUnique("abcd")  →  "a" 
// function firstUnique(str: string): string{

function firstUnique(str: string): string {
    let count: { [key: string]: number } = {};
    for (let i of str) {
        count[i] = (count[i] || 0) + 1;
    }
    for (let i of str) {
        if (count[i] === 1) {
            return i;
        }
    }
    return "";
}
console.log(firstUnique("aabbc"));
console.log(firstUnique("abcd"));  

// You are given an array of user objects with username and password. Write a function login(users, username, password) that returns "Login Successful" if the credentials match any user, otherwise returns "Invalid Credentials". 
// const users = [ 
//   { username: "admin",   password: "1234" }, 
//   { username: "trainer", password: "abcd" } 
// ]; 
// Example:  login(users, "admin", "1234")  →  "Login Successful" 
//           login(users, "admin", "wrong")  →  "Invalid Credentials" 

// function login(
//   users: { username: string; password: string }[],
//   username: string,
//   password: string
// ): string {

//   for (let user of users) {
//     if (user.username === username && user.password === password) {
//       return "Login Successful";
//     }
//   }
//   return "Invalid Credentials";
// }
// const users = [
//   { username: "admin", password: "1234" },
//   { username: "trainer", password: "abcd" }
// ];

// console.log(login(users, "admin", "1234")); 
// console.log(login(users, "admin", "wrong"));

// 16.  Longest Word in a Sentence  [5 Marks] 
// Write a function longestWord(sentence: string): string that returns the longest word in the given sentence. 
// Example:  longestWord("I love TypeScript")  →  "TypeScript" 

// function longestWord(sentence: string): string {
//     let words = sentence.split(" ");
//     let longest = "";
//     for (let i of words) {
//         if (i.length > longest.length) {
//             longest = i;
//         }
//     }
//     return longest;
// }
// console.log(longestWord("I love TypeScript"));

// 14.  Flatten a Nested Array  [5 Marks] 
// Write a function flattenArray(arr: any[]): number[] that flattens a one-level nested array. 
// Example:  flattenArray([1, [2, 3], 4])  →  [1, 2, 3, 4] 

// function flattenArray(arr: any[]): number[] {
//     return arr.flat();
// }
// console.log(flattenArray([1, [2, 3], 4]));

// 15.  Group Words by Length  [5 Marks] 
// Write a function groupByLength(words: string[]): object that groups words by their character length. 
// Example:  groupByLength(["hi", "cat", "dog", "go"])  →  { 2: ["hi", "go"], 3: ["cat", "dog"] } 

function groupByLength(words: string[]): object {
    let result: any = {};
    for (let word of words) {
        let len = word.length;
        if (!result[len]) {
            result[len] = [];
        }
        result[len].push(word);
    }
    return result;
}
console.log(groupByLength(["hi", "cat", "dog", "go"]));