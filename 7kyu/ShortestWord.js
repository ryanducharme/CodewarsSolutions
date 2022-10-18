function findShort(s) {
  let shortest = ''
  let words = s.split(' ');
  words.forEach((word, index) => {
    if (index == 0) {
      shortest = word
    } else if (word.length < shortest.length) {
      shortest = word
    }
    console.error(shortest)
  })
  return shortest.length
}