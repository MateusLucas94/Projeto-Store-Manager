const { expect } = require("chai");
const sinon = require("sinon");
const { getProducts } = require("../../../src/controllers/productsController");
const productsServices = require("../../../src/services/productsServices");


describe('testando controllers de products', async () => {
  it('testando função getProducts', async() => {
     const res = {};
     const req = {
       body: {
         name: 'Martelo do Thor',
       }
     };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    const expectedResult = [{
        id: 1,
        name: 'Martelo de Thor'
      },
      {
        id: 2,
        name: 'Traje de encolhimento'
      },
      {
        id: 3,
        name: 'Escudo do Capitão América'
      }
    ]

    sinon.stub(productsServices, 'getProductsService').resolves(expectedResult)
    await getProducts(req, res)
    expect(res.status.calledWith(200)).to.be.true;
  })
})
