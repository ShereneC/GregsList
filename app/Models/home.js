export default class Home {
  /**
   * 
   * @param {String} style 
   * @param {String} color 
   * @param {Number} color
   * @param {Number} price
   *  
   */
  constructor(style, color, size, price) {

    this.style = style
    this.color = color
    this.size = size
    this.price = price


  }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
            <div class="p-3">
              <div class="text-center">
                  <p><b>${this.style} - ${this.color} - ${this.size}</b></p>
              </div>
              <p><em>$${this.price}</em></p>
          </div>
      </div>
  </div>
    `
  }
}