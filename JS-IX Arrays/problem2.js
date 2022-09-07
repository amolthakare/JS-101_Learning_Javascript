var str = "Masai School";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var bag = "";

for (var i = 0; i < str.length; i++) {

  for (var j = 0; j < lower.length; j++) {
    if (str[i] == lower[j]) {
      bag += upper[j];
    }
    else if (str[i] == upper[j]) {
      bag += upper[j];
    }
    else if (str[i] != lower[j] && str[i] != upper[j]) {
      // bag+=str[i];
      // break;
    }
  }
}
console.log(bag);
// console.log(str);