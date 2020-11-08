const URL = "https://opentdb.com/api.php?amount=5"



async function getTrivia(){
   const response =  await fetch(URL)
   const json = await response.json()
   const result = json.results
  console.log(result)

  document.body.innerHTML += 
  `
  <div id="container">
    <h3> let's play some trivia</h3>
    <div id="accordion-container">
    </div> 
    </div>
  `
  accordion = document.getElementById('accordion-container')
result.forEach(element => {
   button = document.createElement('button')
   accordion.appendChild(button)
   let answerText = document.createElement('h4')
   accordion.appendChild(answerText)
   answerText.innerHTML = element.correct_answer
   button.innerHTML = element.question
   button.classList.add("accordion")

   answerText.style.display = "none"


   console.log(answerText)

   
   function showAnswer(){ 
      if (answerText.style.display === "none") {
         answerText.style.display = "block";
       } else {
         answerText.style.display = "none";
       }
      }
      
      button.addEventListener('click', showAnswer) 


});


  


  





}

getTrivia()

