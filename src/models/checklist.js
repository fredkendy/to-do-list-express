const mongoose = require('mongoose');

//modelo que irá usar no documento
const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},       //field, campo obrigatório
    tasks: [{                                   //dentro de checklists teremos um array de tasks
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('Checklist', checklistSchema); //nome do model e o esquema para gerar