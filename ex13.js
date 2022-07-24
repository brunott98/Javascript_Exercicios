/*

Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

*/

function dayType(day){

    switch (day) {
        case 1:
            return console.log("Fim de semana")
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return console.log("Dia util")
        case 7:
            return console.log("fim de semana")
        default: 
            return console.log("Dia invalido")
        }
    }


dayType(1)       //Fim de semana
dayType(5)      //Dia util
dayType('a')   //Dia invalido

