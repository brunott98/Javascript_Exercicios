/*

Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

*/

function bhaskara(a,b,c){
    let delta = Math.pow(b,2) - (4 * (a * c));

    if(delta==0){
        let x1 = (-b + Math.pow(delta,(1/2))) / (2*a)
        let x2 = (-b - Math.pow(delta,(1/2))) / (2*a)
        
        let results = [x1.toFixed(3),x2.toFixed(3)]
        return console.log(results);

    }else if(delta>0){
        let x1 = (-b + Math.pow(delta,(1/2))) / (2*a)
        let x2 = (-b - Math.pow(delta,(1/2))) / (2*a)
        
        let results = [x1.toFixed(3),x2.toFixed(3)]
        return console.log(results);

    }else {
        return console.log("Delta negativo")
    }
}

bhaskara(10,-2,10) //Delta negativo

bhaskara(1,5,5) // [ '-1.382', '-3.618' ]

bhaskara(1,-2,1) //[ '1.000', '1.000' ]

