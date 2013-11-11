define(['simple-rest-forms/ResponseTranslator'], function (target) {
    describe('ResponseTranslator', function () {
        describe('The translate() function', function () {
            var successMessage = 'Success!';
            var invalidMessage = 'Invalid';
            var errorMessage = 'ERROR!!';
            var unavailableMessage = 'Unavailable atm.';

            describe('when receiving a 204 (No Content)', function () {
                var status = 204;

                it('should return status "ok"',function() {
                    var result = target.translate({status: status}, {});

                    expect(result.status).toEqual('ok');
                });

                it('should always return the default success message', function () {
                    var result = target.translate({status: status}, {success: successMessage});

                    expect(result.content).toEqual(successMessage);
                });

            });
            describe('when receiving a 200 (Ok)', function () {
                var status = 200;

                it('should return status "ok"',function() {
                    var result = target.translate({status: status}, {});

                    expect(result.status).toEqual('ok');
                });

                it('should return the default success message when the response has none', function () {
                    var result = target.translate({status: status}, {success: successMessage});

                    expect(result.content).toEqual(successMessage);
                });

            });
            describe('when receiving a 400 (Bad Request)', function () {
                var status = 400;

                it('should return status "invalid"',function() {
                    var result = target.translate({status: status}, {});

                    expect(result.status).toEqual('invalid');
                });

                it('should return the default invalid message when the response has none', function () {
                    var result = target.translate({status: status}, {invalid: invalidMessage});

                    expect(result.content).toEqual(invalidMessage);
                });
            });
            describe('when receiving a 500 (Server Error)', function () {
                var status = 500;

                it('should return status "error"',function() {
                    var result = target.translate({status: status}, {});

                    expect(result.status).toEqual('error');
                });

                it('should return the default error message when the response has none', function () {
                    var result = target.translate({status: status}, {error: errorMessage});

                    expect(result.content).toEqual(errorMessage);
                });
            });
            describe('when receiving a 503 (Service Unavailable)', function () {
                var status = 503;

                it('should return status "unavailable"',function() {
                    var result = target.translate({status: status}, {});

                    expect(result.status).toEqual('unavailable');
                });

                it('should return the default unavailable message when the response has none', function () {
                    var result = target.translate({status: status}, {unavailable: unavailableMessage});

                    expect(result.content).toEqual(unavailableMessage);
                });
            });
        });
    });
});
