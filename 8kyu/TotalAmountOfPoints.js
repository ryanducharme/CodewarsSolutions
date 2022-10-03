function points(games) {
  let totalScore = 0;
  games.forEach(game => {
    let score = game.split(':')
    let x = parseInt(score[0]);
    let y = parseInt(score[1]);

    if (x > y) {
      totalScore += 3;
    } else if (x == y) {
      totalScore += 1;
    }
  })
  return totalScore;
}