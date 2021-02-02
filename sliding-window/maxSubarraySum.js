// Write a function called maxSubarraySum which acecpts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array. 

const arr1 = [1,2,5,2,8,1,5];
const num1 = 2;
const arr2 = [1,2,5,2,8,1,5];
const num2 = 4;
const arr3 = [4,2,1,6];
const num3 = 1;
const arr4 = [4,2,1,6,2];
const num4 = 4;
const arr5 = [];
const num5 = 4;

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0; 
    if (arr.length < num) {
        console.log(null)
        return null;
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum)
    return maxSum 
};

maxSubarraySum(arr1, num1);
maxSubarraySum(arr2, num2);
maxSubarraySum(arr3, num3);
maxSubarraySum(arr4, num4);
maxSubarraySum(arr5, num5);