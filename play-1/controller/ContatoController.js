/**
 * Created by lukee on 3/31/17.
 */

contactApp.controller('ContatoController', function () {
    var scope = this;
    scope.contato = {};
    scope.contatos = [];
    scope.adicionarContato = function () {
        scope.contatos.push(
            {
                nome: scope.contato.nome,
                telefone: scope.contato.telefone
            }
        );
        console.log(scope.contatos);
        scope.contato = {};
    };
    scope.removerContato = function(index) {
        scope.contatos.splice(index, 1);
    }
});
