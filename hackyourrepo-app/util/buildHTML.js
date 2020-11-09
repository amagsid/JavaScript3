export function buildHTML(){
    document.body.innerHTML += 
    `<div class="container">
  
  <div id="headers"> 
        <section class="header"> 
          <p> HYF Repositories </p>
          <select id="repo-select"> 
            <option class="placeholder" value="" disabled selected hidden>Choose a repo..</option>
          </select>
        </section>
        </div> 
        
        <div class="info">
          <section class="info__details">
            <table>
              <tr>
                <td class="table__header">Repository:</td>
                 <td class="repo__details" id="repo-name"><a id="repo-link">  </a>  </td> 
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

  
    }