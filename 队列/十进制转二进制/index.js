function TransLate(number) {
  if (typeof number !== "number") return false
  let items = []
  let string = ''
  while (number >= 1) {
    const a = number % 2
    items.push(a)
    number = Math.floor(number / 2)
  }
  items.reverse().forEach((item) => {
    string += item.toString()
  })
  return string
}
console.log(TransLate(100));