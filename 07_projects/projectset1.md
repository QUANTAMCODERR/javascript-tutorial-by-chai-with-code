# Projects related to   DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## project 1 
## myproject link created by me
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jxak14?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js)

# Solution Code
``` javascript
console.log("tushar")
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    } 
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
    }
    
  })
}); 
```



# Soulution code
## Project2
```
javascript

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;    
  } 
  else  if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;    
  }
  else{
   const bmi = (weight / ((height*height)/10000)).toFixed(2);
   // show the result
   results.innerHTML = `your index is :- ${bmi}`;
   if(bmi < 18.6 ){
     results.innerHTML = `you are underweight eat some good amount of food your index is :- ${bmi}`
   } else if(bmi >= 18.6 & bmi < 24.9 ){
    results.innerHTML = `you are perfect your index is :-${bmi} `
  }else{
    results.innerHTML = `ooh no you are overweight please do some exercise... your index is :-${bmi}`
  }
}

})
```
