const sumAll = function(num1, num2) {

    if (num1 > 0 && Number.isInteger(num2)) {
        let sum = 0;

        if (num1 > num2){
            temp = num1;
            num1 = num2;
            num2 = temp;
        }

        for (let i = num1; i <= num2; i++){
            sum += i;
        }

        return sum;
    }

    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
