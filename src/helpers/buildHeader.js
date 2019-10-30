module.exports = (cliName, description) => {
  return [
    `# ${cliName}`,
    description,
    '## Install',
    `\`\`\`sh\n$ npm i ${cliName} -g\n\`\`\``,
  ].filter(Boolean);
};
