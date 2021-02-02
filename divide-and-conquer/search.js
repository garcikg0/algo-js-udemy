// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. 
// If the value is not found, return -1. 

const arr = [1,2,3,4,5,6]
const val1 = 4
const val2 = 6
const val3 = 11

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1; 

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            console.log(middle)
            return middle
        }
    }

    console.log(-1)
    return -1;
}

search(arr, val1);
search(arr, val2);
search(arr, val3);