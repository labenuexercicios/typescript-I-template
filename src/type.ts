export type Tclientes = {
    id: string
    email: string
    password: string
  
  }
  export type Tprodutos = {
    id: string
    nomeDoProduto: string
    preco: number
    categoria: string
  
  }
  export type TcompraPorClientes = {
    usuarioId: string 
    produtoId: string 
    quantidade: number
    totalPreco: number
  
  }