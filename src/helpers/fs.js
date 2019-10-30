const fs = require('fs');
const { promisify } = require('util');

module.exports = {
  writeFile: promisify(fs.writeFile),
};
