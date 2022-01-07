/**
 * Created by Mike on 12/28/2016.
 */

(function($){

    $(document).ready(function(){

        $('body').delegate('.nf-element', 'focusin', function(){
            $(this).parent().parent().addClass('md-focus');
        });

        $('body').delegate('.nf-element', 'focusout', function(){
            $(this).parent().parent().removeClass('md-focus');
        });

        $('body').delegate('.nf-element', 'keyup', function(){
            if( $(this).val() ){
                $(this).parent().parent().addClass('md-has-value');
            } else {
                $(this).parent().parent().removeClass('md-has-value');
            }
        })
    })

})(jQuery);