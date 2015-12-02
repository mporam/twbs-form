/**
 * Created by martapleszynska on 30/11/15.
 */

//document.getElementById('oneLabel').innerHTML = 'This one is not required'
//document.getElementsByClassName('form-group')[1].innerHTML = 'Where the is the input box?'
//document.getElementsByName('strong')[0].innerHTML = 'This one is actually required'
//document.getElementsByTagName('h4')[0].innerHTML = 'Some random text'
//box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
//border-color: #66afe9;

//$(function () {
//    $('#oneLabel').html('This one is not required')
//    $('.form-group').eq(1).html('Where the is the input box?')
//    $('[name=strong]').html('This one is actually required')
//    $('h4').first().html('Some random text')
//})
//$(function () {
//    $('#feedback-msg-one').html('This is a first feedback message')
//    $('#feedback-msg-two').html('This is a second feedback message')
//    $('#feedback-msg-three').html('This is a third feedback message')
//    $('#feedback-msg-four').html('This is a fourth feedback message')
//    $('#feedback-msg-five').html('This is a fifth feedback message')
//    $('#feedback-msg-six').html('This is a sixth feedback message')
//    $('#feedback-msg-seven').html('This is a seventh feedback message')
//    $('#feedback-msg-eight').html('This is a last feedback message')
//})
//$(function () {
//    $('.form-group').not('#button').append("<div>This is a feedback message</div>")
//
//})
$(function() {

    $('[type=email]').focus(whenInFocus)
    $('[type=email]').focusout(whenInFocus)
    $('[type=email]').keyup(whenInFocus)
    //$('[type=email]').change(whenInFocus)
    $('[type=email]').blur(changeBackground)
    $('#letters').click(clicked)

    //$('[type=email]').on("focus",whenInFocus)
    //$('[type=email]').on("blur",changeBackground)

    $('form').submit(checkIfEmpty)
    $('form').submit(triggerFocusOnEmail)
    $('form').on('marta',triggerFocusOnEmail)
    $('form').submit(submitForm)
})
function submitForm() {
    alert ('You have pressed submit button!!!')
    $('form').trigger('marta')
    return false
}
function whenInFocus() {
    var value = 'Enter your email here...'
    $('[type=email]').attr("placeholder",value)
    changeBorder()
}
function changeBorder() {
    if ($('[type=email]').val()) {
        $('[type=email]').css("box-shadow", "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(77, 255, 136,.8)")
        $('[type=email]').css("border-color", "#00802b")
    } else {
        //$('[type=email]').css("background-color", "red")
        $('[type=email]').css("box-shadow", "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(255, 102, 102,.8)")
        $('[type=email]').css("border-color", "#b30000")
    }

}
function checkIfEmpty() {
    var textType = '[type=text]'
    //var value = $(textType).val()
    if(!$(textType).val()){
        //console.log('false')
        $(textType).attr("placeholder","Enter something here")

        return false
    }
}
function clicked () {
    $('#letters').attr("value","letters only!!!")
}
function triggerFocusOnEmail() {
    $('[type=email]').trigger("focus")
}

