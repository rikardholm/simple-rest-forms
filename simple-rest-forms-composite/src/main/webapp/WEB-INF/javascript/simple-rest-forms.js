define(['jquery', 'simple-rest-forms/ResponseTranslator'], function ($, responseTranslator) {
    $(function () {
        $('form.simple-form').submit(function (event) {
            event.preventDefault();

            var form = $(event.target);

            $('.simple-form-message').empty();

            $.post(form.attr('action'), form.serialize())
                .done(function (data, text, jqxhr) {
                    handle(jqxhr);
                }).fail(function (jqxhr) {
                    handle(jqxhr);
                });

            var handle = function (jqxhr) {
                var mess = responseTranslator.translate(jqxhr, {success: 'vad bra!', invalid: 'FEL!'});
                console.log('Message: ' + mess.content);
            };
        });
        /*
         .done(function (data) {
         var message = form.find('.simple-form-message.success');

         message.html(message.data('default'));

         form.trigger('reset');

         /*
         .fail(function (data) {
         var message;

         var messageContainers = {
         error: {
         element: form.find('.system-error'),
         default: form.find('.system-error').data('default'),
         unavailable: form.find('.system-error').data('503')
         },
         invalid: {
         element: form.find('.invalid'),
         default: form.find('.invalid').data('default')
         }
         };

         if (data.status > 400) {
         message = form.find('.simple-form-message.system-error');
         message.html(message.data('default'));
         } else {
         message = form.find('.simple-form-message.i');
         message.html(message.data('default'));
         }

         if (typeof data.responseJSON === 'undefined') {

         } else {
         message.html(data.responseJSON.message);
         }
         });   */

        $('form.simple-form button.submit').click(function (event) {
            event.preventDefault();
            $(this).parents('form').submit();
        });
    });
});
