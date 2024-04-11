function swapCase(inputString) {
    let swappedString = '';
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

// Example;
const input = 'The Quick Brown Fox';
const output = swapCase(input);
console.log(output); 

// Output: 'tHE qUICK bROWN fOX'
   