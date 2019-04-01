const ComprasController = require('./../controllers/ComprasController')


class ComprasRoute{
    constructor(app){


        app.route('/compras')
            .get(ComprasController.buscarTodos)
            .post(ComprasController.adicionar)
            .delete(ComprasController.deletar)

    }
}

module.exports = ComprasRoute