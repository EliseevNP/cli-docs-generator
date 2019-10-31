module.exports = (cliName, helpOutput) => [
  '## Usage',
  `\`\`\`sh\n$ ${cliName} --help\n\`\`\``,
  'Help output:',
  `\`\`\`\n${helpOutput}\`\`\``,
];
