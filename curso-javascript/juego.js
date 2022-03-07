
var player;
var machine;


function game(player, machine){
    if(machine === player) {
        console.log("It's a tie");
    } else if(player === "stone" && machine === "scissor" || player === "papel" && machine === "stone" || player === "scissor" && machine === "paper") {

        console.log("player win!!!...");
    } else if (machine === "scissor" && player === "paper" || machine === "stone" && player === "scissor" || machine === "paper" && player === "stone"){
        console.log("Machine win!!!...");
    } else {
        console.log("you wrote the wrong option!");
    }
}

game("paper","scissor");
