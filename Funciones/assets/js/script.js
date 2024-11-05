// función cambiar el color al click 
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }
  
  // obtengo el div con Id y añado un evento al hacer click
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
  });
  
  //añado un EventListener al click cambie el borde
  document.getElementById("ele1").addEventListener("click", function() {
    this.style.border = "2px dashed #ff6347"; /* Borde con líneas entrecortadas */
  });