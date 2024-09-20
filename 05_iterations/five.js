// const coding = ["js", 'ruby', 'java', 'python', 'cpp']
// coding.forEach( (item) => {
//   console.log(item);
// })
// console.log(item)

//  filter function...

const myNums = [1, 2, 3 , 4, 5 , 6, 7, 8 , 9, 10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums)

// but when we give scope then we need to use return keyword

// const newNums = myNums.filter( (num) =>{ 
//   return num > 4
// } )
// console.log(newNums)


// const newNums = [ ]

// myNums.forEach( (num) => {
//   if(num > 4){
//     newNums.push(num)

//   }
// } )

// console.log(newNums)

const books = [
  { title: "book one", genre: 'fiction', publish: 1981, edition: 2004},
  { title: "book two", genre: 'non-fiction', publish: 1992, edition: 2008},
  { title: "book three", genre: 'history', publish: 1999, edition: 2007},
  { title: "book four", genre: 'non-fiction', publish: 1989, edition: 2010},
  { title: "book five", genre: 'Science', publish: 1941, edition: 2014},
  { title: "book six", genre: 'fiction', publish: 1981, edition: 2014},
  { title: "book seven", genre: 'history', publish: 1986, edition: 1996},
  { title: "book eight", genre: 'science', publish: 2011, edition: 2016},
  { title: "book nine", genre: 'non-fiction', publish: 1981, edition: 1989},


]

let newbooks = books.filter( (bk) =>{
  return bk.genre=== 'history'
} )

 newbooks = books.filter( (bk) => {
  return bk.publish < 2000
 } )
console.log(newbooks)