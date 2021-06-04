/**
 * ==================   Passos  ===================
 */

//1º Importar os contatos
const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    const contatos = await Contato.buscarContatos();
    res.render('index', {contatos});
};
