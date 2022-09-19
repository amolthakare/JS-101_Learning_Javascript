var arr = ["amol", "rahul", "rohit", "virat", "amol"];
var n = arr.length;

for (let i = 0; i < n; i++) {
  for (var j = 0; j < i; j++) {
    if (arr[i] == arr[j]) {
      break;
    }
  }
  if (i == j) {
    console.log(arr[i]);
  }
}