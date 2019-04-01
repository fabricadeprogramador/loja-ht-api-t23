

'use scrict'

const Mongoose = require('mongoose');

class Departamento extends Mongoose.Schema{


    constructor(){
        super({

            nome:{
                type:String,
                required: true
            },

            descricao:{
                type:String,
                required:true
            },

        });

        Mongoose.model('Departamento', this);

    }
}

module.exports = Departamento