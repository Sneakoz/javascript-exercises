const repeatString = function(word, count) {
    if (count <0) return "ERROR";
    let word2 = ""
    for (let i = 0; i < count; i++) {
        word2 += word
    }
    return word2
};

// Do not edit below this line
module.exports = repeatString;
