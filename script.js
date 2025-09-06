
var defaultTheme = document.querySelector("#default-theme")
var lightTheme = document.querySelector("#light-theme")
var brownTheme = document.querySelector("#brown-theme")
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


// Calculations
const display = document.getElementById('screen')
let value = 0
let tempVal = 0
let show = ''

const inputValue = (val) => {
    value = val
    display.textContent += val
}

const addSign = () => {
    display.textContent += " + "
}

const minusSign = () => {
    display.textContent += ' - '
}

const divSign = () => {
    display.textContent += " / "
}

const multiSign = () => {
    display.textContent += " * "
}

const dotValue = () => {
    display.textContent += "."
}

const resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener('click', () => {
    display.textContent = " "
});

const delBtn = document.getElementById("delBtn")
delBtn.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
});

const equalValue = ()  => {
    display.textContent = eval(display.textContent)
}
 


// screen length 
const maxLength = 5;

function screen (val) {
    if (val.length > maxLength) {
        display.textContent = val.substring(0, maxLength) + '...'
    } else {
        display.textContent = val
    }
}