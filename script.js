//ATIVIDADE 01
//Escreva um programa que imprima no console os números de 0 a 10.
// for (let i = 0; i < 11; i++){
//     console.log(i)
// }

//ATIVIDADE 02
//Escreva um programa que solicite um número inteiro e imprima a tabuada desse número de 1 a 10.
// const numero = Number(prompt("Digite um número: "))

// for (let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

//ATIVIDADE 03
//Escreva um programa que solicite um número inteiro positivo e faça uma contagem regressiva a partir desse número até 0.
// const numero = Number(prompt("Digite um número inteiro e positivo: "));

// if (numero > 0) {
//   for (let i = numero; i >= 0; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("Digite um número positivo");
// }


//ATIVIDADE 04
// Escreva um programa que irá solicitar ao usuário uma palavra e que imprimirá no console a palavra sem vogais.
// const palara = prompt("Digite uma palavra")
// let palara_sem_vogal = ""
// const vogais = "aeiouáâãàéêíóôõú"

// for (letra of palara.toLowerCase()){
//     if (!vogais.includes(letra)){
//         palara_sem_vogal = palara_sem_vogal + letra
//     }
// }

// console.log(palara_sem_vogal)


//ATIVDADE 05
//Escreva um programa que irá solicitar ao usuário uma palavra e conte o número de vogais presentes.
// const palara = prompt("Digite uma palavra")
// const vogais = "aeiouáâãàéêíóôõú"
// let contador_vogais = 0

// for (caracter of palara.toLowerCase()){
//   if (vogais.includes(caracter)){
//     contador_vogais++
//   }
// }
// console.log(`A palavra "${palara}" possui ${contador_vogais} vogais`)


//ATIVIDADE 06
// Escreva um programa que imprima os múltiplos de 3 de 1 a 30.
// for (let i = 1; i <= 30; i++){
//   if (i % 3 === 0){
//     console.log(i)
//   }
// }


//ATIVIDADE 07
//FAÇA UM PROGRAMA QUE PEDE PARA O USUÁRIO DIGITAR UM NÚMERO POSITIVO E FAÇA A MÁQUINA ESCOLHER UM NÚMERO ALEATÓRIO ENTRE 1 E 100
// E MOSTRE UMA MENSAGEM NO CONSOLE MOSTRANDO SE O VALOR DIGITADO PELO USUÁRIO É MAIOR OU MENOR DO QUE O NÚMERO ALEATÓRIO ESCOLHIDO 
// PELA MÁQUINA E CASO ELE ACERTE, MOSTRE UMA MENSAGEM INFORMANDO QUE ELE ACERTOU
let numero_digitado = Number(prompt("Escolha um número de 1 a 100: "))
const numero_aleatorio = Math.floor(Math.random () * 100) +1

if(numero_digitado > numero_aleatorio){
  console.log(`O número digitado foi ${numero_digitado}, ele é maior do que o número sorteado`)
} else if(numero_digitado < numero_aleatorio){
  console.log(`O número digitado foi ${numero_digitado}, ele é menor do que o número sorteado`)
}else if(numero_digitado === numero_aleatorio){
  console.log(`Você acertou o número!!!`)
}
console.log(numero_aleatorio)
