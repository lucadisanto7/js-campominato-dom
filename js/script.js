// Creazione Quadrati
function createSquare(){
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}

const btn = document.getElementById('start')
const grid = document.getElementById('grid');

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