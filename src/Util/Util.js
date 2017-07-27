class Util {
  constructor() {
    this.count = 0
  }

  static getUniqueID() {
    return this.count++
  }
}

module.exports = Util