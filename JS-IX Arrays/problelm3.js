var N = 30;
var sum = 0;
var count = 0;

for (var i = 1; i <= N; i++) {
  if (i % 2 == 0) {
    sum += i;
    count++;
  }
}

console.log(sum / count);