/**
 * Created by peterwilkins on 02/12/2015.
 */



$(function () {

    $('#target').submit(function (e) {
        e.preventDefault();
        // required
        if (!$('#field1').val()) {
            $("#err1").alert('close');
            $('#field1').after(
                '<div class="alert alert-danger alert-dismissable" id="err1">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Required field' +
                '</div>');
            console.log('field1 is empty');
        }
        else {
            $("#err1").alert('close');
        }

        //Max length 8
        if ($('#field2').val().length >= 8) {
            $("#err2").alert('close');
            $('#field2').after(
                '<div class="alert alert-danger alert-dismissable" id="err2">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Max length 8' +
                '</div>');
            console.log('field2 longer than 8');
        }
        else {
            $("#err2").alert('close');
        }
        //Required - Min length 10 - Max length 25
        if ($('#field3').val().length < 10 || $('#field3').val().length > 25) {
            $("#err3").alert('close');
            $('#field3').after(
                '<div class="alert alert-danger alert-dismissable" id="err3">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Required field, Min length 10 - Max length 25' +
                '</div>');
            console.log('field3 wrong');
        }
        else {
            $("#err3").alert('close');
        }

        //Not required - Min length 10 - Max length 25
        if ($('#field4').val()) {
            if ($('#field4').val().length < 10 || $('#field4').val().length > 25) {
                $("#err4").alert('close');
                $('#field4').after(
                    '<div class="alert alert-danger alert-dismissable" id="err4">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    'Not Required field, Min length 10 - Max length 25' +
                    '</div>');
                console.log('field4 wrong');
            }
            else {
                $("#err4").alert('close');
            }
        }

        //Letters only
        var testLetters = /^[a-zA-Z]+$/;
        if ($('#field5').val()) {
            if (!testLetters.test($('#field5').val())) {
                $("#err5").alert('close');
                $('#field5').after(
                    '<div class="alert alert-danger alert-dismissable" id="err5">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    'Letters only' +
                    '</div>');
                console.log('field5 not all letters');
            }
            else {
                $("#err5").alert('close');
            }

        }
        //Required if radio is Yes
        console.log($('#radio1').prop('checked'));
        if ($('#radio1').prop('checked') && !$('#field6').val()) {
            $("#err6").alert('close');
            $('#field6').after(
                '<div class="alert alert-danger alert-dismissable" id="err6">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Required if above radio is Yes' +
                '</div>');
            console.log('radio is yes and field6 is empty');

        }
        else {
            $("#err6").alert('close');
        }
        //Valid email
        var testEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if(!testEmail.test($('#email').val())){
            $("#err7").alert('close');
            $('#email').after(
                '<div class="alert alert-danger alert-dismissable" id="err7">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                'Valid email required' +
                '</div>');
            console.log('email is invalid');
        }
        else {
            $("#err7").alert('close');
        }
        return false;
    })
})
;