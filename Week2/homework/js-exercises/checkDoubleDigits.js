'use strict'
let checkDoubleDigits = (number) => {
    
    const promise = new Promise ((resolve, reject) => {
        if (number > 10) {
            resolve("The number is bigger than 10!");
        } else if (num <= 10) {
            reject("The number is smaller than 10");
        } else if (typeof num !== number) {
            reject(new Error,"Please enter a valid number");
        }
    })
    return promise;
}