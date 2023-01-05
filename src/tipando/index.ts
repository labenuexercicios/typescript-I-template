import { frota } from "./frota"
import { TCarros } from "./type"



function buscarCarrosPorMarca(frota: TCarros[], marca?: string): Array<TCarros> {
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