$(document).ready(() => {
    $(".nav-item").click(() => {
        console.log(this)
        $("nav-item a").removeClass("active")
        $(this).addClass("active")
    })

    $("#anime-openings").click(() => {
        if ($(".nav-item a").hasClass("active")) {
            $("#anime-openings").show()
        } else {
            $("#anime-openings").hide()
        }
    })
})