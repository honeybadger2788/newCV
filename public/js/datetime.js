//genera la simulación de fecha y hora de la pc

var d = new Date().getDate();
var m = new Date().getMonth();
var y = new Date().getFullYear();
var h = new Date().getHours()
var min = new Date().getMinutes()

document.querySelector(".datetime").innerHTML = h+":"+(min<10?"0"+min:min)+" "+d+"/"+m+"/"+y;
