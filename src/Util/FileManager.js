let fs = require('fs')

class FileManager {
  constructor() {}

  static read(path, func) {
    fs.readFile(path, (err, data) => {
      func(JSON.parse(data))
    })
  }

  static write(path, object. func) {
    let str = JSON.stringify(object)

    fs.writeFile(path, str, (err) => {
      func()
    })
  }
}

module.exports = FileManager