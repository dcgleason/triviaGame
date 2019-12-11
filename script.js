

let trivia = {
    firstQuestion: 'What is the largest planet in our solar system?',
    firstAnswer: ['Saturn', 'Jupitor', 'Neptune', 1],
    secondQuestion: 'The planets make up what percentage of the mass in our solar system?',
    secondAnswer: ['1.35%', '0.135%' , '13.5%', 0],
    thirdQuestion: 'What are the only two planets in our solar system without moons?',
    thirdAnswer: ['Venus & Mars', 'Mercury & Venus', 'Uranus & Neptune', 1]
};

// code to pull background image of earth from nasa api
//

const API_KEY = ""
const nasaURL = "https://api.nasa.gov/EPIC/api/natural/images?api_key="

// function backgroundImage(){
//  let jpeg = ".jpg"
//  let randomNum = Math.floor(Math.random()*12);
 
// fetch(nasaURL+API_KEY)
//  .then(response => response.json())
//  .then(data => 
//     // console.log(data)
//     //nasaData = data
//     // backgraoundImagereset(nasaData)
//     // let year = data[randomNum].date.split(" ")[0].split("-")[0]
//     // let month = data[randomNum].date.split(" ")[0].split("-")[1]
//     // let day = data[randomNum].date.split(" ")[0].split("-")[2]
//     document.body.style.backgroundImage = `url('https://epic.gsfc.nasa.gov/archive/natural/${data[randomNum].date.split(" ")[0].split("-")[0]}/${data[randomNum].date.split(" ")[0].split("-")[1]}/${data[randomNum].date.split(" ")[0].split("-")[2]}/png/${data[0].image}.png?api_key=${API_KEY}')`
//     )}
//     backgroundImage()
    

// display question and answers to page


let questionDiv = document.querySelector('#question')
let answerOneDiv = document.querySelector("#answer-one")
let answerTwoDiv= document.querySelector("#answer-two")
let answerThreeDiv = document.querySelector("#answer-three")
let result = document.querySelector("#result")
let streak = document.querySelector("#winning-streak")
let topScore = document.querySelector("#topScore")
let numRightInARow = 0
let total = 0
let topArray = [0]
let progressBarFull = document.querySelector("#progressBarFull")
const totalQuestions = 3
let fraction = document.querySelector(".fraction")

setScreen()

function setScreen(){
    document.getElementById("title").innerHTML = "Astronomy Trivia Game"
    progressBarFull.style.width = `${(total/totalQuestions) * 100}em`
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]

    firstTurn();
}

  //addeventlistener to buttons(if == correct, model pops up)

  function firstTurnAnswer1() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " +  topArray[0]
    secondTurn();
  }
  function firstTurnAnswer2() {
    result.innerHTML = "That was correct";
    numRightInARow++;
    console.log(total);
    total += 1;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    progressBarFull.style.width = `${(total/totalQuestions) * 100}%`
    topScore.innerHTML = "Top Score: " + topArray[0]
    console.log(total/totalQuestions)
    secondTurn();
  }
  function firstTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]
    console.trace()
    secondTurn();
    console.trace()
  }
  function secondTurnAnswer1() {
    result.innerHTML = "That was correct";
    numRightInARow++;
    console.log(total);
    total += 1;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    progressBarFull.style.width = `${(total/totalQuestions) * 100}%`
    topScore.innerHTML = "Top Score: " + topArray[0]
    console.log(total/totalQuestions)
    thirdTurn();
  }
  function secondTurnAnswer2() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]
    thirdTurn();
  }
  function secondTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]
    console.trace()
    thirdTurn();
  }
  function thirdTurnAnswer1() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]
    gameOver();
  }
  function thirdTurnAnswer2() {
    result.innerHTML = "That was correct";
    console.log(total);
    total += 1;
    console.log(total);
    numRightInARow++;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    progressBarFull.style.width = `${(total/totalQuestions) * 100}%`
    topScore.innerHTML = "Top Score: " + topArray[0]
    console.log(total/totalQuestions)
    gameOver();
  }
  function thirdTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    topScore.innerHTML = "Top Score: " + topArray[0]
    gameOver();
  }
   
