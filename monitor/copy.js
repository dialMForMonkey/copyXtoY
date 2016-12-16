 var fs = require('fs');
 var log = require('../utils/log');
 //testes
 //const to = './teste';
 //const from = './teste_2';
 //TODO : verificar se pasta destino existe
 //TODO : verificar se o arquivo foi copiado
 //TODO : verificar se muitos arquivos foram copiados
 //TODO: criar pasta por pasta
 function exec(to, from) {
     fs.exists(to, function(exists) {
         if (exists) {
             log().log('Carregando caminho');
             log().log(to);
             fs.watch(to, {
                 recursive: true
             }, function(event, filename) {
                 log().log('evento', event);
                 log().log('alterado', filename);
                 copyXtoY(
                     to.concat('/', filename),
                     from.concat('/', filename)
                 );
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
                 log().log(writeStream.bytesWritten);
             });
         } else if (stats.isDirectory()) {
             fs.mkdir(fileFROM, function() {});
         }
     });
 }


 var args = process.argv;

 exec(args[2], args[3]);
