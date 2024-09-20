const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);  
  return acc + currval
}, 0 )

console.log(myTotal)

const shoppingCart =[
   {
  itemName: "js course",
  price: 2999
},
   {
  itemName: "js course",
  price: 2999
},
   {
  itemName: "java course",
  price: 4999
},
   {
  itemName: "python course",
  price: 1999
},
   {
  itemName: "cp course",
  price: 10999
}

]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price),0 )

console.log(priceToPay)