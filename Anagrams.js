let str1 = "listen";
let str2 = "silent";

function areAnagrams(s1,s2) {
    // If lengths are different, not anagrams
    if (s1.length !== s2.length) {
        return false;
    }
    
    // Count characters in first string
    let count1 = {};
    for (let i = 0; i < s1.length; i++) {
        let char = s1[i];
        count1[char] = (count1[char] || 0) + 1;
    }
    
    // Count characters in second string
    let count2 = {};
    for (let i = 0; i < s2.length; i++) {
        let char = s2[i];
        count2[char] = (count2[char] || 0) + 1;
    }
    
    console.log(count1)
    console.log(count2)
    // Compare counts
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }
    
    return true;
}

console.log(areAnagrams(str1, str2)); // true