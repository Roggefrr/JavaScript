import { NamedTupleMember } from "typescript"
/*questão 1*/
let PrecoPão:number = 0.12;
let PrecoBroa:number = 1.50;
let qtdpaes:number = 5;
let qtdBroas:number = 10;
let arrecadaoDia = (PrecoPão * qtdpaes) + (PrecoBroa * qtdBroas);
console.log("questão 1");
console.log("Arrecadação: "+arrecadaoDia * (10 / 100));
/*questão 2*/
let LitrosColocados:number = 5;
let ValorLitro:number = 1.6;
let ValorPago = (ValorLitro * LitrosColocados);
console.log("questão 2");
console.log("valor a pagar: "+ValorPago);
/*questão 3*/
let PesoPrato:number = 100;
let PrecoKilo:number = 12;
let valorapagar = (PesoPrato * PrecoKilo);
console.log("questão 3");
console.log("valor a pagar: "+valorapagar);
/*questão 4*/
let diasdoano:number = 365;
let diaEntrada:number = 9 - 30;
let mesEntrada:number = 2 * 30;
let quantidadededias = diaEntrada + mesEntrada;
let resultado = diasdoano - quantidadededias;
console.log("questão 4");
console.log("Faltam" + " " + resultado + " " + "dias");
console.log("Se passaram" + " " + quantidadededias+"dias");
/*questão 5*/
let nota1:number = 10*1;
let nota2:number = 4*2;
let nota3:number = 2*3;

let somanota = (nota1+nota2+nota3)/6;
console.log("questão 5");
console.log("nota: "+somanota);
/*questão 6*/ 

let valorCP:number = 10 
let valorCM:number = 12
let valorCG:number = 15

let quantP:number = 10
let quantM:number = 5
let quantG:number = 4

let valorvenda = (valorCP*quantP)+(valorCM*quantM)+(valorCG*quantG)

console.log("questão 6")
console.log(valorvenda)

/*questão 7*/

let pesoQueijo:number = 50*2;
let pesoPresunto:number = 50;
let pesoH:number = 100;


let Quantidade:number = 10;

let pesoHTK:number = (10*(pesoQueijo+pesoPresunto+pesoH))/1000;

let Queijo = pesoQueijo*Quantidade/1000;
let Presunto = pesoPresunto*Quantidade/1000;
let Hamburguer = pesoH*Quantidade/1000;

console.log("Questão 7")
console.log("Peso total: "+pesoHTK+" kilo "+"Peso Queijo: "+Queijo+" Kilo "+"Peso Presunto "+Presunto+" Kilo "+"Hamburguer: "+Hamburguer+" Kilo");

/*questão 8*/
