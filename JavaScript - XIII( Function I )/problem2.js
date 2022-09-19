function diff(a, b) {
  var sum = a - b;
  return sum;
}
function absolute() {
  var abs = diff(5, 6);
  abs = abs * abs;
  abs = Math.sqrt(abs);
  console.log(abs);
}
absolute();