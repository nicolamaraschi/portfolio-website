import React from 'react';

const CreationalPatterns = () => {
  const patterns = [
    {
      name: "Singleton 🗝️",
      intent: "Garantire che una classe abbia una sola istanza e fornire un punto di accesso globale.",
      example: "✅ Caso d'uso: Gestione di una connessione al database, configurazione dell'applicazione",
      structure: `class Database {
  private static instance: Database;
  
  private constructor() {}
  
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}`,
      pros: ["Controllo sull'istanza unica", "Accesso globale", "Inizializzazione lazy"],
      cons: ["Può introdurre accoppiamento", "Difficile testing"]
    },
    {
      name: "Factory Method 🏭",
      intent: "Delegare la creazione di oggetti a sottoclassi, mantenendo un'interfaccia comune.",
      example: "✅ Caso d'uso: Creazione di documenti (PDF/Word), generazione di UI cross-platform",
      structure: `interface Document {
  render(): void;
}

abstract class DocumentCreator {
  public abstract createDocument(): Document;
  
  public generateReport() {
    const doc = this.createDocument();
    doc.render();
  }
}`,
      pros: ["Separazione creazione/utilizzo", "Estensibilità", "Coesione"],
      cons: ["Aumento complessità", "Molte classi"]
    },
    {
      name: "Abstract Factory 🏗️",
      intent: "Creare famiglie di oggetti correlati senza specificare classi concrete.",
      example: "✅ Caso d'uso: Componenti UI per diversi OS (Windows/Mac), kit di elementi grafici",
      structure: `interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WinFactory implements GUIFactory {
  createButton() { return new WinButton() }
  createCheckbox() { return new WinCheckbox() }
}`,
      pros: ["Coerenza tra oggetti", "Isolamento concreto/astratto"],
      cons: ["Difficile aggiunta prodotti", "Rigidità"]
    },
    {
      name: "Builder 🛠️",
      intent: "Costruire oggetti complessi passo-passo separando costruzione dalla rappresentazione.",
      example: "✅ Caso d'uso: Costruzione query SQL, composizione di email complesse",
      structure: `class PizzaBuilder {
  private pizza: Pizza;
  
  constructor() { this.reset() }
  
  reset() { this.pizza = new Pizza() }
  
  addBase(base: string) { ... }
  addTopping(topping: string) { ... }
  
  getPizza() { 
    const result = this.pizza;
    this.reset();
    return result;
  }
}`,
      pros: ["Controllo processo costruttivo", "Oggetti immutabili", "Flessibilità"],
      cons: ["Overhead codice", "Complessità"]
    },
    {
      name: "Prototype 🧬",
      intent: "Creare nuovi oggetti clonando prototipi esistenti invece di crearli da zero.",
      example: "✅ Caso d'uso: Sistemi di caching, configurazioni predefinite",
      structure: `interface Prototype {
  clone(): Prototype;
}

class Shape implements Prototype {
  constructor(public color: string) {}
  
  clone() {
    return Object.create(this);
  }
}`,
      pros: ["Performance migliorate", "Evita gerarchie complesse"],
      cons: ["Clonazione profonda/shallow", "Gestione riferimenti"]
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center display-4">Design Pattern Creazionali</h1>
      <p className="lead text-center mb-5">
        Soluzioni collaudate per la creazione efficiente di oggetti
      </p>

      {patterns.map((pattern, index) => (
        <div key={index} className="card mb-4 shadow-sm">
          <div className="card-header bg-dark text-white">
            <h2 className="h4 mb-0">{pattern.name}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h3 className="h5 text-primary">Intento</h3>
                <p>{pattern.intent}</p>
                
                <h3 className="h5 text-primary mt-4">Vantaggi</h3>
                <ul className="list-group list-group-flush">
                  {pattern.pros.map((pro, i) => (
                    <li key={i} className="list-group-item">✔️ {pro}</li>
                  ))}
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h5 text-primary">Esempio Pratico</h3>
                <p>{pattern.example}</p>

                <h3 className="h5 text-primary mt-4">Struttura Base</h3>
                <pre className="bg-light p-3 rounded">
                  <code>{pattern.structure}</code>
                </pre>
              </div>
            </div>

            {pattern.cons && (
              <div className="alert alert-warning mt-4">
                <h4 className="h6">Avvertenze</h4>
                <ul className="mb-0">
                  {pattern.cons.map((con, i) => (
                    <li key={i}>⚠️ {con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreationalPatterns;