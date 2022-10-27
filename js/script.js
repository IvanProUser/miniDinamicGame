const board = document.getElementById('board')
const NUMBER_SQUARES = 990;

const array = ['rgb(73, 209, 164)', 'rgb(125, 43, 212)', 'rgb(220, 214, 36)', 'rgb(36, 220, 70)', 'rgb(209, 35, 35)' ]

for (let i = 0; i < NUMBER_SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mousemove', ()=> getRandomColor(square))
    square.addEventListener('mouseleave', ()=> clearColor(square))
    
}

function getRandomColor(elem) {
    const index = Math.floor(Math.random() * array.length);
    elem.style.backgroundColor = `${array[index]}`
    elem.style.boxShadow = `0 0 2px ${array[index]}, 0 0 10px ${array[index]}`
}

function clearColor(elem) {
    elem.style.backgroundColor = `#1d1d1d`;
    elem.style.boxShadow = '0 0 2px #000';
}