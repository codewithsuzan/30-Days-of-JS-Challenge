// // Activity 1: Basic Recursion:

// // Task 1:

// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);
// }

// // Test cases
// console.log(factorial(5));  // 120
// console.log(factorial(0));  // 1
// console.log(factorial(7));  // 5040


// // Task 2:

// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// // Test cases
// console.log(fibonacci(6));  // 8
// console.log(fibonacci(0));  // 0
// console.log(fibonacci(10)); // 55


// // Activity 2: Recursion with Arrays

// // Task 3:

// function sumArray(arr) {
//     if (arr.length === 0) return 0;
//     return arr[0] + sumArray(arr.slice(1));
// }

// // Test cases
// console.log(sumArray([1, 2, 3, 4, 5]));  // 15
// console.log(sumArray([]));               // 0
// console.log(sumArray([10, 20, 30]));     // 60


// // Task 4:

// function maxArray(arr) {
//     if (arr.length === 1) return arr[0];
//     return Math.max(arr[0], maxArray(arr.slice(1)));
// }

// // Test cases
// console.log(maxArray([1, 2, 3, 4, 5]));  // 5
// console.log(maxArray([10, 5, 8, 3, 12]));// 12
// console.log(maxArray([-1, -2, -3, -4])); // -1

// // Activity 3: String Manipulation with Recursion


// // Task 5:

// function reverseStr(str){
// if(str==="") return ""
// return reverseStr(str.substr(1))+str.charAt(0)
// }
// console.log(reverseStr("Hello"))
// console.log(reverseStr(""))
// console.log(reverseStr("abcde"))

// // Task 6:

// function isPalindrome(str) {
//     if (str.length <= 1) return true;
//     if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
//     return isPalindrome(str.slice(1, -1));
// }


// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello"));   // false
// console.log(isPalindrome("madam"));   // true


// // Activity 4: Recursive Search

// // Task 7:

// function binarySearch(arr, target, low = 0, high = arr.length - 1) {
//     if (low > high) return -1;
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
//     return binarySearch(arr, target, mid + 1, high);
// }

// // Test cases
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch([10, 20, 30, 40, 50], 40)); // 3


// // Task 8:

// function countOccurrences(arr, target) {
//     if (arr.length === 0) return 0;
//     return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
// }

// // Test cases
// console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // 3
// console.log(countOccurrences([1, 1, 1, 1], 1));       // 4
// console.log(countOccurrences([5, 6, 7, 8], 9));       // 0


// // Activity 5: Tree Traversal (Optional)


// // Task 9:

// function inorderTraversal(node){
//     if(!node) return []
//     return [...inorderTraversal(node.left),node.value,...inorderTraversal(node.right)]
// }

// const tree={
//     value:1,
//     left:{
//         value:2,
//         left:null,
//         right:null
//     },
//     right:{
//         value:3,
//         left:null,
//         right:null
//     }
// }
// console.log(inorderTraversal(tree))

// // Task 10:

// function treeDepth(node) {
//     if (!node) return 0;
//     return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
// }

// // Example binary tree node
// const tree = {
//     value: 1,
//     left: {
//         value: 2,
//         left: null,
//         right: null,
//     },
//     right: {
//         value: 3,
//         left: null,
//         right: null,
//     },
// };

// // Test case
// console.log(treeDepth(tree)); // 2
