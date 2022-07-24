/*

Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).

*/


function gameHistory(gamePoints){

    let points = gamePoints.split(", ").map(str => +str)  //The code is comparing strings after the split. Change them to numbers with a map
    let recordBreak = 0;
    let downgrade = 0;
    let bestPoint = points[0];
    let worsePoint = points[0];

    for(let i = 1; i<points.length; i++){
        
        if(points[i]>bestPoint){

            bestPoint = points[i]
            recordBreak = recordBreak + 1;
            
        }else if(points[i]<worsePoint){
            worsePoint = points[i]
            downgrade = downgrade +1;

        }

    }
    return console.log(`Times the player beated his records:${recordBreak}\nTimes the player had a worse game:${downgrade}`) 

}

gameHistory("10, 12, 8, 15, 20")


/*

Test results:
Times the player beated his records:3
Times the player had a worse game:1

*/
