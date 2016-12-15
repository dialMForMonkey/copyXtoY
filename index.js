var program = require('commander');
var monitor = require('./monitor');
var create = require('./create');
var log = require('./utils/log.js');
//TODO: separar em processos
//TODO: separar as mensagens da logica
//TODO: separar carregar monitor , print log

program
    .version('0.0.1')
    .option('-e, --equalizar', 'equalizar pasta X para Y <caminho_de> <caminho_para> <verboso> ')
    .option('-m, --monitorar', 'monitora alterações na pasta X e copiar alteracoes para pasta Y  <caminho_do_json_com_definicao> <verboso> ')
    .option('-c, --criar', 'criar json exemplo utilizado no monitorar  ')
    .action(function(pathTO, pathFROM, verbose) {
        if (program.equalizar) {
            log().error('nao implementado');
        } else if (program.monitorar) {
            debugger;
            monitor(pathTO);
        }
    });
program.parse(process.argv);

//TODO remover daqui
if (program.criar) {
    create();
}
