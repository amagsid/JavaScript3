"use strict";


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
