function szamol(){
    let jegy = document.getElementById('jegy').value;
    let jegy2 = jegy * 1;
    switch(jegy2) {
        case 5:
          document.getElementById('eredmeny').innerText = 'A';
          break;
        case 4:
            document.getElementById('eredmeny').innerText = 'B';
          break;
        case 3:
            document.getElementById('eredmeny').innerText = 'C';
            break
        case 2:
            document.getElementById('eredmeny').innerText = 'D';
            break
        case 1:
            document.getElementById('eredmeny').innerText = 'F';
            break
        default:
            document.getElementById('eredmeny').innerText = 'Helytelen input';
      }
}