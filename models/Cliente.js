'use strict'

const Mongoose = require('mongoose')

class Cliente extends Mongoose.Schema{

    constructor(){
        super({
            
            usuario: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Usuario'
            },

            nome: {
                type: String,
                required: true
            },

            cpf: {
                type: String,
                required: true
            },

            dataNascimento: {
                type: String
            },

            carrinho: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Carrinho'
            },

            historico: [{
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Compras'
            }]

        });

        Mongoose.model('Cliente', this)

    }

}

module.exports = Cliente;