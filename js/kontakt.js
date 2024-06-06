document.addEventListener('DOMContentLoaded', (event) => {
    const phoneNumberElement = document.getElementById('phone-number');
    const modal = document.getElementById('call-modal');
    const span = document.getElementsByClassName('close')[0];
    const confirmCallButton = document.getElementById('confirm-call');
    const cancelCallButton = document.getElementById('cancel-call');
    const backToTopButton = document.getElementById('back-to-top');
    const form = document.getElementById('contact-form');

    const contactTitle = "Kontakt meg";
    const contactAddress = "Adresse: Jon Leiras vei 30, 3440 Røyken";
    
    function typeWriterEffect(element, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeWriterEffect(document.getElementById('contact-title'), contactTitle, 100);
    setTimeout(() => {
        typeWriterEffect(document.getElementById('contact-address'), contactAddress, 100);
    }, contactTitle.length * 100 + 500);

    phoneNumberElement.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmCallButton.addEventListener('click', () => {
        alert('Ringer ' + phoneNumberElement.innerText);
        modal.style.display = 'none';
    });

    cancelCallButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

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

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Melding sendt!');
        form.reset();
    });
});
