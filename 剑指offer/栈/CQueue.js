// 两个栈模拟队列

// 因为队列先进先出
// 而栈是后进先出
// 所以要用两个栈模拟队列的关键在于入队出队的顺序
// 实现步骤
// 1.新建一个入队栈,一个出队栈
// 2.如果要添加元素,直接添加到入队栈
// 3.如果要删除元素,先判断出队栈是否为空,如果不为空,直接返回出队栈顶部元素
// 4.如果出队栈为空,则将入队栈中的元素全部放置在出队栈中,再返回出队栈顶部元素

const CQueue = function () {
  this.pushStack = []
  this.popStack = []
}

CQueue.prototype.appendTail = function (value) {
  this.pushStack.push(value)
}

CQueue.prototype.deleteHead = function () {
  if (this.popStack.length === 0) {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop())
    }
  }
  return this.popStack.pop() || -1
}
const cqueue = new CQueue()

console.log(cqueue.deleteHead());
console.log(cqueue);