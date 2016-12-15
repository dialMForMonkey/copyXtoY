var program = require('commander');
var chalk = require('chalk');
var fs = require('fs');

//TODO: separar em processos

function createFile() {
    var data = '[\{\"caminho_de\":\"\"\, \"caminho_para\":\"\"\}]';
    fs.writeFile('./monitorar.json', data, function(err) {

        if (err) {
            chalk.red('Erro ao criar arquivo');
        }
    });
}

program
    .version('0.0.1')
    .option('-e, --equalizar', 'equalizar pasta X para Y <caminho_de> <caminho_para>')
    .option('-m, --monitorar', 'monitora alterações na pasta X e copiar alteracoes para pasta Y  <caminho_do_json_com_definicao>  ')
    .option('-h, --criar', 'criar json exemplo utilizado no monitorar  ')
    .action(function(pathTO, pathFROM) {

        chalk.red('tetretete');
        if (program.equalizar) {

        } else if (program.monitorar) {

        }
    });
program.parse(process.argv);


if (program.criar) {
    createFile();
}
