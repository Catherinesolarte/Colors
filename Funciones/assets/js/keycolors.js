// Variable color
let color = '';

// cambiar el color dependiendo de la tecla presionada (a,s,d,q,w,e)
document.addEventListener('keydown', function (event) {
  const keyDiv = document.getElementById('key');

  // Cambia el color del div "key" según la tecla presionada
  if (event.key === 'a') {
    color = 'pink';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 's') {
    color = 'orange';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 'd') {
    color = 'skyblue';
    keyDiv.style.backgroundColor = color;
  } else if (event.key === 'q') {
    createNewDiv('purple');
  } else if (event.key === 'w') {
    createNewDiv('gray');
  } else if (event.key === 'e') {
    createNewDiv('brown');
  }
});

// Función para crear un nuevo div con las mismas dimensiones y color específico
function createNewDiv(color) {
  const newDiv = document.createElement('div');
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  newDiv.style.border = '1px solid black';
  document.body.appendChild(newDiv);
}
