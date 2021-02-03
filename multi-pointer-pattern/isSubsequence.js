// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the charactesr in the second string. 
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, WITHOUT THEIR ORDER CHANGING. 

function isSubsequence(str1, str2){
    if (str1.length === 0 || str2.length === 0){
        console.log(false)
        return false;
    }

   let str1Pointer = 0;
   let str2Pointer = 0;

    while(str1Pointer <= str1.length - 1){
        if (str2Pointer >= str2.length){
            console.log(false)
            return false;
        } else if (str1[str1Pointer] === str2[str2Pointer]){
            str2Pointer++
            str1Pointer++
        } else {
            str2Pointer++
        }
    }
    console.log(true)
    return true;
};

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc','acb') // false (order matters)