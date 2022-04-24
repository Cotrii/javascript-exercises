const removeFromArray = function(...args) {

    // If we follow the solution given in github: The time complexity would be O(n) and Space Complexity would be also O(n) aswell
    // due to the new array
    const array = args[0];
    const newArray = [];

    //Psuedocode: something like making a new arraylist then check contents
    array.forEach((item) => {

        //if one of the arguments contains the array's items/elements dont push it
        if (!args.includes(item)){
            newArray.push(item);
        }
    });

    return newArray;


    /* Solution only works for the 1st problem 

    function(array, targetnum)
    for (let i=0;i < array.length - 1; i++){
        
        if (array[i] === targetnum){
            while (i != array.length - 1 ){
                i++;
            }

            array[i - 1] = array[i];
            array[i] = targetnum;
        }
    }

    array.pop();

    return array;

    //[1, 2, 3, 4]
    // if array[i] == 3 
    // then go to the last num index which is 4
    // 
    //
    */

    //



};

// Do not edit below this line
module.exports = removeFromArray;
