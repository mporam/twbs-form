$(function() {

    var validate = true

    $('#form').submit(function() {
        $('form').trigger('charlie')
        return false
    })

    $('form').on('charlie', function() {
        var validateOne
        $('#requiredError').remove()
        var requiredField = $('#requiredField').val()
        if (!requiredField) {
            $('#requiredLabel').append("<p id='requiredError'>This field is required</p>")
            validateOne = false
        }
        else {
            $('#requiredError').remove()
            validateOne = true
        }
    })

    $('form').on('charlie', function() {
        var validateTwo
        var minMaxRequiredLength = $(this).val()
        $('#minMaxRError').remove()
        if (minMaxRequiredLength.length < 10 || minMaxRequiredLength.length > 24) {
            $('#minMaxRLabel').append("<p id='minMaxRError'>Must be between 10 and 25 characters</p>")
            validateTwo = false
        }
        else {
            validateTwo = true
        }
    })

    $('form').on('charlie', function() {
        var validateThree
        $('#minMaxRequiredError').remove()
        var minMaxValidate = $(this).val()
        if (minMaxValidate.length < 1) {
            $('#minMaxRLabel').append("<p id='minMaxRequiredError'>This field is required</p>")
        validateThree = false
        }
        else {
            validateThree = true
        }
    })

    $('form').on('charlie', function() {
        var validateFour
            $('#requiredRadioError').remove()
            if ($('#radioYes').prop("checked")) {
                if($('#requiredRadio').val() == false) {
                    $('#requiredRadioLabel').append("<p id='requiredRadioError'>This field is required</p>")
                    validateFour = false
                }
                else {
                    validateFour = true
                }
            }
    })

    $('#maxLengthEight').keyup(function() {
        var validateFive
        var maxLengthEight = $(this).val()
        $('#lengthError').remove()
        if (maxLengthEight.length > 8) {
            $('#lengthLabel').append("<p id='lengthError'>This field cannot be more than 8 characters</p>")
            validateFive = false
        }
        else {
            validateFive = true
        }
    })

    $('#minMaxNotRequired').keyup(function() {
        var validateSix
        var minMaxNotRequiredLength = $(this).val()
        $('#minMaxNRError').remove()
        if (minMaxNotRequiredLength.length <10 || minMaxNotRequiredLength.length > 24) {
            $('#minMaxNRLabel').append("<p id='minMaxNRError'>Must be between 10 and 25 characters</p>")
            validateSix = false
        }
        else {
            validateSix = true
        }
    })

    $('#lettersOnly').keypress(function(key) {
        if((key.charCode < 97 || key.charCode > 122) &&
            (key.charCode < 65 || key.charCode > 90)) {
            return false
        }
    })

    $('.radio1').change(function () {
        var validateSeven = true
        $('#requiredRadioError').remove()
        if ($('#radioYes').prop("checked")) {
            if($('#requiredRadio').val() == false) {
                $('#requiredRadioLabel').append("<p id='requiredRadioError'>This field is required</p>")
                validateSeven = false
            }
            else {
                validateSeven = true
            }
        }
    })

    //this is a watcher
    $('form').on('charlie', function() {
        if (validate == false) {
            alert('please fill in required fields correctly')
        }
        else if (validate == true) {
            alert('you have validated successfully')
        }
    })

})
