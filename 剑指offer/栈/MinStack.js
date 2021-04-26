// 普通栈的push与pop的时间复杂度为O(1),而遍历查找最小值的复杂度为O(n)
// 题目要求我们在O(1)范围内查找栈的最小值
// 方法:辅助栈法
// 在向主栈进行入栈,出栈操作时,同样对辅助栈进行相同操作
// 不过在向主栈入栈时应该先与辅助栈的栈顶元素做个比较,如果小于,则辅助栈也添加,如果大于,则只入主栈
// 这样就可以保存辅助栈的栈顶始终为主栈的最小值,当需要查找主栈最小值时,直接返回辅助栈的栈顶元素即可
// 值得一提的是,刚开始由于辅助栈栈顶元素为空,无法与入主栈元素比对,所以需要一个默认值,设为Infinity
var MinStack = function () {
  this.stack = []
  this.min_stack = [Infinity]
};

MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x))
};

MinStack.prototype.pop = function () {
  this.stack.pop()
  this.min_stack.pop()
};


MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

MinStack.prototype.min = function () {
  return this.min_stack[this.min_stack.length - 1]
};

const min_stack = new MinStack()


console.log(min_stack);
console.log(min_stack.min());



