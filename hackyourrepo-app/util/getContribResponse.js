export function getContribResponse(repo) {
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
        let resetContrib = () => {
          contDiv.style.display = 'none';
        }
        //event listener on "change" for resetting
        optionSelect.addEventListener('change', resetContrib);
      })
    })
  }