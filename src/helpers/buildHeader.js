module.exports = (cliName, title, description, npmPackageName, npmRegistryNamespace) => {
  let npmPackage = npmPackageName || cliName;

  if (npmRegistryNamespace) {
    npmPackage = `@${npmRegistryNamespace}/${npmPackage}`;
  }

  return [
    `# ${title || cliName}`,
    description,
    '## Install',
    `\`\`\`sh\n$ npm i ${npmPackage} -g\n\`\`\``,
  ].filter(Boolean);
};
