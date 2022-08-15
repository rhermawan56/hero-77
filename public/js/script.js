$('#start .start-close').click(function () {
    $('#start').hide()
    $(location).attr('href', '#home')
})

let heroIndex = null
let target = null
let imgTarget = null
let contentTarget = null

$(".f-index").hover(function () {
    heroIndex = $(".f-index").index(this)

    const content = document.getElementsByClassName('content')[heroIndex]
    const img = document.getElementsByClassName('hero-img')[heroIndex]
    target = document.getElementsByClassName('hero-card')[heroIndex]

    imgTarget = $(img).attr('src')
    contentTarget = $(content).html()
    $(target).addClass('hover-class')
})

$(".f-index").mouseout(function () {
    heroIndex = $(".f-index").index(this)
    console.log(heroIndex)
    target = document.getElementsByClassName('hero-card')[heroIndex]
    $(target).removeClass('hover-class')
})

$(".f-index").click(function () {
    $('#show').show()
    $('#content').html(contentTarget)
    $('#image').attr('src', imgTarget)
})

$('#close-show').click(function () {
    $('#show').hide()
})
 
let val_text
let lent_text
let notice

$('#content_form').on('input', function () {

    val_text = $(this).val()
    lent_text = val_text.length

})


$('#content_form').keypress(function () {

    if (lent_text >= 500) {
        notice = "<p class='mb-0'>Sejarah singkat maximum 500 character</p>"
        $('#notice_form').html(notice)
        $('#notice_form').show()
        setTimeout(function () {
            $('#notice_form').hide()
        }, 5000)
        return false
    } else {
        return true
    }

});

// $('#mode').click(function () {
//     $('body').css('background-color','black')
// })

$(function () {
    $('#start').show()
})