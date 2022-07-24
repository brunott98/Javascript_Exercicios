/*

As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.

*/

function leapYear(year){

    if(year%400 == 0){

        return console.log(`The year ${year} is a leap year.`) 
        
    }else if(year%100 != 0 && year%4==0) {

        return console.log(`The year ${year} is a leap year.`) 

    }else{

        return console.log(`The year ${year} is not a leap year.`) 

    }

}
leapYear(2016)
leapYear(2017)
leapYear(400)
leapYear(500)
leapYear(2020)


/*
test results:

The year 2016 is a leap year.
The year 2017 is not a leap year.
The year 400 is a leap year.
The year 500 is not a leap year.
The year 2020 is a leap year.

*/