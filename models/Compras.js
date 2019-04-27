'use strict'

const Mongoose = require('mongoose');

class Compras extends Mongoose.Schema{

    constructor(){
        super({
            produtos:[{
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Produto'
            }],
            valorTotal:{
                type:Number,
                required:true
            },
            data:{
                type:String,
                required:true
            },
            pagamento:{
                type:String,
                enum: ['CREDITO', 'DEBITO', 'DINHEIRO']
            },
            cliente: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: 'Cliente'
            }
        });

        Mongoose.model('Compras', this);
    }
}
module.exports = Compras;
