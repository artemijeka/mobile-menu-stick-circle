(function(){
  document.addEventListener('DOMContentLoaded', function(){



    let menu__btn = document.querySelector('.menu__btn');
    let menu = document.querySelector('.menu');



    menu__btn.addEventListener('click', function() {
      menu__btn.classList.toggle('--active');
      menu.classList.toggle('--active');
    });



  });
})();