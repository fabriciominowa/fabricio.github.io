function teste(){
    var num = parseFloat(document.getElementById("numero").value);
    
    if (num > 0)
     alert(num + " eh Positivo");
    else
     if(num < 0)
      alert(num + " eh Negativo");
     else
      alert("Nem positivo nem negativo, nulo");
      
   }