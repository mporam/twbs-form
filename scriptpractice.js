/*
    //document.getElementsByClassName('form-group')[0].innerHTML = "hahahahahahaha"
    $('.form-group').html("hahahahaha")

    //document.getElementsByTagName('label')[0].innerHTML = "oh laaaawdy"
    $('label').text("helloo")

    //document.getElementsByName('charlie')[0].innerHTML = "mmmmmmm honeychild"
    $('[name=charlie]').html("<p>fo sho</p>")

    //document.getElementById('feet').innerHTML = "girrl you looking fly!"
    $('#feet').html("pepepepepe")


$(function() {

    $('.form-group,.radio').not('#button').append("<p>a new pokemon has appeared</p>")

})

*/

$(function() {

    $('#form').submit(function() {
        alert('you clicked submit')
        return false;
    })

    $('#requiredField').blur(function() {
        var requiredField = $('input').val()
        if (requiredField == false) {
            $('#requiredLabel').append("<p id='requiredError'>This field is required</p>")
        }
        else {
            $('#requiredError').remove()
        }
    })

    $('#maxLengthEight').keyup(function() {
        var maxLengthEight = $('#maxLengthEight').val();
        $('#lengthError').remove()
        if (maxLengthEight.length > 8) {
                $('#lengthLabel').append("<p id='lengthError'>This field cannot be more than 8 characters</p>")
            }
    })





})

