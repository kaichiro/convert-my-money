const api = require('./api.bcb')
//const jest = require('jest')
const axios = require('axios')

jest.mock('axios')

const objResponseMocked = {
    data: {
        value: [
            { cotacaoVenda: 3.9 }
        ]
    }
}

test('getCotacaoAPI', () => {
    axios.get.mockResolvedValue(objResponseMocked)
    api.getCotacaoAPI('url').then(response => {
        expect(response).toEqual(objResponseMocked)
        expect(axios.get.mock.calls[0][0]).toBe('url')
    })
})

test('extractCotacao', () => {
    const cotacao = api.extractCotacao(objResponseMocked)
    expect(cotacao).toBe(3.9)
})