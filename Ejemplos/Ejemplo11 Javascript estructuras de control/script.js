function calcular(){       //document.forma.nombre.value=prompt("Dame el nombre","...");       //      edad();       //      promedio();                          regresion() } function edad(){ var edad=prompt("Dame la edad","..."); document.forma.edad.value=edad; if (edad>17) {        alert("Mayor de edad"); }else {        alert("Menor de edad"); } } function promedio() { var n= prompt ("Notas","..."); var i; var ac=0; var promedio; for(i=0; i
<n; i++ ) { nota=prompt("Nota " +(i+1),"..."); ac=parseInt(nota)+parseInt(ac); } promedio=ac/n; document.forma.promedio.value=promedio; }  function regresion(){ var cont=5;  do{   alert(cont);   cont--; }while(cont>=0); while(cont
  <11){   alert(++cont); } }