const myNumbers = [1, 2, 3 , 4 ,5, 6, 7, 8, 9 ,10]

// using map function
const newNums =myNumbers.map( (num) => {
  return num+10
})

// console.log(newNums)

// using filter function...

const newNum = newNums.filter( (num) => {
  return num+10
})
// console.log(newNum)


// using for each

const values = newNums.forEach( (num) =>{
// console.log(num)
//   return num+10
} )


// lets see chaining

const newnum = myNumbers.map( (num) =>{
  return num * 10;
} ).map( (num) => {
  return num-1
} ).filter( (num) => {
  return num<=50
})

console.log(newnum);

// we can also apply filter function and mapfunction as well .. when first function operation is done then that value passed to the next function .. and after executing all the functions ... it will return the result...
