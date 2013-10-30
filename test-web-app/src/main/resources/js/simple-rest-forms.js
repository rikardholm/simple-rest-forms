$(function () {

    $('form.simple-form').submit(function (event) {
        event.preventDefault();

        var form = $(event.target);

        $('.simple-form-message').empty();

        $.post(form.attr('action'), form.serialize())
            .done(function (data) {
                var message = form.find('.simple-form-message.success');

                message.html(message.data('default'));

                form.trigger('reset');
            })
            .fail(function (data) {
                var message;

               if (data.status > 400) {
                    message = form.find('.simple-form-message.system-error');
                } else {
                    message = form.find('.simple-form-message.fail');
                }

                if (typeof data.responseJSON === 'undefined') {
                    message.html(message.data('default'));
                } else {
                    message.html(data.responseJSON.message);
                }
            });

    });

    $('form.simple-form button.submit').click(function (event) {
        event.preventDefault();
        $(this).parents('form').submit();
    });
});