# Projects related to   DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

##myproject link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jxak14?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js)

#solution code

## project 1 
##myproject link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jxak14?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js)

''' javascript
console.log("tushar")
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target)
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
'''