// 栈的压入、弹出序列
// 给定一个栈的入栈操作,再给一个栈的出栈操作,判断出栈操作顺序是否与入栈操作顺序匹配

// 方法:辅助栈
// 1.创建一个辅助栈,用于模拟入栈顺序。
// 2.遍历入栈序列,推入辅助栈中,每推入一个元素,将此元素与出栈序列的栈顶元素做比较。如果相同,将符合弹出序列顺序的元素全部弹出
// 3.判断辅助栈是否为空,如果为空,则入栈顺序与出栈顺序匹配,返回true,否则返回false
let  = function (pushStack, popStack) {
  let stack = []
  let index = 0
  for (let i = 0; i < pushStack.length; i++) {
    stack.push(pushStack[i])
    while (stack.length !== 0 && stack[stack.length - 1] === popStack[index]) {
      stack.pop()
      index++
    }
  }
  return !stack.length
}
console.log(xxx([1,2,3,4,5],[4,3,5,2,1]));