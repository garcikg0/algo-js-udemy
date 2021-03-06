function pivot (arr, start = 0, end = arr.length - 1){

    const swap = (arr, idx1, idx2) => {          // array destructuring
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++){ // there is no reason to loop through the first one and compare it to itself 
        if(pivot > arr[i]){
            swapIdx++; // there is one thing at least that is less than our pivot
            swap(arr, swapIdx, i)
        }
    }
    // Swap the pivot from the start of the swapPoint
    swap(arr, start, swapIdx)
    return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1)
        // right
        quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

// let result = pivot([4,8,2,1,5,7,6,3])  // 3
// console.log(result)

let result = quickSort([4,6,9,1,2,5]) // [ 1, 2, 4, 5, 6, 9 ]
console.log(result)