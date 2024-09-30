function ir(){
    let masodik = true;
    for (let i = 1; i <= 100; i++){ 
        if(i % 3 == 0){
            if (masodik){
                console.log("do nothin");
                masodik = false;
            }
            else{
                document.getElementById('eredmeny').innerHTML += i + " ";
                masodik = true;
            }
        }
        else{
            document.getElementById('eredmeny').innerHTML += i + " "; 
        }
    }
}