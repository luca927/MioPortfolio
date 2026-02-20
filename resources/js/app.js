import './bootstrap';

// ── Mobile menu ──
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}
window.toggleMenu = toggleMenu; // rende la funzione accessibile dall'HTML (onclick="toggleMenu()")

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── Skill bar animation ──
// FIX: querySelectorAll('.skill-fill') non '.skill-bar'
// FIX: osserviamo '#skills' non '.skills'
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                bar.style.width = bar.dataset.width + '%';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('#skills').forEach(el => skillObserver.observe(el));

// ── Form validation (client-side) ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        const nome      = document.getElementById('nome');
        const email     = document.getElementById('email');
        const messaggio = document.getElementById('messaggio');

        // FIX: classe corretta dal blade è 'form-error', non 'error'
        document.querySelectorAll('.form-error').forEach(el => el.style.display = 'none');

        if (!nome.value.trim()) {
            document.getElementById('err-nome').style.display = 'block';
            valid = false;
        }
        if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            document.getElementById('err-email').style.display = 'block';
            valid = false;
        }
        if (!messaggio.value.trim()) {
            document.getElementById('err-messaggio').style.display = 'block';
            valid = false;
        }

        if (valid) {
            document.getElementById('formSuccess').style.display = 'block';
            nome.value = '';
            email.value = '';
            messaggio.value = '';
        }
    });
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = ''; // FIX: era scritto 'curent' (typo)
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 80) current = section.id;
    });
    // FIX: era '.nav-link', la classe corretta è '.nav-links a'
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
    });
});