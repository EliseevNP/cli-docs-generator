const exec = require("./exec");

const getCommands = async (
  cliName,
  cliExe,
  helpOutput,
  depth = 1,
  previousCommand = ""
) => {
  const commandSection = helpOutput
    .split("\n\n")
    .find((section) => section.startsWith("Commands:"));

  const commands = commandSection
    ? commandSection
        .split("\n")
        .slice(1)
        // handle multiline command descriptions
        .filter((commandString) => {
          return !commandString.startsWith("   ");
        })
        .map((commandString) => {
          const command = commandString
            .trim()
            .replace(`${cliName} ${previousCommand}`, "")
            .trim()
            .split(" ")[0];

          return previousCommand ? `${previousCommand} ${command}` : command;
        })
    : [];

  return await Promise.all(
    commands.map(
      (command) =>
        new Promise(async (resolve, reject) => {
          try {
            const { stdout, stderr } = await exec(
              `${cliExe} ${command} --help`
            );

            if (stderr) {
              reject(stderr);

              return;
            }

            const nestedCommands = await getCommands(
              cliName,
              cliExe,
              stdout,
              depth + 1,
              command
            );

            resolve([
              { name: command, depth, helpOutput: stdout },
              nestedCommands,
            ]);
          } catch (err) {
            console.log("err", err);
            reject(err);
          }
        })
    )
  );
};

module.exports = getCommands;
