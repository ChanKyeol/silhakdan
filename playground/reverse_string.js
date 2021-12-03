function reverseWord(word) {
    let char = "";
    let reverseStr = "";
    for(let i = word.length - 1; 0 <= i; i--) {
        char = word[i];
        reverseStr =+ char;
    }
    return reverseStr;
}
