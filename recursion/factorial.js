// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it 
// factorial zero (0!) is always 1. 

function factorial(num){
    let answer = 0;
    if (num <= 1) return 1;
    console.log(answer)
    return num * factorial(num - 1);
}

factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040