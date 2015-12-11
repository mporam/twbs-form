$(function() {

    $('#form').submit(function() {
        $('form').trigger('charlie')
        return false
    })

//this is a watcher
    $('form').on('charlie', function() {
            alert('congratulations everything is validated')
    })

    $('form').on('charlie', function() {
        $('#requiredError').remove()
        var requiredField = $('#requiredField').val()
        if (!requiredField) {
            $('#requiredLabel').append("<p id='requiredError'>This field is required</p>")
            console.log('if')
        }
        else {
            $('#requiredError').remove()
            console.log('else')
        }
    })

    $('form').on('charlie', function() {
        var minMaxRequiredLength = $(this).val()
        $('#minMaxRError').remove()
        if (minMaxRequiredLength.length < 10 || minMaxRequiredLength.length > 24) {
            $('#minMaxRLabel').append("<p id='minMaxRError'>Must be between 10 and 25 characters</p>")
        }
    })

    $('form').on('charlie', function() {
        $('#minMaxRequiredError').remove()
        var minMaxValidate = $(this).val()
        if (minMaxValidate.length < 1) {
            $('#minMaxRLabel').append("<p id='minMaxRequiredError'>This field is required</p>")
        }
    })

    $('form').on('charlie', function() {
            $('#requiredRadioError').remove()
            if ($('#radioYes').prop("checked")) {
                if($('#requiredRadio').val() == false) {
                    $('#requiredRadioLabel').append("<p id='requiredRadioError'>This field is required</p>")
                }
            }
    })

    $('#maxLengthEight').keyup(function() {
        var maxLengthEight = $(this).val()
        $('#lengthError').remove()
        if (maxLengthEight.length > 8) {
            $('#lengthLabel').append("<p id='lengthError'>This field cannot be more than 8 characters</p>")
        }
    })

    $('#minMaxNotRequired').keyup(function() {
        var minMaxNotRequiredLength = $(this).val()
        $('#minMaxNRError').remove()
        if (minMaxNotRequiredLength.length <10 || minMaxNotRequiredLength.length > 24) {
            $('#minMaxNRLabel').append("<p id='minMaxNRError'>Must be between 10 and 25 characters</p>")
        }
    })

    $('#lettersOnly').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) &&
            (key.charCode < 65 || key.charCode > 90)) {
            return false
        }
    })

    $('.radio1').change(function () {
        $('#requiredRadioError').remove()
        if ($('#radioYes').prop("checked")) {
            if($('#requiredRadio').val() == false) {
                $('#requiredRadioLabel').append("<p id='requiredRadioError'>This field is required</p>")
            }
        }
    })

})
