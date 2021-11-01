$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger, header .flex_wrapper, .links_header, .links').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('#form_id').submit(function(e) {
        e.preventDefault();
        $.fancybox.open({
            src  : '#hidden-content',
            type : 'inline',
        });
    });
});

