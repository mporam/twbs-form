/**
 * Created by martapleszynska on 01/12/15.
 */
var required = '#one'

//if empty but required or invalid input
function changeBorderToRedIfInvalid(inputValue){
    if (!$(required).val()){
        $('[type=email]').css("box-shadow", "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(255, 102, 102,.8)")
        $('[type=email]').css("border-color", "#b30000")
    }
}
//if correct input
function changeBorderToGreenIfValid(inputValue){
    if (!$(required).val()){
        $('[type=email]').css("box-shadow", "inset 0 2px 2px rgba(0,0,0,.075),0 0 8px rgba(77, 255, 136,.8)")
        $('[type=email]').css("border-color", "#00802b")
    }
}
//value max length of 8
function checkLength8 (inputValue){
    if(inputValue.length <= 8) {
        return false
    }
}
//value length 10-25
function checkLength10To25 (inputValue){
    if(inputValue.length < 10 || inputValue.length > 25) {
        //do something
        return false
    }
}


   if ($(element).prop('checked')) {
       //required
   }
