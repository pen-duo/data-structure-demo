// 1.添加元素至队尾
// 2.移除队尾元素同时返回队尾元素
// 3.不改变队列,返回队尾元素
// 4.移除队头元素,返回队头元素
// 5.添加队头元素
// 6.返回队头元素
// 7.队列长度
// 8.队列是否为空
// 9.打印队列
function Queue() {
  this.items = []
  Queue.prototype.enqueue = function (...element) {
    [...element].length > 1 ? this.items.push(...[...element]) : this.items.push(...element)
    return this.items.length
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
  Queue.prototype.front = function (...element) {
    [...element].length > 1 ? this.items.unshift(...[...element]) : this.items.unshift(...element)
    return this.items.length
  }
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  Queue.prototype.size = function () {
    return this.items.length
  }
  Queue.prototype.print = function () {
    console.log(this.items.toString());
  }
}
function passGame(nameList, num) {
  let queue = new Queue()
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  const winner = queue.dequeue()
  return `胜利者是${winner}`
}
const nameList = ["Alice", "Bob", "Client", "Dav"]
const num = 3
console.log(passGame(nameList, num));