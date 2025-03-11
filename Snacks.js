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

// Snack 6

function creaContatoreAutomatico(n) {
    let contatore = n;
    return function () {
        setInterval(() => {
            console.log(contatore);
            contatore++;
        }, 1000)
    }
}

// creaContatoreAutomatico(2)()

// Snack 7 TO DO

function eseguiEFerma(messaggio, tAvvio, tStop) {

    let tempo = 0;
    let interval = setInterval(() => {
        console.log(messaggio);
        tempo += tAvvio;
        if ((tempo + tAvvio) > tStop) {
            clearInterval(interval)
        }
    }, tAvvio)
}
// eseguiEFerma('Ciao timer', 1000, 9000)

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

// Snack 9
sequenzaOperazioni([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3'),
], 1000)

function sequenzaOperazioni(arr, intervallo) {
    let counter = 0;
    let interval = setInterval(() => {
        if (arr.length <= counter) {
            clearInterval(interval)
        } else {
            arr[counter]();
            counter++
        }

    }, intervallo)
}

// Snack 10