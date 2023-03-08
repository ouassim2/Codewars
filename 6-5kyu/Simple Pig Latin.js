// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt("Pig latin is cool") // igPay atinlay siay oolcay
pigIt("Hello world !") // elloHay orldway !

function pigIt(str) {
  let array = str.split(" ")
  let word
  let result = []

  array.forEach((e) => {
    word = e.split("")

    if (word[0] !== "!" && word[0] !== "?") {
      word.splice(word.length, 1, word[0] + "ay")
      word.splice(word[0], 1)
    }

    result.push(word.join(""))
  })

  return result.join(" ")
}
