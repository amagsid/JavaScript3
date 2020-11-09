'use strict'
let checkDoubleDigits = (number) => {
    
    const promise = new Promise ((resolve, reject) => {
        if (number > 10) {
            resolve(console.log("The number is bigger than 10!") );
        } else if (number == 10) {
            reject(console.log("The number is 10"))
        } else if (number < 10) {
            reject(console.log("The number is smaller than 10"));
        } else if (typeof number !== number) {
            reject(new Error("Please enter a valid number"));
        }
    })
    return promise;
    
}

//testing
//checkDoubleDigits(11)