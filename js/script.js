function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}

popupCounter = 0
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var vhToPx = window.innerWidth / 100;
    console.log(scrollPosition);

    if (popupCounter == 0) { // Cookie settings
        let popup = document.getElementById('cookie-settings').parentElement;
        if (scrollPosition >= popup.offsetTop) {
            popup.classList.add('fixed-popup');
            document.body.style.overflow = 'hidden';
        }
    } else if (popupCounter == 1) { // Info form
        let popup = document.getElementById('information-form').parentElement;
        if (scrollPosition >= popup.offsetTop) {
            popup.classList.add('fixed-popup');
            document.body.style.overflow = 'hidden';
        }
    }
});

function acceptCookies() {
    if (popupCounter <= 0) { // Cookie settings
        let popup = document.getElementById('cookie-settings');
        popup.classList.remove('fixed-popup');
        document.body.style.overflow = 'auto';
        popupCounter = 1;
    } 
}

function submitForm(event) {
    event.preventDefault();

    if (popupCounter <= 1) { // Info form
        let popup = document.getElementById('information-form');
        popup.classList.remove('fixed-popup');
        document.body.style.overflow = 'auto';
        popupCounter = 2;
    }
    return true;
}