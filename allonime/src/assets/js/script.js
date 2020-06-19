$(document).ready(function () {
    console.log("mashalah")
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
