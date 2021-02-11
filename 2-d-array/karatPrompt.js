/*

Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.

Write a function that takes in the image and returns one of the following representations of the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left coordinate, width, and height.

image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

Sample output variations (only one is necessary):

findRectangle(image1) =>
  row: 2, column: 3, width: 3, height: 2
  2,3 3,5 -- row,column of the top-left and bottom-right corners

Other test cases:

image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
]

findRectangle(image2) =>
  row: 4, column: 6, width: 1, height: 1
  4,6 4,6

image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
]

findRectangle(image3) =>
  row: 3, column: 5, width: 2, height: 2
  3,5 4,6
  
image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
]

findRectangle(image4) =>
  row: 0, column: 0, width: 1, height: 1
  0,0 0,0

image5 = [
  [0],
]

findRectangle(image5) =>
  row: 0, column: 0, width: 1, height: 1
  0,0 0,0

n: number of rows in the input image
m: number of columns in the input image


*/

// row and index when 0 is found 
// row and index of last 0 found 
// iterate through the array 
  // have a variable keeping tack of the row number (i + 1 ?)
  // nest iteration to go through each element in the selected array 
  // have a variable keeping track of number of 0's in array (count)
  // if it finds a 0, set a variable to save the index and row number 
  // else continue 


  "use strict";

  function findRectangle(image){
    let startRow = 0;
    let startIndex = 0
    let startCount = 0; 
    
    let endRow = 0;
    let endIndex = 0;
    let endCount = 0; 
    
    
    for (let i = 0; i < image.length; i++){
      let arr = image[i]
      for (let j = 0; j < arr.length; j++){
        if(arr[j] === 0 && startCount === 0){
          startRow = i; 
          startIndex = j; 
          startCount++
      } else if (arr[j] === 0 && startCount !==0 ){
        startCount++
      } else if (arr[j] === 0 && startCount !==0 && startRow !== i ){
        endRow = i;
        endIndex = j;
      }
    }
    console.log(endIndex)
    // return "`${startRow},${startIndex} ${}`"
    }
  };
  
  const image1 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  
  findRectangle(image1);
  
  const image2 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0],
  ];
  
  const image3 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0],
  ];
  
  const image4 = [
    [0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ];
  
  const image5 = [
    [0],
  ];  