function sortNum (a,b){
    return b-a
}

  function firstTurn() {
    questionDiv.innerHTML = trivia.firstQuestion;
    answerOneDiv.innerHTML = trivia.firstAnswer[0];
    answerTwoDiv.innerHTML = trivia.firstAnswer[1];
    answerThreeDiv.innerHTML = trivia.firstAnswer[2];
    answerOneDiv.addEventListener("click", firstTurnAnswer1); // function () {}
    answerTwoDiv.addEventListener("click", firstTurnAnswer2);
    answerThreeDiv.addEventListener("click", firstTurnAnswer3);
  }
  // function for second question
  function secondTurn() {
    questionDiv.innerHTML = trivia.secondQuestion;
    answerOneDiv.innerHTML = trivia.secondAnswer[0];
    answerTwoDiv.innerHTML = trivia.secondAnswer[1];
    answerThreeDiv.innerHTML = trivia.secondAnswer[2];
    answerOneDiv.removeEventListener("click", firstTurnAnswer1);
    answerTwoDiv.removeEventListener("click", firstTurnAnswer2);
    answerThreeDiv.removeEventListener("click", firstTurnAnswer3);
    answerOneDiv.addEventListener("click", secondTurnAnswer1);
    answerTwoDiv.addEventListener("click", secondTurnAnswer2);
    answerThreeDiv.addEventListener("click", secondTurnAnswer3);
  }
  //function for third question
  function thirdTurn() {
    questionDiv.innerHTML = trivia.thirdQuestion;
    answerOneDiv.innerHTML = trivia.thirdAnswer[0];
    answerTwoDiv.innerHTML = trivia.thirdAnswer[1];
    answerThreeDiv.innerHTML = trivia.thirdAnswer[2];
    answerOneDiv.removeEventListener("click", secondTurnAnswer1);
    answerTwoDiv.removeEventListener("click", secondTurnAnswer2);
    answerThreeDiv.removeEventListener("click", secondTurnAnswer3);
    answerOneDiv.addEventListener("click", thirdTurnAnswer1);
    answerTwoDiv.addEventListener("click", thirdTurnAnswer2);
    answerThreeDiv.addEventListener("click", thirdTurnAnswer3);
  }
  function gameOver() {
    document.getElementById("title").innerHTML = "Game Over";
    questionDiv.innerHTML = "";
    answerOneDiv.innerHTML = "";
    answerTwoDiv.innerHTML = "";
    answerThreeDiv.innerHTML = "";
    result.innerHTML = "";

// remove event listeners from third turn

    answerOneDiv.removeEventListener("click", thirdTurnAnswer1);
    answerTwoDiv.removeEventListener("click", thirdTurnAnswer2);
    answerThreeDiv.removeEventListener("click", thirdTurnAnswer3)
    
// pushes total into array sorts that array, largest number at indexes 0
    topArray.push(total)
    topArray.sort(sortNum)
    console.log(topArray)
    topScore.innerHTML = "Top Score: " + topArray[0]
    total = 0

// shows playagain button and then removes after click by removing and adding a class
    let playAgain = document.querySelector("#playAgain")
    playAgain.classList.remove('hidden')
    playAgain.addEventListener('click', function(e){
        total = 0
        numRightInARow = 0
        answerOneDiv.classList.remove("hidden")
        answerTwoDiv.classList.remove("hidden")
        answerThreeDiv.classList.remove("hidden")
        e.target.classList.add("hidden")
        setScreen()
    })
  
    
    answerOneDiv.classList.add("hidden")
    answerTwoDiv.classList.add("hidden")
    answerThreeDiv.classList.add("hidden")
    // answerOneDiv.parentNode.removeChild(answerOneDiv);
    // answerTwoDiv.parentNode.removeChild(answerTwoDiv);
    // answerThreeDiv.parentNode.removeChild(answerThreeDiv);

    streak.innerHTML = "Your total score is " + total;
  }




 

  // loop the sco

  // arrange top score from high to low, keeping only the top five. 

   
//when get the right answer, add modal and then go to next questionDiv

//

// to add: correct # streak, number correct, number incorrect, play again button. 

//function is called when user clicks on new game button
// function is called when
//include high score!

//more things to do...
//high score, cooler css (button animation), more questionDivs, fix the winning streak and total score functionality, figure out modals, and maybe try to do more than one page?
// progress back with number correct and shows progress visually
// high score list

//questions
// why does the backgruond image turn blue only for a second? Page reloading? 
// numberRight count insn't working
// for loop within a fetch call...