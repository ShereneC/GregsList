import { ProxyState } from "../AppState.js"
import Home from "../Models/home.js"

class HomesService {
  createHome(rawHome) {
    ProxyState.homes = [...ProxyState.homes, new Home(rawHome.style, rawHome.color, rawHome.size, rawHome.price)]
  }
}


export const homesService = new HomesService()