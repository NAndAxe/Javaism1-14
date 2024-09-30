function szamol(){
    let szam = document.getElementById('szam').value;
    let faktor = szam;
    for(let i = szam; i != 1; i--){
        faktor = faktor*(i-1); 
        console.log(faktor);
    }
    document.getElementById('eredmeny').innerText = faktor;
}