const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}

const toMoney = valor => parseFloat(valor).toFixed(2)

module.exports = { convert, toMoney }