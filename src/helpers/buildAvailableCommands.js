module.exports = (cliName, availableCommands) => (availableCommands.length
  ? [
    '## Available commands',
    availableCommands.map(command => `${'  '.repeat(command.depth - 1)}* [${command.name}]('#${command.name.split(' ').join('-')})`).join('\n'),
    ...availableCommands.map(command => [
      `###${'#'.repeat(command.depth - 1)} ${command.name}`,
      `\`\`\`sh\n$ ${cliName} ${command.name} --help\n\`\`\``,
      'Help output:',
      `\`\`\`\n${command.helpOutput}\`\`\``,
    ]).reduce((commands, command) => [...commands, ...command]),
  ]
  : []);
