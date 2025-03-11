// Snack 1

function somma(a, b) {
    return a + b;
}

// const somma = (a, b) => a + b;


// Snack 2

const quadrato = (n) => n * n
// console.log(quadrato(5))  // 25;


// Snack 3

const moltiplica = (a, b) => a * b
const dividi = (a, b) => a / b

function eseguiOperazione(a, b, operazione) {
    return operazione(a, b)
}

console.log('Moltiplicazione:', eseguiOperazione(5, 5, moltiplica))  // 10
console.log('Divisione:', eseguiOperazione(10, 10, dividi))    // 0


// Snack 4

function creaTimer(tempo) {
    return function () {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, tempo)
    }
}
const timer = creaTimer(1000)
timer()


// Snack 5 

function stampaOgniSecondo(messaggio) {
    setInterval(() => {
        console.log(messaggio);
    }, 1000)
}

// stampaOgniSecondo('Sono timer!')

