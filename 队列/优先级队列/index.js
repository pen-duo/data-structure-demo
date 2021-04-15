// 最大优先级队列
function Queue() {
  this.items = []
  Queue.prototype.enqueue = function (element, priority) {
    let queueElement = {
      element,
      priority
    }

    if (this.items.length === 0) {
      console.log(1);
      this.items.push(queueElement)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }

      }
      if (!added) {
        console.log(3);
        this.items.push(queueElement)
      }
    }

  }
  Queue.prototype.pop = function () {
    return this.items.pop()
  }
  Queue.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  Queue.prototype.dequeue = function () {
    return this.items.shift()
  }
  Queue.prototype.front = function (element) {
    [...element].length > 1 ? this.items.unshift(...[...element]) : this.items.unshift(...element)
    return this.items.length
  }
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  Queue.prototype.size = function () {
    return this.items.length
  }
  Queue.prototype.clear = function () {
    this.items = []
  }
}

// 测试
const queue = new Queue()

console.log(queue.clear());
console.log(queue);
queue.enqueue("a", 2)
queue.enqueue("b", 1)
queue.enqueue("c", 3)


console.log(queue);




