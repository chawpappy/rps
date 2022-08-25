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
//let computerSelection = getComputerChoice()
//let playerSelection = getPlayerChoice()
//console.log (computerSelection)
//console.log (playerSelection)
function playRound (computerSelection,playerSelection){
    switch (playerSelection){
        case "rock" :
            switch (computerSelection){
                case "rock" : 
                return "TIE, two rocks collide"
                
                case "paper" :
                return "LOSE, your opponent's paper covers your rock"
                
                default :
                return "WIN, you smash your opponent's scissors!"
            }
            
        case "scissors" :
            switch (computerSelection){
                case "scissors" :
                return "TIE, two scissors clash"
                
                case "rock" :
                return "LOSE, your opponent's rock shatters your scissors"
                
                default:
                return "WIN, you cut your opponent's paper"
            }
            
        case "paper" :
            switch (computerSelection){
                case "scissors" :
                return "LOSE, your opponent's scissors slice your paper"
                
                case "rock" :
                return "WIN, you smother your opponent's rock"
                
                default:
                return "TIE, two papers flutter"
            }
            
        default :
            return "INVALID RESPONSE, TRY AGAIN"
    }
}
let end = game()

function game(){
    let wins=0;
    let losses=0;
        for (let i=0; i<5&&wins<3&&losses<3; i = wins+losses){
            let selection = getPlayerChoice();
            let oppo = getComputerChoice()
            let result=playRound(oppo,selection);
            let test= result.charAt(0);
            test === "W"? wins += 1 : null;
            test === "L"? losses += 1 : null;
            console.log ("Your opponent chose "+ oppo+", You chose "+selection+". Resulting in: "+result+" W:"+wins+" L:"+losses )
        }
    if (wins>losses) {
        console.log("YOU WIN!!!! "+wins+" winning rounds and "+losses+" losing rounds")
    } else {console.log("YOU LOSE!!!! "+wins+" winning rounds and "+losses+" losing rounds")}
   }
