requirejs.config({
    paths: { jquery: 'jquery-2.0.3' }
});

define(['simple-rest-forms/FormFacade', 'jquery'], function (formFacade, $) {
    describe('FormFacade module', function () {
        it('should create a FormFacade', function () {
            var result = formFacade.of($('<form></form>'));

            expect(result.constructor.name).toEqual('FormFacade');
        });
    });

    describe('FormFacade instance', function () {
        var target;
        var form;

        var successContainer;
        var invalidContainer;
        var unavailableContainer;
        var errorContainer;

        beforeEach(function () {
            $('#fixture').remove();

            successContainer = $('<div class="success"></div>');
            invalidContainer = $('<div class="invalid"></div>');
            unavailableContainer = $('<div class="unavailable"></div>');
            errorContainer = $('<div class="error"></div>');

            var fixture = $('<div id="fixture"></div>');
            $('body').append(fixture);

            form = $('<form></form>');
            form.append(successContainer)
                .append(invalidContainer)
                .append(unavailableContainer)
                .append(errorContainer);

            fixture.append(form);

            target = formFacade.of(form.get(0));
        });

        it('should set its success message', function () {
            target.success('All is well');

            expect(successContainer.html()).toEqual('All is well');
        });

        it('should set its invalid message',function() {
            target.invalid('You did something wrong');

            expect(invalidContainer.html()).toEqual('You did something wrong');
        });

        it('should set its unavailable message', function() {
            target.unavailable('This service is unavailable');

            expect(unavailableContainer.html()).toEqual('This service is unavailable');
        });

        it('should set its error message', function() {
            target.error('There was an error');

            expect(errorContainer.html()).toEqual('There was an error');
        });

        it('should clear messages', function() {
            successContainer.html('asdfdaf');
            invalidContainer.html('23rdfe');
            unavailableContainer.html('oiug');
            errorContainer.html('osjff');

            target.clear();

            expect(successContainer.html()).toEqual('');
            expect(invalidContainer.html()).toEqual('');
            expect(unavailableContainer.html()).toEqual('');
            expect(errorContainer.html()).toEqual('');
        });

        it('should return its default messages', function() {
            successContainer.data('default','success!');
            invalidContainer.data('default','invalid!');
            unavailableContainer.data('default','unavailable!');
            errorContainer.data('default','error!');

            var result = target.defaultMessages();

            expect(result.success).toEqual('success!');
            expect(result.invalid).toEqual('invalid!');
            expect(result.unavailable).toEqual('unavailable!');
            expect(result.error).toEqual('error!');
        });
    });
});
