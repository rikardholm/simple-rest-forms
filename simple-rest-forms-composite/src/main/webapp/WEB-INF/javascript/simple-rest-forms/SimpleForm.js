define(['jquery'], function($) {
    function SimpleForm(form) {
        this.form = $(form);
    }

    SimpleForm.prototype.success = function(message) {
        this.form.children('.success').html(message);
    };

    SimpleForm.prototype.invalid = function(message) {
        this.form.children('.invalid').html(message);
    };

    SimpleForm.prototype.clear = function() {
        this.form.children('.success').add('.invalid').empty();
    };

    function SimpleFormCreator() {};

    SimpleFormCreator.prototype.for = function(form) {
        return new SimpleForm(form);
    };

    return new SimpleFormCreator();
});
