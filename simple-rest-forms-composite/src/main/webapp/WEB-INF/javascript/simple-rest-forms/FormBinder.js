define(['jquery'], function ($) {
    function FormBinder() {
    }

    FormBinder.prototype.bind = function (form, handler) {
        var form = $(form);

        form.submit(function (event) {
            event.preventDefault();

            $.post(form.attr('action'), form.serialize())
                .done(function (data, text, jqxhr) {
                    handler(jqxhr);
                }).fail(function (jqxhr) {
                    handler(jqxhr);
                });
        });
    };

    return new FormBinder();
});
