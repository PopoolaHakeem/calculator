
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
    lightTheme.body.style.backgroundColor = "red"
    body.style.backgroundColor = "white"
}



menuicon.onclick = function() {
    menuicon.style.display = 'none'
    mobilenav.style.display = 'block'
    cancelicon.style.display = 'block'
}