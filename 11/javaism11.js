function ir(){
    let szabaly = /^[a-zA-Z]+$/;
    let text = document.getElementById('text').value;
    for (let i = 0; i < text.length; i++){ 
        if(szabaly.test(text[i])){
            document.getElementById('eredmeny').innerHTML += "</br>"+text[i];
        }
        else{
            i=text.length;
        }
    }
}