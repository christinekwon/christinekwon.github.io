import $ from 'jquery';

$(document).ready(function() {
    setTimeout(() => {
        const cover = document.getElementById("cover");
        cover.style.transition = "1s";
        document.getElementById("cover").style.opacity = "0";
    }, 500);

    $("body").css('visibility', 'visible');

    let linkLocation;
    $("a").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});