// creating singleton object

// const tinderuser = new Object();

// below is non singleton object...
const tinderuser = {}

// give id,name to the tinderuser

tinderuser.id = "123abc"
tinderuser.name ="sammy"
tinderuser.isLoggerIn = false
// console.log(tinderuser);


// now we will see object in the objects .. nested objects

const regularuser = {
  email: "some@gmail.com",
  fullname: {
    userfullname:{
      firstname: "tushar",
      lastname: "gujjanwar"
    }
  }
}


// console.log(regularuser.fullname?.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}


// combining two objects in one object...

// const obj3 = {obj1, obj2}

//using above methods there will be same issue like arrays object in the objects so difficult to access values ... efficiently... thats why we will use assing method

// give empty curly parenthesis ... which make sure value of both obj will combine and return the value...

// const obj3 = Object.assign({},obj1, obj2)

// another method is spread method...

const obj3 = {...obj1, ...obj2}


// console.log(obj3);


// most used syntax is follows


const users = [
  {
    id:1,
    email: "h@gmail.com"
  }  
]

// users[1].email

// console.log(tinderuser);

// we can get all the keys of tinderuser using following syntax

// console.log(Object.keys(tinderuser))

// we can get value also

// console.log(Object.values(tinderuser))


// we can get entries alsoo ...

// console.log(Object.entries(tinderuser))

// we can check the property also does this property available valid....like that ... using following syntax..

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))


// destructering things... 


const course = {
  coursename: "js in hindi",
  prince: "999",
  courseInstructor: "tushar"
}

// course.couseInstructor

// if we want print courseInstructor multiple times then this is not good technique...instead we can use 

// const {courseInstructor} = course

//also we can we can give alias to courseInstructor...
const {courseInstructor: inst} = course


console.log(inst);


