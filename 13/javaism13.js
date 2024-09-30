function ir(){
    let szam = 10;
    let szam2 = 1;
    let igen = true;
    while (igen)
    {
        szam2 = 1;
        document.getElementById('eredmeny').innerHTML += szam + ": ";
        while (szam2 <= szam)
        {
            if (szam % szam2 == 0)
            {
                document.getElementById('eredmeny').innerHTML += szam2 + ", "; 
            }
            szam2++;
        }
        szam++;
        document.getElementById('eredmeny').innerHTML += "</br>"; 
        if (szam == 30){
            igen = false;
        }
    }
}