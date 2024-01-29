var vetor = []; 

vetor [0] = "Pão Francês";
vetor [1] = "Pão Doce";
vetor [2] = "Pão de batata";
//Vai adicionar um elemento no final do vetor
vetor.push("Pão de ló");
//vai remover o ultimo elemento do vetor
vetor.pop();
//vai remover o ultimo elemento do vetor, mudando os indices de todos eles.
vetor.shift();
//vai adicionar um elemento no incio dos vetores, roubando o primeiro indice, e por consequencia aumentando o indice de todo mundo que
//vem depois
vetor.unshift("Pão de mel");
console.log(vetor);
//Vetores sempre vão ter como seu tipo objeto
console.log(typeof vetor);
//como encontrar a posição ou indice de algum elemento no vetor
console.log(vetor.indexOf("Pão de batata"));
