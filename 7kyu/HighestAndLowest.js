function highAndLow(numbers) {
  let strToNum = numbers.split(' ');
  let biggestNum = parseInt(strToNum[0]);
  let lowestNum = parseInt(strToNum[0]);

  console.error(strToNum);
  strToNum.forEach(element => {
    if (parseInt(element) > biggestNum) {
      biggestNum = element;
    } else if (parseInt(element) < lowestNum) {
      lowestNum = parseInt(element)
    }
    console.error(biggestNum)
  })
  return biggestNum + ' ' + lowestNum;
}