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
        var field = $('input').val()
        if (field == false) {
            $('#requiredLabel').append("<p id='requiredError'>a new pokemon has appeared</p>")
        }
        else {
            $('#requiredError').remove()

        }
    })



})

