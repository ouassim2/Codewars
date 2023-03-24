/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
  let result = []
  let score = 0

  x.split(" ").forEach((word) => {
    let letter = word.split("")

    letter.forEach((z, index) => {
      result.push({ word, score: (score += word.charCodeAt(index) - 96) })
    })
    score = 0
  })
  let finalWord = result.sort((a, b) => b.score - a.score)

  return finalWord[0].word
}
