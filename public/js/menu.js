function openTab(tabmenu) {
    // Declare all variables
    var i, tabcontent, tabmenu;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    //ver como optimizar
    if(tabmenu != 'maquetador'&& tabmenu !='frontend'&& tabmenu !='backend' && tabmenu != 'play'&& tabmenu !='playdashboard'&& tabmenu !='sticky' && tabmenu !='planet'){     
        document.querySelector(".subMenu").style.display = "none";
    }
  
    // Show the current tab
    document.getElementById(tabmenu).style.display = "block";
  }

function showSubMenu(submenu){

    // hace invisible el contenido que estuviera abierto
    tabcontent = document.querySelectorAll(".tabcontent"); 
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // hace visibles las opciones del menu seleccionado
    document.getElementById(submenu).style.display == "block"?document.getElementById(submenu).style.display = "none":document.getElementById(submenu).style.display = "block";

    // hace invisibles las opciones del otro menu si es que se tocan en simultaneo
    tabmenu = document.querySelectorAll(".subMenu");
    console.log(tabmenu[0].id)
    for (let i = 0; i < tabmenu.length; i++) {      
      tabmenu[i].id != submenu ? tabmenu[i].style.display = "none": tabmenu[i].style.display = "block";
    }
}