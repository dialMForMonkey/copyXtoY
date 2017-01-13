 var fs = require('fs');
 var log = require('../utils/log');
 var chokidar = require('chokidar');
 //testes
 //const to = './teste';
 //const from = './teste_2';
 //TODO : verificar se pasta destino existe
 //TODO : verificar se o arquivo foi copiado
 //TODO : verificar se muitos arquivos foram copiados
 //TODO: criar pasta por pasta

 //TODO: trocar fs watch https://github.com/paulmillr/chokidar

 var _erLastPath = /(?:.*)?\\(.*)?$/;
 function exec(to, from) {
     fs.exists(to, function(exists) {
         if (exists) {
             log().log('Carregando caminho');
             log().log(to);
             chokidar.watch(to, {
                 usePolling: true,
                 interval: 100,
                 binaryInterval: 300,
                 ignoreInitial : true
             }).on('add', function(path) {
                 var pathOrFile = path.match(_erLastPath)[1];
                 log().log('Adicionado :' + pathOrFile);
                 copyXtoY(
                     path,
                     from.concat('/', pathOrFile)
                 );
             }).on('addDir', function(path) {
                 var pathOrFile = path.match(_erLastPath)[1];
                 log().log('Adicionado :' + pathOrFile);
                 copyXtoY(
                     path,
                     from.concat('/', pathOrFile)
                 );
             }).on('change', function(path) {
                 var pathOrFile = path.match(_erLastPath)[1];
                 log().log('Alterado :' + pathOrFile);
                 copyXtoY(
                     path,
                     from.concat('/', pathOrFile)
                 );
             }).on('unlink', function(path) {
                 var pathOrFile = path.match(_erLastPath)[1];
                 log().log('Deletado/renomeado :' + pathOrFile);
                 fs.unlink(
                     from.concat('/', pathOrFile),
                     function(err) {
                         if (err) {
                             log().error('Erro ao renomear/deletar o arquivo  :' + pathOrFile);
                         }
                     });

             }).on('unlinkDir', function(path) {
                 var pathOrFile = path.match(_erLastPath)[1];
                 log().log('Deletado/renomeado :' + pathOrFile);
                 fs.unlink(
                     from.concat('/', pathOrFile),
                     function(err) {
                         if (err) {
                             log().error('Erro ao renomear/deletar o arquivo  :' + pathOrFile);
                         }
                     });

             });
         } else {
             log().warn('caminho nao existe');
         }
     });
 }

 function copyXtoY(fileTO, fileFROM) {

     fs.stat(fileTO, function(err, stats) {
         if (err) {
             log().error('erro ao processar arquivo ', fileTO);
             log().warn(err);
         } else if (stats.isFile()) {
             var readStream = fs.createReadStream(fileTO);
             var writeStream = fs.createWriteStream(fileFROM);
             readStream.pipe(writeStream);
             log().warn('copiando...');
             writeStream.on('finish', function() {
                 log().log('copiado');
             });
         } else if (stats.isDirectory()) {
             fs.mkdir(fileFROM, function() {});
         }
     });
 }


 var args = process.argv;
 exec(args[2], args[3]);
