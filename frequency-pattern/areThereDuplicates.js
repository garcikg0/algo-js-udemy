// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether they are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern. 

function areThereDuplicates(){
// In terms of "arguments", we at least know we're going to receive some form of a collection of values.
// Output is a boolean 

// 1. Create our counter (object)
    let counter = {};
// 2. Loop through our arguments. 
    for(let val in arguments) {
    // a. If that argument is in our object, add 1 to it. 
    // b. If it's not in our object, create it in our object.
        counter[arguments[val]] = (counter[arguments[val]] || 0) + 1
    }
// 3. Check our newly made argument by looping through it to see if there are duplicates. 
    for (let keys in counter){
    // a. If keys value has more than 1 count, then there are duplicates.
        if(counter[keys] > 1){
            console.log(true)
            return true
        }
    }
// 4. If we finish the loop without returning anything, then there are no duplicates. 
    console.log(false)
    return false
}

areThereDuplicates(1,2,3);
areThereDuplicates(1,2,2);
areThereDuplicates('a', 'b', 'c', 'a');