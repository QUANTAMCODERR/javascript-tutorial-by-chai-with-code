// for in loop
const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby',
  swift: "swift by apple"
}

// so in the previous example we see for of loop is not supported while iterating objects .. so we can try to use for in loop and its working...

for (const key in myObject){
	// console.log(myObject[key])
}
for (const key in myObject){
//   console.log(`${key} shortcut is for ${myObject[key]}`)
}

//LETS TRY TO PRINT ARRAY USING FOR IN LOOP	

const lang = ['java', 'cpp', 'js', 'python', 'ruby']

for(const key in lang){
	// console.log(lang[key])
}


// so in for in loop when we try to print only key then only its index value  get printed and so we need to specifically define its relevent varible of where we are iterating the items...

const coding = ["js", 'ruby', 'java', 'python', 'cpp']


coding.forEach( function (item) {
	// console.log(item);
} )

// using arrow function
coding.forEach( (para) => {
	// console.log(para);
	
})

// we can also do this by functions...
// function printMe (item){
// 	console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item) => {
	// console.log(item);
	
} )

// it may contain more than one parameter...

coding.forEach((item, index, arr) => {
	// console.log(item, index, arr);
})

// this above line of code shows that it may contain item name and its index and whole also ...


// in the privious example we see objects in the Array [{}, {}, {}]

const myCoding =[
	 {
languageName :"javascript",
languageFileName: 'js'
},
	 {
languageName :"python",
languageFileName: 'py'
},
	 {
languageName :"cpp",
languageFileName: 'c'
},
	 {
languageName :"java",
languageFileName: 'java'
}
]

myCoding.forEach((item) =>{
	console.log(item.languageName)
})
// this type of method will very useful in database while fetching the data from the database...