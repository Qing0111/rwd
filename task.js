$(document).ready(function() {
    $('.showmenu').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('show');
    });

    $('.fa-heart').click(function(e){
        e.preventDefault();
        $(this).toggleClass('fa-solid');
    })
    
});