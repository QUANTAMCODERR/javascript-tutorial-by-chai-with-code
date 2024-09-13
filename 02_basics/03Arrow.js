const user = {
  username: "tushar",
  price:999,
  
  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let username = "tushar"
//   console.log(this.username)
// }
// chai()

// const chai = function(){
//   let username = "tushar"
//   console.log(this.username)
// }
// chai()

const chai =  () => {
  let username = 'tushar'
  console.log(this)
}


// chai()

// so basically the major difference between function and arrow function is we does not used this function in arro function when we used it gives emppty stirng ... and when we access perticular value then it gives undefined value throws in output in node



// lets see some pure arrow functions example

// const addTwo = (num1 , num2) =>{
//   return num1 + num2
// }

// implicit return...
const addTwo = (num1 , num2) => (num1 + num2)

console.log(addTwo(2,5))