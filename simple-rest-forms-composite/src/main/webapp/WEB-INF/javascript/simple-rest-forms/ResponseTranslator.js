define(function () {
    function ResponseTranslator() {
    }

    ResponseTranslator.prototype.translate = function (jqxhr, defaultMessages) {
        switch (jqxhr.status) {
            case 204:
                return {
                    status: 'ok',
                    content: defaultMessages.success
                };
            case 200:
                return {
                    status: 'ok',
                    content: defaultMessages.success
                };
            case 400:
                return {
                    status: 'invalid',
                    content: defaultMessages.invalid
                };
            case 503:
                return {
                    status: 'unavailable',
                    content: defaultMessages.unavailable
                }
        }

        return {
            status: 'error',
            content: defaultMessages.error
        }
    };

    return new ResponseTranslator();
})
;
