//criar uma fumção para exibir uma lista de alunos
// function listaAlunos(aluno1,aluno2,aluno3,aluno4){
//     console.log("Sejam bemvindo todos os alunos!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// };

//Na função não temos como saber antemão quantos parametros serão passados
//aí entra o rest operator que irá transformar os parametros em um array

//vamos reescrever a função utilizando rest operator
function listaAlunos(...alunos){
    console.log("Sejam bemvindo todos os alunos!");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);

};
listaAlunos('Adamastor','Benevides','Conegudes','Demerval','Emergarda');

//Ouro exemplo: sorteador de números primos menor do que 20

function sorteadorPrimo(...numeros){
    console.log(numeros);
    //const numeroSorteado = Math.random()*numeros.length;

    const numeroSorteado = Math.floor(Math.random()*numeros.length);
    console.log(`posição ${numeroSorteado}`);
    console.log(`Número primo ${numeros[numeroSorteado]}`);
};

sorteadorPrimo(2,3,5,7,11,13,17,19);


// Sorteador de Alunos 

function alunosDS(...alunos){
    
    const alunosDS = Math.floor(Math.random()*alunos.length);
    console.log(`O Aluno é : ${alunos[alunosDS]}`);};

    alunosDS('aline','ana clara','andre','bernardo','daniel','deivid','henrique','fernanda','gabriel rossa','gabriel zatera','heloise','isadora','jefte','joão matheus','joão mauricio','jose vitor','julia','kamila','karina','kevin','leonardo F','leonardo g','lorenzo','lucas','matheus','nicolas','nycolas','pedro p','rafaela','raphael','rayra','valentina','vinicius','vitor g','vitor s','pedro s','ana luiza')
