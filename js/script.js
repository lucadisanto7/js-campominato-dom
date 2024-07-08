// Creazione Quadrati
function createSquare(){
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}

function generateBombs(max, count) {
    let bombs = [];
    while (bombs.length < count) {
        let bomb = Math.floor(Math.random() * max) + 1;
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    return bombs;
}

const btn = document.getElementById('start')
const grid = document.getElementById('grid');
const totalSquares = 100;
const totalBombs = 16;

btn.addEventListener('click', function(){

// Creazione un ciclo di 100 iterazioni per la griglia
for (let i = 0; i < 100; i++){
    let currentSquare = createSquare();
    currentSquare.addEventListener('click', function(){
        console.log(this);

        currentSquare.addEventListener('click', function() {
            this.classList.toggle('active');
            console.log('Hai cliccato la casella numero:', this.innerText);
        });
    });

    currentSquare.innerText = i + 1;
    grid.append(currentSquare);
}
})