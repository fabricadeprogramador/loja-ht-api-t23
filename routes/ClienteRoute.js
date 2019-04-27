'use strict'


const Cliente = require('./../models/Cliente')
const ClienteController = require('./../controllers/ClienteController')

class ClienteRoute{

    constructor(app){
        app.route('/clientes')
        .get(ClienteController.buscarTodos)
        .post(ClienteController.adicionar)
        .delete(ClienteController.deletar)
        .put(ClienteController.editar)

        app
        .route("/clientes/usuario")
        .post(ClienteController.buscarPorUsuario)
    }

}

module.exports = ClienteRoute