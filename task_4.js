/*

Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/

function findLongestWordLength(str){
    let longestWord = "";
    let words = str.split(" ");

    for(let i= 0; i<words.length; i++){
        let individualWord = words[i];
        if(individualWord.length > longestWord.length){
            longestWord = individualWord;
        }
    }
    return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWordLength(sentence));