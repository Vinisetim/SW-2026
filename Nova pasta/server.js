import http from 'http'
import express from 'express'
//importação do formato módulo

//declara o express como app
const app = express()

app.use(express.json())


//req: requisição (request) res: resposta()response
app.get('/res',(req, res) => { //rota
     //get = requisição
    //res.send('Olá Mundo')
    res.json({
        nome : "Lilia", profissao : "professora"
    })//json
    
    //res.end()//vazio
    //res.status(200) //ok
    //res.status(404)
})

app.get('/req', (req, res) =>{
    console.log('URL: ', req.url);
    console.log('Método: ', req.method);
    console.log('Parâmetros: ', req.params);
    console.log('body: ', req.body);        
    console.log('Query Strings: ', res.query);
    res.send("Olhe o console!");
})

app.get ('/', (req, res) =>{
    res.send('Servidor Funcionando!')
})

app.listen(3000, () =>{
    console.log("Servidor Rodando em http://localhost:3000");
    
})

app.post('/req' , (req, res) => {
    res.json({
        mensagem: "rota post acessada",
        dados: req.body
    })
})

const server = http.createServer(app)
