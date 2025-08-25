
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

lightTheme.onclick = function() {
    body.style.backgroundColor = "#333"
    body.style.color = "#333"
    body.ontransitionrun = "all"
}

darkTheme.onclick = function() {
    body.style.backgroundColor = "#637097"
    body.style.color = "white"
}

brownTheme.onclick = function() {
    body.style.backgroundColor = "#af734a"
    body.style.color = "white"
}