function szamol(){
    let ev = document.getElementById('ev').value;
    if (ev % 4 == 0){
        document.getElementById('eredmeny').innerText = 'Leap';
    }
    else{
        document.getElementById('eredmeny').innerText = 'Not Leap';
    }
}