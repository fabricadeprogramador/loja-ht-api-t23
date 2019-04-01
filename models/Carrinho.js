'use strict'

const Mongoose = require('mongoose')

class Carrinho extends Mongoose.Schema{


    constructor(){

        super({

            itens:{
                type: String,
                required: true

            },

            valorTotal:{
                type:String,
                required:true
            },
        });

        Mongoose.model('Carrinho',this)

    }
}

module.exports = Carrinho