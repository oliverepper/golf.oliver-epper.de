import "./main.scss";
// import "bootstrap";
import "bootstrap/js/dist/collapse";

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

/* Burger Menü schließen, wenn auf einen Link geklickt wurde */
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// History über den BS Scrollspy updaten
$(window).on('activate.bs.scrollspy', function (e) {
    history.replaceState({}, "", $('.nav-item .active').attr("href"));
});