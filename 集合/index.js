// 封装集合类
function Set() {
  this.items = {}

  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false
    } else {
      this.items[value] = value
      return true
    }
  }
  // has方法
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }
  // remove方法
  Set.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false
    } else {
      delete this.items[value]
      return true
    }
  }
  // clear方法
  Set.prototype.clear = function () {
    this.items = {}
  }
  // size方法
  Set.prototype.size = function () {
    return Object.keys(this.items).length
  }
  // values方法
  Set.prototype.values = function () {
    return Object.keys(this.items)
  }

  // 并集
  Set.prototype.union = function (otherSet) {
    let unionSet = new Set()
    let values = this.values
    for (let i = 0; i < values.length; i++) {
      unionSet.add(value[i])
    }
    values = otherSet.values
    for (let i = 0; i < values.length; i++) {
      unionSet.add(value[i])
    }
    return unionSet;
  }
  // 交集
  Set.prototype.intersection = function (otherSet) {
    let interSet = new Set()

    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (otherSet.has(item)) {
        interSet.add(item)
      }
    }
    return interSet
  }
  // 差集
  Set.prototype.difference = function (otherSet) {
    let differenceSet = new Set()
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        differenceSet.add(item)
      }
    }
    return differenceSet
  }
  // 子集
  Set.prototype.subset = function (otherSet) {
    let values = this.values()
    for (let i = 0; i < values.length; i++) {
      let item = values[i]
      if (!otherSet.has(item)) {
        return false
      }
      return true
    }
  }

}
