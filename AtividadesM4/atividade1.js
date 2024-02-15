"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*questão 1*/
let PrecoPão = 0.12;
let PrecoBroa = 1.50;
let qtdpaes = 5;
let qtdBroas = 10;
let arrecadaoDia = (PrecoPão * qtdpaes) + (PrecoBroa * qtdBroas);
console.log("questão 1");
console.log("Arrecadação: " + arrecadaoDia * (10 / 100));
/*questão 2*/
let LitrosColocados = 5;
let ValorLitro = 1.6;
let ValorPago = (ValorLitro * LitrosColocados);
console.log("questão 2");
console.log("valor a pagar: " + ValorPago);
/*questão 3*/
let PesoPrato = 100;
let PrecoKilo = 12;
let valorapagar = (PesoPrato * PrecoKilo);
console.log("questão 3");
console.log("valor a pagar: " + valorapagar);
/*questão 4*/
let diasdoano = 365;
let diaEntrada = 9 - 30;
let mesEntrada = 2 * 30;
let quantidadededias = diaEntrada + mesEntrada;
let resultado = diasdoano - quantidadededias;
console.log("questão 4");
console.log("Faltam" + " " + resultado + " " + "dias");
console.log("Se passaram" + " " + quantidadededias + "dias");
/*questão 5*/
let nota1 = 10 * 1;
let nota2 = 4 * 2;
let nota3 = 2 * 3;
let somanota = (nota1 + nota2 + nota3) / 6;
console.log("questão 5");
console.log("nota: " + somanota);
/*questão 6*/
let valorCP = 10;
let valorCM = 12;
let valorCG = 15;
let quantP = 10;
let quantM = 5;
let quantG = 4;
let valorvenda = (valorCP * quantP) + (valorCM * quantM) + (valorCG * quantG);
console.log("questão 6");
console.log(valorvenda);
/*questão 7*/
let pesoQueijo = 50 * 2;
let pesoPresunto = 50;
let pesoH = 100;
let Quantidade = 10;
let pesoHTK = (10 * (pesoQueijo + pesoPresunto + pesoH)) / 1000;
let Queijo = pesoQueijo * Quantidade / 1000;
let Presunto = pesoPresunto * Quantidade / 1000;
let Hamburguer = pesoH * Quantidade / 1000;
console.log("Questão 7");
console.log("Peso total: " + pesoHTK + " kilo " + "Peso Queijo: " + Queijo + " Kilo " + "Peso Presunto " + Presunto + " Kilo " + "Hamburguer: " + Hamburguer + " Kilo");
/*questão 8*/
