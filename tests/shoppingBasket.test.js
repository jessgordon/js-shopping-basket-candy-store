const ShoppingBasket = require('../main/shoppingBasket');

describe('ShoppingBasket', () => {

  const candyDouble = { name: 'skittles', price: 1.49 };
  const candyDouble2 = { price: 1.49 };

  beforeEach(() => {
    basket = new ShoppingBasket();
  })

  it('creates an instance of the ShoppingBasket class', () => {
    expect(basket).toBeInstanceOf(ShoppingBasket);
  });

  it('has a method addItem', () => {
    expect(typeof basket.addItem).toBe("function");
  });

  it('addItem adds instance of Candy to the basket', () => {
    basket.addItem(candyDouble);
    expect(basket.cart.length).toEqual(1);
  });

  it('has a method getTotalPrice', () => {
    expect(typeof basket.getTotalPrice).toBe("function");
  });

  it('getTotalPrice returns the sum of candy prices in basket when basket empty', () => {
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('getTotalPrice returns the sum of candy prices in basket', () => {
    basket.addItem(candyDouble2);
    expect(basket.getTotalPrice()).toEqual(1.49);
  });

})