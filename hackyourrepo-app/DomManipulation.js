function createElementAddClass(el, className) {
  const element = document.createElement(el);
  element.classList.add(className);
  return element;
}

function getRandomEl(arr) {
  const randomEl = Math.floor(Math.random() * arr.length);
  return arr[randomEl];
}

//function appendElementsToDom(houseName, lordName, houseId) {
//  const houseList = document.getElementById(`got-house-list`);
//
//  const gotHouse = createElementAddClass(`div`, `got-house`);
//  const gotHouseName = createElementAddClass("h1", "got-house__title");
//  const lordEl = createElementAddClass("span", "got-house__current-lord");
//
//  gotHouseName.innerText = houseName;
//  lordEl.innerText = lordName;
//  lordEl.id = houseId;
//
//  gotHouse.appendChild(gotHouseName);
//  gotHouse.appendChild(lordEl);
//  houseList.appendChild(gotHouse);
//}
