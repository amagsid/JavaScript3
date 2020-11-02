'use strict'

function main(){
    //grabbing the button
    let button = document.getElementById('getPokemon');
    //grabbing the drop down menu elements
    let pokeSelect = document.getElementById('pokemonSelect');
    pokeSelect.style.display = 'none';
    let showDropDown = () => pokeSelect.style.display = 'block';
    button.addEventListener('click',showDropDown);

    //fetch data funtion
    function fetchData(){
        const pokeURL = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=151`;
        fetch(pokeURL)
        .then((response) => {
        return response.json()
        })

        .then((jsonData) => {
            console.log(jsonData);
            const results = jsonData.results;
            
            //iterating over the JSON response to add elements to dropdown menu
            results.forEach(element => {
                const option = document.createElement('option');
                pokeSelect.appendChild(option);
                option.innerHTML = element.name;
                
                // adding data to the DOM
                 let addPokemonToDOM = () => {
                if (pokeSelect.value == element.name) {
                    let getImage = (name) => {
                        const pokeResponse = `https://pokeapi.co/api/v2/pokemon/${name}`;
                        
                        fetch(pokeResponse)
                        .then((response) => {
                            return response.json();
                        })
                        
                        .then((jsonData) => {
                            let pokeImage = document.createElement('img');
                            document.body.appendChild(pokeImage);
                            let imgSource = jsonData.sprites.front_default;
                            pokeImage.src = imgSource;
                            //resetting the grabbed elements so they don't add up on top of each other
                            let reset = () => {
                            pokeImage.style.display = 'none';
                        };
                        //adding an event listener to reset grabbed data when choosing another element from the dropdown menu
                        pokeSelect.addEventListener('change', reset);
                    });
                };
                getImage(element.name);
            };
        };
        pokeSelect.addEventListener('change', addPokemonToDOM);
      });
    });
  };
fetchData();
};
    
document.addEventListener('DOMContentLoaded', main , false);