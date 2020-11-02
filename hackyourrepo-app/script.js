"use strict";

//complete populating HTML contributoer elements
//sort alphabeticlly
//change date format
//add Network error div
//change functions to arrow functions


//main function
function main(){
  document.body.innerHTML += 
  `<div class="container">
      <section class="header"> 
        <p> HYF Repositories </p>
        <select id="repo-select"> 
          <option class="placeholder" value="" disabled selected hidden>Choose a repo..</option>
        </select>
      </section>
      
      <div class="info">
        <section class="info__details">
          <table>
            <tr>
              <td class="table__header">Repository:</td>
              <td class="repo__details" id="repo-name">  </td>
            </tr>

            <tr>
              <td class="table__header">Description:</td>
              <td class="repo__details"  id="repo-description"> </td>
            </tr>

            <tr>
              <td class="table__header">Forks:</td>
              <td class="repo__details"  id="repo-forks"> </td>
            </tr>

            <tr>
              <td class="table__header">Updated:</td>
              <td class="repo__details"  id="updated"> </td>
            </tr>
          </table>
        </section>
        
        <section class="info__contributors" id="info__contributors"> 
        <p> Contributors</p>
        </section>
      </div>
    </div>`
    
    //grabbing the drop down menu elements
    let optionSelect = document.getElementById('repo-select');
    //grabing HTML text elements to fill based on selection
    let repoName = document.getElementById('repo-name');
    let repoDescription = document.getElementById('repo-description');
    let forksNumber = document.getElementById('repo-forks');
    let dateUpdated = document.getElementById('updated');
    //grabbing contributors HTML elements
    let contribSection = document.getElementById('info__contributors');
    //setting the initial color of the dropdown menu placeholder to grey
    optionSelect.style.color = '#c6c6c6';
    const GitHubURL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
    
    fetch(GitHubURL)
    
    .then((response) => {
    console.log('response is here');
    return response.json();
  })
  
  .then((jsonData)=> {
    console.log(jsonData);
    function populateHTML(){
      //setting the color of the dropdown menu options to blue
      optionSelect.style.color = '#4253af';

      //function to iterate over array elements and show repo names in dropdown menu
      jsonData.forEach(function(element){
        let option = document.createElement('option');
        optionSelect.appendChild(option);
        option.innerHTML = element.name;
        
        if (optionSelect.value == element.name) {
          repoName.innerText = element.name;
          repoDescription.innerText = element.description;
          forksNumber.innerText = element.forks;
          dateUpdated.innerText = element.updated_at;

          //function to get contributors info API
          function getContribResponse(repo){
            const contribResponse = 'https://api.github.com/repos/HackYourFuture/'+repo+'/contributors';
            fetch(contribResponse)

            .then((response) => {
              return response.json();
            })
            
            .then((jsonData) => {
              console.log(jsonData);
              jsonData.forEach(function(element){
                //create new div
                let contDiv = document.createElement('div');
                let avatar = document.createElement('img');
                contribSection.appendChild(contDiv);
                contDiv.appendChild(avatar);
                contDiv.classList.add("contributor");
                avatar.src = element.avatar_url;
                avatar.style.maxWidth = '50px';

                //function to reset contributors data when selecting another repo from dropdown menu
                function resetContrib(){
                  contDiv.style.display = 'none';
                }
                //event listener on "change" for resetting
                optionSelect.addEventListener('change', resetContrib);
              })
            })
          }
          getContribResponse(element.name);
        }
      })
    }
    populateHTML()
    optionSelect.addEventListener('change', populateHTML);
  }) 
  
  .catch(function(error){
    console.log(error);
  })
}
//Event listener
document.addEventListener('DOMContentLoaded', main , false);
