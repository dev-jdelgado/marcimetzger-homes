document.addEventListener('DOMContentLoaded', () => {
    const contactButtons = document.querySelectorAll('.contact-us');
    const modal = document.getElementById('contactModal');
    const modalContent = document.getElementById('contactModalContent');
    const closeModal = document.getElementById('closeModal');

    const openModal = () => {
        modal.classList.remove('hidden');
        // Allow a tiny delay so transition works
        setTimeout(() => {
            modalContent.classList.remove('opacity-0', 'scale-95');
        }, 10);
    };

    const hideModal = () => {
        modalContent.classList.add('opacity-0', 'scale-95');
        // Wait for animation to finish
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    };

    contactButtons.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeModal.addEventListener('click', hideModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
});


let current = 1;
const total = 7;
const delay = 2000; 

setInterval(() => {
    current++;
    if (current > total) current = 1;
    document.getElementById("s" + current).checked = true;
}, delay);


const slides = document.querySelectorAll('.services-slide');
let active = document.querySelector('.services-slide.active');

slides.forEach((slide) => {
  slide.onclick = () => {
    active.classList.remove('active');
    active = slide;
    slide.classList.add('active');
  }
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});
