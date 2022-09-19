
function checkChar(char) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let flag = false;

  for (let i = 0; i <= lower.length; i++) {
    if (char == lower[i]) {
      flag = true;
      break;
    }
  }
  if (flag == true) {
    console.log("Yes");
  }
  else {
    console.log("No");
  }
}

checkChar("a");