const { expect } = require('chai')
const sinon = require('sinon')
const connection = require('../../../src/models/connection')
const { getAllProducts, getProductById, newProductModel } = require('../../../src/models/productsModels')

describe('testando a camada model', () => {
  it('testando o model de buscar produtos', async() => {
    const expectedResult = [
       {
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
    sinon.stub(connection,'execute').resolves([expectedResult])
    const result = await getAllProducts()
    expect(result).to.be.deep.equal(expectedResult)
  })
  it('testando model de produtos por id', async () => {
    const expectedResult = [{
      id: 1,
      name: 'Martelo de Thor'
    }]
    sinon.stub(connection, 'execute').resolves([expectedResult])
    const result = await getProductById(1)
    expect(result).to.be.deep.equal(expectedResult)
  })
  it('testando model de cadastrar produtos', async () => {
    const newProduct = {
      name: "ProdutoX"
    }
    const expectResponse = { insertId: 10 }
    sinon.stub(connection, 'execute').resolves([expectResponse])
    const result = await newProductModel(newProduct)
    const expectNewObject = {
      id: expectResponse.insertId,
      name: newProduct.name,
    };
    expect(result).to.be.deep.equal(expectNewObject);
  })
  afterEach(sinon.restore)
})
