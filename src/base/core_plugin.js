var BaseObject = require('./base_object')

class CorePlugin extends BaseObject {
  constructor(core) {
    super(core)
    this.core = core
  }

  getExternalInterface() { return {} }
}

module.exports = CorePlugin
