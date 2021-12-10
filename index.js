export function mdLinks() {
  const fs = require('fs')

  fs.readFile('README.md', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    return data;
  })

  console.log(fs);

}
// const result = module.exports.mdLinks();
// console.log(result);