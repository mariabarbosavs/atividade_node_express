const express = require('express')
const path = require('path')

const app = express()
const port = 5000

const basePath = path.join(__dirname, 'templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/sobre', (req, res) => {
    res.sendFile(`${basePath}/sobre.html`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})