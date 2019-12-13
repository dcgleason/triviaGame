# Astronomy Trivia Game 

**Description**

This trivia game is a game to test your general knowledge about astronomy. Granted, a few of the questions are hard, most should be able to get all 5 questions right given enough tries. The game tracks an winning streaks you have, your total questions answered correctly, and your top score. The number of questions answered correctly is also visually represented via the progress bar on the bottom on the screen. After the user answeres the last question, if he/she answers all 5 correctly, a screen will pop up congratulating him /her on doing so. The option always exsist to play again - at which point the board will reset and a top score, if it was obtained, will be displayed. 

**Motivation**

While there are many trivia games out there on the internet, none, so far as I could tell, exsist that are specificially in the realm of space / atronomy. Being a fan of the topic, I felt that it would be at least good to create an astronomy trivia game so that it exists and so that other astronomy-fans can enjoy it.

**Technologies Used**

* HTML
* CSS
* Javascript

**Code Snippet**

```
function backgroundImage(){
 let randomNum = Math.floor(Math.random()*12);
 
fetch(nasaURL+API_KEY)
 .then(response => response.json())
 .then(data => 
    document.body.style.backgroundImage = `url('https://epic.gsfc.nasa.gov/archive/natural/${data[randomNum].date.split(" ")[0].split("-")[0]}/${data[randomNum].date.split(" ")[0].split("-")[1]}/${data[randomNum].date.split(" ")[0].split("-")[2]}/png/${data[0].image}.png?api_key=${API_KEY}')`
    )}
backgroundImage()
```

**Screenshot**

> [Screen-Shot-2019-12-12-at-7-39-33-PM.png](https://postimg.cc/8JwCz1Sb)

**API Reference**

Below is the link to the NASA API documentation. The API was used to provide the background image. 

> https://epic.gsfc.nasa.gov/about/api

**Instructions for Use**

Navigate to the link below:

> https://dcgleason.github.io/triviaGame/

Start game by clicking on the answer choices! Keep answering the questions until the Play Again button apears. Play until you get all 5 questions answered correctly!

**Future Plans**

Given more time, I would like to add a question timer, add more than 5 questions, and include question numbers. I would also like the game to be able to randomly display questions and have pop ups that display the user's results after every turn, not just when they answer all the questions correctly. 