var chalk = require('chalk');
var moment = require('moment');

function log() {
    function getDateNow() {

        return moment().format('DD-MM-YYYY HH:mm:ss:sss').concat(' : ');
    }
    return {
        error: function(msg) {
            console.log(
              chalk.red(
                chalk.bgWhite(
                  getDateNow().concat(msg)
                )
              )
            );
        },
        warn: function(msg) {
            console.log(
              chalk.underline.yellow(
                getDateNow().concat(msg))
              );
        },
        log: function(msg) {
            console.log(
              chalk.cyan(getDateNow().concat(msg))
            );
        }
    };
}

module.exports = log;
