const Candy = require('../main/candy');

describe('Candy', () => {

  beforeEach(()=>{
    candy = new Candy('Mars', 1.99);
  })

  it('creates an instance of the Candy class', () => {
    expect(candy).toBeInstanceOf(Candy);
  });

  it('class Candy has a getName method', () => {
    expect(typeof candy.getName).toBe("function");
  });

  it('returns the stored candy name on calling getName method', () => {
    expect(candy.getName()).toEqual('Mars');
  });

  it('class Candy has a getPrice method', () => {
    expect(typeof candy.getPrice).toBe("function");
  });

  it('returns the stored candy price on calling getPrice method', () => {
    expect(candy.getPrice()).toEqual(1.99);
  });
})