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
const vara = document.querySelector('#response');
const buttons = document.querySelector('#buttons');
let playerSelection = 0;
let wins=0;
let losses=0;
buttons.addEventListener('click',function(e) {playerSelection = (`${e.target.id}`); 
 console.log (playerSelection);
 game(playerSelection);
});


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
        }
}


function game(playerSelection){

        for (let i=0; i<5&&wins<3&&losses<3; i = wins+losses){
            let selection = playerSelection;
            let oppo = getComputerChoice()
            let result = playRound(oppo,selection);
            let test = result.charAt();
            test === "W"? wins += 1 : null;
            test === "L"? losses += 1 : null;
            vara.textContent = ("Your opponent chose "+ oppo+", You chose "+selection+". Resulting in: "+result+" W:"+wins+" L:"+losses );
            console.log(wins);
            console.log(losses);
            playerSelection = " ";
    
        }
    if (wins>losses) {
        vara.textContent = ("YOU WIN!!!! "+wins+" winning rounds and "+losses+" losing rounds")
    } else {vara.textContent = ("YOU LOSE!!!! "+wins+" winning rounds and "+losses+" losing rounds")}
   }
