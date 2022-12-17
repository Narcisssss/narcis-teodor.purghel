const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const aboutMeImage = document.querySelector('.headshot');
const information = document.querySelector('.information');

const toggleButton = () => {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

aboutMeImage.addEventListener('click', (event) => {
    aboutMeImage.classList.toggle('headshot-transition');
});

window.addEventListener('scroll', () => {
    let windowHeight = window.innerHeight;
    let revealTop = information.getBoundingClientRect().top;
    console.log(information.getBoundingClientRect().top)
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
        information.classList.add('reveal');
    } else {
        information.classList.remove('reveal');
    }
})