window.addEventListener('scroll', function() {
    var element = document.querySelector('.container__skill');
    var position = element.getBoundingClientRect();

    // Verificar si el elemento está en la vista
    if (position.top < window.innerHeight) {
      element.classList.add('show'); // Agregar clase para mostrar
    }else{
        element.classList.remove('show');
      }
  });

  window.addEventListener('scroll', function() {
    var element = document.querySelector('.titulo_skill');
    var position = element.getBoundingClientRect();

    // Verificar si el elemento está en la vista
    if (position.top < window.innerHeight) {
      element.classList.add('show'); // Agregar clase para mostrar
    }else{
        element.classList.remove('show');
      }
  });

  window.addEventListener('scroll', function() {
    var element = document.querySelector('.formacion__academica');
    var position = element.getBoundingClientRect();

    // Verificar si el elemento está en la vista
    if (position.top < window.innerHeight) {
      element.classList.add('show'); // Agregar clase para mostrar
    }
  });