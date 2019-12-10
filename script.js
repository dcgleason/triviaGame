

let trivia = {
    firstQuestion: 'What is the largest planet in our solar system?',
    firstAnswer: ['Saturn', 'Jupitor', 'Neptune', 1],
    secondQuestion: 'The planets make up what percentage of the mass in our solar system?',
    secondAnswer: ['1.35%', '0.135%' , '13.5%', 0],
    thirdQuestion: 'What are the only two planets in our solar system without moons?',
    thirdAnswer: ['Venus & Mars', 'Mercury & Venus', 'Uranus & Neptune', 1]
};

// let nasaData;
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
    
    
    //randomizer: to get a random number
    
    // backgroundImageReset(data)
    // data[random numbeer]
    // data[randomnumber].date = data.date.split('-')
    // => ['2019', '06', '27', '01:09:09']
    //
    // document.body.style.backgroundImage = `url('https://epic.gsfc.nasa.gov/archive/natural/${data[random].date[0]}/${data[random].date[1]}/27/png/${data[0].image}.png')`

// display question and answers to page


let questionDiv = document.querySelector('#question')
let answerOneDiv = document.querySelector("#answer-one")
let answerTwoDiv= document.querySelector("#answer-two")
let answerThreeDiv = document.querySelector("#answer-three")
let result = document.querySelector("#result")
let streak = document.querySelector("#winning-streak")
let numRightInARow = 0
let total = 0
let progressBarFull = document.querySelector("#progressBarFull")
const totalQuestions = 3
let fraction = document.querySelector(".fraction")

setScreen()

function setScreen(){
    progressBarFull.style.width = `${(total/totalQuestions) * 100}em`
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
}

  //addeventlistener to buttons(if == correct, model pops up)
  firstTurn();
  function firstTurnAnswer1() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
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
    console.log(total/totalQuestions)
    secondTurn();
  }
  function firstTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    secondTurn();
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
    console.log(total/totalQuestions)
    thirdTurn();
  }
  function secondTurnAnswer2() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    thirdTurn();
  }
  function secondTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    thirdTurn();
  }
  function thirdTurnAnswer1() {
    result.innerHTML = "That was incorrect";
    numRightinARow = 0;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
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
    console.log(total/totalQuestions)
    gameOver();
  }
  function thirdTurnAnswer3() {
    result.innerHTML = "That was incorrect";
    numRightInARow = 0;
    console.log(total);
    streak.innerHTML = "Your winning streak is " + numRightInARow;
    fraction.innerHTML = "Questions: " + total + "/" + totalQuestions
    gameOver();
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
  //function for thrid question
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
    result.innerHTML = "";
    answerThreeDiv.innerHTML = "";
    answerOneDiv.parentNode.removeChild(answerOneDiv);
    answerTwoDiv.parentNode.removeChild(answerTwoDiv);
    answerThreeDiv.parentNode.removeChild(answerThreeDiv);

    streak.innerHTML = "Your total score is " + total;
  }

   
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