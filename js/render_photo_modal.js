$(function(){
    $('.jsImg').on('click', function() {
        console.log("a");
        var hoge_img = $(this).attr('src');
            $('.modal_img').attr('src', hoge_img);
    }); 
});