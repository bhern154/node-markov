# Node Markov

## Overview

This project demonstrates how to generate realistic machine-made text using a Markov Chain algorithm. Given an original source text, the algorithm produces text that mimics the style and structure of the original.

For instance, if we use the text from "Alice’s Adventures in Wonderland" as input, the output might look like this:

‘You are old,’ said the Dormouse, who was talking. Alice could only see her. She is such a new pair of white kid gloves and the blades of grass, but she remembered the number of bathing machines in the kitchen that did not like the wind, and was just beginning to grow up any more if you’d like it put the Dormouse again, so she went nearer to make out that it was certainly English. ‘I don’t quite understand you,’ she said, ‘for her hair goes in such confusion that she was looking down with it.


*(Note: This generated text isn't directly from the source but is constructed to be similar to it.)*

## Markov Machines

A **Markov Machine** generates text using a "Markov Chain." A Markov Chain is a sequence of possible outcomes based on the current "state."

### Example

Consider the phrase: `"the cat in the hat is in the hat"`. We can build a table of each word along with the words that follow it:

| Word | Next Words         |
|------|---------------------|
| the  | cat, hat, hat        |
| cat  | in                  |
| in   | the, the            |
| hat  | is, null            |
| is   | in                  |

### Text Generation

To generate realistic-but-random text:
1. **Pick a starting word randomly** (e.g., `"in"`).
2. **Find all words that follow** the current word.
3. **Randomly choose one of these next-words**.
4. **If "null" is chosen, stop**. Otherwise, return to step 1.

For example, starting with `"in"`, possible outputs might include:
- `"in the cat in the hat"`
- `"in the hat is in the hat"`
- `"in the cat in the cat in the cat in the hat"`

## Setup and Usage

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the Markov Machine with a text file or URL:
    ```bash
    node makeText.js file <path-to-text-file>
    node makeText.js url <url-to-text>
    ```

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or additional features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
