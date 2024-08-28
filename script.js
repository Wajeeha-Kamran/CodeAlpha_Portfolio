// Function to animate text elements on scroll and when the page loads
const animateTextOnScroll = () => {
    const textElements = document.querySelectorAll('.animate-text');
    const windowHeight = window.innerHeight;

    textElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;

        if (elementPosition < windowHeight - 50) {
            element.classList.add('slide-in');
        }
    });
};

// Function to animate skills section on scroll
const animateSkillsOnScroll = () => {
    const skillsSection = document.querySelector('.container4');
    const skillsSectionPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsSectionPosition < windowHeight * 0.8) {
        skillsSection.classList.add('animate');
    }
};

// Function to scroll to the top of the page
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.container4 .items');

    const animateOnScroll = () => {
        elementsToAnimate.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (elementRect.top <= windowHeight && elementRect.bottom >= 0) {
                // Add animation class when element is in view
                element.classList.add('animate');
            } else {
                // Removing animation class if element is out of view (optional)
                element.classList.remove('animate');
            }
        });
    };

    // Initial check
    animateOnScroll();

    // Attaching scroll event listener
    window.addEventListener('scroll', animateOnScroll);
});


// Smooth scrolling and event handlers
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('nav ul li a'); 
    const moreAboutMeButtons = document.querySelectorAll('.container1 #item5 button'); 
    const moreAboutMeButton2 = document.querySelector('#education button'); 
    const learnMoreButtons = document.querySelectorAll('#card1 button, #card2 button, #card3 button, .card-content');

    const scrollToElement = (selector) => {
        const target = document.querySelector(selector);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); 
            const target = button.getAttribute('href'); 
            scrollToElement(target);
        });
    });

    moreAboutMeButtons.forEach(button => {
        button.addEventListener('click', () => {
            scrollToElement('.container2'); 
        });
    });

    moreAboutMeButton2.addEventListener('click', () => {
        scrollToElement('.container3'); 
    });

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = 'https://github.com/Wajeeha-Kamran?tab=repositories';
        });
    });

    window.addEventListener('scroll', () => {
        animateTextOnScroll();
        animateSkillsOnScroll(); 
    });

    // Initial checks for animations on page load
    animateTextOnScroll();
    animateSkillsOnScroll();

   
     const scrollToTopButton = document.querySelector('#item6 button');
     scrollToTopButton.addEventListener('click', scrollToTop);
});
