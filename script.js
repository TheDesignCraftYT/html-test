window.onscroll = function () {
    onScroll()
};

function onScroll() {
    closeNav();
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("jump-to-top").style.opacity = 100;
    } else {
        document.getElementById("jump-to-top").style.opacity = 0;
    }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}