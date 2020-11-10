'use strict'

// Exercise A
async function getData(url) {

    try {
    const response = await fetch(url)
    const result = response.json
    console.log(result)
    }

    catch {
     throw new Error("Error!", error);
    }
  }
  
 getData('https://randomfox.ca/floof/');


  // Exercise B
  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  
  async function makeAllCaps(array) {
      let capsArray = array.map(word => {
        if (typeof word === 'string') {
          return word.toUpperCase();
        } else {
          throw new Error('Error: Not all items in the array are strings!');
        }
      });
      return capsArray ;
    
  };
  
 makeAllCaps(arrayOfWords) 
    try {
        console.log(result)
    }
    
    catch {
        console.log(error)
    }