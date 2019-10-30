const getCommands = require('./getCommands');
const exec = require('./exec');

module.exports = (cliName, cliExe, helpOutput) => {
  return [
    '## Usage',
    `\`\`\`sh\n$ ${cliName} --help\n\`\`\``,
    `\`\`\`\n${helpOutput}\`\`\``,
  ];
}
