const express = require('express')

const app = express()
const PORT = 3000

app.listen(PORT, err => {
    if (err) {
        console.log('It could not start application')
    }
    else {
        console.log('-----\r\n')
        console.log(`Convert my Money is working at: http://localhost:${PORT}`)
    }
})
