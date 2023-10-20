let texto : string = "aula 1 ts";
let numero :number = 13;
let boolean: boolean = true;
let number: number[]= [1,2,3,];
let objeto:{nome:string, idade:number} ={
    nome:'nathalia',
    idade:23
}

console.log(texto); 

console.log(soma(2,4));

function soma(a:number, b:number): number {

    return a+b;

}