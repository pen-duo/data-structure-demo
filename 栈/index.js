
function Stack() {
  // 1.push 栈顶添加元素
  // 2.pop 移除栈顶元素,同时返回被移除的元素
  // 3.peek 返回栈顶元素,不改变栈结构
  // 4.isEmpty判断栈是否为空
  // 5.size 返回栈长度
  // 6.clear 清空栈
  this.items = []
  Stack.prototype.push = function (...element) {
    const arrs = [...element]
    arrs.length <= 1 ? this.items.push(arrs) : this.items.push(...[...arrs])
    return this.size()
  }
  Stack.prototype.pop = function () {
    return this.items.pop()
  }
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
  }
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0
  }
  Stack.prototype.size = function () {
    return this.items.length
  }
  Stack.prototype.clear = function () {
    this.items = []
  }
}

// 测试
const stack = new Stack()
console.log(stack.isEmpty()); // true
console.log(stack.size()); // 0 
console.log(stack.push(1, 2, 3), stack); // 3 Stack { items: [ 1, 2, 3 ] }
console.log(stack.clear(),stack);
