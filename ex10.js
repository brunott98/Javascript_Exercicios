/*

Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.


*/

function dividedByThree(n){
    if(n%3 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(dividedByThree(3))  //true
console.log(dividedByThree(2)) //false