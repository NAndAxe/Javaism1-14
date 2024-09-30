function szamol(){
    let szam = document.getElementById('szam').value;
    if ((szam % 5 == 0) && (szam % 3 == 0)){
        document.getElementById('eredmeny').innerHTML += "fizzbuzz,"
    }
    else if (szam % 3 == 0){
        document.getElementById('eredmeny').innerHTML += "fizz,"
    }
    else if (szam % 5 == 0){
        document.getElementById('eredmeny').innerHTML += "buzz,"
    }
    else{
        document.getElementById('eredmeny').innerHTML += szam + ",";
    }
}