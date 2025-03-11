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

// Snack 6 CORRETTO

function creaContatoreAutomatico(intervallo) {
    let contatore = 0;
    return function () {
        setInterval(() => {
            console.log(contatore);
            contatore++;
        }, intervallo)
    }
}

const contaSecondo = creaContatoreAutomatico(1000)
// contaSecondo()

// Snack 7 TO DO CORRETTO

function eseguiEFerma(messaggio, tAvvio, tStop) {

    let intervalId = setInterval(() => {
        console.log(messaggio);
    }, tAvvio)

    setTimeout(() => {
        clearInterval(intervalId);
    }, tStop)
}
eseguiEFerma('Ciao timer', 1000, 9000)

// Snack 8

function contoAllaRovescia(n) {
    let interval = setInterval(() => {
        if (n == 0) {
            console.log('Tempo scaduto!');
            clearInterval(interval);
        }
        else {
            console.log(n);
            n--;
        }
    }, 1000)

}

// contoAllaRovescia(5)

// Snack 9 CORRETTO

sequenzaOperazioni([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3'),
], 1000)

function sequenzaOperazioni(arr, intervallo) {
    arr.forEach((element, index) => {
        setTimeout(() => {
            element();
        }, intervallo * index)
    });
}

// Snack 10