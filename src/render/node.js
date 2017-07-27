let Util = require('../Util/Util.js')

class Node {
  constructor () {
    this.id = ''
    this.uniqueID = Util.getUniqueID()

    this.x = 0
    this.y = 0

    this.func = ''
    this.params = []

    this.linked = []
    this.linking = []
  }

  setID (id) {
    this.id = id
  }
  getID () {
    return this.id
  }

  setX (x) {
    this.x = x
  }
  getX () {
    return this.x
  }

  setY (y) {
    this.y = y
  }
  getY () {
    return this.y
  }
}

module.exports = Node