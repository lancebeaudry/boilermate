var app = angular.module("MyApp", ['ui.bootstrap']);


$(document).ready(function () {
    'use strict';
    //Form Succes/Fail Update
    $('#notify').click(function (e) {
        
        //Stop form submission & check the validation
        e.preventDefault();
        
        $.post("./php/form.php", $("#email-form").serialize(), function (result) {
 //Check the result set from contact.php file.
            if (result == 'sent') {
 //If the email is sent successfully, remove the submit button
                $('#submit-area').remove();
 //Display the success message
                $('#success-form').fadeIn(500);
            } else {
 //Display the error message
                $('#fail-form').fadeIn(500);
 // Enable the submit button again
                $('#notify').removeAttr('disabled').attr('value', 'Retry');
            }
        });
    });
    //Nav Shadow On Scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $('.navbar-collapse, .navbar-inverse').fadeIn('slow', function () {
                $(this).addClass('box-shadow');
            });
        }
    });
});