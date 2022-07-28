const fibonacci = function(fibo) {

    let curr = 1;
    let prev = 0;

    if (fibo < 0) return "OOPS";

    for (let i = 1; i < fibo; i++){   
        let temp = curr;
        curr += prev;
        prev = temp;
    }

    //  0+1, ,1+1, 1+2, 2+3, 3+ 5
    //1, 1,     2,  3 ,, 5, 8
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
