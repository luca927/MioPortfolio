import React, { useState } from 'react';
import axios from 'axios';
import useReveal from '../hooks/useReveal';

export default function ContactForm() {
    useReveal();

    // 1. Stati per i campi del form
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        messaggio: ''
    });

    // 2. Stati per messaggi di successo o errore
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    // 3. Gestore del cambiamento degli input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 4. Invio del form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            // Inviamo i dati alla rotta Laravel (deve esistere nel file web.php o api.php)
            const response = await axios.post('/contatto', formData);
            
            setStatus({ type: 'success', msg: 'Messaggio inviato con successo! ✓' });
            setFormData({ nome: '', email: '', messaggio: '' }); // Reset del form
        } catch (error) {
            setStatus({ 
                type: 'error', 
                msg: error.response?.data?.message || 'Errore durante l\'invio. Riprova.' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contatto" className="reveal">
            <div className="section-header">
                <div className="section-num">04</div>
                <h2 className="section-title">Contatto</h2>
            </div>

            <div className="contact-section-inner">
                <div className="contact-left">
                    <p className="contact-intro">
                        Hai un progetto in mente? Scrivimi, rispondo solitamente entro 24 ore.
                    </p>
                    {/* Qui puoi rimettere i tuoi div contact-info-item con le icone SVG */}
                </div>

                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Nome</label>
                            <input 
                                className="form-input" 
                                type="text" 
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input 
                                className="form-input" 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Messaggio</label>
                            <textarea 
                                className="form-textarea" 
                                name="messaggio"
                                value={formData.messaggio}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary" disabled={loading} style={{width: '100%', justifyContent: 'center'}}>
                            {loading ? 'Invio in corso...' : 'Invia messaggio →'}
                        </button>

                        {status.msg && (
                            <div className={status.type === 'success' ? 'form-success' : 'form-error'} style={{display: 'block', marginTop: '10px'}}>
                                {status.msg}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}