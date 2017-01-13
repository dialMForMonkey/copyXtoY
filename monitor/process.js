var log = require('../utils/log');
var path = require('path');


module.exports = function(to, from) {
    var exec = require('child_process').fork;
    var child = exec( path.resolve(__dirname,'copy.js'), [ to, from],
        function(error, stdout, stderr) {
          if (error) {
              log().error(error);
          } else if(stderr){
            log().error(stderr);
          } else {
          log().log(stdout);
          }
        });
    return child;
};
