function merge(arr1, arr2){
    // Make a variable with an empty array
    let results = [];
    // Make our two pointers - variables that are 0
    let i = 0;
    let j = 0;

    // While i is less than the length of the array and j is less than the length of the array - looping through both at the same time
    while(i < arr1.length && j < arr2.length){
        //make comparison if arr2 element is larger than arr1 element
        if(arr2[j] > arr1[i]){
            // If true, since arr1 element is smaller, push arr1 element 
            results.push(arr1[i])
            // and move i pointer forward 
            i++;
        } else {
           // catches cases where they are both the same or above condition is not true (arr1[i] > arr2[j])
           results.push(arr2[j])
           // and move j pointer forward 
           j++; 
        } 
    }

    // At this point we've exhausted all options in one of the arrays. Now we need to take whatever is left in the remaining array and push it to the results array. We do this with 2 while loops. 
    while (i < arr1.length){
        results.push(arr1[i])// here we hit the end of arr2 bc i hasn't hit it's length
        i++
    }
    while (j < arr2.length){ // here we hit the end of arr1 bc j hasn't hit it's length
        results.push(arr2[j])
        j++
    }
    console.log(results)
    return results;
};

merge([1,10,50],[2,14,99,100])


