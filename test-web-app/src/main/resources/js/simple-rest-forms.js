$(function () {

    $('form.simple-form').submit(function (event) {
        event.preventDefault();

        var form = $(event.target);

        $.post(form.attr('action'), form.serialize())
            .done(function (data) {
                var message = form.find('.success');

                message.html(message.data('default'));
            })
            .fail(function (data) {
                var message;

                if (data.status > 400) {
                    message = form.find('.system-error');

                } else {
                    message = form.find('.fail');
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