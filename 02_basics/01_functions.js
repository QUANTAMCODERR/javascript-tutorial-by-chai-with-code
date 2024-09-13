//functions... 

// function addTwoNumbers(number1, number2)
//   {
//     console.log(number1 + number2)
//   }
function addTwoNumbers(number1, number2)
  {
    // let result = number1 + number2
    // return result

    return number1 + number2
  }

  const result = addTwoNumbers(3,7)

  // console.log("result: ", result)

  // function does return value ...

// function loginUserMessage(username){
//   if(username === undefined){
//     console.log("please enter a username....")
//     return;
//   }
//   return `${username} just logged in`
// }

// another way using not operator output will be the same

function loginUserMessage(username = "sam"){
  if(!username){
    // console.log("please enter a username....")
    return;
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("tushar"));
// console.log(loginUserMessage());
// 

// when us does not passed any argument and u have already defined default parameter then it will print default parameters... value

//sometimes we dont know how many parameters will come in future so for that we will use some of different method using rest operator...


function calculateCartPrice(...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500))


// we can also pass object in the function...
// so lets see how to pass any object to the function and how to access the values..

const user = {
  username: "tushar",
  price: 199
}

function handleObject(anyObject){
  // console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

// we can also passed direct object without passing object name

handleObject({
  username: "sam",
  price: 399
})

// similarly we can also passed arrays also ..

const myNewArray = [200 , 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 4000, 500]))