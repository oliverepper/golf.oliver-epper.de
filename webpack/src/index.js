import "./main.scss";

/* Alle Links mit der Klasse sliding-link animieren */
$(".sliding-link").click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        event.preventDefault();
        var hash = this.hash;
        var target;
        if (hash !== "") {
            target = $(hash).offset().top;
        } else {
            target = 0;
        }
        $('html,body').animate({
            scrollTop: target
        }, '800');
        window.location.hash = hash;
    }
});