let videoLauncher = {};
videoLauncher.launch = () => {
    $(document).ready(function () {
        $(".opening").click(() => {
            $("#anime-openings").show();
            $("#anime-endings").hide();
            $(".ending").removeClass("active")
            $(".opening").addClass("active")
        })
        $(".ending").click(() => {
            $("#anime-openings").hide();
            $("#anime-endings").show();
            $(".ending").addClass("active")
            $(".opening").removeClass("active")
        })
    });
}




export default videoLauncher;
