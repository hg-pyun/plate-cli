const program = require('commander');
const download = require('download-git-repo');
const repository = require('./repositorys.json');
const path = require('path');

/**
 *  Usage
 */
program
    .version(require('../package').version)
    .usage('<boilerplate> [project-name]')
    .command('boilerplate', 'generate a new boilerplate this directory')

/**
 *  commands
 */
program
    .arguments('<boilerplate>')
    .option('-d, --directory', 'setup directory')
    .option('-c, --clone', 'use git clone(SSH)')
    .action(function (boilerplate) {
        var repositoryInfo = repository[boilerplate];
        var path = program.directory || process.cwd();
        
        console.log(repositoryInfo, path);
        downloadGitRepo(repositoryInfo, path, program.clone || false)
    })
    .parse(process.argv);

/**
 * Download from Github repository
 * https://github.com/flipxfx/download-git-repo
 * @param repoInfo : github:owner/name or simply owner/name
 * @param path : local path
 * @param clone : use git clone
 */
function downloadGitRepo(repoInfo, path, clone){
    download(repoInfo, path, { clone: clone }, function(err){
        console.log(err ? err : 'Success');
    })
}