/*Adicionando a variavel formulario o id dele */
const formulario = document.getElementById('formulario') as HTMLFormElement



formulario.addEventListener('submit', (event) => {
    event.preventDefault()


/* Recebendo os dados do usuário*/
/*Recebendo a variável nome*/
const Nome = (document.getElementById('Nome') as HTMLInputElement).value
/*Recebendo a variável telefone*/
const Telefone = (document.getElementById('Telefone') as HTMLInputElement).value
/*Recebendo a variável Data de nascimento*/
const DataNSC = (document.getElementById('DataNSC') as HTMLInputElement).value
/*Recebendo a variável CPF*/
const cpf = (document.getElementById('cpf') as HTMLInputElement).value
/*Recebendo a variável EMAIL*/
const email = (document.getElementById('email') as HTMLInputElement).value

console.log(Nome, Telefone, DataNSC, cpf, email)

});









