const drawingField = document.querySelector('.drawing-field');
let color = '';


 
const redColor = document.querySelector('.red');
const yellowColor = document.querySelector('.yellow');
const blueColor = document.querySelector('.blue');
const orangeColor = document.querySelector('.orange');
const greenColor = document.querySelector('.green');
const violetColor = document.querySelector('.violet');
const randomColor = document.querySelector('.random')

redColor.addEventListener('click', () => {
    color = 'red'; 
    console.log(color)
});
yellowColor.addEventListener('click', () => {
    color = 'yellow'; 
    console.log(color)
});
blueColor.addEventListener('click', () => {
    color = 'blue'; 
    console.log(color)
});
orangeColor.addEventListener('click', () => {
    color = 'orange'; 
    console.log(color)
});
greenColor.addEventListener('click', () => {
    color = 'green'; 
    console.log(color)
});
violetColor.addEventListener('click', () => {
    color = 'violet'; 
    console.log(color)
});
randomColor.addEventListener('click', () => {
    
    color = 'random'; 
    console.log(color)
});

function gridDrawer(n) {
    drawingField.style.display = 'grid';
    drawingField.style.gridTemplateColumns = `repeat(${n}, auto)`;
    drawingField.style.gridTemplateRows = `repeat(${n}, auto)`;

    for (let i = 0; i < n ** 2; i++) {
        const child = document.createElement('div');
        drawingField.appendChild(child);
        
        child.addEventListener('mouseover', () => {
            if (color == 'red') child.style.backgroundColor = 'red';
            else if (color == 'yellow') child.style.backgroundColor = 'yellow';
            else if (color == 'blue') child.style.backgroundColor = 'blue';
            else if (color == 'green') child.style.backgroundColor = 'green';
            else if (color == 'orange') child.style.backgroundColor = 'orange';
            else if (color == 'violet') child.style.backgroundColor = 'violet';
            else if (color == 'random') {
                let random = Math.floor(Math.random()*16777215).toString(16);
                child.style.backgroundColor = '#' + random;
            };
        })
    }
}    

let x = parseInt(prompt('Enter size of grid'));
gridDrawer(x);

