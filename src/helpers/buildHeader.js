module.exports = (cliName, description, npmRegistryNamespace) => [
  `# ${cliName}`,
  description,
  '## Install',
  `\`\`\`sh\n$ npm i ${npmRegistryNamespace ? `@${npmRegistryNamespace}/${cliName}` : cliName} -g\n\`\`\``,
].filter(Boolean);
