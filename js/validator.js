$(function() {
    $('#target').submit(function(e) {
        e.preventDefault()
        // required
        if (!$('#field1').val()) {
            $("#err1").alert('close')
            $('#field1').after(
                '<div class="alert alert-danger alert-dismissable err" id="err1">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                $("#label1").text() +
                '</div>')
            $('#err1').slideDown('slow')
        }
        else {
            $("#err1").slideUp('close')
        }
        //Max length 8
        if ($('#field2').val().length > 8) {
            $("#err2").alert('close')
            $('#field2').after(
                '<div class="alert alert-danger alert-dismissable err" id="err2">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                $("#label2").text() +
                '</div>')
            $('#err2').slideDown('slow')
        }
        else {
            $("#err2").slideUp('slow')
        }
        //Required - Min length 10 - Max length 25
        var length = $('#field3').val().length
        var message
        if (length < 10 || length > 25) {
            if (length < 10) {
                message = 'Min length is 10 '
            }
            if (length > 25) {
                message = 'Max length is 25 '
            }
            if (length === 0) {
                message += 'and field is required'
            }
            $("#err3").alert('close')
            $('#field3').after(
                '<div class="alert alert-danger alert-dismissable err" id="err3">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                message +
                '</div>')
            $('#err3').slideDown('slow')
        }
        else {
            $("#err3").slideUp('slow')
        }
        //Not required - Min length 10 - Max length 25
        if ($('#field4').val()) {
            length = $('#field4').val().length
            if (length < 10 || length > 25) {

                if (length < 10) {
                    message = 'Min length is 10'
                }
                if (length > 25) {
                    message = 'Max length is 25'
                }
                $("#err4").alert('close')
                $('#field4').after(
                    '<div class="alert alert-danger alert-dismissable err" id="err4">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    message +
                    '</div>')
                $('#err4').slideDown('slow')
            }
            else {
                $("#err4").slideUp('close')
            }
        }
        //Letters only
        var testLetters = /^[A-z\s]+$/
        if ($('#field5').val()) {
            if (!testLetters.test($('#field5').val())) {
                $("#err5").alert('close')
                $('#field5').after(
                    '<div class="alert alert-danger alert-dismissable err" id="err5">' +
                    '<button type="button" class="close" ' +
                    'data-dismiss="alert" aria-hidden="true">' +
                    '&times;' +
                    '</button>' +
                    $("#label5").text() +
                    '</div>')
                $('#err5').slideDown('slow')
            }
            else {
                $("#err5").slideUp('close')
            }
        }
        //Required if radio is Yes
        if ($('#radio1').prop('checked') && !$('#field6').val()) {
            $("#err6").alert('close')
            $('#field6').after(
                '<div class="alert alert-danger alert-dismissable err" id="err6">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                $("#label6").text() +
                '</div>')
            $('#err6').slideDown('slow')
        }
        else {
            $("#err6").slideUp('close')
        }
        //Valid email
        var testEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
        if (!testEmail.test($('#email').val())) {
            $("#err7").alert('close')
            $('#email').after(
                '<div class="alert alert-danger alert-dismissable err" id="err7">' +
                '<button type="button" class="close" ' +
                'data-dismiss="alert" aria-hidden="true">' +
                '&times;' +
                '</button>' +
                $("#label7").text() +
                '</div>');
            $('#err7').slideDown('slow')
        }
        else {
            $("#err7").slideUp('close')
        }
        return false
    })
})
