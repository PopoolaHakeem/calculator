
// var numbers = [one, two, three]


// function calculator(n) {
//     for (let i = 0; i <= 9; i++) {
//         console.log(i)
//     }
// }
// calculator(33)

var darkTheme = document.querySelector("#dark-theme")
var lightTheme = document.querySelector("#light-theme")
var brownTheme = document.querySelector("#brown-theme")
var body = document.body


lightTheme.onclick = () => {
    body.classList.remove('dark-theme' , 'brown-theme')
    body.classList.add('light-theme')
};

darkTheme.onclick = () => {
    body.classList.remove('light-theme' , 'brown-theme')
    body.classList.add('dark-theme')
};

brownTheme.onclick = () => {
    body.classList.remove('dark-theme' , 'light-theme')
    body.classList.add('brown-theme')
};