const exec = require('./exec');

module.exports = async (cliName, cliExe, helpOutput) => {
  const commands = await Promise.all(helpOutput
    .split('\n\n')[1]
    .split('\n  ')
    .slice(1)
    .map(command => new Promise(async (resolve, reject) => {
      try {
        const commandName = command.slice(cliName.length + 1, command.indexOf(' ', cliName.length + 1));

        const { stdout, stderr } = await exec(`${cliExe} ${commandName} --help`);

        if (stderr) {
          reject(stderr);

          return;
        }

        resolve({ name: commandName, helpOutput: stdout });
      } catch (err) {
        reject(err);
      }
    })));

  return commands;
};
