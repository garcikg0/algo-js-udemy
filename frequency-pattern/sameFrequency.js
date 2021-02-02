// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits. 
// Your solution MUST have time complexity of O(N)

function sameFrequency(num1, num2) {
    if (num1.toString().length !== num2.toString().length){
        console.log(false)
        return false;
    }
    
    let num1Counter = {};
    let num2Counter = {}; 

    for (let val of num1.toString()){
        num1Counter[val] = (num1Counter[val] || 0) + 1
    }

    for (let val of num2.toString()){
        num2Counter[val] = (num2Counter[val] || 0) + 1
    }

    for(let key in num1Counter) {
        if (!(key in num2Counter)){
            console.log(false)
            return false;
        }
        if (num2Counter[key] !== num1Counter[key]){
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}

sameFrequency(182,281);
sameFrequency(34,14);
sameFrequency(3589578,5879385);
sameFrequency(22,222);