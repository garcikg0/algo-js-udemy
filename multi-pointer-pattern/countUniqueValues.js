//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

const arr1 = [1,1,1,1,1,2];
const arr2 = [1,2,3,4,4,4,7,7,12,12,13]
const arr3 = [0]
const arr4 = [-2, -1, -1, 0, 1]

//Instructor solution
// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     for (let j = 1; j < arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     console.log(i + 1)
//     return i + 1
// };

//Personal Solution
function countUniqueValues(arr){
    let left = 0;
    let right = 1; 
    while (right < arr.length) {
        if (arr[right] === arr[left]) {
            right++
        } else {
            left++
            arr[left] = arr[right]
            right++
        }
    }
    if (left == 0) {
        console.log(0)
        return 0
    } else {
        console.log(left + 1)
        return left + 1
    }
};

countUniqueValues(arr1);
countUniqueValues(arr2);
countUniqueValues(arr3);
countUniqueValues(arr4);