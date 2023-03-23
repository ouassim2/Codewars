/*For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

Happy coding! :)

 */

function longestRepetition(s) {
  let result = []
  let num = 0

  if (s.length === 0) {
    return ["", 0]
  }

  s.split("").forEach((e, index) => {
    e !== s.charAt(index - 1) ? (num = 1) : num++

    result.push({ letter: e, num })
  })

  result.sort((a, b) => b.num - a.num)

  return [result[0].letter, result[0].num]
}
