function szamol(){
    let hosszusag = document.getElementById('hosszusag').value;
    let szelesseg = document.getElementById('szelesseg').value;
    let magassag = document.getElementById('magassag').value;
    let surfarea = 2*(hosszusag*szelesseg + szelesseg*magassag + hosszusag*magassag);
    let volume = magassag * szelesseg * hosszusag;
    document.getElementById('eredmeny').innerText = surfarea;
    document.getElementById('eredmeny2').innerText = volume;
}