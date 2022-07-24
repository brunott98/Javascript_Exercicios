/*

Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

*/

function mathWorks(a,b,c){

    switch(b){

        case "+":
            return console.log(a + c);

        case "-":
            return console.log(a - c);

        case "*":
            return console.log(a * c);

        case "/":
            return console.log(a / c);
        
        default:
            return console.log("Opção invalida")    
            
    }

}

mathWorks(5,"+",2)      //7
mathWorks(10,"-",2)    //8
mathWorks(5,"*",2)    //10
mathWorks(10,"/",2)  //5
mathWorks(5,"f",2)  //Opção invalida
