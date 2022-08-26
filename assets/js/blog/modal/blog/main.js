$(function () {
    var bar = '';
    bar += '<div class="dialog is-hidden" data-in="500" data-out="700" id="video">';
        bar += '<div class="dialog is-hidden" data-in="500" data-out="700" id="video">';
        bar += '<div class="dialog-container bottom-sheet-container" data-close>';
            bar += '<div aria-labelledby="bottom-sheet-big-title" class="dialog-surface bottom-sheet-surface" role="dialog">';
                bar += '<div class="dialog-header">';
                    bar += '<h2 class="dialog-title" id="bottom-sheet-big-title">Blog Andre</h2>';
                    bar += '<button aria-label="Close dialog" class="dialog-close" type="button">×</button>';
                bar += '</div>';
                bar += '<div class="dialog-content" style="text-align: left">';
                    bar += '<p class="desk-modal">Blog Andre Dalam Masa Pembuatan</p>';
                bar += '</div>';
            bar += '</div>';
        bar += '</div>';
    bar += '</div>';

    $("#modalblog").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('modal-blogandre').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}