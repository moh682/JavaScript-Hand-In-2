var fs = require('fs');
const res = [];

module.exports = async function callback(path, extention, callback) {
  await fs.readdir(path, (err, files) => {
    if (err) return callback(err)
      files.forEach(element => {
        if (extention === element.split('.')[1]) {
          res.push(element);
        }
      }
      );  callback( undefined , res)
  })
}