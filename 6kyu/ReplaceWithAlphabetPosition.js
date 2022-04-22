function alphabetPosition(text) {
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let result = [];
  letters = text.split('');
  letters.forEach(letter => {
  console.error(letter);  
    alpha.forEach((alphaLetter, index) => {
      if(letter.toLowerCase() === alphaLetter) {
        result.push(index + 1);    
      }
    })
  })
  return result.join(' ');
}