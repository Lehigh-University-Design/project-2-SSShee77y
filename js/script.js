function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}

popupCounter = 0
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var vhToPx = window.innerWidth / 100;
    console.log(scrollPosition);

    if (popupCounter == 0) { // Cookie settings
        let popup = document.getElementById('cookie-settings');
        if (scrollPosition > popup.offsetTop - popup.clientHeight)
            document.body.style.overflow = 'hidden';
    }
});

function acceptCookies() {
    if (popupCounter < 1) {
        document.body.style.overflow = 'auto';
        popupCounter = 1;
    }
}