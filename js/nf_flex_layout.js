/**
 * Created by Mike on 2/6/2017.
 */
(function($){
    var checkNfRadio = setInterval(check_nf_radio_exists, 100);

    function check_nf_radio_exists(){
        if (typeof nfRadio !== 'undefined' ) {
            clearInterval(checkNfRadio);
            nfRadio.channel('form').on('render:view', function(){
                $('.flex-form [class*=flex-]').each(function(){
                    var flex = this.className.split('flex-')[1].trim();
                    $(this).parent().addClass('flex-'+flex);
                })
            });
        }
    }
})(jQuery);