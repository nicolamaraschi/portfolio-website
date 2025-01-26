import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Aggiorna lo stato per visualizzare un UI di fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puoi registrare l'errore su un servizio di reporting
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puoi personalizzare il messaggio di errore
      return (
        <div className="container mt-5 text-center">
          <h1>Qualcosa è andato storto.</h1>
          <p>Si è verificato un errore. Per favore, riprova più tardi.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;