function NodeList() {
  this.length = 0
  this.head = null
  function Node(element) {
    this.element = element
    this.next = null
  }
  NodeList.prototype.append = function (element) {
    let newNode = new Node(element)
    if (this.length === 0) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
  NodeList.prototype.insert = function (element, position) {


    if (position < 0 || position > this.length) {
      return false
    } else {
      let newNode = new Node(element)
      if (position === 0) {
        newNode.next = this.head
        this.head = newNode
      }
      let index = 0
      let current = this.head
      let previousNode
      while (index < position) {
        index++
        previousNode = current
        current = current.next
      }
      previousNode.next = newNode
      newNode.next = current
    }
  }
  NodeList.prototype.toString = function () {
    let current = this.head
    let listString = ''
    // "12345"while(current.next)会遍历到5,但是不会执行5后面的语句,while(current)会遍历完5
    while (current) {
      listString += current.element
      current = current.next
    }
    return listString
  }
}
let nodeList = new NodeList()
nodeList.append(1)
nodeList.append(2)

console.log(nodeList.toString());

nodeList.insert("a", 1)
nodeList.insert("b", 2)

console.log(nodeList.toString());

