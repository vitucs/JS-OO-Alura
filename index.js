import { Cliente } from "./Cliente.js"
import { contaCorrente } from "./ContaCorrente.js"
const cliente1 = new Cliente("Ricardo", 123123123123);
const cliente2 = new Cliente("Alice", 123123123456);
const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);
const contaCorrenteAlice = new contaCorrente(cliente2, 102);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(contaCorrente.contador);