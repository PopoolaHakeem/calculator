
// var numbers = [1,2,3,4,5,6,7,8,9,0]

// function calculator(n) {
//     for (let i = 0; i <= 9; i++) {
//         console.log(i)
//     }
// }
// calculator(n)

// alert('Welcome!')

var defaultTheme = document.querySelector("#default-theme")
var lightTheme = document.querySelector("#light-theme")
var brownTheme = document.querySelector("#brown-theme")
var numberBtn = document.querySelector("#pads")
var body = document.body


defaultTheme.onclick = function() {
    body.style.backgroundColor = "#637097"
    document.querySelector("#header").style.color = "#fff"
    body.style.transition = "all 0.5s ease-in-out"  
}

lightTheme.onclick = function() {
    body.style.backgroundColor = "#fffdd0"
    document.querySelector("#header").style.color = "#373433"
    body.style.color = "#333"
    body.style.transition = "all 0.5s ease-in-out"  
}

brownTheme.onclick = function() {
    body.style.backgroundColor = "#161616"
    document.querySelector("#header").style.color = "#f7f7f7ff"
    body.style.color = "white"
    body.style.transition = "all 0.5s ease-in-out"  
}

const buttons = document.getElementsByTagName("button")
const screen = document.querySelector("#screen")
let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.array.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value >= '0' && value <= '9' || value === '.') {
            currentNumber += value;
            screen.innerHTML = currentNumber;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousNumber = currentNumber
            currentNumber = ''
            operator = value
            screen.innerHTML = ''
        }
    })
});