
// var numbers = [one, two, three]


// function calculator(n) {
//     for (let i = 0; i <= 9; i++) {
//         console.log(i)
//     }
// }
// calculator(33)

// alert('Welcome!')

var darkTheme = document.querySelector("#dark-theme")
var lightTheme = document.querySelector("#light-theme")
var brownTheme = document.querySelector("#brown-theme")
var body = document.body
var numberBtn = document.querySelector("#pads")

darkTheme.onclick = function() {
    body.style.backgroundColor = "#637097"
    document.querySelector("#header").style.color = "#fff"
    body.style.transition = "all 0.5s ease-in-out"  
}

lightTheme.onclick = function() {
    body.style.backgroundColor = "#fffdd0"
    document.querySelector("#header").style.color = "#373433"
    body.style.color = "#333"
}

brownTheme.onclick = function() {
    body.style.backgroundColor = "#bd8530d3"
    document.querySelector("#header").style.color = "#20201eff"
    body.style.color = "white"
}