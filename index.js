let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");


const gencomp = () =>{
    const options = ["rock" , "paper" , "scissor"];
    let randInd =  Math.floor(Math.random() *3);
    return options[randInd];
     
    
}
const draw = () =>{
    console.log("this game is draw");
    message.innerText = "The game is draw";
}
const showWinner = (userwin) =>{
    if(userwin){
       console.log("you win");
       message.innerText = "you win";
       userScore +=1;
       userscore.innerText = userScore;

    }
    else{
       console.log("you lost");
       message.innerText = "you lost";
       compScore +=1;
       compscore.innerText = compScore;
    }
}

const playGame = (userchoice) =>{
  console.log("user choise" , userchoice);   
  const compchice = gencomp();
  console.log("comp choice " , compchice);
  if(userchoice === compchice){
    draw();
  }
  else{
   
       let userwin = true;
       if(userchoice=== "rock"){
       userwin =  compchice === "paper" ? false : true;
       }
    else if(userchoice === "paper"){
       userwin =  compchice === "scissor" ? false : true ;
    }
    else{
      userwin =   compchice ==="rock" ? false : true;
    }
    showWinner(userwin);
  }
  
};







choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        let userchoice = choice.getAttribute("id");
        
        playGame(userchoice);
    });
});


