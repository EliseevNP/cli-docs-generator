module.exports = (cliName, description) => [
  `# ${cliName}`,
  description,
  '## Install',
  `\`\`\`sh\n$ npm i ${cliName} -g\n\`\`\``,
].filter(Boolean);
