import { ProxyState } from "../AppState.js"
import Car from "../Models/Car1.js"


class CarsService {
  createCar(rawCar) {

    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()