import React from 'react';

const CleanCode = () => {
  const rules = [
    {
      name: "Nomi Significativi 🏷️",
      intent: "Usare nomi che rivelano esplicitamente intento e contesto",
      example: {
        bad: "❌ int d; // Cosa rappresenta 'd'?",
        good: "✅ int daysSinceLastLogin;"
      },
      structure: `// Male
class Processor {
  void p() { ... }
}

// Good
class OrderValidator {
  void validateOrder() { ... }
}`,
      pros: ["Migliora la leggibilità", "Riduce i commenti esplicativi"],
      cons: ["Nomi più lunghi", "Richiede più tempo iniziale"]
    },
    {
      name: "Funzioni Piccole 🎯",
      intent: "Metodi brevi con responsabilità unica",
      example: {
        bad: "❌ Metodo di 50 righe che valida, salva e notifica",
        good: "✅ Metodi separati: validateOrder(), saveOrder(), sendNotification()"
      },
      structure: `// Male
void processOrder(Order o) {
    // 30 righe di logica
    // che fa validazione, salvataggio,
    // calcolo tasse e invio email
}

// Good
void validateOrder(Order o) { ... }
void saveOrder(Order o) { ... }
void sendOrderConfirmation(Order o) { ... }`,
      pros: ["Più facile da testare", "Mantenibile"],
      cons: ["Aumento numero metodi"]
    },
    {
      name: "DRY (Don't Repeat Yourself) 🔁",
      intent: "Eliminare duplicazione con astrazioni",
      example: {
        bad: "❌ Stessa logica di validazione in 10 classi",
        good: "✅ Classe astratta Validator con metodo validate()"
      },
      structure: `// Male
class UserService {
    void validate(User u) { /* logica */ }
}

class OrderService {
    void validate(Order o) { /* stessa logica */ }
}

// Good
abstract class Validator<T> {
    abstract boolean validate(T entity);
}

class UserValidator extends Validator<User> { ... }`,
      pros: ["Mantenimento centralizzato", "Consistenza"],
      cons: ["Complessità aggiuntiva"]
    },
    {
      name: "Composizione sull'Ereditarietà 🧩",
      intent: "Preferire la composizione all'ereditarietà",
      example: {
        bad: "❌ Classi derivate con multiple responsabilità",
        good: "✅ Componenti riutilizzabili combinati"
      },
      structure: `// Male
class Animal {
    void eat() { ... }
}

class Dog extends Animal {
    void bark() { ... }
}

// Good
class SoundMaker {
    void makeSound(String sound) { ... }
}

class Dog {
    private SoundMaker soundMaker;
    
    void bark() {
        soundMaker.makeSound("Woof!");
    }
}`,
      pros: ["Minore accoppiamento", "Più flessibile"],
      cons: ["Più classi da gestire"]
    },
    {
      name: "Gestione Errori 🚨",
      intent: "Usare eccezioni significative",
      example: {
        bad: "❌ return -1; // Codice d'errore magico",
        good: "✅ throw new InvalidOrderException(...)"
      },
      structure: `// Male
public class PaymentProcessor {
    public int process(Payment p) {
        if (invalid) return -1;
    }
}

// Good
public class PaymentProcessor {
    public void process(Payment p) throws PaymentException {
        if (invalid) throw new InvalidPaymentException("Details...");
    }
}`,
      pros: ["Chiarezza negli errori", "Stack trace dettagliato"],
      cons: ["Overhead eccezioni"]
    },
    {
      name: "Principio Singola Responsabilità 🧘",
      intent: "Una classe = un motivo per cambiare",
      example: {
        bad: "❌ Classe che gestisce DB, logica e PDF",
        good: "✅ Classi separate: Repository, Service, Exporter"
      },
      structure: `// Male
class ReportManager {
    void generateData() { ... }
    void formatPDF() { ... }
    void saveToDB() { ... }
}

// Good
class ReportService { ... }
class PDFExporter { ... }
class ReportRepository { ... }`,
      pros: ["Modifiche isolate", "Testabilità migliorata"],
      cons: ["Più classi da gestire"]
    }
    // Aggiungi altre regole...
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center display-4">Clean Code Principles</h1>
      <p className="lead text-center mb-5">
        Regole fondamentali per codice Java mantenibile
      </p>

      {rules.map((rule, index) => (
        <div key={index} className="card mb-4 shadow-sm">
          <div className="card-header bg-dark text-white">
            <h2 className="h4 mb-0">{rule.name}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h3 className="h5 text-primary">Intento</h3>
                <p>{rule.intent}</p>
                
                <h3 className="h5 text-primary mt-4">Esempi</h3>
                <div className="alert alert-danger">
                  <strong>Male:</strong> {rule.example.bad}
                </div>
                <div className="alert alert-success">
                  <strong>Good:</strong> {rule.example.good}
                </div>
              </div>

              <div className="col-md-6">
                <h3 className="h5 text-primary">Struttura</h3>
                <pre className="bg-light p-3 rounded">
                  <code>{rule.structure}</code>
                </pre>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <h3 className="h5 text-primary">Vantaggi</h3>
                <ul className="list-group list-group-flush">
                  {rule.pros.map((pro, i) => (
                    <li key={i} className="list-group-item">✔️ {pro}</li>
                  ))}
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h5 text-primary">Svantaggi</h3>
                <ul className="list-group list-group-flush">
                  {rule.cons.map((con, i) => (
                    <li key={i} className="list-group-item">⚠️ {con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CleanCode;