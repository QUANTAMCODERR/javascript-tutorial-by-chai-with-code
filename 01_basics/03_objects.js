// singleton--- object creates using constructor is called singleton... singleton cannot be created using literals...
// Object.create--->>>>>> this singleton ... object


// object literals...


// symbols

const mySym = Symbol("key1")


const jsUser = {
  name: "tushar" ,
  "full name": "tushar gujjanwar", 
  [mySym]: "mykey1",
  Age: 23,
  location: "Jaipur",
  email:"tushar@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}
//not good way to print values
console.log(jsUser.email);

//good ways to print values
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);


// // printing symbol values
// console.log( jsUser[mySym]);


// for changing the values just override the value...

jsUser.email = "tushar@chatgpt.com"

console.log(jsUser["email"]);


// for preventing value to be not change... we used freez..method


// Object.freeze(jsUser)

jsUser.email = "tushar@gemini.com"

console.log(jsUser["email"]);

console.log(jsUser);


// creating function... 

jsUser.greeting = function(){
  console.log("hello js user")
}
jsUser.greetingtwo = function(){
  console.log(`hello js user, ${this.name}`)
}


console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())












