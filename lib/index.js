const path = require('path');
const program = require('commander');

const downloader = require('./downloader');
const repository = require('./repositorys.json');


/**
 *  Usage
 */
program
    .version(require('../package').version)
    .usage('<boilerplate>')
    .command('boilerplate', 'generate a new boilerplate current working directory')

/**
 *  commands
 */
program
    .arguments('<boilerplate>')
    .option('-d, --directory [path]', 'setup directory')
    .option('-c, --clone', 'use git clone(SSH)')
    .action(function (boilerplate) {
        var repositoryInfo = repository[boilerplate];
        var path = program.directory;
    
        downloader.github(repositoryInfo, path, program.clone || false);
    })
    .parse(process.argv);