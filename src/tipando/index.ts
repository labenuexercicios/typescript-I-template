import {frota} from './frota'

export type carro={
  marca: string,
  modelo: string,
  ano:number
}

function buscarCarrosPorMarca(frota:carro[], marcaEscolhida:string) {
  if (marcaEscolhida === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marcaEscolhida
    }
  )
}

console.table(buscarCarrosPorMarca(frota,'Ford'))