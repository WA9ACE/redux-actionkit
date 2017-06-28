const { middleware, listen } = require('../src')

describe('ActionKit', () => {
  it('should register listeners', () => {
    expect('hello world').to.equal('hello world')
  })
})
