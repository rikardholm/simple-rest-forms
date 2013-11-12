define(['jquery'], function ($) {
    function FormFacade(form) {
        this.form = form;
    }

    FormFacade.prototype.success = function (message) {
        this.form.find('.success').html(message);
    };

    FormFacade.prototype.invalid = function (message) {
        this.form.find('.invalid').html(message);
    };

    FormFacade.prototype.unavailable = function (message) {
        this.form.find('.unavailable').html(message);
    };

    FormFacade.prototype.error = function (message) {
        this.form.find('.error').html(message);
    };

    FormFacade.prototype.clear = function () {
        this.form.find('.success')
            .add('.invalid')
            .add('.unavailable')
            .add('.error')
            .empty();
    };

    FormFacade.prototype.defaultMessages = function () {
        return {
            success: this.form.find('.success').data('default'),
            invalid: this.form.find('.invalid').data('default'),
            unavailable: this.form.find('.unavailable').data('default'),
            error: this.form.find('.error').data('default')
        }
    };

    function FormFacadeCreator() {}

    FormFacadeCreator.prototype.of = function (form) {
        return new FormFacade($(form));
    };

    return new FormFacadeCreator();
});
