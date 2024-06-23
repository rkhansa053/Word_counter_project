// Import the inquirer module, which is a command line interface for node.js
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "senntence",
        type: "input",
        message: "Enter your sentence to count the words:  "
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
//  trim => to remove spaces between words
