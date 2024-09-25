# Projects related to   DOM 

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## project 1__color_changer
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
## Project2__bmi_calculator
```javascript

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


# Soulution code
## Project4__guess_the_Number


```javascript


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess < 1){
    alert('Please enter a number greter than 1');
  }else if(guess > 100){
    alert('Please enter a number less than 100');
  
  }else{
    prevGuess.push(guess);
    if(numGuess === 11){    
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame();
  } else if(guess < randomNumber){
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber){
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame();
  
}

function newGame(){
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess =  1;
    guessSlot.innerHTML = ''
    remaining.innerHTML =  `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}



```


## Project5-Unlimited_Color
# SolutionCode

```javascript
const randomColor = function () {
  const hex = '0123456789ABCDEF'; // Characters used in hex color codes
  let color = '#'; // Initial '#' for hex color

  // Generate a random hex color by looping 6 times (for 6 characters after '#')
  for (let i = 0; i < 6; i++) {
    // Append a random character from 'hex' to 'color'
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color; // Return the generated random color
};

let intervalId; // This variable will store the interval ID

// Function to start changing the background color
const startChangingColor = function () {
  // Check if the interval is not already running
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000); // Call changeBgColor every second
  }

  // Function to change the background color to a random one
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor(); // Change background color
  }
};

// Function to stop changing the background color
const stopChangingColor = function () {
  clearInterval(intervalId); // Stop the interval
  intervalId = null; // Reset the interval ID to null
};

// Event listener to start changing the color when #start button is clicked
document.querySelector('#start').addEventListener('click', startChangingColor);

// Event listener to stop changing the color when #stop button is clicked
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```

### Explanation:
1. **`randomColor` Function**: This function generates a random hex color code by randomly selecting 6 characters from the string `0123456789ABCDEF` and appending them to the `#` symbol to form a valid hex color.

2. **`intervalId` Variable**: This is used to store the `setInterval` ID, which allows you to stop the interval later.

3. **`startChangingColor` Function**: 
   - If the interval is not already running (`!intervalId`), it starts calling `changeBgColor` every second (`1000` milliseconds).
   - The `changeBgColor` function changes the background color of the page to a randomly generated one by calling `randomColor`.

4. **`stopChangingColor` Function**: This clears the interval and stops the background color from changing by resetting the `intervalId` to `null`.

5. **Event Listeners**: 
   - When the "Start" button is clicked, the `startChangingColor` function is triggered.
   - When the "Stop" button is clicked, the `stopChangingColor` function is triggered to stop the color change.

This code allows the background color of the webpage to change every second when the "Start" button is clicked and stops when the "Stop" button is clicked.




## Project6-keyboard_Listener
# SolutionCode


```javascript
const insert = document.getElementById('insert');

// Listen for keydown events on the window
window.addEventListener('keydown', (e) => {
  // Update the innerHTML of the 'insert' element with key information
  insert.innerHTML = `
  <div class='color'>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <!-- Display the key, and if it's a space, show "space" -->
        <td>${e.key === " " ? "space" : e.key}</td>
        <!-- Display the keycode of the key pressed -->
        <td>${e.keyCode}</td>
        <!-- Display the code of the key pressed -->
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});
```

### Explanation:
1. **`insert` Variable**: This grabs the HTML element with the ID `insert`, where the dynamic content will be displayed.

2. **`window.addEventListener('keydown', (e) => { ... })`**: This event listener waits for any keypress (keydown event) on the window. When a key is pressed, the function inside it executes, capturing the event object `e`.

3. **`insert.innerHTML =`**: 
   - Updates the content of the `insert` element using template literals (backticks ``).
   - It creates a table with rows that display:
     - **Key**: The key that was pressed. If the key is a space, it displays "space" instead of the actual space character.
     - **Keycode**: Displays the numeric keycode of the pressed key (although note that `keyCode` is deprecated and `code` is preferred).
     - **Code**: The physical key on the keyboard (like `KeyA`, `Space`, etc.).

4. **`${e.key === " " ? "space" : e.key}`**: This conditional checks if the pressed key is a space (`" "`). If true, it displays "space" in the table instead of an empty string.

### Important Note:
- `e.keyCode` is deprecated and may not be supported in future versions of browsers. You should use `e.code` for better compatibility.