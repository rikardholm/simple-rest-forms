define(function () {
    function ResponseTranslator() {
    }

    ResponseTranslator.prototype.translate = function (jqxhr, defaultMessages) {

        var message = {};

        if (jqxhr.status === 204) {
            message.status = 'ok';
            message.content = defaultMessages.success;
        } else if (jqxhr.status === 200) {
            message.status = 'ok';
            message.content = defaultMessages.success;
        } else if (jqxhr.status === 503) {
            message.status = 'unavailable';
            message.content = defaultMessages.unavailable;
        } else {
            message.status = 'invalid';
            message.content = defaultMessages.invalid;
        }
        return message;

    }

    return new ResponseTranslator();
});
