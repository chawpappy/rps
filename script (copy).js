//get computer choice: random number generator, define which range equals which choice.*//
function getComputerChoice() {
    let cc= Math.floor(Math.random()*100);
    if (cc <= 33) {
        return "rock"
    } else if (cc <= 66) {
        return "paper"
    } else {
        return "scissors"
    }    
}
function getPlayerChoice(){
    let pick = prompt ("Rock, Paper, or Scissors?",);
    let npick = pick.toLowerCase();
    if (npick === "rock" ){
        return "rock"
    } else if (npick === "paper") {
        return "paper"
    } else if (npick ==="scissors") {
        return "scissors"
    } else {
        return "INVALID"
    }    
}
let computerSelection = getComputerChoice()
let playerSelection = getPlayerChoice()
//console.log (computerSelection)
//console.log (playerSelection)
function playRound (computerSelection,playerSelection){
    switch (playerSelection){
        case "rock" :
            switch (computerSelection){
                case "rock" : 
                return "TIE, two rocks collide"
                break;
                case "paper" :
                return "LOSE, your opponent's paper covers your rock"
                break;
                default :
                return "WIN, you smash your opponent's scissors!"
            }
            break;
        case "scissors" :
            switch (computerSelection){
                case "scissors" :
                return "TIE, two scissors clash"
                break;
                case "rock" :
                return "LOSE, your opponent's rock shatters your scissors"
                break;
                default:
                return "WIN, you cut your opponent's paper"
            }
            break;
        case "paper" :
            switch (computerSelection){
                case "scissors" :
                return "LOSE, your opponent's scissors slice your paper"
                break;
                case "rock" :
                return "WIN, you smother your opponent's rock"
                break;
                default:
                return "TIE, two papers flutter"
            }
            break;
        default :
            return "INVALID RESPONSE, TRY AGAIN"
    }
}
let round = playRound(computerSelection,playerSelection)
let end = game()

function game(){
    let wins=0;
    let losses=0;
    let endMessage= ("Your opponent chose "+ computerSelection+", You chose "+playerSelection+". Resulting in: "+round+" W:"+wins+" L:"+losses );
    for (let i=1; i<5; i++){
        let result=playRound(computerSelection,playerSelection);
        let test= result.charAt(0);
        test = "W"? wins = wins++ : null ;
        test = "L"? losses=losses++ : null;
        console.log (endMessage)


    }
   }
