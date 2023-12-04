const first = (input: string) => {
  let overallScore = 0
  for (let card of input.split("\n")) {
    let score = 0
    if (card.length > 0) {
      let numbers = card.split(': ')[1].split("|")
      let winningNumbers = numbers[0].trimEnd().match(/.{1,3}/g)
      for (let number of winningNumbers) {
        if (numbers[1].includes(number)) {
          score = score == 0 ? score = 1 : score *= 2
        }
      }
    }
    overallScore += score
    console.log(overallScore)
  }
  return overallScore;
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  return 'solution 2';
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
