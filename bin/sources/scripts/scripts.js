document.addEventListener("DOMContentLoaded",function(){
    var container = document.querySelector('#menuAction');

    container.addEventListener('click', function(){
        document.body.classList.toggle('menu_open');
    })

});