function MudarDelugar(vetor) {
    var NumeroDeTrocas = 0;

    for (var i = 1; i<vetor.length; i++){
//a "var i" represente o primeiro elemento do vetor
//que esta na parte desordanada
    var key = vetor[i];
    var j = i - 1;
//A "Var J" vai ser a responsável por fazer os valores
//a serem comparados sejam o da esquerda, ja que o mesmo
// esta sendo subitraido

while(j>=0 && vetor[j] > key){
    vetor[j + 1] = vetor[j];
    j--;
    NumeroDeTrocas++
}
//responsavel por aplicar o numero no lugar correto.
vetor[j+1] = key;
    }

return {sortedArray: vetor, NumeroDeTrocas};
}
const unsortedArray = [130, 40, 1, 32, 45, 345, 72, 21, 10, 57];
const result = MudarDelugar(unsortedArray);
console.log(result.sortedArray);
console.log(`Quantidade de vezes que se trocou de lugar: ${result.NumeroDeTrocas}`);