/*

Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.

*/

function carSales(car){

    switch(car){

        case "hatch":
            return console.log("Compra realizada com sucesso");
        case "sedan": case "motocicleta": case "caminhonete":
            return console.log("Tem certeza que não prefere esse modelo?");
        default:
            return console.log("Não trabalhamos com esse tipo de automóvel aqui");       

    }

}

carSales("sedan")
carSales("caminhonete")
carSales("motocicleta")
carSales("hatch")

/*
Tests results:

Tem certeza que não prefere esse modelo?
Tem certeza que não prefere esse modelo?
Tem certeza que não prefere esse modelo?
Compra realizada com sucesso

*/