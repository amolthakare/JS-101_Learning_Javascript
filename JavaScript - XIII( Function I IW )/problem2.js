function identifyPrime(num) {

  var count = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }

  if (count > 2) {
    return false;
  }
  else {
    return true;
  }
}
// identifyPrime(3);

for (var i = 2; i <= 15; i++) {
  var ans = identifyPrime(i);
  if (ans == true) {
    console.log(i);
  }
}