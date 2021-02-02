
   const resetContent = (element) => {
     element.innerHTML = ''
  }

const populateHTML = (optionSelect, jsonData) => {
  //setting the color of the dropdown menu options to blue
  console.log('populateHTML option select', optionSelect, 'jsonData', jsonData)
  

  //function to iterate over array elements and show repo names in dropdown menu
  jsonData.forEach((element) => {
  
    if (optionSelect.value == element.name) {
      //creating a link to the GitHub Repo
      let a = document.getElementById('repo-link');
      a.innerText = `go to ${element.name}`;
      a.href = element.html_url;
      //setting the target attribute to the link so it opens in s seperate tab 
      let att = document.createAttribute("target");
      att.value = "_blank";
      a.setAttributeNode(att);
      //populating other HTML info elements
      repoDescription.innerText = element.description;
      forksNumber.innerText = element.forks;
      let date = new Date(element.updated_at);
      dateUpdated.innerText = date;

      //function to get contributors info API
      let getContribResponse = (repo) => {
        const contribResponse = 'https://api.github.com/repos/HackYourFuture/'+repo+'/contributors';
        fetch(contribResponse)
      
        .then((response) => {
          return response.json();
        })
        
        .then((jsonData) => {
          
          jsonData.forEach((element)=> {
            //create and append contributor div, img and p tag for useIDs
            let contDiv = document.createElement('div');
            let avatar = document.createElement('img');
            let userID = document.createElement('p');
            let contribNum = document.createElement('h4');
            let contribNumSquare = document.createElement('div');
            contribNumSquare.classList.add("square");
            contribSection.appendChild(contDiv);
            contDiv.appendChild(avatar);
            //display user ID as a link by creating a <a> tag and populating HTML
            let userIDlink = document.createElement('p');
            userIDlink.style.fontSize = '1rem'
            contDiv.appendChild(userIDlink);
            let a = document.createElement('a')
            userIDlink.appendChild(a);
            a.innerText = element.login;
            a.href = element.html_url;
            //setting the target attribute to the link so it opens in s seperate tab 
            let att = document.createAttribute("target");
            att.value = "_blank";
            a.setAttributeNode(att);
            contDiv.appendChild(userID);
            //contributions number
            contribNumSquare.appendChild(contribNum);
            contDiv.appendChild(contribNumSquare);
            contribNum.innerHTML = element.contributions;
            avatar.src = element.avatar_url;
            //styling
            contDiv.classList.add("contributor");
            avatar.classList.add("avatar");
            userID.classList.add("user-id");
            avatar.style.maxWidth = '50px';
            userID.style.fontSize = '1rem';
            contribNum.style.fontweight = '100';

            //function to reset contributors data when selecting another repo from dropdown menu
         
            //event listener on "change" for resetting
            optionSelect.addEventListener('change', resetContrib);
          })
        })
      }
      getContribResponse(element.name);
    }
  })
}

function setOptions(optionSelect, jsonData) {
  optionSelect.style.color = '#4253af';

  //sorting the response alphabetically
  jsonData.sort((a, b) => a.name.localeCompare(b.name));
  jsonData.forEach((element) => {
  
    const option = document.createElement('option');
    option.innerHTML = element.name;
    optionSelect.appendChild(option);
    option.value = element.id
    
  })
}

function fillRepoDetails(jsonData, changeEvent){
console.log('changeEvent',changeEvent)
const select = changeEvent.target;
const selectedOption = select.selectedOptions[0]
console.log(selectedOption)
}



function initialiseDisplayError(parentElement){

  const errorDiv = document.createElement('div');
  const errorWarning = document.createElement('h4');
  errorWarning.style.fontWeight = '400';
  errorDiv.appendChild(errorWarning);
  //styling error div and assinging an .error class to it
  parentElement.appendChild(errorDiv);
  errorDiv.classList.add("error");
  errorDiv.style.display = 'none';


  return errorDiv;
}

function displayError(errorDiv, message){
 const errorWarning = errorDiv.firstChild
 errorWarning.innerText = message;
 errorDiv.style.display = 'block';

}

export function fetchRequest(){

        //grabbing the drop down menu elements
        const optionSelect = document.getElementById('repo-select');
        //grabing HTML text elements to fill based on selection
        const repoDescription = document.getElementById('repo-description');
        const forksNumber = document.getElementById('repo-forks');
        const dateUpdated = document.getElementById('updated');
        //grabbing contributors HTML elements
        const contribSection = document.getElementById('info__contributors');
        //setting the initial color of the dropdown menu placeholder to grey
        const headers = document.getElementById('headers');
        
        const errorElement = initialiseDisplayError(headers) 
        let jsonData = null

      

    const GitHubURL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";


    
    fetch(GitHubURL)
    
    .then((response) => {
    if (response.ok) {
    return response.json();
    } else {
     
      displayError(errorElement,'Error: Network request failed')
      
    } 
  })



  .then((jsonData)=> { 
  jsonData = jsonData
   setOptions(optionSelect, jsonData)
   console.log('option select', optionSelect)
  }) 
  
  
  .catch((error) => {
    console.log(error);
  })
  optionSelect.addEventListener('change', fillRepoDetails.bind(null, jsonData))
}