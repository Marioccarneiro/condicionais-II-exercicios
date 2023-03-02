const numero = Number(prompt(`Digite seu numero`))

if (numero % 2 !== 0){
    if(numero % 3 !== 0) {
        console.log(`O numero ${numero} NÃO é divisivel por 2 ou 3.`)
    } else {
        console.log(`O numero ${numero} é divisivel por 2 ou 3`)

    }
} else {
    console.log(`O numero ${numero} é divisivel por 2 ou 3`)
}