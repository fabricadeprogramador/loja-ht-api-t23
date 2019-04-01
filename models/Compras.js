'use strict'

const Mongoose = require('mongoose');

class Compras extends Mongoose.Schema{

    constructor(){
        super({
            Produto:{
               type:String,
                required:true
            },
            ValorTotal:{
                type:Number,
                required:true
            },
            Data:{
                type:String,
                required:true
            },
            Pagamento:{
                type:String,
                enum: ['CREDITO', 'DEBITO', 'DINHEIRO']
            }

        });

        Mongoose.model('Compras', this);

    }

}

module.exports = Compras;