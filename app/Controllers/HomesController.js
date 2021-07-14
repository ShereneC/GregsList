import { ProxyState } from "../AppState.js"

import { homesService } from "../Services/HomesService.js"

function _draw() {
  let template = ''
  ProxyState.homes.forEach(home => {
    template += home.Template
  })
  document.getElementById('homes').innerHTML = template
}


export default class HomesController {
  constructor() {
    ProxyState.on('homes', _draw)
    ProxyState.on('homes', () => { console.log('new Home') })
    _draw()
  }

  createHome(e) {
    e.preventDefault()
    let form = e.target
    let rawHome = {
      style: form.style.value,
      color: form.color.value,
      size: form.size.value,
      price: form.price.value
    }
    console.log(rawHome)
    homesService.createHome(rawHome)

    form.reset()
  }
}