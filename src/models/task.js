const mongoose = require('mongoose');
const checklist = require('./checklist');

//modelo que irá usar no documento
const taskSchema = mongoose.Schema({
    name: {type: String, required: true},   //field, campo obrigatório
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,   //relação de referência entre task e checklist
        ref: 'Checklist',   //referencia ao nome do model que existe
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema); //nome do model e o esquema para gerar