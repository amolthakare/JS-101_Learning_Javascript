var start = 1;
var end = 100;
var sum = 0;
var count = 0;

while (start <= end) {
  if (start % 2 == 0) {
    sum += start;
    count++;
  }
  start++;
}
var ans = sum / count;

console.log(ans);