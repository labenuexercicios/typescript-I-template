import {Tclientes, Tprodutos, TcompraPorClientes} from "./type";

// user
export const clientes: Tclientes[] = [{
    id: "1",
    email: "josé@gmail.com",
    password: "abcd",
}]
// product
export const produtos: Tprodutos[] = [{
  id:"2", 
  nomeDoProduto: "calça", 
  preco: 99,
  categoria: "roupas", 
}]
// purchase
 export const compraPorCliente: TcompraPorClientes[] = [{ 
  usuarioId: "3", 
  produtoId: "5", 
  quantidade: 2,
  totalPreco: 100,
}]