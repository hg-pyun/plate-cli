const program = require('commander');
const download = require('download-git-repo');

program.arguments('<name>')
.action(function (name) {
    console.log('args', name);
})
.parse(process.argv);