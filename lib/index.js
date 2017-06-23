const commander = require('commander');

commander.arguments('<name>')
.action(function (name) {
    console.log('args', name);
})
.parse(process.argv);