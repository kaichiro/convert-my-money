const express = require('express')
const path = require('path')

const convert = require('./lib/convert')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade } = req.query
    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao),
            error: false,
        })
    } else {
        res.render('cotacao', { error: 'Invalid values!' })
    }
})

app.listen(PORT, err => {
    if (err) {
        console.log('It could not start application')
    }
    else {
        console.log('-----\r\n')
        console.log(`Convert my Money is working at: http://localhost:${PORT}`)
    }
})
