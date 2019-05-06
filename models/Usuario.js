'use strict'

const Mongoose = require('mongoose');

class Usuario extends Mongoose.Schema{

    constructor(){
        super({

            username: {
                type: String,
                required: true
            },
            senha: {
                type: String,
                required: true
            },
            tipo: {
                type: String,
                enum: ['CLIENTE', 'ADMIN'],
                required: true
            },
            ativo: {
                type: Boolean,
                required: true,
                default: true
            }

        });

        //Registrando a criação do model no Mongoose
        Mongoose.model('Usuario', this);
    }
}

module.exports = Usuario