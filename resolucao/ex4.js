//EX04
// declara o saldo
var saldo = 1000;
// declara o limite de credito
var limiteCredito = 500;
// uma lista com o valor das compras
var valorCompras = [200, 800, 300, 400, 600];

for (var i = 0; i < valorCompras.length; i++) {
    // declara o valor da compra de acordo com o que esta na lista
    var valorCompra = valorCompras[i];

    // se o valor da compra for menor que ou igual ao saldo
    if (valorCompra <= saldo) {
        console.log("Compra " + (i+1) + " aprovada. Saldo restante: " + (saldo - valorCompra));
        saldo -= valorCompra;
    } 
    // senao, se o valor da compra for menor ou igual o saldo + o limite no credito
    else if (valorCompra <= saldo + limiteCredito) {
        console.log("Compra " + (i+1) + " aprovada com limite de crédito. Saldo restante: " + ((saldo + limiteCredito) - valorCompra));
        saldo = 0;
        limiteCredito -= (valorCompra - saldo);
    } 
    // senao
    else {
        console.log("Compra " + (i+1) + " negada. Saldo insuficiente e limite de crédito excedido.");
    }
}