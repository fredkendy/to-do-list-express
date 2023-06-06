const express = require('express')

//Criando objeto de rotas
const router = express.Router()

const Checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({}) //nd específico, busca tudo
        res.status(200).json(checklists)
    } catch (error) {
        res.status(422).json(error)
    }
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

router.get('/:id', async (req, res) => {  //espera nesse ponto um parametro id
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    } catch (error) {
        res.status(422).json(error)
    }
})  

//a url abaixo no postman retorna o "ID: 99"
//localhost:3000/checklists/99


router.put('/:id', async (req, res) => {
    let { name } = req.body //name é o q queremos atualizar
    
    //postman: PUT: url local + id da task. No body: passar um name como json e send

    try {
       let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true}) 
       res.status(200).json(checklist)
    } catch (error) {
       res.status(422).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
       let checklist = await Checklist.findByIdAndRemove(req.params.id) 
       res.status(200).json(checklist)
    } catch (error) {
       res.status(422).json(error)
    }
})

module.exports = router;