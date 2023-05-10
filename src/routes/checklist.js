const express = require('express')

//Criando objeto de rotas
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()  
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body)
})
//parametro enviado no body do postman
// {
//     "task": {
//         "name": "y",
//         "done": true
//     }
// }
// retorna no terminal quando é postado no postman 

module.exports = router;