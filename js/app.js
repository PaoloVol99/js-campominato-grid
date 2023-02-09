
const gridElement = document.querySelector('.grid')
let sidelenght = 8
let cellNumber = sidelenght ** 2

for (let i = 0; i < cellNumber; i++) {
    let num = i + 1
    const cell = `<div class="cell" style="width: calc(100% / ${sidelenght});">${num}</div>`
    gridElement.innerHTML += cell
}

let playElement = document.querySelector('.play')
playElement.addEventListener('click', function() {
    gridElement.classList.add('grid-show')
    playElement.classList.add('display-none')
})

let cellElement = document.querySelectorAll('.cell')
console.log(typeof cellElement, cellElement)

for (let i = 0; i < cellElement.length; i++) {
    cellElement[i].addEventListener('click', function() {
        console.log(i + 1)
        cellElement[i].classList.toggle('clicked')
    })
}


