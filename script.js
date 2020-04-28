function changeNav() {
    var header = document.getElementById('header'); // ищем наш элемент header среди всего многообразия элементов
    var headerClassLists = header.classList; // получаем список CSS-классов для этого элемента
    if(headerClassLists.contains('header_open')){ // если имеется класс header_open
        headerClassLists.remove('header_open'); // то мы его удаляяем. Т. о. будем видеть стандартное, скрытое меню
    } else { // в противном случае
        headerClassLists.add('header_open'); // класс header_open добавляем. До этого меню было скрытым, сейчас - открытым.
    }
}

$(document).ready(function(){
    $window = $(window);
    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this);
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});
