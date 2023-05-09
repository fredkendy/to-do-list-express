const express = require('express');

//Criando instância do app e chamando express
const app = express();

//Criou rota e devolvendo html
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>')
})

app.listen(3000, () => {
    console.log('Servidor foi iniciado')
})

//Instalar o nodemon (servidor de desenvolvimento, monitora arquivos e reinicia servidor sozinho sempre que houver mudanças) npm install nodemon --save-dev
//npx modemon (da informações a mais que o servidor, além de só node app.js)
