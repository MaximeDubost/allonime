let videoLauncher = {};
videoLauncher.launch = () => {
    $(document).ready(function () {
        $(".opening").click(() => {
            $("#anime-openings").show();
            $("#anime-endings").hide();
        })
        $(".ending").click(() => {
            $("#anime-openings").hide();
            $("#anime-endings").show();
        })
    });
}




export default videoLauncher;
