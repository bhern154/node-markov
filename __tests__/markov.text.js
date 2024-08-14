// Import the MarkovMachine class
const { MarkovMachine } = require('../markov.js');

// Mock Math.random to make the results predictable
global.Math.random = () => 0.5;

describe("MarkovMachine", () => {

    // Test if the constructor sets up words correctly
    test("constructor should initialize words correctly", () => {
      const mm = new MarkovMachine("the cat in the hat");
      
      // Check if words are split and filtered correctly
      expect(mm.words).toEqual(["the", "cat", "in", "the", "hat"]);
    });
  
    // Test if makeChains creates the right word chains
    test("makeChains should create correct chains", () => {
      const mm = new MarkovMachine("the cat in the hat");
      
      // Get the word chains
      const chains = mm.makeChains();
      
      // Check if chains match the expected format
      expect(chains).toEqual({
        "the": ["cat", "hat"],
        "cat": ["in"],
        "in": ["the"],
        "hat": [undefined]
      });
    });
  
    // Test if makeText generates text with the correct length
    test("makeText should generate random text", () => {
      const mm = new MarkovMachine("the cat in the hat");
      
      // Generate text with a maximum of 5 words
      const text = mm.makeText(5);
      
      // Check if the text length is within the limit
      expect(text.split(" ").length).toBeLessThanOrEqual(5);
    });
});