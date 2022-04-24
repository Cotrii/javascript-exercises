const repeatString = function(string, num) {
    
    if (num >= 0)
    {
        let temp = '';
        if (num != 0) { temp = string; }

        for (let i = 0; i < num - 1; i++){
            temp += string;
        }

        return temp;
    }

    return 'ERROR';

};

// Do not edit below this line
module.exports = repeatString;
