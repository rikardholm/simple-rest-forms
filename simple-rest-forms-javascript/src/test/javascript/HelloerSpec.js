describe('Helloer', function() {
    it('should be able to say hello', function() {
        var helloer = new Helloer();

        var message = helloer.sayHello();

        expect(message).toEqual('Hello');
    });
});