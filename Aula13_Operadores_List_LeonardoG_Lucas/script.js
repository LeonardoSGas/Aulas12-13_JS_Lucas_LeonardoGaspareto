//MAP
//percorre todo o array e executando a ação que tivermos programado

// let lista = ['Altomiro','Barnabé', 'Cremildo'];

// lista.map((nome,posicao)=>{
//     console.log(`Ò nome é ${nome} e ele ocupa posição ${posicao}`)
// });

//REDUCE
//procura reduzir um array, normalmente atravez de operações matematicas 
//operações matematicas transformando todo o conteudo
//do array em um unico valor

// let numeros = [2,3,5,10];

// let total = numeros.reduce((acumulador,numero,indice,original)=>{
//     console.log(`${acumulador} - total até agora`);
//     console.log(`${numero} - valor atual `);
//     console.log(`${indice} - posição até agora `);
//     console.log(`${original} - array original`);

//     console.log('------------------------------');
//     return acumulador = acumulador*numero;
// });
// console.log(`Total do reduce é ${total}`);

//FIND
// faz uma busca dentro do array e delvolve o primeiro item que 
//ele encontra e corresponde ao criterio ao criterio de busca 

// let listagem = [2,3,"Marcelo",5,'Professor']

// let busca = listagem.find((item2)=>{
//     if(item2 === "Marcelo"){
//      return console.log('Nome encontrado')
//     }else{
//         return console.log('Nome não encontrado')
//     }
// });

// console.log(busca);


//FILTER
//filtra itens dentro do array 
let palavras = ['alface','beterraba','cenoura','dedo','espinafre']

//vamos retornar palavras que tem menos de 7 letras
resultado = palavras.filter((palavra)=>{
    return palavra.length>=7
});

console.log(resultado);