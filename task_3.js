/* 

Write a function to count the number of vowels in a string.

*/

function vowelsCount(word){
    const vowels = '';
    let count = 0;
    for(const letter of word){
        if(letter === 'a' ||letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
            count ++;
        }
    }
    return count;
}
const str = "ashik"
const result = vowelsCount(str);
console.log(result);