if ( $('.panel-heading').length ) {

    $('.panel-heading').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.preventDefault();
            e.stopPropagation();
        }
    });
}
