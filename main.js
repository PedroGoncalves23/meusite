document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var navbarToggler = document.querySelector('.navbar-toggler');

  navbarToggler.addEventListener('click', function () {
    header.classList.toggle('navbar-opened'); /* Adicione ou remova a classe 'navbar-opened' quando o botão de navegação for clicado */

    if (header.classList.contains('navbar-opened')) {
        var div = document.querySelector('.collapse');
        div.style.display = 'block';
      } else {
        var div = document.querySelector('.collapse');
        div.style.display = 'none';
      }
  });


  
  document.addEventListener('click', function (event) {
    // Verifica se o clique ocorreu fora do menu
    var isClickInsideMenu = header.contains(event.target);
    var isClickInsideToggler = navbarToggler.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideToggler) {
      header.classList.remove('navbar-opened'); // Fecha o menu
      var div = document.querySelector('.collapse');
      div.style.display = 'none';
    }
});
}); 

 