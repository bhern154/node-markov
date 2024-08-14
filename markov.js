/** Textual markov chain generator */

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // Initialize an empty object to store word-to-next-word mappings
    let chains = {};

    // Iterate over each word in the words array
    this.words.forEach((word, index, array) => {
        // Get the next word in the array
        const nextWord = array[index + 1];

        // If the current word is already a key in the chains object
        if (word in chains) {
            // Add the next word to the existing array of words following the current word
            chains[word].push(nextWord);
        } else {
            // Otherwise, create a new entry with the current word and initialize its array with the next word
            chains[word] = [nextWord];
        }
    });

    return chains
  }

  /** return random text from chains */

  makeText(numWords = 100) {

    const chains = this.makeChains() // store chains in a variable
    const randomIndex = Math.floor(Math.random() * this.words.length); // get random index from words list
    let text = this.words[randomIndex] // get a random word to start the text with
    let currentWord = text + "" // updated with each iteration in while loop

    // while currentWord is not null, generate the next word
    while(currentWord){
      // get the list of next words for the current word
      let nextWordList = chains[currentWord]
      // get a random word from the list
      currentWord = nextWordList[Math.floor(Math.random() * nextWordList.length)]
      // add the random word to the text
      if(currentWord){
        text = text + " " + currentWord
        numWords = numWords - 1
      }
      // stop when numwords is reached
      if (numWords == 0) {
        break;
      }
    }
    console.log(text)
    return text;
  }
}

// Export the MarkovMachine class
export default MarkovMachine;

// // Export the MarkovMachine class
// module.exports = {
//   MarkovMachine,
// };