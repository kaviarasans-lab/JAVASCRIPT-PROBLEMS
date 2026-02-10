function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversed = [];
    
    // Loop from end to beginning
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
    
    return reversed.join(" ");
}

console.log(reverseWords("I love JS")); // "JS love I"
console.log(reverseWords("Hello World")); // "World Hello"