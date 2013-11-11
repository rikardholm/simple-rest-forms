requirejs.config({
    paths: { jquery: 'jquery-2.0.3.min' }
});

define(['jquery','simple-rest-forms/SimpleForm'], function ($) {
    $('form.simple-form').simpleRestForm();
});