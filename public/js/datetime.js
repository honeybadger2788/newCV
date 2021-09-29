//genera la simulación de fecha y hora de la pc
var d = new Date().getDate();
//la formula getMonth devuelve valores del 0 al 11.
var m = new Date().getMonth() + 1;
var y = new Date().getFullYear();
var h = new Date().getHours()
var min = new Date().getMinutes()

document.querySelector(".datetime").innerHTML = h+":"+(min<10?"0"+min:min)+" "+d+"/"+m+"/"+y;
