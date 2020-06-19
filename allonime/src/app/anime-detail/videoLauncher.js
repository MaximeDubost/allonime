let videoLauncher = {};
videoLauncher.tabSwitchingSystm = () => {
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
