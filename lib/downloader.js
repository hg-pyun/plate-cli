const download = require('download-git-repo');
const chalk = require('chalk');

/**
 * Download from Github repository
 * https://github.com/flipxfx/download-git-repo
 * @param repoInfo : github:owner/name or simply owner/name
 * @param path : local path (default current working directory)
 * @param clone : use git clone
 */
module.exports.github = function (repoInfo, path, clone){
    // exception handling
    if(repoInfo === undefined){
        console.log(chalk.red('Error:', 'Invalid boilerplate. please check the name.'));
        return;
    }
    
    download(repoInfo, path || process.cwd(), { clone: clone }, function(err){
        if(err){
            console.log(chalk.red(err));
        }
    })
}
