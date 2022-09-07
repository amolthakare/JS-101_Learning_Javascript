var i = 0;
var j = 0;
var sum = 0;
var N = 4;

while (i < N) {
  sum += j;
  j = j + 5;
  i++;
  // console.log(j);
}
console.log(sum)

// line 7 should be sum+=j ;