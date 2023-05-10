const express = require('express');

//Criando instância do app e chamando express
const app = express();

//Usando middlewares: verificando se existe algo json sendo passado
app.use(express.json())
//Passado esse parametro no body da requisção json do postman:
// {
//     "task": {
//         "title": "x",
//         "done": false
//     }
// }

//Criando função exemplo para testar middlewares
const log = (req, res, next) => {
    console.log(req.body)
    console.log(`Data: ${Date.now()}`)
    next()  //passa execução pro próximo middleware
}

//Chamando função log com middlewares
app.use(log)

//Criou rota e devolvendo html
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.get('/json', (req, res) => {    //qdo chamar /json, cai aqui (ex: localhost:3000/json)
    console.log(req.body)
    res.json({title: 'Tarefa X', done: true})    //devolver no formato json
})

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})

//Instalar o nodemon (servidor de desenvolvimento, monitora arquivos e reinicia servidor sozinho sempre que houver mudanças) npm install nodemon --save-dev
//npx modemon (da informações a mais que o servidor, além de só node app.js)
