#!/usr/bin/env node

const yargs = require('yargs');
const {
  exec,
  fs,
  buildHeader,
  buildUsage,
  buildAvailableCommands,
  buildLicense,
} = require('./helpers');

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
    demandOption: 'Please specify path to the CLI (--cli)',
    description: 'Path to executable file of CLI for which documentation is generated',
    coerce: arg => {
      if (arg.slice(0, 2) === './' || arg.slice(0, 3) === '../' || arg[0] === '/') {
        return {
          exe: `node ${arg}`,
          name: arg.slice(arg.lastIndexOf('/') + 1),
        };
      } else {
        return { exe: arg, name: arg };
      }
    },
  })
  .option('pretty_cli_name', {
    type: 'string',
    description: 'String which replace default CLI name (default CLI name equal to program name specified in --cli option)',
  })
  .option('d', {
    type: 'string',
    alias: 'description',
    description: 'CLI description',
  })
  .option('l', {
    type: 'string',
    default: 'MIT',
    alias: 'license',
    description: 'License type',
  })
  .example('\'$ $0 --cli=githelp\'', 'Generate markdown docs for \'githelp\' CLI to the \'README.md\' file')
  .example('\'$ $0 --cli=/path/to/cli.js --pretty_cli_name=my-cli\'', 'Generate markdown docs for \'my-cli\' CLI to the \'README.md\' file')
  .example('\'$ $0 --cli=./path/to/cli.js --pretty_cli_name=my-cli\'', 'Generate markdown docs for \'my-cli\' CLI to the \'README.md\' file')
  .argv;

async function main () {
  try {
    const { verbose, output, cli, pretty_cli_name, description, license } = argv;

    const { stdout: helpOutput, stderr } = await exec(`${cli.exe} --help`);

    if (stderr) {
      throw new Error(stderr);
    }

    const availableCommands = await getCommands(cli.exe, helpOutput);

    const content = [
      ...buildHeader(cli.name, description),
      ...buildUsage(cli.name, helpOutput),
      ...buildAvailableCommands(cli.name, availableCommands),
      ...buildLicense(license),
    ];

    fs.writeFile(output, content
      .join('\n\n')
      .replace(new RegExp(cli.name, 'g'), pretty_cli_name
        ? pretty_cli_name
        : cli.name)
    );

  } catch (err) {
    yargs.showHelp();
    console.log(`\n${err.message}`);
  }
}

main();
