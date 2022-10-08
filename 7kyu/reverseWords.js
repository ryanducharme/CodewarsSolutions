function reverseWords(str) {
  let origWords = str.split(' ');
  let newWords = [];
  origWords.forEach(element => {
    newWords.push(element.split('').reverse().join(''));
  });
  return newWords.join(' ');
}
reverseWords('The quick brown fox jumps over the lazy dog.');