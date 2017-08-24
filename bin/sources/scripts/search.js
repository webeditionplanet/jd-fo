document.addEventListener("DOMContentLoaded",function(){
    var searchOpen = document.querySelector('#search-open');

    searchOpen.addEventListener('click', function(){
        document.body.classList.toggle('search');
        document.querySelector('#search-text').focus();
    })

    var searchClose = document.querySelector('#search-close');

    searchClose.addEventListener('click', function(){
        document.body.classList.toggle('search');
    })
});