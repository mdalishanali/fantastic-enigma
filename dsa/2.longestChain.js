// 2)longest-chain-of-letters-in-word-javascript
// const word = '00000111110101001111100001001'

function findLongestChain(word) {
  let longestChain = 0;
  let currentChain = 0;
  //   iterating on word
  for (let i = 0; i < word.length; i++) {
    // checking if the letter is 1 then increment current chain
    if (word[i] === "1") {
      currentChain++;
      //       keeping track on longest chain
      if (currentChain > longestChain) {
        longestChain = currentChain;
      }
    } else {
      currentChain = 0;
    }
  }
  return longestChain;
}

const word = "00000111110101001111100001001";
const longestChain = findLongestChain(word);
console.log("longestChain: ", longestChain);
