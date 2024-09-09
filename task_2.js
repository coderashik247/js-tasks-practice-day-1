/* 

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

*/


const numbers = [5,6,11,12,98,5];

function duplicate(numbers){
    const findNumber = 25;
    let count = 0;
    for(let number of numbers){
        if(findNumber === number){
            count++;
        }
    }
    return count;   
}

const result = duplicate(numbers);

console.log(result);