/** Command-line tool to generate Markov text. */
const fs = require("fs");
const { MarkovMachine } = require('./markov.js');
const axios = require("axios");
const process = require("process");

// example
// let mm = new MarkovMachine("the cat in the hat");
// mm.makeText()

//########################## HANDLE ARGUMENTS ##########################

// $node [js filename] [file-type] [input-source]
// [js filename] -> this is the name of this file -> step3.js
// [file-type] -> this can be 'file' or 'url'
// [input-source] -> this will be the input text

const type = process.argv[2]; // this is either [file] or [url]

// if type is 'file', read the file to get text
if (type == "file") {
  // FIRST READ FILE
  let file = process.argv[3];
  readFile(file).then((text) => {
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
  }).catch(error => {
    console.error("Error:", error);
  });
} 
// if type is 'url', request the url with axios to get text
else if (type == "url") {
  // FIRST AXIOS URL
  let url = process.argv[3];
  readUrl(url).then((text) => {
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
  }).catch(error => {
    console.error("Error:", error);
  });
}
// handle error
else {
  console.error("Please provide a file path or URL.");
}

//########################## HELPER FUNCTIONS ##########################

// takes in an INPUT file to read text from
async function readFile(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    console.log(`... generated text from file '${file}' ...`);
    return data;
  } catch (error) {
    console.error(`Error reading ${file}\n\t${error}`);
    throw error;
  }
}

// takes in an INPUT url to extract data from
async function readUrl(url) {
  try {
    const response = await axios.get(url);
    console.log(`... generated text from url '${url}' ...`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${url}\n\t${error}`);
    throw error;
  }
}
