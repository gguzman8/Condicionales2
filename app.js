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
let dia = prompt("Dame el dia de la semana").toLowerCase();

switch (dia) {
    case 'lunes':
        console.log('El dia que escogiste es lunes');
        break;
    case'martes':
        console.log('El dia que escogiste es martes');
        break;
    case'miercoles':
        console.log('El dia que escogiste es miercoles');
        break;
    case'jueves':
        console.log('El dia que escogiste es jueves');
        break;
    case'viernes':
        console.log('El dia que escogiste es viernes');
        break;
    case'sabado':
        console.log('El dia que escogiste es sabado');
        break;
    case 'domingo' :
        console.log('El dia que escogiste es domingo');
        break;
    default:
        console.log('El dia que escogiste no es valido');
        break;
}