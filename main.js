var ending = ''
var date = new Date();
var n = date.getMonth();
var year = date.getFullYear();
var yearsWorked = year-2015;
var win = (n - 1);
if (win === -1 && yearsWorked === 1){
  win = 11;
  ending = ' months'
} else if (yearsWorked > 1 && win >= 0){
  win = yearsWorked;
  ending = ' years';
}
else if (yearsWorked === 1 && win >=0){
  win = yearsWorked;
  ending = ' year'
}else {
  ending = ' months'
};
if (yearsWorked > 1 && n-1 === -1) { 
  win = yearsWorked-1;
  if (win > 1){
     ending = ' years';
  } else {
    ending = ' year';
  }
  };
 document.getElementById("winde").innerHTML = win  + ending;
