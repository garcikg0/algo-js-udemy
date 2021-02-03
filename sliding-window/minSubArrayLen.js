// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. 
// This function should return the minimal length of a CONTIGUOUS subarray of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead. 

function minSubArrayLen(arr, num){
    let total = 0;
    let start = 0; 
    let end = 0;
    let minLen = Infinity;

    while (start < arr.length){
    // if current window doesn't add up to the given num then move the window to the right 
        if (total < num && end < arr.length){
            total += arr[end];
            end++
        } else if (total >= num){
    // if current window adds up to at least num given then we can shrink the window
            minLen = Math.min(minLen, (end - start));
            total -= arr[start]
            start++
        } else {
    // current total less than required total but we reach the end 
            break
        }   
    }
    console.log(minLen === Infinity ? 0 : minLen)
    return minLen === Infinity ? 0 : minLen;
    
};

minSubArrayLen([2,3,1,2,4,3], 7) // 2 because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

