'use strict'
const getAnonName = (firstName) => {
  const newPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(fullName);
      if (!firstName);
      reject(new Error("You didn't pass in a first name!"));
      const fullName = `${firstName} Doe`;
    }, 2000);
  });
  return newPromise;
};

getAnonName('John', console.log);