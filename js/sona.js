$(function () {
    var barHeight = $("#bar").outerHeight(true);
    $(window).resize(function () {
        $('#frame').height($(window).height() - barHeight);
    }).resize();
});