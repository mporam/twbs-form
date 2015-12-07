/**
 * changes border color to red or green for specified element
 * @param   String   color     'red' for red border, 'green' for green border'
 * @param   String   element   html element selector
 */
function changeBorderColor(color, element) {
    if (color == 'red') {
        $(element).css({
            "box-shadow": "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(255, 102, 102,.8)",
            "border-color": "#b30000"
        })
    }
    if (color == 'green') {
        $(element).css({
            "box-shadow": "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(77, 255, 136,.8)",
            "border-color": "#00802b"
        })
    }
}
/**
 * removes previous message if exists and insert a new message
 * @param   String   element   html element selector
 * @param   String   message   message to display
 */
function displayMessage(element, message) {
    hideMessage(element)
    $(element).after("<p class=\"msg\">" + message + "</p>")
}

/**
 *hides existing message
 * @param   String   element   html element selector
 */
function hideMessage(element) {
    $(element).parent('.form-group').children('.msg').remove()
}
/**
 * checks the required field has and input value and changes the border appropriately and displays appropriate message
 * @param     String   element   html element selector
 * @returns   bool               false in invalid input
 */
function checkRequired(element) {
    var value = $(element).val()
    if (value) {
        changeBorderColor('green', element)
        hideMessage(element)
    } else {
        changeBorderColor('red', element)
        displayMessage(element, 'Please fill this required field')
        return false
    }
}
/**
 * check if the input has a valid length of characters and changes the border appropriately and displays appropriate message
 * @param    Integer   min        minimum valid number of characters allowed
 * @param    Integer   max        maximum valid number of characters allowed
 * @param    String    element    html element selector
 * @returns  bool                 false in invalid input
 */
function checkLength(min, max, element) {
    var inputLength = $(element).val().length
    if (inputLength > 0) {
        if (inputLength < min) {
            changeBorderColor('red', element)
            displayMessage(element, 'Not enough characters')
            return false
        } else if (inputLength > max) {
            changeBorderColor('red', element)
            displayMessage(element, 'Too many characters')
            return false
        }
        else {
            changeBorderColor('green', element)
            hideMessage(element)
        }
    }
}
/**
 * check if the input contains letters only and changes the border appropriately and displays appropriate message
 * @param    String   element    html element selector
 * @returns  bool                false if contains invalid characters
 */
function checkLetterOnly(element) {
    var lettersOnly = /^[a-zA-Z]+$/
    var inputValue = $(element).val()
    console.log(inputValue)
    if (lettersOnly.test(inputValue)) {
        changeBorderColor('green', element)
        hideMessage(element)
    } else {
        changeBorderColor('red', element)
        displayMessage(element, 'Only letters allowed!')
        return false
    }
}
/**
 * check if the input is a valid email address and changes the border appropriately and displays appropriate message
 * @param    String   element    html element selector
 * @returns  boolean             false if input is not a valid email address
 */
function checkEmail(element) {
    var emailString = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm
    var inputValue = $(element).val()
    if (emailString.test(inputValue)) {
        changeBorderColor('green', element)
        hideMessage(element)
    } else {
        changeBorderColor('red', element)
        displayMessage(element, 'This is not a valid email address!')
        return false
    }
}
$(function () {
    $('#f1').blur(function () {
        checkRequired('#f1')
    })
    $('#f2').blur(function () {
        checkLength(0, 8, '#f2')
    })
    $('#f3').blur(function () {
        if ($('#f3').val()) {
            checkLength(10, 25, '#f3')
        } else {
            checkRequired('#f3')
        }
    })
    $('#f4').blur(function () {
        if ($('#f4').val()) {
            checkLength(10, 25, '#f4')
        }
    })
    $('#f5').blur(function () {
        if ($('#f5').val()) {
            checkLetterOnly('#f5')
        }
    })
    $('#f6').blur(function () {
        if ($('[type=radio]').prop('checked')) {
            checkRequired('#f6')
        }
    })
    $('#f7').blur(function () {
        if ($('#f7').val()) {
            checkEmail('#f7')
        }
    })
    $('form').submit(function () {
        checkRequired('#f1')
        console.log(checkRequired('#f1'))

        checkLength(0, 8, '#f2')
        if ($('#f3').val()) {
            checkLength(10, 25, '#f3')
        } else {
            checkRequired('#f3')
        }
        $('#f4').blur(function () {
            if ($('#f4').val()) {
                checkLength(10, 25, '#f4')
            }
        })
        if ($('#f5').val()) {
            checkLetterOnly('#f5')
        }
        if ($('[type=radio]').prop('checked')) {
            checkRequired('#f6')
        }
        if ($('#f7').val()) {
            checkEmail('#f7')
        }

    })

})