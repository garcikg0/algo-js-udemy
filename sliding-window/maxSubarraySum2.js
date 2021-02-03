// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. 
// Note that a subarray must consist of CONSECUTIVE ELEMENTS from the original array. 

function maxSubarraySum2(arr, num){
    if (num > arr.length){
        console.log(null)
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    //iterate and sum the first num of elements in array and place sum value in maxSum variable
    for (let i=0; i < num; i++){
        maxSum += arr[i]
    }
    //make tempSum variable equal maxSum value calculated above
    tempSum = maxSum

    //start iteration at num element of array
    for (let i=num; i < arr.length; i++){
        // subtract first element value of tempSum (arr[i-num]) and add the i value of arr in iteration
        tempSum = tempSum - arr[i-num] + arr[i];
        // set whichever sum value is largest to maxSum. In other words, set maxSum to the variable that has the largest value. 
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum)
    return maxSum
};

maxSubarraySum2([100,200,300,400], 2) // 700
// For example, [100,200,300] is a subarray of the original array, but [100, 300] is not. 
maxSubarraySum2([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum2([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum2([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubarraySum2([2,3], 3) // null

