// JavaScript Document


function probarCorreo(){
var correo=document.f.correo.value;
var expresion=new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$","i");
var siEs=expresion.test(correo);
alert(siEs);

}