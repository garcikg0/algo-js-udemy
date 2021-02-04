// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 

function productOfArray(arr){
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

// My try - wrong
// function productOfArray(arr){
//     let product = 0;
//     if (arr.length === 0) return product;
//     // push value to product
//     if (product === 0) {
//         product = arr[0]
//     } else {  
//         // assign new product value to multiply by recursive function minus the first element with .slice()
//         product = product * productOfArray(arr.slice(1))
//     }
//     console.log(product)
//     return product;
// }