function szamol(){
    let szam = document.getElementById('szam').value;
    let sor;
    let space = "";
    let space2 = "";
    for (let i = 0; i < szam; i++){ 
        if (i == 0){
            sor = "A".repeat(szam*1);
           // console.log(sor);
        }
        else if(i==szam-1){
            sor = "A".repeat(szam*1);
        }
        else{
            space = " ".repeat(i-1);
            space2 = " ".repeat(szam - space.length - 3);
            sor = "A" + space + "A" + space2 + "A";
        }
        console.log(sor);
        document.getElementById('felsorolas').innerHTML += "<li>" + sor +"</li>";
        sor = "";
    }
}