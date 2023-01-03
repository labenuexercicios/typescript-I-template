//A função ao lado recebe um array de carros e uma marca. 
//Ela devolve os carros desta marca ou o array inteiro, caso a marca não seja passada.
//Faça corretamente a tipagem do arquivo frota.ts, que contém os dados dos carros (marca, modelo, ano)
//Importe os dados desse arquivo para o index.ts e faça a tipagem correta da função
//Torne o parâmetro marca opcional





import { frota } from "./frota"
import { TCarro } from "./types"



function buscarCarrosPorMarca(frota: TCarro[], marca?: string): Array<TCarro> {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota))