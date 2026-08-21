marks = [34,11, 23, 2, 4, 3, 42, 34, 5, 545, 23];

// reduce
// case 1 : when value of pv is not explicitly provided
// pv : arr[0]
// cv : arr[1]

// console.log(marks)
// var total = marks.reduce((total , cv)=>{

//     // return total = total + cv
//     console.log(total , cv)
//     return total + cv

// })

// console.log(total)

// case 2 : when value of pv is explicitly provided
// pv : value
// cv : arr[0]

// var largest = marks.reduce((max , cv)=>{

//     console.log(max , cv)
//     if (cv > max){
//         // max = cv
//         return cv
//     }else{
//         // max = max
//         return max
//     }
// }  , marks[0])
// console.log(largest)

// const even = marks.find((m) => m % 2 == 0)
// console.log(even)

const prime = marks.find((m) => {
  if (m < 2) return false;

  for (let i = 2; i < m; i++) {
    if (m % i === 0) {
      return false;
    }
  }

  return true;
});

console.log(prime);



var fp = marks.find(m=>{

    var original = m
    var reverse = 0

    while(m > 0){
        var digit = m % 10;
        reverse = reverse * 10 + digit
        m = Math.floor(m / 10)
    }


    return original === reverse
})

console.log(fp)


var isThereEven = marks.some(m => m%2 === 0)
var areAllEven = marks.every(m => m%2 === 0)

console.log(isThereEven)
console.log(areAllEven)