$(document).ready(function () {
    $(".opening").click(() => {
        console.log('jai clic')
        $("#anime-openings").show();
        $("#anime-endings").hide();
    })
    $(".ending").click(() => {
        $("#anime-openings").hide();
        $("#anime-endings").show();
    })
})
