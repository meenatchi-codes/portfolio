// ----- Preloader ----- //
window.onload = function () {
    const loadingScreen = document.getElementById('loadingScreen');
    const content = document.getElementById('content');

    console.log('Page is loaded.');

    if (loadingScreen && content) {
        setTimeout(() => {
            console.log('Hiding spinner and showing content.');
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
        }, 2000);
    } else {
        console.error('Either loadingScreen or content was not found in the DOM.');
    }
};// --- End --- //




// ----- Fade up ----- //
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-up');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight * 0.8) {
                element.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});// --- End --- //



// ----- Nav links ----- //
const navLinks = document.querySelectorAll('#navbarContent .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarContent = document.querySelector('#navbarContent');

        if (navbarContent.classList.contains('show')) {
            navbarToggler.click();
        }

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});// --- End --- //



// ----- Animated text ----- //
const animatedTextElement = document.getElementById("animated-text");
const phrases = ["Python Developer", "Full Stack Developer!", "Front-end Developer!", "Back-end Developer!", "Web Developer!"];
let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = phrases[phraseIndex];

function typeText() {
    if (charIndex < currentPhrase.length) {
        animatedTextElement.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        animatedTextElement.textContent = currentPhrase.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        currentPhrase = phrases[phraseIndex];
        setTimeout(typeText, 500);
    }
}

typeText();// --- End --- //



// ----- Contact form ----- //
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.init("_iAmyf9lebbuef0Z0");

        let params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            to_email: "meenatchi224@gmail.com",
            subject: document.getElementById("subject").value.trim() || "No Subject",
            message: document.getElementById("message").value
        };

        emailjs.send("service_1yggm2k", "template_wiqlqlo", params)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(function (error) {
                console.error("FAILED...", error);
                alert("Failed to send message. Please try again later.");
            });
    });
});

// --- End --- //



// ----- Scroll to top button ----- //
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.getElementById("scrollTopButton").addEventListener("click", function (event) {
    event.preventDefault();
    scrollToTop();
});// --- End --- //

