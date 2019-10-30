module.exports = (cliName, helpOutput) => {
  return [
    '## Usage',
    `\`\`\`sh\n$ ${cliName} --help\n\`\`\``,
    `\`\`\`\n${helpOutput}\`\`\``,
  ];
}
