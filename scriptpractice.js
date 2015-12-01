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
        $('form').trigger('charlie')
        return false;
    })

//this is a watcher
    $('form').on('charlie', function() {
        alert('you clicked submit')
        $('#notRequired').trigger('focus')
        return false;
    })

    $('#requiredField').blur(function() {
        var requiredField = $('#requiredField').val()
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

    $('#minMaxRequired').keyup(function() {
        var minMaxRequiredLength = $('#minMaxRequired').val();
        $('#minMaxRError').remove()
        if (minMaxRequiredLength.length < 10 || minMaxRequiredLength.length > 24) {
            $('#minMaxRLabel').append("<p id='minMaxRError'>Must be between 10 and 25 characters</p>")
        }
    })

    $('#minMaxRequired').blur(function() {

        var minMaxValidate = $('#minMaxRequired').val()
        if (minMaxValidate == false) {
            $('#minMaxRLabel').append("<p id='minMaxRequiredError'>This field is required</p>")
        }
        else {
            $('#minMaxRequiredError').remove()
        }
    })



})

