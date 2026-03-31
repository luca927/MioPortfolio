import { useEffect } from 'react';

export default function useReveal() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15, // Parte quando il 15% dell'elemento è visibile
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); // Aggiunge la classe del tuo CSS
                }
            });
        }, observerOptions);

        // Trova tutti gli elementi con classe .reveal e li osserva
        const elements = document.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}