let script = {};

script.activeItemSystm = () => {
    $(".navbar-nav .nav-item a").click(() => {
        $('.nav-item').removeClass('active')
        $(this).closest('.nav-item').addClass('active')
    });
};
export default script;