// for of array specific loops...


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);
  
}

const greetings = "hello world"
for(const greet of greetings ){
  if(greet==" "){
    continue
  }
  // console.log(`Each char is ${greet}`)

}

// Maps ...
// for the key value pair Map() is used ... which stored only unique values and follows given ordered

const map = new Map()
map.set("IN", "India")
map.set('USA', "United State of America")
map.set ('FR', "France")
map.set('IN', "India")
map.set('IN', "India")

// console.log(map)


// we also iterate map function using of loop 


for (const key of map) {
  // console.log(key);
  
}

// for having key respecitve to its value we can specify two variable in square bracket so we can hold key its value.. destructrure the arr
for (const [key , value] of map) {
  // console.log(key , ":- " + value);
  
}

// lets try to iterate object also 

const myObject = {
  'game1': "perman",
  'game2': "spiderman",
  'game3': "batman"

}
// using for of loop

// for (const [key, value] of myObject) {
//   // console.log(key, ':-', value)
// }
// so we try to iterate object using for of loop but its not supported ...



