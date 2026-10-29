import React, { useState } from 'react';
import axios from 'axios';
import useReveal from '../hooks/useReveal';

export default function ContactForm() {
    useReveal();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        messaggio: ''
    });

    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            const response = await axios.post('/contatto', formData);
            setStatus({ type: 'success', msg: 'Messaggio inviato con successo! ✓' });
            setFormData({ nome: '', email: '', messaggio: '' });
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
                 <div className="section-num">04 // PARLIAMO</div>
                <h2 className="section-title">Contatto & Collaborazioni</h2>
            </div>

            <div className="contact-section-inner">
                <div className="contact-left">
                    <p className="contact-intro">
                        Hai un progetto in mente o cerchi un developer motivato per il tuo team? Scrivimi, rispondo solitamente entro 24 ore.
                    </p>
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
