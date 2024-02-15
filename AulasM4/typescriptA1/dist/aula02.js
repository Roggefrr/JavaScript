"use strict";
/*Adicionando a variavel formulario o id dele */
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    /* Recebendo os dados do usuário*/
    /*Recebendo a variável nome*/
    const Nome = document.getElementById('Nome').value;
    /*Recebendo a variável telefone*/
    const Telefone = document.getElementById('Telefone').value;
    /*Recebendo a variável Data de nascimento*/
    const DataNSC = document.getElementById('DataNSC').value;
    /*Recebendo a variável CPF*/
    const cpf = document.getElementById('cpf').value;
    /*Recebendo a variável EMAIL*/
    const email = document.getElementById('email').value;
    console.log(Nome, Telefone, DataNSC, cpf, email);
});
