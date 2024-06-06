const images = [
    { url: 'img/skolebakgrunn.jpg', title: 'Røyken VGS', subtitle: 'Informasjonsteknologi & Medieproduksjon' },
    { url: 'img/programmeringbilde.jpg', title: 'Programmering', subtitle: 'HTML, CSS, JS, GitHub' },
    { url: 'img/YFFbilde.jpg', title: 'YFF', subtitle: 'Arbeidsliv, CV, HMS, Søknad' },
    { url: 'img/mediebakgrunn.jpg', title: 'Medieproduksjon', subtitle: 'Adobe Premiere Pro, Photoshop, After Effects' },
    { url: 'img/teknologiforståelsebakgrunn.jpg', title: 'Teknologiforståelse', subtitle: 'IT-Drift, Personvern, Sikkerhet' }
];

let currentIndex = 0;

function updateBackground(direction) {
    const body = document.body;
    const textBox = document.querySelector('.text-box');
    
    textBox.classList.add('hide-' + direction);
    body.classList.add('hide-' + direction);

    setTimeout(() => {
        currentIndex = direction === 'left' ? 
            (currentIndex > 0 ? currentIndex - 1 : images.length - 1) :
            (currentIndex < images.length - 1 ? currentIndex + 1 : 0);

        body.style.backgroundImage = `url(${images[currentIndex].url})`;
        document.getElementById('title').innerText = images[currentIndex].title;
        document.getElementById('subtitle').innerText = images[currentIndex].subtitle;

        textBox.classList.remove('hide-left', 'hide-right');
        body.classList.remove('hide-left', 'hide-right');
    }, 500);
}

function previousImage() {
    updateBackground('left');
}

function nextImage() {
    updateBackground('right');
}

window.onload = () => {
    document.body.style.backgroundImage = `url(${images[currentIndex].url})`;
};

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});