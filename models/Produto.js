'user strict'

const Moongose = require('mongoose');


class Produto extends Moongose.Schema {
    
    constructor(){
        super({
            descricao: {
                type: String,
                required: true
            },
            valor: {
                type: Number,
                required: true
            },
            qtdeDisponivel: {
                type: Number,
                required: true
            },
            marca: {
                type: String,
                required: true
            },
            departamento:[{
                type: Moongose.Schema.Types.ObjectId,
                ref: 'Departamento',
                required: true
            }]        
        });

        Moongose.model('Produto', this);
    }
}

module.exports = Produto;
