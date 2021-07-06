function solution(str) {
  let count = 0;
  let arr = [];
  let tempStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 == 0) {
      count++;
      tempStr += str[i];
      if (count == 2) {
        arr.push(tempStr);
        count = 0;
        tempStr = '';
      }
    } else {
      count++;
      tempStr += str[i];
      if (str.length == 1) {
        tempStr = str[i] + '_';
        arr.push(tempStr);
      }
      if (count == 2) {
        arr.push(tempStr);
        count = 0;
        tempStr = '';
        if (i == str.length - 2) {
          tempStr = str[i + 1] + '_';
          arr.push(tempStr);
        }
      }
    }
  }
  return arr;
}

console.log(solution('A'));
