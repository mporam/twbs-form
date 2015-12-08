/**
 * Created by martapleszynska on 04/12/15.
 */
function crazyButton() {
    var x = Math.round(Math.random() * 150)
    var y = Math.round(Math.random() * 150)
    $('[type=submit]').css("position", "fixed")
    $('[type=submit]').css("left", x+80)
    $('[type=submit]').css("top", y+34)
}
$(function () {
    $('[type=submit]').hover(function () {
        crazyButton()
    })
    $('form').submit(function () {
            //console.log('start')
            //var timer = setInterval(function() {
            //        console.log('interval')
            //        $('[type=submit]').fadeOut(1000, function() {
            //            $('[type=submit]').fadeIn(1000)
            //        })
            //
            //    }
            //    ,3000);
            //
            //setTimeout(function(){
            //    console.log('timeout')
            //    clearInterval(timer)
            //}, 12500)
            return false
        }
    )
})