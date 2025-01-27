import React from 'react';

const RefactoringTechniques = () => {
  const techniques = [
    {
      name: "Extract Method 🧩",
      intent: "Suddividere un metodo lungo in metodi più piccoli e focalizzati",
      example: {
        bad: "❌ Un metodo di 50 righe che fa validazione, calcoli e salvataggio",
        good: "✅ Metodi separati: validateOrder(), calculateTotal(), saveOrder()"
      },
      structure: `// Male
public class OrderProcessor {
    public void processOrder(Order order) {
        // 30 righe di validazione
        // 20 righe di calcoli
        // 10 righe di salvataggio
    }
}

// Good
public class OrderProcessor {
    public void processOrder(Order order) {
        validateOrder(order);
        calculateTotal(order);
        saveOrder(order);
    }
    
    private void validateOrder(Order order) { ... }
    private void calculateTotal(Order order) { ... }
    private void saveOrder(Order order) { ... }
}`,
      pros: ["Maggior riusabilità", "Leggibilità migliorata", "Più facile testing"],
      cons: ["Aumento numero metodi", "Overhead di chiamate"]
    },
    {
      name: "Replace Temp with Query 🔄",
      intent: "Sostituire variabili temporanee con metodi query",
      example: {
        bad: "❌ double total = price * quantity; ... // riutilizzato 5 volte",
        good: "✅ Sostituire con metodo calculateTotal()"
      },
      structure: `// Male
public class Invoice {
    public void generateInvoice(Order order) {
        double total = order.getPrice() * order.getQuantity();
        // 5 usi di 'total'...
    }
}

// Good
public class Invoice {
    public void generateInvoice(Order order) {
        // Usa calculateTotal() direttamente
    }
    
    private double calculateTotal(Order order) {
        return order.getPrice() * order.getQuantity();
    }
}`,
      pros: ["Riduce duplicazione", "Centralizza la logica"],
      cons: ["Leggero overhead prestazionale"]
    },
    {
      name: "Introduce Parameter Object 📦",
      intent: "Raggruppare parametri correlati in un oggetto dedicato",
      example: {
        bad: "❌ createUser(String name, String email, String address, String phone...)",
        good: "✅ createUser(UserData userData)"
      },
      structure: `// Male
public class UserService {
    public void createUser(String name, String email, 
                          String address, String phone) {
        // 15 parametri...
    }
}

// Good
public class UserService {
    public void createUser(UserData userData) {
        // Utilizza userData.getEmail() ecc.
    }
}

public class UserData {
    private String name;
    private String email;
    private String address;
    // ...
}`,
      pros: ["Migliora leggibilità", "Riduce accoppiamento"],
      cons: ["Crea classi aggiuntive"]
    },
    {
      name: "Replace Conditional with Polymorphism 🦄",
      intent: "Sostituire strutture condizionali con gerarchie di oggetti",
      example: {
        bad: "❌ switch(type) { case ADMIN: ... case GUEST: ... }",
        good: "✅ Classi AdminUser, GuestUser che estendono User"
      },
      structure: `// Male
public class User {
    public String getRole() {
        switch(type) {
            case ADMIN: return "Administrator";
            case GUEST: return "Guest";
            // ...
        }
    }
}

// Good
public abstract class User {
    public abstract String getRole();
}

public class AdminUser extends User {
    public String getRole() { return "Administrator"; }
}

public class GuestUser extends User {
    public String getRole() { return "Guest"; }
}`,
      pros: ["Estensibile", "Riduce complessità ciclomatica"],
      cons: ["Overhead OOP", "Possibile over-engineering"]
    },
    {
      name: "Decompose Conditional ⚖️",
      intent: "Suddividere condizioni complesse in metodi esplicativi",
      example: {
        bad: "❌ if (order.total > 100 && !customer.isPremium() && discount < 0.1)...",
        good: "✅ if (isDiscountValid(order, customer))..."
      },
      structure: `// Male
public class DiscountService {
    public boolean applyDiscount(Order order) {
        if (order.getTotal() > 100 
            && !order.getCustomer().isPremium()
            && order.getDiscount() < 0.1) {
            // Logica complessa
        }
    }
}

// Good
public class DiscountService {
    public boolean applyDiscount(Order order) {
        if (isDiscountValid(order)) {
            // Logica chiara
        }
    }
    
    private boolean isDiscountValid(Order order) {
        return order.getTotal() > 100 
               && !order.getCustomer().isPremium()
               && order.getDiscount() < 0.1;
    }
}`,
      pros: ["Leggibilità migliorata", "Logica riutilizzabile"],
      cons: ["Aumento metodi helper"]
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center display-4">Refactoring Techniques</h1>
      <p className="lead text-center mb-5">
        Principali tecniche di refactoring per codice Java
      </p>

      {techniques.map((tech, index) => (
        <div key={index} className="card mb-4 shadow-lg">
          <div className="card-header bg-primary text-white">
            <h2 className="h4 mb-0">{tech.name}</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h3 className="h5 text-dark">Intento</h3>
                <p>{tech.intent}</p>
                
                <h3 className="h5 text-dark mt-4">Esempi</h3>
                <div className="alert alert-danger">
                  <strong>Male:</strong> {tech.example.bad}
                </div>
                <div className="alert alert-success">
                  <strong>Good:</strong> {tech.example.good}
                </div>
              </div>

              <div className="col-md-6">
                <h3 className="h5 text-dark">Struttura</h3>
                <pre className="bg-light p-3 rounded">
                  <code>{tech.structure}</code>
                </pre>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <h3 className="h5 text-primary">Vantaggi</h3>
                <ul className="list-group list-group-flush">
                  {tech.pros.map((pro, i) => (
                    <li key={i} className="list-group-item">✅ {pro}</li>
                  ))}
                </ul>
              </div>

              <div className="col-md-6">
                <h3 className="h5 text-primary">Svantaggi</h3>
                <ul className="list-group list-group-flush">
                  {tech.cons.map((con, i) => (
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

export default RefactoringTechniques;