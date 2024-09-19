//if

// if (2 !== "3"){
//   console.log("executed")
// }


// //shorthand notation

// const balance = 1000

// // this is one line.. execution..
// if(balance > 500) console.log("test");


// // if else if statement..

// if(balance <500){
//   console.log("the balance is less than 500");
  
// }else if (balance < 750) {
//   console.log("the balance is less than 750");
// }else if(balance > 750){
//   console.log("the balance is greater than 750");
// }


//multiple condition .. using logical operator...


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = true

// if (userLoggedIn && debitCard && 2==2){
//   console.log("Allow to buy course")
// }

// if (loggedInFromGoogle || loggedInFromEmail){
//   console.log("user logged in");
// }

// SWITCH case statement

// const month = 2

// switch (month) {
//   case 1:
//     console.log("january");       
//     break;
//   case 2:
//     console.log("feb");       
//     break;
//   case 3:
//     console.log("march");       
//     break;
//   case 4:
//     console.log("april");       
//     break;
    

//   default:
//     console.log("default case match")
//     break;
// }





// const month = "march"

// switch (month) {
//   case "jan":
//     console.log("january");       
//     break;
//   case "april":
//     console.log("april");       
//     break;
//   case "march":
//     console.log("march");       
//     break;
//   case "may":
//     console.log("may");       
//     break;
    

//   default:
//     console.log("default case match")
//     break;
// }



//truthy value and falsy value...

const userEmail =[]

if( userEmail) {
  console.log("got the user email");
  
} else {
  console.log("dont have user email");
  
}


// falsy values
// false, 0 , -0, BigInt 0n , "", null, undefined, NaN

// this above values are falsy values....


// truthy values

// "0", "false", " ", [], {}, function{}{}

if(userEmail.length === 0){
  console.log("Array is empty")
}


// we can check is object is empty or not...

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
  console.log("Object is empty"); 
  
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 15 ?? 10

// the first values is assigned to the val1


console.log(val1)




// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80")
// this is an example of ternary operator....

