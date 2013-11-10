requirejs.config({
    paths: { jquery: 'jquery-2.0.3.min' }
});

define(['simple-rest-forms/SimpleForm', 'jquery'], function (simpleFormCreator, $) {
    describe('SimpleForm module', function () {
        it('should create a SimpleForm', function () {
            var result = simpleFormCreator.for();

            expect(result.constructor.name).toEqual('SimpleForm');
        });
    });

    describe('SimpleForm instance', function () {
        var target = simpleFormCreator.for();
        var form;

        beforeEach(function () {
            $('#fixture').remove();
            var fixture = $('<div id="fixture"></div>');
            $('body').append(fixture);

            form = $('<form></form>');
            fixture.append(form);

            target = simpleFormCreator.for(form.get(0));
        });

        afterEach(function() {
            $('#fixture').remove();
        });

        it('should set success message', function () {
            var successContainer = $('<div class="success"></div>');
            form.append(successContainer);

            target.success('All is well');

            expect(successContainer.html()).toEqual('All is well');
        });

        it('should set invalid message',function() {
            var invalidContainer = $('<div class="invalid"></div>');
            form.append(invalidContainer);

            target.invalid('You did something wrong');

            expect(invalidContainer.html()).toEqual('You did something wrong');
        });

        it('should clear messages', function() {
            var successContainer = $('<div class="success">success</div>');
            var invalidContainer = $('<div class="invalid">invalid</div>');
            form.append(successContainer);
            form.append(invalidContainer);

            target.clear();

            expect(successContainer.html()).toEqual('');
            expect(invalidContainer.html()).toEqual('');
        });
    });
});
