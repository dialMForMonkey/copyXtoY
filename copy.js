const fs = require('fs');
//testes
const to = './teste';
const from = './teste_2';

//TODO : verificar se pasta destino existe
//TODO : verificar se o arquivo foi copiado
//TODO : verificar se muitos arquivos foram copiados
//TODO: criar pasta por pasta

fs.exists(to, function(exists) {
    if (exists) {
        fs.watch(to, {
            recursive: true
        }, function(event, filename) {
            console.log('evento', event);
            console.log('alterado', filename);


            copyXtoY(
                to.concat('/', filename),
                from.concat('/', filename)
            );

            //recebo
            //subPasta/subPasta/subTrosso.txt
        });
    } else {
        console.log('caminho nao existe');
    }
});


function copyXtoY(fileTO, fileFROM) {
    console.log(fileTO);
    console.log(fileFROM);


    fs.stat(fileTO, function(err, stats) {

        if(err) {
          console.log('erro ao processar arquivo ',fileTO);
          return ;
        }
        console.log(stats);
        if(stats.isFile()){
          var readStream = fs.createReadStream(fileTO);
          var writeStream = fs.createWriteStream(fileFROM);
          readStream.pipe(writeStream);

          writeStream.on('finish', function() {
              console.log(writeStream.bytesWritten);
          });
        } else if(stats.isDirectory()){
          fs.mkdir( fileFROM ,function(){



          });


        }
    });

}
