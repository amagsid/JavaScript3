const URL = "https://opentdb.com/api.php?amount=5"


async function getTrivia(){
   const response =  await fetch(URL)
   const json = await response.json()
   const result = json.results
  console.log(result)

  document.body.innerHTML += 
  `
  <div id="container">
    <h3> Let's Play Some Trivia</h3>
    <div id="accordion-container">
    </div> 
    </div>
  `
  accordion = document.getElementById('accordion-container')

result.forEach(element => {
  //creating question elements
   button = document.createElement('button')
   accordion.appendChild(button)
   // creating the elements for answers and appending them below the buttons
   let answerText = document.createElement('h4')
   answerText.classList.add("answer")
   accordion.appendChild(answerText)
   answerText.innerHTML = element.correct_answer
   button.innerHTML = element.question
   button.classList.add("accordion")
   //setting the answer to display = none by default
   answerText.style.display = "none"

   button.addEventListener('click', showAnswer) 
   function showAnswer(){ 
      if (answerText.style.display === "none") {
         answerText.style.display = "block";
       } else {
         answerText.style.display = "none";
       }
      }
});
}

getTrivia()