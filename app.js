"use strict"
// Condicionales if, if else, switch

// let numero1 = 23;
// let numero2 = 20;

// if (numero1 > numero2) {
//     console.log("El numero : "+ numero1+" es mayor que numero "+ numero2)
// } else   {
//     console.log("El numero : "+ numero2+" es mayor que numero "+ numero1)
// } 

//PEDIR LA EDAD DE UN USUARIO , DECIRLE SI ES MAYOR DE EDAD

// let edad = prompt("Dame tu edad");

// if (edad>0) {
//     if (edad>=18){
//         document.write("Eres mayor de edad");
//         } else {
//             document.write("Eres menor de edad");
//         }
//     } else {
//         document.write("Edad no valida");
//     }

// PEDIR EL DIA DE LA SEMANA
// let dia = prompt("Dame el dia de la semana").toLowerCase();

// switch (dia) {
//     case 'lunes':
//         console.log('El dia que escogiste es lunes');
//         break;
//     case'martes':
//         console.log('El dia que escogiste es martes');
//         break;
//     case'miercoles':
//         console.log('El dia que escogiste es miercoles');
//         break;
//     case'jueves':
//         console.log('El dia que escogiste es jueves');
//         break;
//     case'viernes':
//         console.log('El dia que escogiste es viernes');
//         break;
//     case'sabado':
//         console.log('El dia que escogiste es sabado');
//         break;
//     case 'domingo' :
//         console.log('El dia que escogiste es domingo');
//         break;
//     default:
//         console.log('El dia que escogiste no es valido');
//         break;
// }

// OPERADOR TERNARIO ? (signo de interrogacion)

// let numero1 = 15;
// let numero2 = 20;

//                 // condicion ? true : false
// let valor = (numero1 > numero2) ? 'El numero1 es mayor' : 'El numero2 es mayor';

// console.log(valor);
// PEDIR DOS NUMEROS Y DECIR SI SON IGUALES O SI ES MAYOR DECIR CUAL
// let numero1 = prompt('Dime un numero');
// let numero2 = prompt('Dime un numero');
// if (numero1 == numero2) {
//     console.log('Los numeros son iguales');
// } else  {
// let mayor = (numero1 > numero2) ? `El ${numero1} es mayor y el ${numero2} es menor ` : `El ${numero2} es mayor y el ${numero1} es menor `; 
// console.log(mayor);
// }
//PEDIR UN NUMERO Y QUE ME DIGA SI ES PAR O NO

// let numero = prompt('Dame un número');
// let tipo = (numero % 2 == 0) ? `El número ${numero} es par` : `El número ${numero} es impar` 
// console.log(tipo);

// PEDIR DOS NUMEROS ENTEROS Y DEVOLVER EL COCIENTE O SEA EL RESULTADO DE DIVIDIR EL NUMERO 1
// ENTRE EL 2, PERO SI UNO DE LOS NUMEROS ES O NO HACER NADA Y MANDAR UN MENSAJE DE ERROR

// let numero1 = parseInt(prompt("Introduce el primer número entero:"));
// let numero2 = parseInt(prompt("Introduce el segundo número entero:"));
// if (!isNaN(numero1) && !isNaN(numero2)) {
//   if (numero2 !== 0 && numero1 !==0) {
//     const cociente = numero1 / numero2;
//     console.log(`El cociente de ${numero1} entre ${numero2} es: ${cociente}`);
//   } else {
//     console.log("Error: Ningun número puede ser cero.");
//   }
// } else {
//   console.log("Error: Por favor, introduce dos números enteros válidos.");
// }

// Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.

// let numero1 = parseFloat(prompt('Dame un número'));
// let numero2 = parseFloat(prompt('Dame un número')); 
// let operacion = prompt('¿Qué operacion quieres realizar?')
// switch (operacion){
//     case 'suma':
//        let suma = numero1 + numero2 ;
//        console.log(`El resultado es ${suma}`);
//        break;
//     case 'resta':
//         let resta = numero1 - numero2 ;
//         console.log(`El resultado es ${resta}`)
//         break;
//      case 'multiplicacion':
//         let multiplicacion  = numero1 * numero2;
//         console.log(`El resultado es ${multiplicacion}`);
//         break;
//     case 'division':
//         let division  = numero1 * numero2;
//         console.log(`El resultado es ${division}`);
//         break;
// }
