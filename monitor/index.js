var fs = require('fs');
var path = require('path');
var log = require('../utils/log');
var processs = require('./process.js');

function monitora(file) {
    loadFileConfig(file, startMonit);
}

function loadFileConfig(file, cb) {
    fs.readFile(path.resolve(file),'utf-8', function(err, data) {
        if (err) {
            log().error('Erro ao carregar arquivo');
            log().warn(err);
        }
        try {
            var monitor = JSON.parse(data);
            monitor.forEach(function(item) {
                cb(item);
            });
        } catch (e) {
            log().error('Formato do arquivo Monitorar invalido ');
            log().warn(e);
        }
    });
}

function startMonit(obj) {
    processs(obj.caminho_de, obj.caminho_para);
}

module.exports = monitora;
