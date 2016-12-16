### copy_x_to_y

Ideia do modulo é monitorar alterações em uma pasta e copiar para outra , ou varias pastas.

> Como assim : Se voce tem uma estrutura para rodar o core da aplicacao mas , prescisa manter uma outra com o workspace que o seu  
 versionador usa, pois ele imposibilita usar uma pasta só, e no final vc tem que copiar e colar manualmente quais arquivos vc mexeu  ou a pasta todo. Se tudo der certo no final de um belo dia de trabalho voce terá as duas pastas iguais.


### Exemplo :

         [
            {
              "caminho_de":"C:\\Users\\xpto\\Documents\\poc_space\\workspace\\projeto_x", "caminho_para":"C:\\Users\\xpto\\Documents\\poc_space\\core\\projeto_x"
            }
          ]
          ou
          [
             {
               "caminho_de":"C:\\Users\\xpto\\Documents\\poc_space\\teste_pasta", "caminho_para":"C:\\Users\\xpto\\Documents\\poc_space\\teste_pasta_2"
             },
             {
               "caminho_de":"C:\\Users\\xpto\\Documents\\poc_space\\teste_pasta_3", "caminho_para":"C:\\Users\\xpto\\Documents\\poc_space\\teste_pasta_4"
             }
           ]

### Instalação :
```sh
$ npm install copy_x_to_y -g
$ copy_x_to_y -h
```
### Todo

* Criar testes unitario
* Implementar equalizar pastas
* Implementar deletar arquivos ou pasta quando deletados
* Escrever este ReadMe em ingles
