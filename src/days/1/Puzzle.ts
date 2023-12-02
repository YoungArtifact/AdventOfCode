/*

AdventOfCode - day 1

Combining the first and last number (digit or spelled) from each line
Summing up all two digit numbers

*/
const regex = new RegExp('[0-9]')

const first = (input: string) => {
  let total : number = 0

  for (let line of input.split('\n')) {
    let numbers : string = ''
    let two : string = ''
    for (let digit of line) {
      if (regex.test(digit)) {
        numbers += digit
        if (numbers.length > 2) {
          let first : string = numbers[0]
          let last : string = numbers[numbers.length - 1]

          numbers = first + last
        }
      }
  }
  if (numbers.length == 1) numbers += numbers
  
  total += Number(numbers)
  }

  return total;
};

const expectedFirstSolution = 'solution 1';

const second = (input: string) => {
  let total : number = 0

  for (let line of input.split('\n')) {
    let numbers : string = ''
    let two : string = ''

    line = line.replace(/one/gi, 'one1one')
      .replace(/two/gi, 'two2two')
      .replace(/three/gi, 'three3three')
      .replace(/four/gi, 'four4four')
      .replace(/five/gi, 'five5five')
      .replace(/six/gi, 'six6six')
      .replace(/seven/gi, 'seven7seven')
      .replace(/eight/gi, 'eight8eight')
      .replace(/nine/gi, 'nine9nine')

    for (let digit of line) {
      if (regex.test(digit)) {
        numbers += digit
        if (numbers.length > 2) {
          let first : string = numbers[0]
          let last : string = numbers[numbers.length - 1]

          numbers = first + last
        }
      }
  }
  if (numbers.length == 1) numbers += numbers

  total += Number(numbers)
  }

  return total;
};

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
