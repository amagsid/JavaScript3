"use strict";
//I'm struggling with modulizing my code since I'm having trouble with how my code 
//was written, which in return is not allowing me to successfully
//implement the pagination feature. This also makes me wonder if it's preventing
//me from implementing it the right way since I would need to refactor my code after applying it.
//when I could make progress in some ways following tutorials and implementing it on the code in its current state, I had trouble
//understanding the logic behind it so I chose not to proceed without understanding the code I'm writing.


import {buildHTML} from './buildHTML.js'
import {fetchRequest} from './fetchRequest.js'
//import {paginate} from './pagination.js'

//main function
let main = () => {
  buildHTML();
  fetchRequest();
  //paginate();
}
//Event listener
document.addEventListener('DOMContentLoaded', main , false);
