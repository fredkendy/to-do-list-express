const express = require('express')

//Criando objeto de rotas
const router = express.Router()

const Checklist = require('../models/checklist');

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()  
})

router.post('/', async (req, res) => {
    let { name } = req.body //procurar name dentro de body
    
    try {   //se der tudo certo, devolve o checklist
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})
//parametro enviado no body do postman
// {
//     "task": {
//         "name": "y",
//         "done": true
//     }
// }
// retorna no terminal quando é postado no postman 

router.get('/:id', (req, res) => {  //espera nesse ponto um parametro id
    console.log(req.body)
    res.send(`ID: ${req.params.id}`)    //devolve como resposta o id solicitado
})  

//a url abaixo no postman retorna o "ID: 99"
//localhost:3000/checklists/99


router.put('/:id', (req, res) => {
    console.log(req.body)
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    console.log(req.body)
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router;