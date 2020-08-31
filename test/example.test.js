const { getStores } = require('../helpers')

describe('get store AHUMADA', () => {
  test('get stores AHUMADA', async () => {
    const resp = await getStores()
    expect(resp[0].local_nombre).toEqual('AHUMADA')
  })
})