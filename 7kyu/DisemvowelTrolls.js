function disemvowel(str) {
  let newStr = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i = 0; i < newStr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {

      if (newStr[i] == vowels[j]) {
        newStr[i] = '';
      }
    }
  }
  console.error(newStr.join(''));
  return newStr.join('');
}