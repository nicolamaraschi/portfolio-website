// src/pages/Contact.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Il messaggio deve contenere almeno 10 caratteri';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Rimuove l'errore quando l'utente inizia a correggere
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Invio del messaggio in corso...'
    });
    
    try {
      // In un'implementazione reale, qui si invierebbe la richiesta a un'API
      // Per questa demo, simuliamo una risposta di successo dopo un breve ritardo
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulazione di successo
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Messaggio inviato con successo! Ti risponderò al più presto.'
      });
      
      // Resetta il form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Dopo 5 secondi, rimuove il messaggio di successo
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
      
    } catch (error) {
      // Gestione errori
      setFormStatus({
        submitted: false,
        success: false,
        message: 'Si è verificato un errore nell\'invio del messaggio. Riprova più tardi.'
      });
    }
  };

  // Informazioni di contatto
  const contactInfo = [
    {
      title: "GitHub",
      description: "Scopri i miei progetti open source e contribuisci!",
      icon: '/images/github-logo.png',
      link: 'https://github.com/nicolamaraschi?tab=repositories',
      linkText: "Vai al mio GitHub"
    },
    {
      title: "LinkedIn",
      description: "Connettiti con me e scopri le mie esperienze professionali.",
      icon: '/images/linkedin-logo.png',
      link: 'https://www.linkedin.com/in/nicola-maraschi-8a5b39262/',
      linkText: "Vai al mio LinkedIn"
    }
  ];

  // FAQ
  const faqs = [
    {
      question: "Quali servizi offri?",
      answer: "Offro servizi di sviluppo web full stack, dalla progettazione di interfacce utente responsive alla creazione di API robuste e sicure."
    },
    {
      question: "Quanto costa un sito web?",
      answer: "Il costo dipende dalla complessità del progetto. Contattami con i dettagli per ricevere un preventivo personalizzato."
    },
    {
      question: "In quanto tempo realizzi un progetto?",
      answer: "I tempi variano in base alle dimensioni e alla complessità del progetto. Generalmente, un sito web semplice richiede 2-3 settimane, mentre progetti più complessi possono richiedere 1-3 mesi."
    },
    {
      question: "Lavori da remoto?",
      answer: "Sì, lavoro principalmente da remoto, ma sono disponibile per incontri di persona quando necessario, specialmente nella zona di Bologna."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contatti | Nicola Maraschi</title>
        <meta name="description" content="Contatta Nicola Maraschi per collaborazioni, progetti o informazioni" />
      </Helmet>

      <section className="contact">
        <div className="contact-container">
          <h1 className="contact-title">Contattami</h1>
          <p className="contact-subtitle">Hai un progetto in mente? Sei interessato a collaborare? Non esitare a metterti in contatto con me!</p>

          <div className="contact-content">
            <div className="contact-form-container">
              <h2>Inviami un messaggio</h2>
              
              {formStatus.submitted && (
                <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="Il tuo nome"
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="La tua email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Oggetto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Oggetto del messaggio"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Messaggio</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Il tuo messaggio"
                    rows="6"
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={formStatus.submitted && !formStatus.success}
                >
                  {formStatus.submitted && !formStatus.success ? 
                    'Invio in corso...' : 
                    'Invia messaggio'}
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div className="contact-card" key={index}>
                    <div className="card-icon">
                      <img src={info.icon} alt={info.title} className="contact-logo" />
                    </div>
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                    >
                      {info.linkText}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="contact-faq">
                <h2>Domande frequenti</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                      <h3 className="faq-question">{faq.question}</h3>
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;