const palindromes = function (string) {
    const stringLower = string.toLowerCase();
    const arr = stringLower.split("");
    const arrAlpha = arr.filter(notAlpha);
    const arrReverse = [...arrAlpha].reverse();
    if (arrAlpha.join("") === arrReverse.join("")) {
        return true;
    } else {
        return false;
    };
};

function notAlpha(curr) {
    if (!(curr === ' ' || curr === ',' || curr === '.' || curr === '!' || curr === '-')) return true;
}

// Do not edit below this line
module.exports = palindromes;
