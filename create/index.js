var log = require('../utils/log');
var fs = require('fs');
module.exports = function createFile() {
    var data = '[\{\"caminho_de\":\"\"\, \"caminho_para\":\"\"\}]';
    fs.writeFile('./monitorar.json', data, function(err) {

        if (err) {
            log().error('Erro ao criar arquivo');
            log().warn(err);
        }
    });
};
