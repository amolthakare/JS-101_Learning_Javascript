function isOdd(num) {
  if (num % 2 == 0) {
    return false;
  }
  else {
    return true;
  }
}
var N = 10;
for (var i = 1; i <= N; i++) {
  var ans = isOdd(i);
  if (ans == true) {
    console.log(i);
  }
}