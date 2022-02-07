'use strict';

function rand(){
  let rand = Math.ceil(Math.random()*20);
  console.log(rand);
  return rand;
}
let random = rand();


function cont(){
  document.getElementsByClassName("number")[0].innerText = '?'
  document.getElementsByClassName("message")[0].innerText = 'Start guessing...';
  document.getElementsByTagName('body')[0].style.backgroundColor = "#222";
  document.getElementsByTagName("span")[0].innerText =  20;
  random = rand();
}

let highscore = 0;


document.getElementsByTagName("button")[1].addEventListener("click", function(){
  if (Number(document.getElementsByTagName("span")[0].innerText) < 1){
    document.getElementsByTagName('h1')[0].innerText = 'GAME OVER. CLICK AGAIN BUTTON';
    document.getElementsByTagName('body')[0].style.backgroundColor = "red";
    return;
  }
  document.getElementsByClassName("number")[0].innerText = '?';
  document.getElementsByTagName('body')[0].style.backgroundColor = "#222";
  let guess = document.getElementsByTagName("input")[0].value;
    document.getElementsByClassName("message")[0].innerText = 'Start guessing...';
  if (guess === ''){ //NO NUMBER
    document.getElementsByClassName("message")[0].innerText = 'NO NUMBER!!';
  }else if(guess > random){   //LOWER
    document.getElementsByClassName("message")[0].innerText = 'Lower!'
    let score = Number(document.getElementsByTagName("span")[0].innerText) - 1;
    document.getElementsByTagName("span")[0].innerText = score;
  }else if (guess < random){ //HIGHER
    document.getElementsByClassName("message")[0].innerText = 'Higher!'
    let score = Number(document.getElementsByTagName("span")[0].innerText) - 1;
    document.getElementsByTagName("span")[0].innerText = score;
  } else { //CORRECT
    let score = Number(document.getElementsByTagName("span")[0].innerText);
    if(score > highscore){
     highscore = document.getElementsByClassName('highscore')[0].innerText = score;
    }
    document.getElementsByClassName("number")[0].innerText = random;
    document.getElementsByClassName("message")[0].innerText = 'Correct number!';
    document.getElementsByTagName('body')[0].style.backgroundColor = "#60b347";
    return;
  }
});


document.getElementsByTagName("button")[0].addEventListener("click", function(){
  cont();
});
