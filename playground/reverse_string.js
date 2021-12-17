function reverseWord(word) {
    let reverseStr = "";
    for(let i = word.length - 1; 0 <= i; i--) {
        reverseStr =+ word[i];
    }
    return reverseStr;
}

//char제거