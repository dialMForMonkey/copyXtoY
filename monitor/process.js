var log = require('../utils/log');

module.exports = function(to, from) {
    var execFile = require('child_process').execFile;
    var child = execFile('node', ['copy.js', to, from],
        function(error, stdout, stderr) {
            if (error) {
                log().error(error);
            }
            log().log(stdout);
        });
    return child;
}
