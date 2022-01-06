const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.discount = 0;
    this.cart = [];
  }

  addItem(candy) {
    this.cart.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = this.cart.map(candy => candy.price).reduce((item, acc) => item + acc, 0);
    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasket;