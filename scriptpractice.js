$(function() {
    //Letters Only: only allowing letter entry therefore no need to check on submit
    $('#lettersOnly').keypress(function (key) {
        if ((key.charCode < 97 || key.charCode > 122) &&
            (key.charCode < 65 || key.charCode > 90)) {
            return false
        }
    })
    //Not required-Min length 10- Max length 25: Not required for validation but if used must be within character limit
    $('#minMaxNotRequired').keyup(function (){
        $('#minMaxNRError').remove()
        var minMaxNotRequiredLength = $('#minMaxNotRequired').val()
        if (minMaxNotRequiredLength.length < 10 || minMaxNotRequiredLength.length > 24) {
            $('#minMaxNRLabel').append("<p id='minMaxNRError'>Must be between 10 and 25 characters</p>")
        }
    })

    $('#form').submit(function () {
        /*Defining variables and removing any current error messages*/
        var validateOne, validateTwo, validateThree, validateFour, validateFive
        $('#requiredError').remove()
        $('#minMaxRError').remove()
        $('#minMaxRequiredError').remove()
        $('#requiredRadioError').remove()
        $('#lengthError').remove()
        $('#minMaxNRError').remove()
        //Required field:
        var requiredField = $('#requiredField').val()
        if (!requiredField) {
            $('#requiredLabel').append("<p id='requiredError'>This field is required</p>")
            validateOne = false
        }
        else {
            $('#requiredError').remove()
            validateOne = true
        }
        //Required - Min length 10 - Max length 25:
        var minMaxRequiredLength = $('#minMaxRequired').val()
        if (minMaxRequiredLength.length < 10 || minMaxRequiredLength.length > 24) {
            $('#minMaxRLabel').append("<p id='minMaxRError'>Must be between 10 and 25 characters</p>")
            validateTwo = false
        }
        else {
            validateTwo = true
        }
        //Required if radio button is Yes:
        if ($('#radioYes').prop("checked")) {
            if ($('#requiredRadio').val() == false) {
                $('#requiredRadioLabel').append("<p id='requiredRadioError'>This field is required</p>")
                validateThree = false
            }
            else {
                validateThree = true
            }
        }
        //Max length 8:
        var maxLengthEight = $('#maxLengthEight').val()
        if (maxLengthEight.length > 8) {
            $('#lengthLabel').append("<p id='lengthError'>This field cannot be more than 8 characters</p>")
            validateFour = false
        }
        else {
            validateFour = true
        }
        //validates the form against the criteria and delivers relevant alert
        if (validateOne == false ||
            validateTwo == false ||
            validateThree == false ||
            validateFour == false) {
            alert('please fill in required fields correctly')
        }
        else {
            alert('you have validated successfully')
        }
        return false
    })
})
