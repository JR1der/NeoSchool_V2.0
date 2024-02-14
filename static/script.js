let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currScrollPos = window.pageYOffset;
    if (prevScrollPos < currScrollPos) {
        document.querySelector("header").style.top = "0px";
    } else {
        document.querySelector("header").style.top = "-76px";
    }
    prevScrollPos = currScrollPos;
}