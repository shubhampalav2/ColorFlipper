const colorsArr = ['red', 'green', 'yellow', 'purple', 'pink', 'brown', 'white', 'gray', 'darkred', 'coral', 'tomato', 'orangered', 'gold', 'orange'];
const box = document.querySelector('.box');

document.querySelector('.change-color').addEventListener('click', () => {
    const random = getRandom();
     box.style.backgroundColor = colorsArr[random];
    document.querySelector('.color-text').innerText = colorsArr[random];
})

function getRandom() {
    return Math.floor(Math.random()*colorsArr.length);
}