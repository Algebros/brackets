module.exports = function check(str, bracketsConfig) {
  let obj = {};
  bracketsConfig.forEach(element => {
    obj[element[0]] = element[1];
  });
  
  let arr = str.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let lastBracket = stack[stack.length-1];
    if(obj[lastBracket] == arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  if(stack.length == 0) return true;
  return false;
}