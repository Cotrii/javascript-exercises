const getTheTitles = function(arr) {

    // let arr2 = [];

    // for (let i = 0; i < arr.length; i++){
    //     arr2[i] = arr[i].title;
    // }

    // return arr2;

    return arr.map(val => `${val.title}`); //map() creates a new array

};

// Do not edit below this line
module.exports = getTheTitles;
