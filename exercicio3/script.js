//códigos a serem reescritos

const nomeDoUsuario = prompt(`Digite seu nome!`)
const IdadeDoUsuario = Number(prompt(`Digite sua Idade!`))

// a)
// if(nome === "José"){
// 	console.log("Oi, Zé!")
// } else {
// 	console.log("Olá, " + nome)
// }


nomeDoUsuario === `José` ? console.log(`Oi, Zé!`) : console.log(`Olá ${nomeDoUsuario}`)

// b)
// if(idade >= 18){
// 	console.log("Pode tirar carteira de motorista!")
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista!")
// }

IdadeDoUsuario >= 18 ? console.log(`Pode tirar a carteira de motorista`) :
console.log(`Aomda não pode tirar a carteira de motorista!`)