/**
 * Created by Mike on 2/6/2017.
 */
(function ($) {
    var checkNfRadio = setInterval(check_nf_radio_exists, 100);

    function check_nf_radio_exists() {
        if (typeof nfRadio !== 'undefined') {
            clearInterval(checkNfRadio);
            nfRadio.channel('form').on('render:view', function () {
                var $activators = $('.show-hide-activator input');
                $('.show-hide.hide-first').hide();

                $activators.change(function () {
                    //for checkbox lists
                    var val = $(this).val();

                    //for single checkboxes
                    if ($(this).parent().is('.nf-field-element')) {
                        var field_id = $(this).closest('.field-wrap').data('field-id');
                        val = nfRadio.channel('fields').request('get:field', field_id).attributes.checked_calc_value;
                    }

                    if (val) {
                        if ($(this).is(':checked')) {
                            $('.' + val).show(250);
                        } else {
                            $('.' + val).hide(250);
                        }
                    }
                })
            });
        }
    }
})(jQuery);