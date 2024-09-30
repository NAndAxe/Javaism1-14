function szamol(){
    let magassag = document.getElementById('magassag').value;
    let suly = document.getElementById('suly').value;
    document.getElementById('eredmeny').innerText = suly / Math.sqrt(magassag) ;
}