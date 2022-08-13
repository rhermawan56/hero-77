$('#start .start-close').click(function () {
    $('#start').hide()
    $(location).attr('href', '#home')
})

let heroIndex
let target
let imgTarget
let contentTarget
// $('.hero-card img').click(function (params) {
//     console.log($(this).index())
// })

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

$(function () {

})