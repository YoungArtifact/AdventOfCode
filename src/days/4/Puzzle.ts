const first = (input: string) => {
  const cardsArray = input
    .split('\n')
    .map((line) => line.slice(10))
    .map((line) =>
      line.split(' | ').map((numbers) =>
        numbers
          .split(' ')
          .filter((ele) => ele !== '')
          .map((numStr) => +numStr)
      )
    );

  const matchingList = cardsArray.map((card) => {
    let matching = 0;
    card[1].forEach((number) => {
      if (card[0].includes(number)) {
        matching++;
      }
    });
    return matching;
  });

  const points = matchingList.reduce((sum, matching) => matching === 0 ? sum : sum + 2 ** (matching - 1), 0);
  return points;
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  const cardsArray = input
    .split('\n')
    .map((line) => line.slice(10))
    .map((line) =>
      line.split(' | ').map((numbers) =>
        numbers
          .split(' ')
          .filter((ele) => ele !== '')
          .map((numStr) => +numStr)
      )
    );

  const matchingList = cardsArray.map((card) => {
    let matching = 0;
    card[1].forEach((number) => {
      if (card[0].includes(number)) {
        matching++;
      }
    });
    return matching;
  });

  const points = matchingList.reduce((sum, matching) => matching === 0 ? sum : sum + 2 ** (matching - 1), 0);

  // Part 2
  const copiesList = new Array(cardsArray.length).fill(1);

  matchingList.forEach((matching, index) => {
    const copies = copiesList[index];
    for (let i = 0; i < matching; i++) {
      copiesList[index + 1 + i] += copies;
    }
  });

  const totalCards = copiesList.reduce((sum, copies) => sum + copies);
  return totalCards;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
