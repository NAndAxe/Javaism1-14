function szamol(){
    let p1 = document.getElementById('p1').value;
    let p2 = document.getElementById('p2').value;
    let veg = ""
    if(p1 == p2){
        veg = "The game is a tie.";
    }
    else if ((p1 == 1 && p2 == 3 ) || (p1 == 2 && p2 == 1 ) || (p1 == 3 && p2 == 2 )){
        veg = "Player 1 win";
    }
    else{
        veg = "Player 2 win";
    }
    document.getElementById('eredmeny').innerText = veg;
}
//1 rock
//2 papper
//3 scissor