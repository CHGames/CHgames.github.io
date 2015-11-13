function game() {
alert("Welcome young ninja to NINJA MADNESS")
alert("Many young ones start their journey")
alert("Not many finish it")
alert("Let us get started")

var q1 = prompt("You see two evil minions, what do you chose to do? Sneak or Fight?");

if (q1==="Fight") {
alert("Two overpower one, you die, game over.");  
  
}
else {
alert("Well done, you have survived... for now."); 
    var q2 = prompt("You see another evil minion tying his shoelaces, do you Kill him or Run past him?");
  if (q2==="Run past") {
    alert("You died, tough, deal with it kid:P");
    
  }
  else {
    alert("You sliced his head off, well done you are still alive");
    var q3 = prompt("You see the evil apprentice, do you sneak up from behind or go in stupidly?");
    if (q3==="go in stupidly");{
      alert("don't be stupid, you died.")
    
  }
  else {
    alert("You sneaked up and stabbed your sword into his back, yay!");
    var q4 = prompt("There he is, the evil samurai boss, do you chose to fight him or get him drunk then kill him?");
    if (q4==="fight him");{
      alert("he overpowers you because of his brute strength and you die.")
    }
    else {
      alert("he got drunk and you killed him. Congrats, you won the game :D.")
    }
  }
  }
}

}