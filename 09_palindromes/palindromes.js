const palindromes = function (str) {

    let revArr = str.split(/[.,!\s]/).reverse();
    let revArr2 = [];

    for (let i = 0; i < revArr.length; i++) {
        revArr2[i] = revArr[i].split("").reverse().join("");
    }

    return (str.split(/[.,!\s]/).join("")).toLowerCase() === revArr2.join("").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
