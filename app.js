const userInput = document.getElementById('input');
const btnCheck = document.getElementById('btn');
const answer = document.getElementById('answer');
const inputs = document.getElementById('inputs');
const newGame = document.getElementById('newGame');

let counter = 1;

const pcGuess = Math.floor(Math.random()*100)+1;


btnCheck.addEventListener("click", ()=> {
   
    if(counter==5){
        answer.innerText ="Sorry you lose the game. The correct number is "+pcGuess+".";
        answer.setAttribute("class", "text-danger mt-4")
        newGame.style.display="block";
        btnCheck.disabled="true"
    }else if(userInput.value == pcGuess){
        answer.innerText="Congratulation You guess correct number";
        answer.setAttribute("class","text-success mt-4")
        newGame.style.display="block";
        btnCheck.disabled="true"
    }else if(userInput.value > pcGuess){
        answer.innerText="Too High ! Guess Again.";

       

    }else{
        answer.innerText="Too Low ! Guess Again.";
        
    }
    inputs.innerText += userInput.value + ", ";
    counter++;
    
})

newGame.addEventListener("click", ()=> {
    window.location.reload();
})