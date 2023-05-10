const express = require('express')

//Criando objeto de rotas
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Olá')
    res.send()  
})

module.exports = router;