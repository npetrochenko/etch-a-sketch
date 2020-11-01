const drawingField = document.querySelector('.drawing-field');

function gridDrawer(n) {
    drawingField.style.display = 'grid';
    drawingField.style.gridTemplateColumns = `repeat(${n}, auto)`;
    drawingField.style.gridTemplateRows = `repeat(${n}, auto)`;

    for (let i = 0; i < n ** 2; i++) {
        const child = document.createElement('div');
        drawingField.appendChild(child);
        
        child.addEventListener('mouseover', () => {
            child.style.backgroundColor = 'black';
        })
    }
}    

let x = parseInt(prompt('Enter size of grid'));
gridDrawer(x);

