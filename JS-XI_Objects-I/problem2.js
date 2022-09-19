var arr = ["amol", "rahul", "rohit", "virat", "amol"];
var n = arr.length;

for (let i = 0; i < n; i++) {
  var count=0;
  for (var j = 0; j < i; j++){
    if (arr[i] == arr[j] && i>j) {
      count++;
      break;
    }
    
  }
    if (i == j) {
      count++;
      console.log(arr[i]+count);
    }
  // count=1;

}