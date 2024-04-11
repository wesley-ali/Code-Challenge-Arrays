function generateArray(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Example;
const start1 = 4;
const end1 = 7;
const output1 = generateArray(start1, end1);
console.log(output1); 

// Output: [4, 5, 6, 7]

const start2 = -4;
const end2 = 7;
const output2 = generateArray(start2, end2);
console.log(output2); 

// Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]