// Creazione Quadrati
function createSquare() {
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

const btn = document.getElementById('start');
const grid = document.getElementById('grid');
const totalSquares = 100;
const totalBombs = 16;

btn.addEventListener('click', function () {
    grid.innerHTML = ''; // Resetta la griglia
    let bombs = generateBombs(totalSquares, totalBombs);
    let score = 0;
    let gameOver = false;

    for (let i = 0; i < totalSquares; i++) {
        let currentSquare = createSquare();
        currentSquare.innerText = i + 1;
        currentSquare.addEventListener('click', function () {
            if (gameOver) return;

            let squareNumber = parseInt(this.innerText);
            if (bombs.includes(squareNumber)) {
                this.classList.add('bomb');
                gameOver = true;
                setTimeout(() => {
                    alert(`Hai perso! Il tuo punteggio è: ${score}`);
                }, 100); // Ritardo per far vedere il colore rosso
            } else {
                this.classList.add('active');
                score++;
                if (score === totalSquares - totalBombs) {
                    gameOver = true;
                    setTimeout(() => {
                        alert(`Hai vinto! Il tuo punteggio è: ${score}`);
                    }, 100); // Ritardo per far vedere il colore azzurro
                }
            }
            this.removeEventListener('click', arguments.callee);
        });

        grid.append(currentSquare);
    }
});
