/*
 *  Visual functions
 */

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}

/*
 *  On page load
 */

var steps = [];
var stepNum = [1, 2, 3, 4, 5, 6, 99];

window.addEventListener('load', function () {
    // Assign elements to each step
    for (let i = 0; i < stepNum.length; i++) {
        let stepElements = document.querySelectorAll('[data-step="'+stepNum[i]+'"]');
        steps.push(stepElements)
    }

    // Hide all steps
    let allSteps = document.querySelectorAll('[data-step]');
    allSteps.forEach(function(element) {
        element.classList.add('hidden');
    });

    // Show first step
    steps[0].forEach(function(element) {
        element.classList.remove('hidden');
    });

});

/*
 *  Navbar
 */

function toggleSidebar() {
    let navbarContent = document.getElementById("sidebar-content");
    let content = document.querySelector(".content");
    navbarContent.classList.toggle("sidebar-open");
    content.classList.toggle("content-right");
    document.body.classList.toggle("fixed-position");
    document.getElementById("toggle-sidebar").classList.toggle("toggled");
}

/*
 *  Parallax Background
 */
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let scrollSpeed = scrollPosition / 12;
    let parallaxImage = document.getElementById("parallax-image");
    parallaxImage.style.backgroundPosition = `0px -${scrollSpeed}px`;
});

/*
 *  Popup variables and functions
 */

// Release hidden on form submission
var popupCounter = 0;
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
        // let str = "You are Now a Part of the " + numStr + " Current Mailing List Subscribers";
        let str = "Join the " + numStr + " Current Mailing List Subscribers";
        subHeader.innerHTML = str;
    } else if (popupCounter <= 3 && popup.id === 'ad-to-close-1' || popup.id === 'ad-to-close-2' || popup.id === 'ad-to-close-3') {
        console.log("check check");
        newCounter = 4;
    } else if (popupCounter <= 4 && popup.id === 'payment-form') {
        newCounter = 5;
    } 

    if (newCounter > 0) {
        popupCounter = newCounter;
        steps[newCounter].forEach(function(element) {
            element.classList.remove('hidden');
        });
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

function closeAd(ad) {
    let advert = ad.parentElement;
    advert.classList.add('hidden');
}