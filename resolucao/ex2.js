//Versão 1 da função que calcula orçamento
function calculaOrcamento(){

    //declara o array com a lista de gastos
    var gastos = [3600, 950, 620, 38];
    // define que o total dos gastos é a posição 0 da lista (3600)
    var totalGastos = gastos[0];
    // declara a variavel salario
    var salario = 3500;
    //declara a variavel saldo
    var saldo = 0; 
    // declara a variavel statusSaldo com a mensagem positivo dentro dela
    var statusSaldo =  'positivo';
    //declara a variavel i
    var i = 1;

    //faça totalGastos somar com os gastos da posicao i (do 950 para frente), enquanto salario for maior ou igaul ao total de gastos e i for menor que o tamanho da lista
    // a diferença é que no do, ele roda o código sem ver a condição na primeira vez
    do{
        totalGastos += gastos[i];
        i++;
    } while(salario >= totalGastos && i<gastos.length)
    
    //define o saldo subtraindo o salario dos gastos
    saldo = salario - totalGastos;

    //se o saldo for menor que o, o status dele é negativo
    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

//Versão 2 da função que calcula orçamento
function calculaOrcamento2(){

    var gastos = [3600, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var statusSaldo =  'positivo';
    var saldo = 0;
    var i = 1;

    // loop while que repete enquanto o salario for maior que o total de gastos e i for menor que o tamanho da lista
    while(salario >= totalGastos && i<gastos.length){
        totalGastos += gastos[i];
        i++;
    }

    saldo = salario - totalGastos;
    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

calculaOrcamento();
calculaOrcamento2();