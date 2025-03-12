// src/pages/BlogPost.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import OptimizedImage from '../components/OptimizedImage';
import '../styles/BlogPost.css';

// Mock data - Da sostituire con dati reali da un CMS o API
const blogPosts = [
  {
    id: 1,
    title: "I principi del Clean Code applicati al Web Development",
    slug: "principi-clean-code-web-development",
    excerpt: "Scopri come applicare i principi di Clean Code di Robert C. Martin nello sviluppo web moderno per creare codice più manutenibile.",
    category: "Clean Code",
    date: "2023-12-10",
    author: "Nicola Maraschi",
    image: "/images/blog/clean-code.jpg",
    webpImage: "/images/blog/clean-code.webp",
    readTime: 8,
    content: `
      <h2>Introduzione ai principi di Clean Code</h2>
      <p>Robert C. Martin, noto anche come "Uncle Bob", ha introdotto i principi di Clean Code nel suo libro omonimo, definendo linee guida fondamentali per scrivere codice leggibile e manutenibile. Questi principi, sebbene originariamente concepiti per la programmazione in generale, possono essere applicati con grande efficacia anche nello sviluppo web moderno.</p>
      
      <h2>Perché applicare il Clean Code nel Web Development?</h2>
      <p>Il web development moderno è caratterizzato da framework e librerie che evolvono rapidamente, team di sviluppo distribuiti e progetti che devono essere mantenuti per anni. In questo contesto, scrivere codice pulito diventa fondamentale per:</p>
      
      <ul>
        <li>Facilitare la collaborazione tra sviluppatori</li>
        <li>Ridurre il tempo necessario per introdurre nuovi membri nel team</li>
        <li>Minimizzare i bug e semplificare il debug</li>
        <li>Rendere più agevoli future modifiche e aggiornamenti</li>
      </ul>
      
      <h2>1. Nomi significativi</h2>
      <p>Uno dei principi più importanti del Clean Code è l'uso di nomi chiari e descrittivi per variabili, funzioni, classi e altri elementi del codice. Questo è particolarmente importante in JavaScript, un linguaggio con tipizzazione debole.</p>
      
      <pre><code>
      // Male
      const x = users.filter(u => u.a > 5);
      
      // Good
      const activeUsers = users.filter(user => user.activityScore > 5);
      </code></pre>
      
      <h2>2. Funzioni piccole e focalizzate</h2>
      <p>Nel web development, è facile finire con componenti React o Vue enormi che gestiscono troppe responsabilità. Seguendo il principio delle funzioni piccole, dovresti:</p>
      
      <pre><code>
      // Male
      function UserProfile() {
        // 100 righe di codice che gestiscono:
        // - Caricamento dati utente
        // - Visualizzazione profilo
        // - Modifica profilo
        // - Gestione errori
        // - Navigazione
      }
      
      // Good
      function UserProfile() {
        const { user, isLoading, error } = useUserData();
        
        if (isLoading) return <LoadingSpinner />;
        if (error) return <ErrorMessage error={error} />;
        
        return <ProfileDisplay user={user} />;
      }
      </code></pre>
      
      <h2>3. DRY (Don't Repeat Yourself)</h2>
      <p>La duplicazione del codice è un problema comune nei progetti web, specialmente quando si lavora con CSS o logica di UI ripetitiva. Applicare il principio DRY significa creare componenti riutilizzabili, utility functions e astrazioni per eliminare la duplicazione.</p>
      
      <h2>4. Gestione degli errori</h2>
      <p>Nel web development, la gestione degli errori spesso viene trascurata o gestita in modo inconsistente. Un approccio Clean Code prevede:</p>
      
      <ul>
        <li>Gestione centralizzata degli errori API</li>
        <li>Messaggi di errore chiari e informativi per gli utenti</li>
        <li>Logging appropriato per il debugging</li>
      </ul>
      
      <h2>5. Commenti significativi</h2>
      <p>Nel Clean Code, il codice dovrebbe essere autoesplicativo, ma i commenti possono essere utili quando spiegano il "perché" dietro una decisione, non il "cosa" o il "come". Nel web development, i commenti sono particolarmente utili per:</p>
      
      <ul>
        <li>Spiegare hack CSS non ovvi</li>
        <li>Documentare decisioni di accessibilità</li>
        <li>Chiarire logica di business complessa</li>
      </ul>
      
      <h2>Conclusioni</h2>
      <p>Applicare i principi del Clean Code nel web development moderno può sembrare inizialmente più dispendioso in termini di tempo, ma porta a vantaggi significativi nella manutenibilità e nella qualità del codice nel lungo periodo. Come sviluppatori web, dovremmo sempre aspirare a scrivere codice che sia facile da leggere, comprendere e modificare, non solo per noi stessi ma anche per gli altri membri del team e per i futuri manutentori del progetto.</p>
    `,
    tags: ["Clean Code", "Web Development", "JavaScript", "Best Practices"]
  },
  {
    id: 2,
    title: "React vs Angular: quale scegliere nel 2024?",
    slug: "react-vs-angular-2024",
    excerpt: "Un'analisi approfondita dei pro e contro di React e Angular per aiutarti a scegliere il framework giusto per il tuo prossimo progetto.",
    category: "Frontend",
    date: "2024-01-15",
    author: "Nicola Maraschi",
    image: "/images/blog/react-angular.jpg",
    webpImage: "/images/blog/react-angular.webp",
    readTime: 10,
    content: `
      <h2>Introduzione al confronto React vs Angular</h2>
      <p>La scelta tra React e Angular rimane una delle decisioni più importanti quando si inizia un nuovo progetto frontend. Entrambe le tecnologie continuano ad evolvere e hanno conquistato una significativa quota di mercato. In questo articolo, analizzeremo i pro e contro di ciascuna per il 2024.</p>
      
      <h2>Panoramica: React nel 2024</h2>
      <p>React, mantenuto da Facebook, è una libreria JavaScript per la costruzione di interfacce utente. Nel 2024, React continua a godere di enorme popolarità grazie a:</p>
      
      <ul>
        <li>Un ecosistema maturo con migliaia di librerie di terze parti</li>
        <li>Supporto completo per i React Hooks e la Concurrent Mode</li>
        <li>Miglioramenti significativi in React Server Components</li>
        <li>Integrazione più profonda con framework come Next.js e Remix</li>
      </ul>
      
      <h2>Panoramica: Angular nel 2024</h2>
      <p>Angular, supportato da Google, è un framework completo per lo sviluppo di applicazioni web. Nel 2024, Angular offre:</p>
      
      <ul>
        <li>Architettura completamente modulare</li>
        <li>Miglioramenti significativi nelle prestazioni con Ivy</li>
        <li>Strumenti CLI potenti e completi</li>
        <li>Supporto integrato per TypeScript</li>
        <li>Funzionalità avanzate di testing</li>
      </ul>
      
      <h2>Confronto delle prestazioni</h2>
      <p>Le prestazioni di entrambe le tecnologie sono migliorate significativamente. React offre una maggiore flessibilità con il Virtual DOM, mentre Angular ha fatto progressi notevoli con il compilatore Ivy. In generale:</p>
      
      <ul>
        <li>React tende ad avere bundle più leggeri per applicazioni semplici</li>
        <li>Angular offre ottimizzazioni migliori per applicazioni enterprise complesse</li>
        <li>React ha tempi di avvio più rapidi</li>
        <li>Angular può offrire migliori prestazioni a runtime dopo l'inizializzazione</li>
      </ul>
      
      <h2>Curva di apprendimento</h2>
      <p>La curva di apprendimento rimane uno dei principali fattori di differenziazione:</p>
      
      <ul>
        <li>React è più facile da imparare inizialmente, ma può diventare complesso quando si devono prendere decisioni sull'architettura</li>
        <li>Angular ha una curva di apprendimento più ripida all'inizio, ma offre linee guida chiare su come strutturare le applicazioni</li>
      </ul>
      
      <h2>Casi d'uso ideali</h2>
      
      <h3>React è ideale per:</h3>
      <ul>
        <li>Startup che hanno bisogno di iterare rapidamente</li>
        <li>Applicazioni con interfacce utente dinamiche e complesse</li>
        <li>Team con forte esperienza JavaScript che preferiscono libertà architettonica</li>
        <li>Progetti che richiedono rendering lato server con Next.js o Remix</li>
      </ul>
      
      <h3>Angular è ideale per:</h3>
      <ul>
        <li>Applicazioni enterprise di grandi dimensioni</li>
        <li>Team che preferiscono convenzioni e strutture stabilite</li>
        <li>Progetti che richiedono una forte tipizzazione con TypeScript</li>
        <li>Applicazioni con requisiti complessi di form e validazione</li>
      </ul>
      
      <h2>Tendenze del mercato del lavoro</h2>
      <p>Nel 2024, entrambe le tecnologie continuano ad avere una forte domanda sul mercato del lavoro:</p>
      
      <ul>
        <li>React ha più posizioni aperte, specialmente nelle startup e nelle aziende di medie dimensioni</li>
        <li>Angular è particolarmente richiesto nelle grandi aziende e nel settore enterprise</li>
        <li>I salari sono generalmente simili, con un leggero vantaggio per gli sviluppatori React in alcuni mercati</li>
      </ul>
      
      <h2>Conclusioni</h2>
      <p>La scelta tra React e Angular nel 2024 dipende principalmente da:</p>
      
      <ul>
        <li>La complessità e la scala del tuo progetto</li>
        <li>Le competenze esistenti nel tuo team</li>
        <li>Le preferenze per quanto riguarda libertà vs struttura</li>
        <li>Requisiti specifici dell'applicazione</li>
      </ul>
      
      <p>Entrambe le tecnologie sono mature, ben supportate e capaci di gestire applicazioni moderne e complesse. Non esiste una scelta universalmente "migliore" - la decisione dovrebbe essere basata sulle esigenze specifiche del tuo progetto e del tuo team.</p>
    `,
    tags: ["React", "Angular", "Frontend", "JavaScript", "Framework"]
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    // Simulazione di una chiamata API
    setTimeout(() => {
      const foundPost = blogPosts.find(post => post.slug === slug);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Trova post correlati in base alla categoria
        const related = blogPosts
          .filter(p => p.id !== foundPost.id && (
            p.category === foundPost.category || 
            p.tags.some(tag => foundPost.tags.includes(tag))
          ))
          .slice(0, 2);
        
        setRelatedPosts(related);
      }
      
      setLoading(false);
    }, 500);
  }, [slug]);
  
  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="spinner"></div>
        <p>Caricamento dell'articolo...</p>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Articolo non trovato</h2>
        <p>L'articolo che stai cercando non esiste o è stato rimosso.</p>
        <Link to="/blog" className="back-to-blog">Torna al blog</Link>
      </div>
    );
  }
  
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>{post.title} | Nicola Maraschi Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      
      <div className="blog-post-header">
        <Link to="/blog" className="back-to-blog">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Torna al blog
        </Link>
        
        <div className="post-meta">
          <span className="post-category">{post.category}</span>
          <span className="post-date">
            {new Date(post.date).toLocaleDateString('it-IT', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <span className="read-time">{post.readTime} min di lettura</span>
        </div>
        
        <h1 className="post-title">{post.title}</h1>
        
        <p className="post-excerpt">{post.excerpt}</p>
        
        <div className="post-author">
          <img src="/images/profile-photo.jpg" alt={post.author} className="author-image" />
          <span className="author-name">{post.author}</span>
        </div>
      </div>
      
      <div className="featured-image">
        <OptimizedImage
          src={post.image}
          webpSrc={post.webpImage}
          alt={post.title}
          width="100%"
          height="auto"
        />
      </div>
      
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <Link key={index} to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="tag">
            #{tag}
          </Link>
        ))}
      </div>
      
      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <h3>Potrebbe interessarti anche</h3>
          <div className="related-posts-grid">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="related-post-card">
                <Link to={`/blog/${relatedPost.slug}`} className="related-post-image">
                  <OptimizedImage
                    src={relatedPost.image}
                    webpSrc={relatedPost.webpImage}
                    alt={relatedPost.title}
                    width="100%"
                    height="auto"
                  />
                </Link>
                <div className="related-post-content">
                  <span className="related-post-category">{relatedPost.category}</span>
                  <h4 className="related-post-title">
                    <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="post-share">
        <p>Condividi questo articolo:</p>
        <div className="share-buttons">
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-btn twitter">
            Twitter
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="share-btn linkedin">
            LinkedIn
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="share-btn facebook">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;