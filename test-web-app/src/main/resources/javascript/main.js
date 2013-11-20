requirejs.config({
    paths: {
        jquery: 'jquery-2.0.3.min',
        'simple-rest-forms/SimpleForm': 'simple-rest-forms/SimpleForm-built'
    }
});

define(['jquery', 'simple-rest-forms/SimpleForm'], function ($) {
    $('form.simple-form').simpleRestForm();
});