/*

Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

function triangleType(a,b,c) {
    if(a == b && b == c || a == c && a == b ){
        console.log("Equilatero")

    }
    else if(a == b && b!=c || a == c  && a!=b || b == c && a != b ){
        console.log("Isoceles")
    }
    else{
        console.log("Escaleno")
    }
}

triangleType(7,7,7)   
triangleType(7,1,1)
triangleType(1,1,7)
triangleType(7,7,1)
triangleType(1,7,7)
triangleType(1,7,1)
triangleType(2,8,1)

/*
Test results:

Equilatero
Isoceles
Isoceles
Isoceles
Isoceles
Isoceles
Escaleno

*/
