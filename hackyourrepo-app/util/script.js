"use strict";

import {buildHTML} from './buildHTML.js'
import {fetchRequest} from './fetchRequest.js'



//main function
let main = () => {
  buildHTML();
  fetchRequest(); 

    
}
//Event listener
document.addEventListener('DOMContentLoaded', main , false);
