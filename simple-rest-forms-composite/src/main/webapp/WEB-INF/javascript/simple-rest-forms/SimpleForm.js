define(['jquery', 'simple-rest-forms/ResponseTranslator', 'simple-rest-forms/FormBinder','simple-rest-forms/FormFacade'], function ($, responseTranslator, formBinder, formFacade) {
    (function ($) {

        $.fn.simpleRestForm = function () {
            return this.each(function () {
                var form = formFacade.of($(this));

                formBinder.bind(this, function (jqxhr) {
                    var message = responseTranslator.translate(jqxhr, form.defaultMessages());

                    switch (message.status) {
                        case 'ok':
                            form.success(message.content);
                            break;
                        case 'invalid':
                            form.invalid(message.content);
                            break;
                        case 'unavailable':
                            form.unavailable(message.content);
                            break;
                        case 'error':
                            form.error(message.content);
                            break;
                        default:
                            form.error(message.content);
                    }
                });
            })
        }
    }($));

    return {};
});
