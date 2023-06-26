const express = require('express')

//Criando objeto de rotas
const router = express.Router()

const Checklist = require('../models/checklist');
const checklist = require('../models/checklist');

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({}) //nd específico, busca tudo
        res.status(200).render('checklists/index', { checklists: checklists }) //renderize o index que está em checklists; 
    } catch (error) {
        res.status(200).render('pages/error', { error: 'Erro ao exibir as listas' })
    }
})

router.get('/new', async(req, res) => {
    try {
        let checklist = new Checklist()
        res.status(200).render('checklists/new', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { errors: 'Erro ao carregar o formulário' })
    }
})

router.post('/', async (req, res) => {
    let { name } = req.body.checklist //procurar name dentro de body
    let checklist = new Checklist({name})
    
    try {   //se der tudo certo, devolve o checklist
        await checklist.save()
        res.redirect('/checklists')
    } catch (error) {
        res.status(422).render('checklists/new', { checklists: { ...checklist, error}})
    }
})

router.get('/:id', async (req, res) => {  //espera nesse ponto um parametro id
    try {
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).render('checklists/show', { checklist: checklist })
    } catch (error) {
        res.status(500).render('pages/error', { error: 'Erro ao exibir as listas de tarefas' })
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