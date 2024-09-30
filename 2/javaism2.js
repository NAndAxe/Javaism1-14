function szamol(){
    let ora = document.getElementById('ora').value;
    let perc = document.getElementById('perc').value;
    let mp = document.getElementById('mp').value;
    let masodperc_bol = 86400;
    let masodperc_minus = ora*3600 + perc * 60 + mp*1;
    console.log(masodperc_minus);
    document.getElementById('eredmeny').innerText = masodperc_bol - masodperc_minus;
}