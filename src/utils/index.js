const os = require('os')
const fs = require('fs');


const utils = {
  exportToJsonFile: (fileName, options = {}) => {
    try {
      const homeDir = os.homedir();

      const file = fs.writeFileSync(
        `${homeDir}/${fileName}.json`,
        JSON.stringify(options, null, 2)
      );
      console.log('Saved to :', `${homeDir}/${fileName}.json`);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = utils;
