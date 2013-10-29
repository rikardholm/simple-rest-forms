$(function() {
   $('form.simple-form button.submit').click(function() {
      $(this).parents('form').submit();
   });
});