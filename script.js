

let trivia = {
    firstQuestion: 'What is the largest planet in our solar system?',
    firstAnswer: ['Saturn', 'Jupitor', 'Neptune', 1],
    secondQuestion: 'The planets make up what percentage of the mass in our solar system?',
    secondAnswer: ['1.35%', '0.135%' , '13.5%', 0],
    thirdQuestion: 'What are the only two planets in our solar system without moons?',
    thirdAnswer: ['Venus & Mars', 'Mercury & Venus', 'Uranus & Neptune', 1]
};

//

const API_KEY = "0ZdLYxQmH4TXCJDjeyOaOTIEkheeEaLdSGDaRxjs"
const nasaURL = "https://api.nasa.gov/EPIC/api/natural/images?api_key="

function backgroundImage(){
 let jpeg = ".jpg"
 
    fetch(nasaURL+API_KEY)
    .then(response => response.json())
    .then(data => 
    document.body.style.backgroundImage = `url('${data[0].image+jpeg}')`)
    }

backgroundImage()

// display question and answers to page


let question = document.querySelector('#question')
let answerOne = document.querySelector("#answer-one")
let answerTwo= document.querySelector("#answer-two")
let answerThree = document.querySelector("#answer-three")
let result = document.querySelector("#result")
let streak = document.querySelector("#winning-streak")
let numRightInARow = 0
let total = 0



//addeventlistener to buttons(if == correct, model pops up)

firstTurn();

function firstTurn(){

question.innerHTML = trivia.firstQuestion
answerOne.innerHTML = trivia.firstAnswer[0]
answerTwo.innerHTML = trivia.firstAnswer[1]
answerThree.innerHTML = trivia.firstAnswer[2]


answerOne.addEventListener('click', function(){
    result.innerHTML= "That was incorrect"
    numRightInARow=0
    streak.innerHTML = "Your winning streak is " + numRightInARow
    secondTurn()
})
answerTwo.addEventListener('click', function(){
    result.innerHTML= "That was correct"
    numRightInARow++
    total+=1
    streak.innerHTML = "Your winning streak is " + numRightInARow
    secondTurn();


    // input modal and then put in a new question / answer
})
answerThree.addEventListener('click', function(){
    result.innerHTML= "That was incorrect"
    numRightInARow=0
    streak.innerHTML = "Your winning streak is " + numRightInARow
    secondTurn()
})
}


// function for second quesiotn

function secondTurn(){

question.innerHTML = trivia.secondQuestion
answerOne.innerHTML = trivia.secondAnswer[0]
answerTwo.innerHTML = trivia.secondAnswer[1]
answerThree.innerHTML = trivia.secondAnswer[2]

    answerOne.addEventListener('click', function(){
        result.innerHTML= "That was correct"
        numRightInARow++
        console.log(total)
        total+=1
        console.log(total)
        streak.innerHTML = "Your winning streak is " + numRightInARow
        thirdTurn()
    })
    answerTwo.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numRightinARow=0 
        streak.innerHTML = "Your winning streak is " + numRightInARow
        thirdTurn()
 
    
    })
    answerThree.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numRightinARow=0
        streak.innerHTML = "Your winning streak is " + numRightInARow
        thirdTurn()
    })
    

}
//function for thrid question
function thirdTurn(){
question.innerHTML = trivia.thirdQuestion
answerOne.innerHTML = trivia.thirdAnswer[0]
answerTwo.innerHTML = trivia.thirdAnswer[1]
answerThree.innerHTML = trivia.thirdAnswer[2]

    answerOne.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numRightinARow = 0
        console.log(total)
        streak.innerHTML = "Your winning streak is " + numRightInARow
        gameOver()
    })
    answerTwo.addEventListener('click', function(){
        result.innerHTML= "That was correct"
        console.log(total)
        total+=1
        console.log(total)
        numRightInARow++
        streak.innerHTML = "Your winning streak is " + numRightInARow
        gameOver()

 
    })
    answerThree.addEventListener('click', function(){
        result.innerHTML= "That was incorrect"
        numRightInARow=0
        console.log(total)
        streak.innerHTML = "Your winning streak is " + numRightInARow
        gameOver()
    })
}


function gameOver(){
document.getElementById("title").innerHTML = "Game Over"
question.innerHTML = ""
answerOne.innerHTML = ""
answerTwo.innerHTML = ""
result.innerHTML = ""
answerThree.innerHTML = ""
streak.innerHTML="Your total score is " + total

}

   
//when get the right answer, add modal and then go to next question

//

// to add: correct # streak, number correct, number incorrect, play again button. 

//function is called when user clicks on new game button
// function is called when
//include high score!

//more things to do...
//high score, cooler css (button animation), more questions, fix the winning streak and total score functionality, figure out modals, and maybe try to do more than one page? 

//questions
// why does the backgruond image turn blue only for a second? Page reloading? 
// numberRight count insn't working
// for loop within a fetch call...