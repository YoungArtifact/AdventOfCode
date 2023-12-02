/*

AdventOfCode - day 2

Checking if game is possible with 12 red cubes, 13 green cubes, and 14 blue cubes.
Summing up the IDs of all possible games

Given up after 1:30h 

*/

const regex = new RegExp(/(\d+ green)|(\d+ blue)|(\d+ red)/gi)

type Color = "red" | "green" | "blue"

const first = (input: string): number => {
    const SEARCHING = {
        red: 12,
        green: 13,
        blue: 14
    }

    return input.split("\n").reduce((acc, game, id) => {
        const sets = game.replace(/Game [0-9]*: /g, "").split(";")

        const isValidGame = sets.every((set) => {
            const pulls = set.split(",").reduce((acc, pull) => {
                const [amount, color] = pull.trim().split(" ")

                return {
                    ...acc,
                    [color]: Number(amount)
                }
            }, {})

            return Object.entries(pulls).every(([color, value]) => {
                return (value as number) <= SEARCHING[color as Color]
            })
        })

        return isValidGame ? acc + id + 1 : acc
    }, 0)
}

const expectedFirstSolution = 'solution 1';


const second = (input: string): number => {
  return input.split("\n").reduce((acc, game) => {
      const minimum = {
          red: 0,
          green: 0,
          blue: 0
      }

      game.replace(/Game [0-9]*: /g, "")
          .split(";")
          .forEach((set) => {
              set.split(",").forEach((cube) => {
                  const [amount, color] = cube.trim().split(" ")

                  if (Number(amount) > minimum[color as Color]) {
                      minimum[color as Color] = Number(amount)
                  }
              })
          })

      return acc + minimum.red * minimum.green * minimum.blue
  }, 0)
}

const expectedSecondSolution = 'solution 2';

export { first, expectedFirstSolution, second, expectedSecondSolution };
