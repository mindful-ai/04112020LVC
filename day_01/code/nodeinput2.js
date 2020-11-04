// Make sure to install the module prompt using npm

const prompt = require('prompt');

prompt.start();

var name = "";
var email = "";

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    name = result.username + ' ' + result.email
    console.log(name.length + 78)
});

function onErr(err) {
    console.log(err);
    return 1;
}

