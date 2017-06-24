const path = require('path');
const program = require('commander');
const chalk = require('chalk');

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
        var setupPath = program.directory && path.resolve(process.cwd(), program.directory) || process.cwd();
    
        // validation
        if(repositoryInfo === undefined){
            console.log(chalk.red('Error:', 'Invalid boilerplate. please check the name.'));
            return;
        }
    
        // show plate informantion
        console.log(chalk.green('[plate]', 'Setup boilerplate'));
        console.log(chalk.white('- plate name :', boilerplate));
        console.log(chalk.white('- setup path :', setupPath));
        console.log(chalk.green('[plate]', 'downloading...'));
        
        downloader.github(repositoryInfo, setupPath, program.clone || false).then(function(){
            console.log(chalk.green('[plate]', 'setup finished'));
        })
    })
    .parse(process.argv);