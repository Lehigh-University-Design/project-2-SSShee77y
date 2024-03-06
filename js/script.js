/*
 *  Visual functions
 */

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}
/*
 *  Popup variables and functions
 */

// Variables
var popupCounter = 0

// Lock / update scroll when reached a popup
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    let popup = null;

    if (popupCounter == 0) { // Cookie settings
        popup = document.getElementById('cookie-settings').parentElement;
    } else if (popupCounter == 1) { // Info form
        popup = document.getElementById('information-form').parentElement;
    } else if (popupCounter == 2) { // Mailing list
        popup = document.getElementById('mailing-list').parentElement;
    }

    if (popup != null && scrollPosition >= popup.offsetTop) {
        document.body.style.overflow = 'hidden';
    }

});

// Release scroll on form submission
function submitForm(event, popup) {
    event.preventDefault();

    let newCounter = 0;
    if (popupCounter <= 0 && popup.id === 'cookie-settings') {
        newCounter = 1;
    } else if (popupCounter <= 1 && popup.id === 'information-form') {
        newCounter = 2;
    } else if (popupCounter <= 2 && popup.id === 'mailing-list') {
        numberOfSubs++;
        newCounter = 3;
        let subHeader = document.getElementById('subscriber-count');
        let numStr = numberOfSubs.toLocaleString();
        let str = "You are Now a Part of the " + numStr + " Current Mailing List Subscribers";
        subHeader.innerHTML = str;
    }

    if (newCounter > 0) {
        document.body.style.overflow = 'auto';
        popupCounter = newCounter;
    }

    return true;
}

// Increase mailing-list subscriber count
var numberOfSubs = 62257;
function increaseSubscribers() {
    let subHeader = document.getElementById('subscriber-count');
    if (subHeader == null) {
        let randomInterval = Math.floor(Math.random() * (1800)) + 600;
        setTimeout(increaseSubscribers, randomInterval);
        return;
    }
    
    numberOfSubs++;
    let numStr = numberOfSubs.toLocaleString();
    let str = "Join the " + numStr + " Current Mailing List Subscribers";
    subHeader.innerHTML = str;
    
    let randomInterval = Math.floor(Math.random() * (1000)) + 800;
    setTimeout(increaseSubscribers, randomInterval);
}
increaseSubscribers();