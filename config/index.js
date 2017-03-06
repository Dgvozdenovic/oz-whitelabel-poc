const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'instance', alias: 'i', type: String },
    { name: 'env', alias: 'e', type: String }
];

const args = commandLineArgs(optionDefinitions);
console.log( args );
const config = args.env === "production" ? require( "./prodConfig" ) : require( "./localConfig" );

module.exports = {
  'API_BASE': config.apiBase
}
