const intro = document.querySelector('.opening');
const logoElements = document.querySelectorAll('.theme');

const animateLogo = () => {
    logoElements.forEach((element, idx) => {
        setTimeout(() => {
            element.classList.add('active');
        }, (idx + 1) * 400);
    });

    setTimeout(() => {
        logoElements.forEach((element, idx) => {
            setTimeout(() => {
                element.classList.remove('active');
                element.classList.add('fade');
            }, (idx + 1) * 400);
        });
    }, 3000);
};


const hideIntro = () => {
    intro.style.top = '-100vh';
};


window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        animateLogo();
        setTimeout(hideIntro, 4300);
    });
});
