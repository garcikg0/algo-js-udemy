  function findRectangle(image){
      let startRow = null;
      let startIndex = null;
      
      let endRow = null;
      let endIndex = null;

      for(let i = 0; i < image.length; i++){
          let arr = image[i];
          for (let j = 0; j < arr.length; j++){
              if(arr[j] === 0 && startRow === null){
                  startRow = i;
                  startIndex = j;
              } else if (arr[j] === 0 && startRow < i){
                  endRow = i;
                  endIndex = j; 
              }
          }

      }
      if (startRow !== null && endRow === null){
          endRow = startRow
          endIndex = startIndex;
      }
      return `${startRow},${startIndex} ${endRow},${endIndex}`
}
  
const image1 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];
  
let result1 = findRectangle(image1);
console.log(result1)

const image2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0],
];
  
let result2 = findRectangle(image2);
console.log(result2)

const image3 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0],
];

let result3 = findRectangle(image3);
console.log(result3)
  
const image4 = [
    [0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
];

let result4 = findRectangle(image4);
console.log(result4)
  
const image5 = [
    [0],
];

let result5 = findRectangle(image5);
console.log(result5)