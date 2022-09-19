checkChar("Test");
function checkChar(arr) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bag="";
  for (var i = 0; i < arr.length; i++) {
    
    for (var j = 0; j < 26; j++) {
      if (arr[i] == lower[j]) {
        arr[i] = upper[j];
        bag+=arr[i];
      }
      else if(arr[i]==upper[j]){
        arr[i]=lower[j];
        bag+=arr[i];
      }
    }
  }
  console.log(bag);


}