const findTheOldest = function(people) {

    // if ( ( a.yearOfDeath === undefined)){
    //     a.yearOfDeath = 2022;
    // } else if ( a.yearOfDeath === undefined ){
    //     b.yearOfDeath = 2022;
    // }

    people.forEach( person => {
        if (person.yearOfDeath === undefined)
            person.yearOfDeath = new Date().getFullYear();
    })

    
    let arr = people.sort((a, b) => 
        (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)
        ? -1 : 1
    );

    let val = arr[0];

    console.log(arr);

    return val;
    
};

// Do not edit below this line
module.exports = findTheOldest;
