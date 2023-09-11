let arr = [
  0,1,2,5,9,8,3,6,7,15
];

    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }

console.log(min);
console.log(max);