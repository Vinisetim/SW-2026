import http from 'http'
import express from 'express'

const app = express()

//req: requisição (request) res: resposta()response
app.get('/',(req, res) => {
    res.end('Olá Mundo')
})

const server = http.createServer(app)

server.listen(3000, () => {
    console.log("servidor rodando http://localhost:3000")
})