const findTheOldest = function(people) {

    const currentYear = (new Date()).getFullYear();
    var firstCheck = 0
    var secondCheck = 0

    const oldest = people.sort((a, b) =>{
        if(a.yearOfDeath !== undefined){
            
            firstCheck = a.yearOfDeath - a.yearOfBirth
        }
        else{
            firstCheck = currentYear - a.yearOfBirth
        }

        if(b.yearOfDeath !== undefined){
            
            secondCheck = b.yearOfDeath - b.yearOfBirth
        }
        else{
            secondCheck = currentYear - b.yearOfBirth
        }
        
        return firstCheck > secondCheck ? -1:1
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
