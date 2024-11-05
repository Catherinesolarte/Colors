// añadir un evento a cada div para cambiar color a negro al click
document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', () => {
      div.style.backgroundColor = 'black';
    });
  });
  