var N = 50;

for (var i = 2; i <= N; i++) {
  var count = 0;
  for (var j = 2; j <= N; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 1) {
    console.log(i + " " + "is prime");
  }
}