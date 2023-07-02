const { expect } = require('chai')
const sinon = require('sinon')
const productsServices = require("../../../src/services/productsServices");

describe('testando a camada services de products', async() => {
  it('testando getProductsService', async () => {
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
    const result = await productsServices.getProductsService()
    expect(result).to.be.deep.equal(expectedResult)
  })
})
