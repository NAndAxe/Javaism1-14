function szamol(){
    let szam = document.getElementById('szam').value;
    let szamjegyek_osszege = 1;
    console.log(szam.length);
    for (let i = szam.length; i !=0; i--){
        let szam2 = parseInt(szam[i-1]);
        szamjegyek_osszege += szam2;
        //console.log(szamjegyek_osszege);
    }
    console.log(szamjegyek_osszege);
    document.getElementById('eredmeny').innerText = szamjegyek_osszege / szam.length;
}