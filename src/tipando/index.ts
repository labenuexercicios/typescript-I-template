import { frota } from "./frota"
import { Car } from "./types"

function buscarCarrosPorMarca(frota: Car[], marca?: string): Array<Car> | Number {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota, 'Ford'))