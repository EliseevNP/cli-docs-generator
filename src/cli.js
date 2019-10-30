#!/usr/bin/env node

const { exec } = require('./helpers');
const yargs = require('yargs');

const argv = yargs
  .locale('en')
  .wrap(null)
  .alias('h', 'help')
  .option('v', {
    type: 'boolean',
    default: true,
    alias: 'verbose',
    description: 'Show details about the result of running command',
  })
  .option('o', {
    type: 'string',
    default: './README.md',
    alias: 'output',
    description: 'Output file',
  })
  .option('cli', {
    type: 'string',
    demandOption: 'Please specify path to CLI (--cli)',
    description: 'Path to executable file of CLI for which documentation is generated',
    coerce: arg => {
      console.log(arg.slice(0, 3))
      if (arg.slice(0, 2) === './' || arg.slice(0, 3) === '../' || arg[0] === '/') {
        return `node ${arg} --help`;
      } else {
        return `${arg} --help`;
      }
    },
  })
  .option('cli_name', {
    type: 'string',
    description: 'String which replace default CLI name (default CLI name equal to value in --cli option)',
  })
  .example('\'$ $0 --cli=/path/to/cli.js --cli_name=my-cli\'', 'Generate markdown docs for \'my-cli\' CLI to the \'README.md\' file')
  .argv;

async function main () {
  try {
    const { verbose, output, cli, cli_name } = argv;

    console.log(verbose, output, cli, cli_name);
    
    let res = await exec(cli);

    console.log(res)
  } catch (err) {
    yargs.showHelp();
    console.log(`\n${err.message}`);
  }
}

main();
