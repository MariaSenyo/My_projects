$('.problem').click(function(){
    if( $(this).hasClass('s') ){
        if( $(this).hasClass('active') ){
            $('.solution').removeClass('active');
        }else{
            $('.problem, .solution, .prob').removeClass('active');
        }
    }else{
        $('.problem, .solution, .prob').removeClass('active');

    }

    var probnum = $(this).attr('id');
    $(this).addClass('active');
    $('.' + probnum).addClass('active');
    $('.focus').removeAttr( "class" ).addClass('focus').addClass(probnum);
})

$(document).ready(function(){
    $('#p1').addClass('active');
    $('.p1').addClass('active');
})

$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, .links_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});