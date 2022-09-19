function replace(str) {
  let new_str = "";
  for (var j = 0; j <= str.length; j++) {
    if (str[j] == " ") {
      new_str = new_str + "-";
    }
    else {
      new_str = new_str + str[j];
    }
  }
  console.log(new_str);
}
replace("i am iron man");