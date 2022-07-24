/*

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

/*Informe a taxa em porcentagem e use o tempo em meses*/

function  interestRatesSimple(capital,taxa,tempo){

    let juros = capital * (taxa/100) * tempo
    let montante = capital + juros
    let realCurrency = montante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return console.log(realCurrency)

}

function  interestRatesCompound(capital,taxa,tempo){

    let montante = capital * Math.pow(1 + (taxa/100),tempo)
    let realCurrency = montante.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return console.log(realCurrency)

}

interestRatesSimple(1000,30,2)     //R$ 1.600,00
interestRatesCompound(1000,30,2)  //R$ 1.690,00








