const images = [
    { url: 'https://afk.no/handlers/bv.ashx/i1b1e98c8-ed16-4448-a999-cec41a5e19d7/w1920/h1080/q203474/ka7140f124228/ika_mariannewahlberg_h-98.jpg', title: 'Røyken VGS', subtitle: 'Informasjonsteknologi & Medieproduksjon' },
    { url: 'https://www.tekna.no/contentassets/324cedfebd5a493aa5a7dd0c068ccfd9/htmlcss.jpg?width=1200&height=628&mode=crop', title: 'Programmering', subtitle: 'HTML, CSS, JS, GitHub' },
    { url: 'https://images.pexels.com/videos/3126361/free-video-3126361.jpg', title: 'YFF', subtitle: 'Arbeidsliv, CV, Søknad' },
    { url: 'https://motionarray.imgix.net/motion-array-1085962-Gu4cuELIpT-high_0014.jpg?w=660&q=60&fit=max&auto=format', title: 'Medieproduksjon', subtitle: 'Adobe Premiere Pro, Photoshop, After Effects' },
    { url: 'https://afk.no/handlers/bv.ashx/i4eb9212a-2bd6-4cf3-9b2c-58cf3e4bcdf8/w1920/h1080/q203480/k4834faa5ef15/ika_mariannewahlberg_h-96.jpg', title: 'Teknologiforståelse', subtitle: 'IT-Drift, Personvern, HMS' }
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
