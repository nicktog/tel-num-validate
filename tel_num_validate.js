function telephoneCheck(str) {
  // Good luck!
  let taboo = ['(',')','1','2','3','4','5','6','7','8','9','0'];
  var newStr = str.split(' ').join('');
  if (newStr[0] == '-'){return false}; 
  var newStr2 = newStr.split('-').join('');
  if (newStr2.length > 13 || newStr2.length < 10){return false};
  if (newStr2.length == 13 && newStr2[0] != '1'){return false};
  if (newStr2.length == 11 && newStr2[0] != '1'){return false};
  if (newStr2.indexOf(')') > 0){
    if (newStr2.indexOf(')') - newStr2.indexOf('(') != 4){return false};
  }
  for (let i = 0; i < newStr2.length; i++){
    if (taboo.includes(newStr2[i]) == false) {return false};
  }
  return true;
}