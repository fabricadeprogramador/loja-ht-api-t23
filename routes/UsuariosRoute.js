const Usuario = require('./../models/Usuario')
const UsuarioController = require('./../controllers/UsuarioController')

class UsuariosRoute {
    constructor(app) {

        app.route('/usuarios')
            .get(UsuarioController.buscarTodos)
            .post(UsuarioController.adicionar)
            .delete(UsuarioController.deletar)
            .put(UsuarioController.editar)

        app.route('/autenticar')
            .post(UsuarioController.autenticar)
    }
}

module.exports = UsuariosRoute