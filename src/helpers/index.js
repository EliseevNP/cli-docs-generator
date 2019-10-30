const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const exportedObject = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    exportedObject[file.slice(0, -3)] = require(`./${file}`);
  });

module.exports = exportedObject;
