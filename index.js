const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home')
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
