
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
// var numberBtn = document.querySelector("#pads")
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

// const calculateValue = (val) =>{
//  value += val
// }

// function addValue(val){
    // value += val
    // display.value = value
    // alert(val)
// }

const inputValue = (val) => {
    value = val
    // display.value += val
    // tempVal = val
    display.textContent += val

        // value += val
    //     display.innerHTML += val
    // tempVal = val
    // display.textContent = tempVal
    // alert(val)
}

const addSign = () => {
    display.textContent += " + "
    

    // display.textContent = tempVal + ' + '
}
const minusSign = () => {
    display.textContent += ' - '
    // value 
}

const divSign = () => {
    display.textContent += " / "
}
const multiSign = () => {
    display.textContent += " * "
}

const resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener('click', () => {
    display.textContent = " "
})



// const addSign = () => {
//     display.innerHTML += ' + '
// }

const equalValue = ()  => {
    display.textContent = eval(display.textContent)
}



// const equalValue = () =>{
    // value = value ''
    // display.value = eval(value)
// }



    // const sub

// const numberBtns = document.getElementsByTagName('button')


